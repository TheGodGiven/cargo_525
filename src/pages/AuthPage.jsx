import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';


///test git


export default function AuthPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/login", formData)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            navigate("/admin");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-[#911D16]">
                        Вход в систему
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Пожалуйста, войдите в свой аккаунт
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Имя
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#911D16] focus:border-[#911D16] focus:z-10 sm:text-sm transition-all duration-200"
                                placeholder="Имя"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Пароль
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#911D16] focus:border-[#911D16] focus:z-10 sm:text-sm transition-all duration-200"
                                placeholder="Пароль"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-[#911D16] focus:ring-[#911D16] border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Запомнить меня
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-[#911D16] hover:text-[#b22222] transition-colors duration-200">
                                Забыли пароль?
                            </a>
                        </div>
                    </div> */}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#911D16] hover:bg-[#b22222] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#911D16] transition-all duration-200 transform hover:scale-[1.02]"
                        >
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 