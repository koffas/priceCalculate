

function upologism(){

    
    let disc = document.getElementById("discount").value ;

    let fpa = document.getElementById("fpa").value;

    let kerdos = document.getElementById("kerdos").value;

    let timikat = document.getElementById("timikat").value;

    let foros =parseInt(document.getElementById("foros").value);

    let telikitimi = timikat - (timikat*disc)/100;
    let telikitimi2 = telikitimi + (fpa*telikitimi)/100;
    let telikitimi3 = telikitimi2 + (kerdos*telikitimi2)/100  + foros;

    let test = foros + 2 ;
    
    

console.log(telikitimi3);
console.log(test);

document.getElementById("myText").innerHTML = telikitimi3;



}

