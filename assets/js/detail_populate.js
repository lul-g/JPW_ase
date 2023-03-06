import data from '../../data.json' assert { type: "json" }
import img from '../../pictures.json' assert { type: "json" }

function displayPet() {

    console.log(getAllUrlParams())
    if(getAllUrlParams().pet >= data.length || getAllUrlParams().pet < 0) {
        document.body.innerHTML = 
    `
        <div class="err_flex">
            <div class="text"> 
                <h1>Whoops!</h1>
                <p>Sorry the page you are looking for does not exist</p>
            <a href="index.html?page=0"  type="button" class="back more btn btn-sm btn-outline-secondary">Back</a>
    
            </div>
            <div class="img"> 
                <img src="assets/img/err_dog.jpg" alt="">
            </div>
        </div>
    `
    return;
    }
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
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="insert">
        <div class="col">
            <div class="card shadow-sm">
                <img src=${img[getAllUrlParams().pet]}>
            </div>
        </div>
    </div>
    <a href="index.html?page=${parseInt(getAllUrlParams().pet / 6)}"  type="button" class="back more btn btn-sm btn-outline-secondary">Back</a>
`   

    for (let index = 0; index < Math.floor(Math.random() * 6 )+ 1; index++) {
        let rand_file = img[Math.floor(Math.random() * img.length) - 1] 
        document.querySelector("#insert").innerHTML += `  
        <div class="col">
            <div class="card shadow-sm">
                <img class="det_img" src=${rand_file}>
            </div>
        </div>
        `
    }
    if(data[getAllUrlParams().pet].gender.toLowerCase() == "male") {
        document.body.classList.add('bg-secondary')
        document.querySelector('.album').classList.remove('bg-light')


    }
    else {
        document.body.classList.add('bg-primary')
        document.querySelector('.album').classList.remove('bg-light')
    }
}

displayPet()

