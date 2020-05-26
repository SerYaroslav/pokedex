export default class PokemonService {
  _apiBase = 'https://pokeapi.co/api/v2';
  _firstColectionUrl = `${this._apiBase}/pokemon?offset=0&limit=12`

  getResource = async (url) => {
    const res = await fetch(`${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} +
      , received ${res.status}`);
    }

    return await res.json();
  };

  getPokemon = async (url) => {
    const res = await this.getResource(url);
    return this._transformPokemonData(res);
  } 

  getColection = async (colectionUrl) => {
    const transformedUrlsData = await this.getColectionUrls(colectionUrl);
    const urls = [...transformedUrlsData.pokemonsColection];

    let colectionPage = {
      colection: [],
      next: transformedUrlsData.toLoadNext,
      previous: transformedUrlsData.toLoadPrevious,
    };

    const series = async () => {
      for (let i = 0; i < urls.length; i++) {
        colectionPage.colection.push(await this.getPokemon(urls[i]));
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
    };

    const toFormateStats = (str) => {
      if (str.toLowerCase() === "hp") {
        return str.toUpperCase();
      } else if (str.includes('-')){
        const strParts = str.split('-');
        
        return `${strParts[0].slice(0, 2).toUpperCase()} ${toCapFirstChar(strParts[1])}`; 
      }
      return toCapFirstChar(str)
    }

    
    const abilities = data.abilities.map((item) => toCapFirstChar(item.ability.name));

    const types = data.types.map((item) => toCapFirstChar(item.type.name));

    const stats = data.stats.map(item => {
      return {
        statName: toFormateStats(item.stat.name),
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
      totalMoves: data.moves.length
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



