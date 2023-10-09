import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawMonsters() {
  const monsters = AppState.monsters
  let content = ''
  monsters.forEach(monster => content += monster.MonsterCardTemplate)
  setHTML('monsterCards', content)
}


export class MonstersController {
  constructor () {
    // console.log('Monsters Controller loaded');
    // this.testPromise()
    // console.log('I still run!');
    this.getMonsters()


    AppState.on('monsters', _drawMonsters)
  }


  async testPromise() {
    console.log('Starting');
    const cleaning = await new Promise((resolve) => {
      setTimeout(() => {
        return resolve('Jeremy Cleaned his office')
      }, 3000)
    })
    console.log(cleaning);
    console.log('Ending');
  }

  async getMonsters() {
    try {
      await monstersService.getMonsters()

      Pop.success('got the monsters!')

    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}