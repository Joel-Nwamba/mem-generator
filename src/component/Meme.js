import React from "react"
import memesData from "../memesData"

export default function Meme() {

        const [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        })

        const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // const [memesImage, setMemesImage] = React.useState("http://i.imgflip.com/1bij.jpg");

    function getMemesImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }
    return(
        <main className="meme-container">
            <form>
            <input className="meme--input-one" type="text" name="meme-one" placeholder="Top text"/>
            <input className="meme--input-one" type="text" name="meme-two" placeholder="Bottom text"/>
            <button onClick={getMemesImage} className="btn-form">Get a new meme image 🖼</button>
            </form>
            <img src={meme.randomImage} alt="" className="meme--image"/>
        </main>
    )
}