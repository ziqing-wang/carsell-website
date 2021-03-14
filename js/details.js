const init = ()=>{
    //replace ?= in the URL to ""
    let id = location.search.replace(/^.*?\=/, "");
    document.getElementById("car_id").innerText = id;
    console.log(id);
 }
 init();