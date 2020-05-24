export default class PokemonService {
  _apiBase = 'https://pokeapi.co/api/v2';
  _firstColectionUrl = '/pokemon?offset=24&limit=12'

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
    return this._transformPokemonData(res);
  } 
  /* getPokemon = async (id) => {
    const res = await this.getResource(id);
    return this._transformData(res);
  }  */

  getColection = async (colectionUrl) => {
    const transformedUrlsData = await this.getColectionUrls(colectionUrl);
    const urls = [...transformedUrlsData.pokemonsColection];

    let colectionPage = {
      colection: [],
      next: transformedUrlsData.toLoadNext,
      previous: transformedUrlsData.toLoadPrevious,
    };

    console.log(`urls ${urls}`);
    const series = async () => {
      for (let i = 0; i < urls.length; i++) {
        /* console.log(results); */
        colectionPage.colection.push(await this.getPokemon(`${i + 1}`));
        /* console.log(results); */
      }
      return colectionPage;
    };
    return await series();
  }

  getColectionUrls = async (colectionUrl) => {
    const getData = await this.getResource(colectionUrl);
    const colection = this._transformColectionData(getData);
   
    return colection;
  }

  _transformPokemonData = (data) => {

    const toCapFirstChar = (str) => {
      if (!str) return str;

      return str[0].toUpperCase() + str.slice(1);
    }

    const abilities = data.abilities.map((item) => toCapFirstChar(item.ability.name));

    const types = data.types.map((item) => toCapFirstChar(item.type.name));

    const stats = data.stats.map(item => {
      return {
        statName: toCapFirstChar(item.stat.name),
        statValue: item.base_stat,
      };
    });

    return {
      id: data.id,
      name: toCapFirstChar(data.name),
      height: data.height,
      weight: data.weight,
      stats: stats,
      abilities: abilities,
      image: data.sprites.front_default,
      types: types,
    };
  }

  _transformColectionData = (data) => {
    const urls = data.results.map(item=>{
      const { url } = item;
      return url;
    })
    return {
      toLoadNext: data.next,
      toLoadPrevious: data.previous,
      pokemonsColection: urls,
    };
  }

}

const test = new PokemonService();

/* test.getColection().then((data) => console.log(data));   */



