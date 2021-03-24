const APIs = {
    baseURL: "https://opendata.rdw.nl/resource/m9d7-ebf2.json",
    baseAssenURL: 'https://opendata.rdw.nl/resource/3huj-srit.json',
    baseCarrosserieURL: 'https://opendata.rdw.nl/resource/vezc-m2t6.json',
    baseVoertuigklasseURL: 'https://opendata.rdw.nl/resource/kmfi-hrps.json',
    baseBrandstofURL: 'https://opendata.rdw.nl/resource/8ys7-d773.json'
};


$("#search-btn").on('click', getCar);

function getCar() {
    //get the id from the input 
    const id = $("#search-input").val();
    //get the data from api
    fetch(`${APIs.baseURL}?kenteken=${id}`).then(res => {
        return res.json();
    }).then(car_info => {
        tableBuilder(car_info);
    });
    getCarAssen(id);
    getCarCarrosserie(id);
    getCarBrandstof(id);
    getCarVoertuigklasse(id)
}
//9KRB05

//build a table according to the data from API
function tableBuilder(arr) {
    const infoObj = arr[0];
    const skipThis = ["api_gekentekende_voertuigen_carrosserie", "api_gekentekende_voertuigen_assen", "api_gekentekende_voertuigen_carrosserie_specifiek", "api_gekentekende_voertuigen_voertuigklasse", "api_gekentekende_voertuigen_brandstof"]
    let rowStr = "";
    for (let key in infoObj) {
        if (Object.hasOwnProperty.call(infoObj, key)) {
            //   console.log(`${key}: ${infoObj[key]}`);
            if (skipThis.includes((key))) {
                rowStr = "";
            } else {
                rowStr = `
                    <div class="col-div">
                        <label for=${key}>${key}:</label>
                        <input type="text" name=${key} value=${infoObj[key]}>
                    </div>
                `;
                $('.car-details').append(rowStr);
            }

        }
    }
}

function getCarAssen(id) {
    //get the data from api
    fetch(`${APIs.baseAssenURL}?kenteken=${id}`).then(res => {
        return res.json();
    }).then(car_info => {
        //console.log(car_info[0].aantal_assen);
        const assen = car_info[0].aantal_assen;
        $('input[name="assen"]').val(assen);
    });
}

function getCarCarrosserie(id) {
    //get the data from api
    fetch(`${APIs.baseCarrosserieURL}?kenteken=${id}`).then(res => {
        return res.json();
    }).then(car_info => {
        // console.log(car_info[0]);
        const assen = car_info[0].type_carrosserie_europese_omschrijving;
        $('input[name="carrosserie"]').val(assen);
    });
}

function getCarBrandstof(id) {
    //get the data from api
    fetch(`${APIs.baseBrandstofURL}?kenteken=${id}`).then(res => {
        return res.json();
    }).then(car_info => {
        // console.log(car_info[0]);
        const assen = car_info[0].brandstof_omschrijving;
        $('input[name="brandstof"]').val(assen);
    });
}

function getCarVoertuigklasse(id) {
    //get the data from api
    fetch(`${APIs.baseVoertuigklasseURL}?kenteken=${id}`).then(res => {
        return res.json();
    }).then(car_info => {
        // console.log(car_info[0]);
        if (car_info = []) {
            $('input[name="voertuigklasse"]').val("no result");
        } else {
            const assen = car_info[0].voertuigklasse;
            $('input[name="voertuigklasse"]').val(assen);
        }

    });
}
