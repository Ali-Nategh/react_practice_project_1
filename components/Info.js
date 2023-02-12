import React from "react"

export default function Info() {
    return (
        <main>
            <img src="../assets/AliPhoto.jpg"/>
            <h1 className="main--title">Ali Nategh</h1>
            <h2 className="main--job">Back End Developer</h2>
            <h3 className="main--link">alinategh.com</h3>
            <div className="main--buttons">
                <button className="button button1"> 
                    <img src="./assets/Mail.png" width="11px"/> Email
                </button>
                <button className="button button2">
                    <img src="./assets/LinkedinIcon.png" width="10px"/> LinkedIn
                </button>
            </div>
        </main>
    )
}
