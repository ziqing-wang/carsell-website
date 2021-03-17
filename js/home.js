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

const cardBuilder = () => {
    let gridCardStr = "";
    CAR_DATA.new_arrived.forEach(car => {
        gridCardStr = `
        <div id=${car.id} class="card">
            <img class="card-img-top" src="images/ocassions/${car.img_src}" alt=${car.alt}>
            <div class="card-body">
                <h5 class="card-title">${car.title}</h5>
                <p class="card-text">${car.description}</p>
                <div class="price">
                    <span>$ ${car.price}</span>
                    <a href="Details.html?${car.id}" class="btn btn-dark">View More &gt;</a>
                </div>
            </div>
        </div>
        `;
       
        $(".cards").append(gridCardStr);
    });
}
cardBuilder();