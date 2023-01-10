import React from 'react';

//=============================
function Form() {

  const [meme, setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImage : "https://i.imgflip.com/43a45p.png"
  });

  const[allMemesData, setAllMemesData] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemesData(data.data.memes))
  }, [])


  function getMemeImage (){
    let dataArray = allMemesData;
    let random = Math.floor(Math.random() * dataArray.length);
    let url = dataArray[random].url;
    setMeme({
      ...meme,
      randomImage : url
    });
  }

  function handleChange (event){
    const {value, name} = event.target;
    setMeme((prevValue) => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  return (
    <main>
      <div className='form'>
        <div className='inputs'>
            <input type={'text'} placeholder='Top text' name='topText' value={meme.topText} onChange={handleChange}></input>
            <input type={'text'} placeholder='Bottom text' name='bottomText' value={meme.bottomText} onChange={handleChange}></input>

        </div>
        <button className='submit' onClick={getMemeImage}>Get a new meme image  🖼</button>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt=''/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div> 
    </main>
  )
}


export default Form;