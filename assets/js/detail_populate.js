import data from '../../data.json' assert { type: "json" }
import img from '../../pictures.json' assert { type: "json" }

document.getElementById("cont").innerHTML += `
    <h1>${data[getAllUrlParams().pet].name}</h1>
    <div>${data[getAllUrlParams().pet].additional_details}</div>
    <div class="table">
        <span>${data[getAllUrlParams().pet].breed}</span>
        <span>${data[getAllUrlParams().pet].spayed_neutered}</span>
        <span>${data[getAllUrlParams().pet].gender}</span>
        <span>${data[getAllUrlParams().pet].age}</span>
        <span>${data[getAllUrlParams().pet].animal_ID}</span>
        <span>${data[getAllUrlParams().pet].vaccination_status}</span>
        <span>${data[getAllUrlParams().pet].location}</span>
        <span>${data[getAllUrlParams().pet].adoptable}</span>
        <span>${data[getAllUrlParams().pet].type}</span>    
    </div>
    
    <hr />
    <h2>Image Gallery</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
        <div class="card shadow-sm">
            <img src=${img[getAllUrlParams().pet]}>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img class="det_img" src=${img[Math.floor(Math.random() * img.length) - 1]}>
        </div>
        </div>
        <div class="col">
        <div class="card shadow-sm">
            <img src=${img[Math.floor(Math.random() * img.length) - 1]}>

        </div>
        </div>
  </div>
  <a href="index.html?page=${parseInt(getAllUrlParams().pet / 6)}"  type="button" class="back more btn btn-sm btn-outline-secondary">Back</a>
`   
// if((isNaN(getAllUrlParams().pet ) || getAllUrlParams().pet == undefined) && getAllUrlParams()[0] == 'pet') {
//     window.location.href = "index.html?pet=0"
// }