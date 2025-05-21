import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const LANGS = [
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
    { code: "kz", label: "Қазақша" },
    { code: "ch", label: "中文" },
];

const emptyForm = {
    text: { ru: "", en: "", kz: "", ch: "" },
    description: { ru: "", en: "", kz: "", ch: "" },
    author: { ru: "", en: "", kz: "", ch: "" },
    location: { ru: "", en: "", kz: "", ch: "" },
};

export default function Admin() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [tab, setTab] = useState("price");
    const [priceValue, setPriceValue] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [editReview, setEditReview] = useState(null);
    const [form, setForm] = useState({
        text: { ru: "", en: "", kz: "", ch: "" },
        description: { ru: "", en: "", kz: "", ch: "" },
        author: { ru: "", en: "", kz: "", ch: "" },
        location: { ru: "", en: "", kz: "", ch: "" },
    });

    const getPrice = async () => {
        await api.get("/getPrice")
            .then((res) => setPriceValue(res.data))
            .catch((err) => setPriceValue(100));
    };

    const getReviews = async () => {
        await api.get("/getReviews")
            .then((res) => setReviews(res.data))
            .catch((err) => setReviews([]));
    };

    useEffect(() => {
        api.get("/getUser")
            .then((res) => setUser(res.data))
            .catch(() => navigate("/login"));

        getPrice();
        getReviews();
    }, []);

    if (!user) return <div>Loading...</div>;

    // CRUD handlers
    const handleSaveCalc = () => {
        api.put("/updatePrice", { value: priceValue })
            .then((res) => {
                setPriceValue(res.data);
                alert("Цена успешно обновлена");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleEdit = (review) => {
        setEditReview(review);
        setForm({ ...review });
    };

    const handleDelete = (id) => {
        console.log(id);
        
        api.delete(`/deleteReview/${id}`)
            .then((res) => {
                getReviews();
            })
            .catch((err) => console.log(err));
    };

    const handleFormChange = (e, lang, field) => {
        if (lang) {
            setForm({
                ...form,
                [field]: { ...form[field], [lang]: e.target.value }
            });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Проверка заполнения всех полей
        const checkFields = (obj) => {
            for (let lang of ['ru', 'en', 'kz', 'ch']) {
                if (!obj.text[lang]) return `Поле "Текст" не заполнено для языка ${lang}`;
                if (!obj.description[lang]) return `Поле "Описание" не заполнено для языка ${lang}`;
                if (!obj.author[lang]) return `Поле "Автор" не заполнено для языка ${lang}`;
                if (!obj.location[lang]) return `Поле "Местоположение" не заполнено для языка ${lang}`;
            }
            return null;
        };

        const error = checkFields(form);
        if (error) {
            alert(error);
            return;
        }

        if (editReview) {
            api.put(`/updateReview/${editReview._id}`, { ...form })
                .then(() => {
                    getReviews()
                })
                .catch((err) => console.log(err));
            
            setEditReview(null);
        } else {
            api.post("/addReview", { ...form })
                .then((res) => {
                    getReviews();
                })
                .catch((err) => console.log(err));
        }

        setForm({
            text: { ru: "", en: "", kz: "", ch: "" },
            description: { ru: "", en: "", kz: "", ch: "" },
            author: { ru: "", en: "", kz: "", ch: "" },
            location: { ru: "", en: "", kz: "", ch: "" },
        });
    };

    const handleCancelEdit = () => {
        setEditReview(null);
        setForm({
            text: { ru: "", en: "", kz: "", ch: "" },
            description: { ru: "", en: "", kz: "", ch: "" },
            author: { ru: "", en: "", kz: "", ch: "" },
            location: { ru: "", en: "", kz: "", ch: "" },
        });
    };

    return (
        <div className="max-w-2xl mx-auto py-10">
            <div className="flex mb-8 border-b">
                <button
                    className={`px-6 py-2 font-semibold ${tab === "price" ? "border-b-4 border-[#911D16] text-[#911D16]" : "text-gray-500"}`}
                    onClick={() => setTab("price")}
                >
                    Цена за кг
                </button>
                <button
                    className={`px-6 py-2 font-semibold ${tab === "reviews" ? "border-b-4 border-[#911D16] text-[#911D16]" : "text-gray-500"}`}
                    onClick={() => setTab("reviews")}
                >
                    Отзывы
                </button>
            </div>

            {tab === "price" && (
                <div className="bg-white p-6 rounded-lg shadow">
                    <label className="block mb-2 font-medium">Цена за кг</label>
                    <input
                        type="number"
                        value={priceValue}
                        onChange={e => setPriceValue(e.target.value)}
                        className="border rounded px-3 py-2 w-full mb-4"
                    />
                    <button
                        onClick={handleSaveCalc}
                        className="bg-[#911D16] text-white px-6 py-2 rounded hover:bg-[#b22222] transition"
                    >
                        Сохранить
                    </button>
                </div>
            )}

            {tab === "reviews" && (
                <div className="bg-white p-6 rounded-lg shadow">
                    <form onSubmit={handleFormSubmit} className="mb-6 space-y-3">
                        {LANGS.map(lang => (
                            <div key={lang.code} className="border-b pb-3 mb-3">
                                <div className="font-semibold mb-1">{lang.label}</div>
                                <input
                                    name={`text_${lang.code}`}
                                    placeholder={`Заголовок отзыва (${lang.label})`}
                                    value={form.text[lang.code]}
                                    onChange={e => handleFormChange(e, lang.code, "text")}
                                    className="border rounded px-3 py-2 w-full mb-2"
                                    required={lang.code === "ru"}
                                />
                                <textarea
                                    name={`description_${lang.code}`}
                                    placeholder={`Текст отзыва (${lang.label})`}
                                    value={form.description[lang.code]}
                                    onChange={e => handleFormChange(e, lang.code, "description")}
                                    className="border rounded px-3 py-2 w-full mb-2"
                                    required={lang.code === "ru"}
                                />
                                <input
                                    name={`author_${lang.code}`}
                                    placeholder={`Автор (${lang.label})`}
                                    value={form.author[lang.code]}
                                    onChange={e => handleFormChange(e, lang.code, "author")}
                                    className="border rounded px-3 py-2 w-full mb-2"
                                    required={lang.code === "ru"}
                                />
                                <input
                                    name={`location_${lang.code}`}
                                    placeholder={`Город (${lang.label})`}
                                    value={form.location[lang.code]}
                                    onChange={e => handleFormChange(e, lang.code, "location")}
                                    className="border rounded px-3 py-2 w-full"
                                    required={lang.code === "ru"}
                                />
                            </div>
                        ))}
                        <div className="flex gap-2">
                            <button type="submit" className="bg-[#911D16] text-white px-6 py-2 rounded hover:bg-[#b22222] transition">
                                {editReview ? "Сохранить" : "Создать"}
                            </button>
                            {editReview && (
                                <button type="button" onClick={handleCancelEdit} className="px-6 py-2 rounded border border-gray-300">Отмена</button>
                            )}
                        </div>
                    </form>
                    <div>
                        {reviews.map((r) => (
                            <div key={r._id} className="border-b py-4 flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-[#911D16]">{r.text.ru}</div>
                                    <div className="text-gray-700 text-sm mb-1">{r.description.ru}</div>
                                    <div className="text-gray-500 text-xs">{r.author.ru}, {r.location.ru}</div>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEdit(r)} className="text-blue-600 hover:underline hover:cursor-pointer">Редактировать</button>
                                    <button onClick={() => handleDelete(r._id)} className="text-red-600 hover:underline hover:cursor-pointer">Удалить</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}