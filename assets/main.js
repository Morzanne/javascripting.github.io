

function myFunction(){
    i=0;
    b="#";
    for (i=0;i !=7; i++){
        console.log(b.repeat(i));
}
}

function noREP(){
    alert("Dommage");
} 

function dontKnow(){
    alert("Je vous sens comme tiraillé !");
}


document.getElementById('yes').onclick=myFunction;
document.getElementById('no').onclick=noREP;
document.getElementById('uncertain').onclick=dontKnow;