window.onload=ejecuta

var imagen
var element



function ejecuta(){
 
    imagen=document.getElementsByTagName("figure")
     for(i=0;i<imagen.length;i++){
        imagen[0].addEventListener("click",page0,false)
        imagen[1].addEventListener("click",page1,false)
        imagen[2].addEventListener("click",page2,false)
        imagen[3].addEventListener("click",page3,false)
        imagen[4].addEventListener("click",page4,false)

     }

    element=document.getElementsByTagName("p")
    for(i=0;i<element.length;i++){
        element[i].addEventListener()
    }

    
    

}

 function tipo(){
     alert("anime")
 }


function page0(){
    window.location.href="Durarara.html"
}

function page1(){
    window.location.href="gto.html"
}

function page2(){
    window.location.href="air_gear.html"
}

function page3(){
    window.location.href="hamatora.html"
}

function page4(){
    window.location.href="d_gray.html"
}






