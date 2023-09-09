


export class Outing {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.day = data.day
    this.location = data.location
    this.description = data.description
    this.voteCount = data.voteCount || 0
    this.comment = data.comment
    this.checkboxState = data.favourite ? 'checked' : ''
  }


  get OutingTemplate() {
    return `
       <div class="col-4 m-2">
        <div class="elevation-5">
          <h1 class ="border border-info bgBlue textPink">${this.title}</h1>
          <h3>${this.day}</h3>
          <h4>${this.location}</h4>
        
          <p>${this.description}</p>
          <p>${this.voteCount}</p>
          <div class ="border border-info bgBlue textPink" >
         <div class="btn btn-info textPink" onclick="app.OutingsController.likeCount('${this.voteCount}')">Like</div>  
         <div class="btn btn-info textPink" onclick="app.OutingsController.dislikeCount('${this.id}')">Dislike</div>
         <div class="btn btn-info textPink" onclick="app.OutingsController.deleteOuting('${this.id}')">X</div>
         
         </div>

<div class="d-flex justify-content-center align-items-center">
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Leave Comment
</button>

  <input class="form-check-input" ${this.checkboxState}  type="checkbox" name="completed" id="favourite" onchange="app.OutingsController.checkFavourite('${this.id}')>
  <label class="form-check-label" for="flexCheckDefault">Favourite Date</label>
  
</div>

<!-- Modal -->
<div class=" modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">comments</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="comment" class="form-label">Description</label>
                <textarea name="comment" class="form-control" rows="3"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onclick="app.OutingsController.leaveComment()" type="button" class="btn btn-primary">leave comment</button>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
        
        
        `
  }
}