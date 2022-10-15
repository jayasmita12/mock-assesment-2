fetchPuppyBreed()
async function fetchPuppyBreed() {
    let res = await fetch("https://dog.ceo/api/breeds/list/all")
    let data = await res.json()
    console.log(data)
    showBreedname(data)
}


function showBreedname(data) {

    var breed = (Object.keys(data.message))
    var showdiv = document.getElementById("showdata")
    showdiv.style = "display:grid;grid-template-columns: auto auto auto;"

    breed.map((e)=>{
        var div = document.createElement("div")
        var breedname = document.createElement("h2")
        breedname.innerHTML = e
        breedname.style = "border:4px solid green;width:200px;height:100px;text-align: center;padding-top:20px;background-color: rgb(103, 200, 103);cursor:pointer"
        
        breedname.onclick = async function () {
            let response = await fetch(`https://dog.ceo/api/breed/${e}/images`)
            let puppyname = await response.json()
            let puppyimage = puppyname.message
            console.log(puppyname)
            localStorage.setItem("puppyimage", JSON.stringify(puppyimage))
             window.location.href="./puppy.html"
        }

        div.append(breedname)
        showdiv.append(div)
    })
}