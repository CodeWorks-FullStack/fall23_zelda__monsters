import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";

class MonstersService {
  async getMonsters() {
    // @ts-ignore
    const response = await axios.get('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
    // console.log('GOT MONSTERS', response);
    console.log('GOT MONSTERS', response.data.data);
    // const newMonster = new Monster(response.data.data[0])
    const newMonsters = response.data.data.map(monsterPOJO => new Monster(monsterPOJO))
    // console.log('New monsters', newMonsters);
    // AppState.monsters = response.data.data
    AppState.monsters = newMonsters
    console.log('Monsters in AppState', AppState.monsters);
  }
}

export const monstersService = new MonstersService()