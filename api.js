const fetchPokemon = () =>{
    const pokeName = document.getElementById("name")
    let pokeInput = pokeName.valur.toLowercase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
}

const pokeImage = (url) =>{

    const pokeImg = document.getElementById("resultado")
    pokeImg.src = url;


}