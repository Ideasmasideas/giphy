//import heroes from './02-intro-javascript/src/data/heroes'

const key = 'hQZ6FSpTrJJ1COuGVe0j2f9ZptzJ1Ak4'


const getImageClick =async()=>{
    console.log("Esta llamando a la imagen");
    const newUrl=  await getImage();
    document.getElementById('gif').src=newUrl;
}

const handleChangeInput =async(searchWord)=>{
    console.log(searchWord);
    const gifs = await getImages(searchWord);
    render(gifs);
}

const getImages = async(searchWord) =>{
    try{
        console.log("getImages" + searchWord);
        if(searchWord.length >3){
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(searchWord)}&limit=12`);   
        const { data } = await resp.json();
        
        const gift = data.map (img =>{
            return{
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return gift;
        }
    }catch(e){
        console.error(e);
    }
}

const render=(gifs)=>{
    const grid = gifs.map( (gif,key)=>(
        `<div class='card'>
        
        
        <div class='image'><img src=${gif.url} /></div>
        <div class='title'>${gif.title}</div>
        </div>`
        
    )
    )
   
   document.getElementById('container').innerHTML=grid;
}




