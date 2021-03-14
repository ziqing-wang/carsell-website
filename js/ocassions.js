import CAR_DATA from "./data.js";
$(document).ready(function () {

    //hide the list view in the begining
    $(".list-view-cards").hide();

    $("#search-btn").on("click", function () {
        let value = $(".search-bar").val().toLowerCase();
        $("#results div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            $('div.price').show();
            $('div.car-details-table').show();

            if ( $(".cards").display === "none") {
                $(".list-view-cards").show();
            }else{
                $(".list-view-cards").hide();
            }
          
        });

        //empty the input
        $(".search-bar").val('');

        //scroll down to the result 
        let resultTop = $('#results').position().top;
        $(window).scrollTop(resultTop);
    });

    //when click the image, go to the details page 
    $('.btn.btn-dark').on("click", function () {
        //pass the id value to the details page
        window.document.location = './details.html' + '?id=' + this.id;
    });

    //select menu filters 
    $("#select_filters select.filter-option").on("change", function () {
        const selectedValue = $(this).val().toLowerCase();
        $("#results div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(selectedValue) > -1);
            $('div.price').show();
            $('div.car-details-table').show();

            if ( $(".cards").display === "none") {
                $(".list-view-cards").show();
            }else{
                $(".list-view-cards").hide();
            }

        });
    });



    const priceViewBuilder = (parent, price, car_id) => {
        //5. create div with class 'price', then append it to parent
        let newPriceDiv = document.createElement("DIV");
        newPriceDiv.setAttribute("class", "price");
        parent.append(newPriceDiv);

        //6. create span with text car.price, append to newPriceDiv
        let newPrice = document.createElement("SPAN");
        let newPriceText = document.createTextNode("$ " + price);
        newPrice.append(newPriceText);
        newPriceDiv.append(newPrice);

        //7. create <a> to 'view more', with class "btn btn-dark", href="Details.html",  append to newPriceDiv
        let newButton = document.createElement("A");
        let newButtonText = document.createTextNode("View More >")
        newButton.append(newButtonText);
        newButton.setAttribute("href", "Details.html" + "?" + car_id);
        newButton.setAttribute("class", "btn btn-dark");
        newPriceDiv.append(newButton);
    };
    //build grid view cards
    const gridViewCard = () => {
        CAR_DATA.ocassions.forEach(car => {
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

            //5. create the price part 
            priceViewBuilder(newCardBody, car.price, car.id);

        });
    }
    gridViewCard();

    //***************** build list view card ************************* */
    //build columns in table
    const trBuilder = (table, thTxt, tdTxt) => {
        let table_tr = document.createElement("TR");
        table.append(table_tr);

        let table_th = document.createElement("TH");
        let table_th_text = document.createTextNode(thTxt);
        table_th.append(table_th_text);
        table_tr.append(table_th);

        let table_td = document.createElement("TD");
        let table_td_text = document.createTextNode(tdTxt);
        table_td.append(table_td_text);
        table_tr.append(table_td);
    }
    //build list view table
    const tableBuilder = (parent, carUit, carBouw, carCarr, carKm) => {
        let table = document.createElement("TABLE");
        parent.append(table);
        //column 1
        trBuilder(table, "Uitvoering:", carUit);
        //column 2
        trBuilder(table, "Bouwjaar:", carBouw);
        //column 3
        trBuilder(table, "Carroserrie:", carCarr);
        //column 4
        trBuilder(table, "Km. stand:", carKm + " km");

    }
    //build list view cards
    const listView = () => {
        CAR_DATA.ocassions.forEach((car) => {
            //1. create newListCard div, append to $('.list-view-cards')
            let newListCard = document.createElement("DIV");
            newListCard.setAttribute("class", "list-view-card");
            $('.list-view-cards').append(newListCard);

            //2. create img, append to newListCard
            let listImg = document.createElement("IMG");
            listImg.setAttribute("src", "images/ocassions/" + car.img_src);
            listImg.setAttribute("alt", car.alt);
            newListCard.append(listImg);

            //3. create div with class "car-details", append to newListCard
            let newListDetail = document.createElement("DIV");
            newListDetail.setAttribute("class", "car-details");
            newListCard.append(newListDetail);

            //4. create h2, append to newListDetail
            let cardTitle = document.createElement("H2");
            let hTxt = document.createTextNode(car.title);
            cardTitle.append(hTxt);
            newListDetail.append(cardTitle);

            //5. create table container, append to newListDetail
            let tableDetail = document.createElement("DIV");
            tableDetail.setAttribute("class", "car-details-table");
            newListDetail.append(tableDetail);

            //6. create table, append to <div class="car-details-table">
            tableBuilder(tableDetail, car.uitvoering, car.bouwjaar, car.carroserrie, car.km);

            //7. create the price part 
            priceViewBuilder(newListDetail, car.price, car.id);
        });
    };
    listView();
    //*****************end of build list view card ************************* */

    //when click on grid or list view button, toggle grid and list view
    $("#list-view").on("click", function () {
        $(".cards").hide();
        $(".list-view-cards").show();
    });
    $("#grid-view").on("click", function () {
        $(".cards").show();
        $(".list-view-cards").hide();
    })
});