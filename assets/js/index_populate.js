import data from '../../data.json' assert { type: "json" }
import img from '../../pictures.json' assert { type: "json" }

let start = 0
let end = 6

console.log("page: ", getAllUrlParams().page, "data_len:", data.length)



function populate(page) {
    start = page * 6
    end = page * 6 >= data.length - 6 ? data.length : start + 6
    console.log("start:", start, "end:", end)

    let count = 0
    for(let i = start; i < end; i++) {
        if(data[i].adoptable == 'no') {
            end = end + 1
        }
        else {
            count++
            document.querySelector("#row").innerHTML += 
                `
                <div class="col">
                    <div class="card shadow-sm">
                        <div class="img">
                            <img src=${img[i]} class="bd-placeholder-img card-img-top">
                            <span class="name" data-name=${data[i].name}></span>
                        </div>                

                        <div class="card-body">
                            <p class="card-text">
                                <span class="info">Gender: ${data[i].gender}</span>
                                <span class="info">Age: ${data[i].age}</span>
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="detail.html?pet=${i}" type="button" class="view btn btn-sm btn-outline-secondary">View</a>
                                
                            </div>
                            <small class="text-muted">Breed: ${data[i].breed}</small>
                            </div>
                        </div>
                    </div>
                </div>
                `
        }
        if(count == 6) count = 0

        }
        document.querySelector(".prev_nex").innerHTML += `
            <a  href="index.html?page=${
                parseInt(getAllUrlParams().page) == 0 ? 0 : parseInt(getAllUrlParams().page) - 1}" 
                class="btn btn-sm btn-outline-secondary more" id="prev" onclick="set_start()">Previous</a>
            <a  href="index.html?page=${
                parseInt(getAllUrlParams().page) * 6 >= data.length - 6 ? getAllUrlParams().page : parseInt(getAllUrlParams().page) + 1}" 
                class="btn btn-sm btn-outline-secondary more" id="next">Next</a>
    `
}

if(getAllUrlParams().page * 6 > data.length || getAllUrlParams().page < 0) {
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
}
 
populate(getAllUrlParams().page)


