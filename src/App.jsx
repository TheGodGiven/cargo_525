import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calc from "./components/Calc/Calc";
import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";
import Country from "./components/Country";
import ListInfoBlock from "./components/ListInfoBlock";
import AdvantagesBlock from "./components/AdvantagesBlock";
import CommentBlock from "./components/CommentBlock"; // Убедитесь, что путь правильный
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";

function App() {
    const [lang, changeLang] = useState("ru");

    const handleChange = (value) => {
        changeLang(value);
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<AuthPage />} />
                <Route path="/" element={
                    <div style={{ fontFamily: "Montserrat" }} className="pb-20 relative">
                        <Header lg={lang} change={handleChange} />
                        <Calc lg={lang} />
                        <InfoBlock lg={lang} />
                        <Country lg={lang} change={handleChange} />
                        <ListInfoBlock lg={lang} />
                        <AdvantagesBlock lg={lang} />
                        <CommentBlock lg={lang} />
                        <Footer lg={lang}/>
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
