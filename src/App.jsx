import { useEffect, useState } from "react";
import Calc from "./components/Calc/Calc";
import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";
import Country from "./components/Country";
import ListInfoBlock from "./components/ListInfoBlock";
import AdvantagesBlock from "./components/AdvantagesBlock";
import CommentBlock from "./components/CommentBlock"; // Убедитесь, что путь правильный
import Footer from "./components/Footer";

function App() {
    const [lang, changeLang] = useState("ru");

    const handleChange = (value) => {
        changeLang(value);
    };

    return (
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
    );
}

export default App;