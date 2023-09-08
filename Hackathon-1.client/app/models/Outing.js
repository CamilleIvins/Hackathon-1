



export class Outing {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.day = data.day
    this.location = data.location
    this.description = data.description

  }


  get OutingTemplate() {
    return `
       <div class="col-6">
        <div class="elevation-5">
          <h1>${this.title}</h1>
          <h3>${this.day}</h3>
          <h4>${this.location}</h4>
        
          <p>${this.description}</p>
         <button>Like</button>  <button>Dislike</button>
        </div>
      </div>
        
        
        `
  }
}