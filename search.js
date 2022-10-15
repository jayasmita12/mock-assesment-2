
let searchname = document.getElementById("breed-name")
// console.log()

async function particularbreedImage(){
    try{
        let res = await fetch(`https://dog.ceo/api/breed/${searchname.value}/images`)
        let data=await res.json()
        console.log(data.message)
        if(data.message.length >=1){
            appendimage(data.message)
        }
      
    }
    catch{
        noseachresult()
        console.log("Something went wrong...")
    }
}

var showimagediv = document.getElementById("search-images")
function appendimage(images){
    showimagediv.style="display:grid;grid-template-columns: auto auto auto;justify-content:space-evenly;margin-top:30px"
     showimagediv.innerHTML=null
    images.map((e)=>{
        var img = document.createElement("img")
        img.src=e
        img.style="width:300px"
        showimagediv.append(img)
    })

}

function noseachresult(){
    let div=document.createElement("div")
    let h1=document.createElement("h1")
    div.style="margin-left:200px;width:500px;text-align:center"
    h1.innerHTML="Sorry, No such result found"
    h1.style="color:red"
    div.append(h1)
    showimagediv.append(div)
}