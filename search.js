
let searchname = document.getElementById("breed-name")
// console.log()

async function particularbreedImage(){
    try{
        let res = await fetch(`https://dog.ceo/api/breed/${searchname.value}/images`)
        let data=await res.json()
        console.log(data.message)
        appendimage(data.message)
    }
    catch{
        console.log("Something went wrong...")
    }
}

function appendimage(images){
    var showimagediv = document.getElementById("search-images")
    showimagediv.style="display:grid;grid-template-columns: auto auto auto;justify-content:space-evenly;margin-top:30px"
     showimagediv.innerHTML=null
    images.map((e)=>{
        var img = document.createElement("img")
        img.src=e
        img.style="width:300px"
        showimagediv.append(img)
    })

}