const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != 200){
            console.log(res);
            pokeImage("./pokemon-sad.gif");
        }

        else{
            return res.json();
        }
        return res.json();
    }).then((data) =>{
        console.log(data);
        let pokeImg = data.sprites.front_default; //asi se accede a los diferetes valores del json
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}


const pokeImage = (url) =>{
    const pokeImg =  document.getElementById ("pokeImg");
    pokeImg.src = url;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");

const imprimir = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value
    console.log("wuenas " + pokeInput);

}

//fetchPokemon();