import CAR_DATA from "./data.js";

function getCarId() {
    //replace ?= in the URL to ""
    let id = location.search.replace(/^.*?\=/, "");
    return id;
}
//console.log(API.id, getCarId());
//get the car object, return an array
let CAR = CAR_DATA.ocassions.filter(el => {
    return el.id === getCarId()
});
//console.log(CAR[0].imgs);
//************************************  build slideshow gallery **************************************** */
const CAR_IMGS_ARR = CAR[0].imgs;
//let imgs = document.querySelectorAll('#slideshow img');
//let displayedImg = document.getElementById('displayed-img');
let prev = document.querySelector('#prevBtn');
let next = document.querySelector('#nextBtn');
const basedSrc = "../images/ocassions/";

galleryBuilder();
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function galleryBuilder() {

    const firstImg = CAR_IMGS_ARR[0];

    //create the displayed image by using the first image in CAR
    let displayFirstImg = `
    <img id="displayed-img" src=${basedSrc}${firstImg.src} alt=${firstImg.alt} >
    `;
    $(".full-img").append(displayFirstImg);

    //build thumbnail gallery
    let thumbnailStr = "";
    CAR_IMGS_ARR.forEach((img, index) => {
        thumbnailStr = `
        <a href="#">
            <figure>
                <img src=${basedSrc}${img.src} alt=${img.alt} data-index=${index}>
            </figure>
        </a>
        `;
        $("#slideshow").append(thumbnailStr);
    });
}

let slideIndex = 0;
let counter = 0;
//click event 
$("#slideshow img").on('click', clickImage);

function clickImage(e, index) {
    e.preventDefault();
    let currSrc = e.target.src;
    $('#displayed-img').attr('src', currSrc);
    index = $(e.target).attr('data-index');
    //console.log($(e.target).attr('data-index'));
    slideIndex = index;
}

//next slide  
function nextSlide() {
    counter++;
    slideIndex = counter % CAR_IMGS_ARR.length;
  //  console.log(slideIndex);

    //get the img DOM which data-index = slideIndex;
    displayImage(slideIndex);
}

//prev slide
function prevSlide() {
    if (counter <= 0) {
        counter = CAR_IMGS_ARR.length;
    }
    counter--;
    slideIndex = counter % CAR_IMGS_ARR.length;
    displayImage(slideIndex);
}

function displayImage(index) {
    $('#displayed-img').attr('src', basedSrc + CAR_IMGS_ARR[index].src);
}

//*****************     car-info table part    ************************ */
function tableBuilder(arr){
    const infoObj = arr[0];
    let rowStr = ``;
    for (const key in infoObj) {
        if (Object.hasOwnProperty.call(infoObj, key)) {
         //   console.log(`${key}: ${infoObj[key]}`);
            rowStr = `
            <tr>
                <th>${key}:</th>
                <td>${infoObj[key]}</td>
            </tr>
            `;
            $('.car-details-table').append(rowStr);
        }
    }
}

// api_gekentekende_voertuigen_assen:	https://opendata.rdw.nl/resource/3huj-srit.json
// api_gekentekende_voertuigen_brandstof:	https://opendata.rdw.nl/resource/8ys7-d773.json
// api_gekentekende_voertuigen_carrosserie:	https://opendata.rdw.nl/resource/vezc-m2t6.json
// api_gekentekende_voertuigen_carrosserie_specifiek:	https://opendata.rdw.nl/resource/jhie-znh9.json
// api_gekentekende_voertuigen_voertuigklasse: https://opendata.rdw.nl/resource/kmfi-hrps.json