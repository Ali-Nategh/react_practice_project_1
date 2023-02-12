import React from "react"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Intrests from "./components/Intrests.js"
import Footer from "./components/Footer.js"

export default function App() {
    return (
        <div className="container">
            <Info />
            <div className="my-info">
                <About />
                <Intrests />
            </div>
            <Footer />
        </div>
    )
}