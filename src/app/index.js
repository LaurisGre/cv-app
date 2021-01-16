import React from "react";
import "./index.css";
import Layout from './components/Layout';
import translations from "./translations";

function App() {
    const [lang, setLang] = React.useState('en');

    return (
        <div className="App">
            <Layout
                content={translations[lang]}
                onChange={(event) => setLang(event.target.value)}
            />
        </div>
    )
}

export default App;