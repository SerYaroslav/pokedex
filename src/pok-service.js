export default class PokService {
  _apiBase = 'https://pokeapi.co/api/v2';
  _imageBase = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites'

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} +
      , received ${res.status}`);
    }
    return await res.json();
  };

  getPokemon = async (id) => {
    const res = await this.getResource(`/pokemon/${id}`);
    return res.name
  }
}

const test = new PokService();

test.getPokemon(21).then(name => (console.log(name)))