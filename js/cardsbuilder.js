import CAR_DATA from "./data.js";
const gridViewCard = () => {
    CAR_DATA.new_arrived.forEach(car => {
        //1.create new div with class 'card' and id 
        let newCard = document.createElement("DIV");
        newCard.setAttribute("id", car.id);
        newCard.setAttribute("class", "card");
        $(".cards").append(newCard);

        //2.create new img, set class, src and alt attributes, 
        let newCarImg = document.createElement("IMG");
        const baseSrc = "images/ocassions/";
        newCarImg.setAttribute("class", "card-img-top");
        newCarImg.setAttribute("src", baseSrc + car.img_src);
        newCarImg.setAttribute("alt", car.alt);
        //then append to newCard div
        newCard.append(newCarImg);

        //3. create div with '.card-body'attributes, then append to newCard div
        let newCardBody = document.createElement("DIV");
        newCardBody.setAttribute("class", "card-body");
        newCard.append(newCardBody);

        //4. create h5 el with class 'card-title', then append to newCardBody
        let carTitle = document.createElement("H5");
        let carTitleText = document.createTextNode(car.title);
        carTitle.append(carTitleText);
        carTitle.setAttribute("class", "card-title");
        newCardBody.append(carTitle);
        // p with class 'card-text', then append to newCardBody
        let carDes = document.createElement("P");
        let carDesText = document.createTextNode(car.description);
        carDes.append(carDesText);
        carDes.setAttribute("class", "card-text");
        newCardBody.append(carDes);

        //5. create div with class 'price', then append it to newCardBody
        let newPriceDiv = document.createElement("DIV");
        newPriceDiv.setAttribute("class", "price");
        newCardBody.append(newPriceDiv);

        //6. create span with text car.price, append to newPriceDiv
        let newPrice = document.createElement("SPAN");
        let newPriceText = document.createTextNode(car.price);
        newPrice.append(newPriceText);
        newPriceDiv.append(newPrice);

        //7. create <a> to 'view more', with class "btn btn-dark", href="Details.html",  append to newPriceDiv
        let newButton = document.createElement("A");
        let newButtonText = document.createTextNode("View More >")
        newButton.append(newButtonText);
        newButton.setAttribute("href", "Details.html" + "?" + car.id);
        newButton.setAttribute("class", "btn btn-dark");
        newPriceDiv.append(newButton);
    });
}

const listViewCard = () => {
    console.log("this is list view");
}

export {
    gridViewCard,
    listViewCard
};