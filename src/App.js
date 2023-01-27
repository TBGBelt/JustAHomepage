import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import './App.css';
import React from "react";



function App() {
    return (
        <>
            <div className="outer-container">
                <Header/>
                <Homepage/>
            </div>
        </>
    );
}

export default App;
