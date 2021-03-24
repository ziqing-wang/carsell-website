import CAR_DATA from "./data.js";

const createBrandList = () => {
    let str = "";
    CAR_DATA.brands.forEach((brand) => {
        //console.log(brand.alt);
        //create new li item 
        str = `
         <li class="brand">
            <img src= "images/brands/${brand.img_src}" alt=${brand.alt}>
         </li>
         `;

        $('ul.car-brands').append(str);

    })
}
createBrandList();

function cardBuilder() {
    let gridCardStr = "";
    let carStatus = "";
    const carArr = CAR_DATA.ocassions;
    //get the first 3/4 cars from all ocassions
    for (let i = 0; i < 3; i++) {

        if (carArr[i].status === "available") {
            carStatus = `
                    <div class="price">
                            <span>$ ${carArr[i].price}</span>
                            <a href="details.html?id=${carArr[i].id}" class="btn view-btn">Bekijk ocassion</a>
                    </div>
                </div>
            </div>
            `
        } else {
            carStatus = `
                    <h3 style="color: #e43f3f">Verkocht</h3>
                </div>
            </div>
            `
        }

        gridCardStr = `
        <div id=${carArr[i].id} class="card">
            <img class="card-img-top" src="images/ocassions/${carArr[i].imgs[0].src}" alt=${carArr[i].imgs[0].alt}>
            <div class="card-body">
                <h5 class="card-title">${carArr[i].title}</h5>
        `;
        $(".cards").append(gridCardStr + carStatus);
    }
}
cardBuilder();

