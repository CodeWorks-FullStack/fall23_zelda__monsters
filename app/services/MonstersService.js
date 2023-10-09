import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";

class MonstersService {
  async getMonsters() {
    // NOTE we use axios to make an HTTP GET request to the supplied URL here. axios wraps this in a Promise that when it resolves it will be the HTTP Response from the API
    // @ts-ignore
    const response = await axios.get('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
    // console.log('GOT MONSTERS', response);
    // NOTE axios returns an object that will always have the data from the api stored in the response.data
    console.log('GOT MONSTERS', response.data);
    // NOTE the Zelda API put the array of data that we want into an object with another data property, we have to drill into this to access our array of objects
    console.log('GOT MONSTERS', response.data.data);
    // const newMonster = new Monster(response.data.data[0])

    // NOTE map turns an array of data into a new array of data with changes made to it. We use it to turn the pojos from the API into class models
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    const newMonsters = response.data.data.map(monsterPOJO => new Monster(monsterPOJO))
    // console.log('New monsters', newMonsters);
    // AppState.monsters = response.data.data
    AppState.monsters = newMonsters
    console.log('Monsters in AppState', AppState.monsters);
  }
}

export const monstersService = new MonstersService()