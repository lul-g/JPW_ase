import data from '../../data.json' assert { type: "json" }
import img from '../../pictures.json' assert { type: "json" }

let start = 0
let end = 6

console.log("page: ", getAllUrlParams().page, "data_len:", data.length)



function populate(page) {
    start = page * 6
    end = page * 6 >= data.length - 6 ? data.length : start + 6
    console.log("start:", start, "end:", end)

    for(let i = start; i < end; i++) {
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
    document.querySelector(".prev_nex").innerHTML += `
        <a  href="index.html?page=${
            parseInt(getAllUrlParams().page) == 0 ? 0 : parseInt(getAllUrlParams().page) - 1}" 
            class="btn btn-sm btn-outline-secondary more" id="prev" onclick="set_start()">Previous</a>
        <a  href="index.html?page=${
            parseInt(getAllUrlParams().page) * 6 >= data.length - 6 ? getAllUrlParams().page : parseInt(getAllUrlParams().page) + 1}" 
            class="btn btn-sm btn-outline-secondary more" id="next">Next</a>
`



}

populate(getAllUrlParams().page)


