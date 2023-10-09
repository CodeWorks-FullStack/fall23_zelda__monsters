export class Monster {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    // NOTE if we dont like the naming conventions used by the API, we can change this on our class
    this.imgUrl = data.image
    // NOTE the API supplied null values for a few of our objects, so the "||" allows us to to default any falsy values to an empty array 
    this.locations = data.common_locations || []
    this.description = data.description
    this.drops = data.drops || []
  }

  get MonsterCardTemplate() {
    return `
    <div class="col-md-4 mb-3">
      <div class="p-3 bg-secondary shadow">
        <img src="${this.imgUrl}" alt="${this.name}"
          class="img-fluid">
        <h2>${this.name}</h2>
        <div class="d-flex justify-content-between">
          <div>
            <h3>Locations</h3>
            <ul>
              ${this.LocationListItems}
            </ul>
          </div>
          <div>
            <h3>Drops</h3>
            <ul>
             ${this.DropListItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get LocationListItems() {
    let content = ''
    this.locations.forEach(location => content += `<li>${location}</li>`)
    return content
  }
  get DropListItems() {
    let content = ''
    this.drops.forEach(drop => content += `<li>${drop}</li>`)
    return content
  }

}

// NOTE this is what our data looked like in our console, and we now build our Class Models to fit this data
const monsterData = {
  "category": "monsters",
  "common_locations": [
    "Eldin Mountains",
    "Tabantha Frontier"
  ],
  "description": "A spirit of fire has taken the form of this giant dragon. Making its home in the Eldin region, it's said to have served the Spring of Power since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has witnessed this in the current age. The flames that coat its body make it dangerous to get near, but Dinraal bears no ill will toward people.",
  "dlc": false,
  "drops": null,
  "id": 153,
  "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image",
  "name": "dinraal"
}