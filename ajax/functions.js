let isFavorite = false;

function updateFavor(){
    isFavorite = !isFavorite;

    // console.log("isFavorite: " + isFavorite)

    var classList = document.getElementById("favor-icon").classList;
    // console.log("before classList: " + classList)

    if(isFavorite){
        classList.remove("unfavor-icon");
        classList.add("favor-icon");
    } else{
        classList.remove("favor-icon");
        classList.add("unfavor-icon");
    }

    // console.log("background: " + document.getElementById("favor-icon").style.background)
}