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

    // NOTE calls our method to get data from the API on page load
    this.getMonsters()

    // NOTE important to attach a listener so that it draws after the data is stored in the AppState
    AppState.on('monsters', _drawMonsters)
  }


  // NOTE by labeling a method or function async, we can use the await keyword within the method
  async testPromise() {
    console.log('Starting');
    // NOTE if we await for this Promise to resolve, it will not run the next line of code in this method until timeout of 3000ms has passed. It then continues to run line-by-line
    const cleaning = await new Promise((resolve) => {
      setTimeout(() => {
        return resolve('Jeremy Cleaned his office')
      }, 3000)
    })
    console.log(cleaning);
    console.log('Ending');
  }

  // NOTE we have our controller methods that deal with an API labeled as async, so we can await promises that occur in the service
  async getMonsters() {
    // NOTE always use a try:catch when interacting with an API
    try {
      // NOTE if we await this line, it will automatically wrap the method in the service in a Promise
      await monstersService.getMonsters()

      // NOTE since we await the line of code above, it will not run until the promise is resolved in the service
      Pop.success('got the monsters!')

    } catch (error) {
      // NOTE alert the user of an error
      Pop.error(error)
      // NOTE alert the developer of an error
      console.error(error);
    }
  }
}