import CAR_DATA from "./data.js";

//initialize cards
initListViewCardHTML(CAR_DATA.ocassions);

$("#search-btn").on("click", function () {
    let value = $(".search-bar").val().toLowerCase();
    $("#results div").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        $('div.price').show();
        $('div.car-details-table').show();

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
    });
});

//sort menu
$("#sort").on("change", function () {
    let cars = cloneArray(CAR_DATA.ocassions);
    console.log(cars);
    const sortBy = $(this).val().toLowerCase();
    switch (sortBy) {
        case "price-asc":
            console.log("price laag to hoog");
            $(".list-view-cards").empty();
            cars.sort((a, b) => {
                return a.price - b.price
            });

            break;
        case "price-desc":
            console.log("price hoog to laag");
            $(".list-view-cards").empty();
            cars.sort((a, b) => {
                return b.price - a.price
            });
            break;
        case "construction_year-asc":
            console.log("bouwjaar laag to hoog");
            $(".list-view-cards").empty();
            cars.sort((a, b) => {
                return a.bouwjaar - b.bouwjaar
            });
            break;
        case "construction_year-desc":
            console.log("bouwjaar hoog to laag");
            $(".list-view-cards").empty();
            cars.sort((a, b) => {
                return b.bouwjaar - a.bouwjaar
            });
            break;
        case "mileage-asc":
            console.log("km laag to hoog");
            $(".list-view-cards").empty();
            cars.sort((a, b) => {
                return a.km - b.km
            });
            break;
        case "mileage-desc":
            console.log("km hoog to laag");
            cars.sort((a, b) => {
                return b.km - a.km
            });
            break;
        default:
            break;
    }
    initListViewCardHTML(cars);
})

function cloneArray(orgArr) {
    let newArray = [];
    for (let i = 0; i < orgArr.length; i++) {
        newArray.push(orgArr[i]);
    }
    return newArray;
}

//***************** build list view card ************************* */
//build list view cards
function initListViewCardHTML(resource) {
    let listViewCardStr = "";
    resource.forEach((car) => {
        listViewCardStr = `
        <div class="list-view-card" id=${car.id}>
            <img src="images/ocassions/${car.img_src}" alt=${car.alt}>
            <div class="car-details">
                <h2>${car.title}</h2>
                <div class="car-details-table">
                    <table>
                        <tr>
                            <th>Uitvoering:</th>
                            <td>${car.uitvoering}</td>
                        </tr>
                        <tr>
                            <th>Bouwjaar:</th>
                            <td>${car.bouwjaar}</td>
                        </tr>
                        <tr>
                            <th>Carroserrie:</th>
                            <td>${car.carroserrie}</td>
                        </tr>
                        <tr>
                            <th>Km. stand:</th>
                            <td>${car.km} km</td>
                        </tr>
                    </table>
                </div>
                <div class="price">
                    <span>$ ${car.price}</span>
                    <a href="Details.html?id=${car.id}" class="btn btn-dark">View More &gt;</a>
                </div>
            </div>
        </div>
        `;

        $('.list-view-cards').append(listViewCardStr);

    });
};

//*****************end of build list view card ************************* */

//when click on grid or list view button, toggle grid and list view
$("#list-view").on("click", toggleListView);
$("#grid-view").on("click", toggleGridView);

function toggleListView() {
    console.log("list view");
    $('.list-view-cards').removeClass("ocassions-grid-cards-container");
    $(".list-view-card").removeClass("ocassions-grid-card-view");
    $(".car-details-table").show();
}

function toggleGridView() {
    console.log("grid view");
    $('.list-view-cards').addClass("ocassions-grid-cards-container");
    $(".list-view-card").addClass("ocassions-grid-card-view");
    $(".car-details-table").hide();
};