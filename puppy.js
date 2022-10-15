
let images=JSON.parse(localStorage.getItem("puppyimage"))
// console.log(images)
fetchbreedImage(images)
function fetchbreedImage(images){
    var showimagediv = document.getElementById("breedimage")
    showimagediv.style="display:grid;grid-template-columns: auto auto auto;justify-content:space-evenly"
    images.map((e)=>{
        var img = document.createElement("img")
        img.src=e
        img.style="width:300px"
        showimagediv.append(img)
    })
}


