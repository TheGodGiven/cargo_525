import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const initialReviews = [
    {
        id: 1,
        text: "«Результат дико порадовал, друзья были в восторге»",
        description: "Заказала капкейки, как подарок на новый год...",
        author: "Ирина Ларионова",
        location: "Санкт-Петербург",
    },
    {
        id: 2,
        text: "«Очень вкусно и красиво!»",
        description: "Заказывала торт на день рождения...",
        author: "Мария Иванова",
        location: "Москва",
    },
];

export default function Admin() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [tab, setTab] = useState("price");
    const [priceValue, setPriceValue] = useState(0);
    const [reviews, setReviews] = useState(initialReviews);
    const [editReview, setEditReview] = useState(null);
    const [form, setForm] = useState({ text: "", description: "", author: "", location: "" });

    const getPrice = async () => {
        await api.get("/getPrice")
            .then((res) => setPriceValue(res.data))
            .catch((err) => setPriceValue(100));
    };

    const getReviews = async () => {
        await api.get("/getReviews")
            .then((res) => setReviews(res.data))
            .catch((err) => setReviews(initialReviews));
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
        setEditReview(review.id);
        setForm({ ...review });
    };

    const handleDelete = (id) => {
        api.delete(`/deleteReview/${id}`)
            .then((res) => {
                getReviews();
            })
            .catch((err) => console.log(err));
    };

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (editReview) {
            setReviews(reviews.map((r) => (r.id === editReview ? { ...form, id: editReview } : r)));
            setEditReview(null);
        } else {
            api.post("/addReview", { ...form })
                .then((res) => {
                    getReviews();
                })
                .catch((err) => console.log(err));
        }
        setForm({ text: "", description: "", author: "", location: "" });
    };

    const handleCancelEdit = () => {
        setEditReview(null);
        setForm({ text: "", description: "", author: "", location: "" });
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
                        <input
                            name="text"
                            placeholder="Заголовок отзыва"
                            value={form.text}
                            onChange={handleFormChange}
                            className="border rounded px-3 py-2 w-full"
                            required
                        />
                        <textarea
                            name="description"
                            placeholder="Текст отзыва"
                            value={form.description}
                            onChange={handleFormChange}
                            className="border rounded px-3 py-2 w-full"
                            required
                        />
                        <input
                            name="author"
                            placeholder="Автор"
                            value={form.author}
                            onChange={handleFormChange}
                            className="border rounded px-3 py-2 w-full"
                            required
                        />
                        <input
                            name="location"
                            placeholder="Город"
                            value={form.location}
                            onChange={handleFormChange}
                            className="border rounded px-3 py-2 w-full"
                            required
                        />
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
                            <div key={r.id} className="border-b py-4 flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-[#911D16]">{r.text}</div>
                                    <div className="text-gray-700 text-sm mb-1">{r.description}</div>
                                    <div className="text-gray-500 text-xs">{r.author}, {r.location}</div>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEdit(r)} className="text-blue-600 hover:underline">Редактировать</button>
                                    <button onClick={() => handleDelete(r.id)} className="text-red-600 hover:underline">Удалить</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}