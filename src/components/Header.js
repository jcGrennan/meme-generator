// importing the troll face png

import trollFace from "../images/troll-face.png"

// composing and exporting the Header component with JSX

export default function Header() {

    return (

        <header className="header">

            <img className="header--image" src={trollFace} alt="troll face meme"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course Project</h4>

        </header>
    )
}