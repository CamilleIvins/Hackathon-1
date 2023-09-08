



export class Outing {
  constructor(data) {
    this.id = data.id
    this.title = data.title
  }


  get OutingTemplate() {
    return `
       <div class="col-6">
        <div class="elevation-5">
          <h1>name</h1>
          <img src="" alt="no pics yet">
          <p>description</p>
        </div>
      </div>
        
        
        `
  }
}