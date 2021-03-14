$(document).ready(function () {
    $("#search-btn").on("click", function () {
        let value = $(".search-bar").val().toLowerCase();
        $("#results div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            $('div.price').show();
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
    $("#select_filters select").on("change", function () {
        const selectedValue = $(this).val().toLowerCase();
        $("#results div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(selectedValue) > -1);
            $('div.price').show();
        });
    })

});