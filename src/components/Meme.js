// importing React to use State and Effect Hooks
import React from "react"

// composing and exporting the Meme component
export default function Meme() {

    // using the State hook to create an object that acts as the meme template, and a function to change that object
    const [meme, setMeme] = React.useState({

        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 

    })

    // using the State hook to create an array that will hold the memes fetched from an api, and a function to alter that array
    const [allMemes, setAllMemes] = React.useState([])
    
    // using the Effect hook to fetch the memes and then setting the allMemes array to the data fetched
    React.useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))

    }, [])
    
    // declaring a function that chooses a random meme image from the array and sets the randomImage property of meme to its url
    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(prevMeme => ({

            ...prevMeme,
            randomImage: url

        }))
        
    }
    
    // declaring a function that changes the top or bottom text property value depending on which form input has been changed
    function handleChange(event) {

        // destructuring the event target
        const {name, value} = event.target

        setMeme(prevMeme => ({

            ...prevMeme,
            [name]: value

        }))
    }
    
    // composing the meme component using form inputs and the functions declared above
    return (

        <main>

            <div className="form">

                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>

            </div>

            <div className="meme">

                <img className="meme--image" src={meme.randomImage} alt="randomly generated meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>

        </main>

    )
}