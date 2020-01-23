function ShowTime() {
   setInterval(function() {
    var dd = new Date();
    document.getElementById("Time").innerHTML = dd.toLocaleString();
    }, 1000);
}

function TitleMove(){

}
