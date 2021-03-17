const API = {
    baseURL: "https://opendata.rdw.nl/resource/m9d7-ebf2.json",
    id: getCarId()
};

//initialize
$(function () {
    fetch(`${API.baseURL}?kenteken=${API.id}`).then(res => {
        return res.json();
    }).then(car_info => {
        console.log(car_info);
        initHTML(car_info[0]);
    });
});

function getCarId() {
    //replace ?= in the URL to ""
    let id = location.search.replace(/^.*?\=/, "");
    console.log(id);
    return id;
}

function initHTML(resource) {
    let str = `
    <div class="car-info">
        <img src="./images/ocassions/polo1.jpg" alt="">
        <div class="details-table">${resource}</div>
    </div>
    `;
    $("#car_info").append(str);
}