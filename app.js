let sq1=document.getElementById('one');
let sq2=document.getElementById('two');
let sq3=document.getElementById('three');
let sq4=document.getElementById('four');
let sq5=document.getElementById('five');
let sq6=document.getElementById('six');
let sq7=document.getElementById('seven');
let sq8=document.getElementById('eight');

let find=document.getElementById('find');
let gen=document.getElementById('gen');
let search=document.getElementById('search');
let txt=document.getElementById('txt');

let value;
function confi(){
    sq1.style.backgroundColor="yellow";
    sq2.style.backgroundColor="yellow";
    sq3.style.backgroundColor="yellow";
    sq4.style.backgroundColor="yellow";
    sq5.style.backgroundColor="yellow";
    sq6.style.backgroundColor="yellow";
    sq7.style.backgroundColor="yellow";
    sq8.style.backgroundColor="yellow";
    find.value="";
    txt.innerHTML="Type the element you want to search";
    txt.style.color="aliceblue";
}

function numbergenerate(){
    confi();
    alert("enter the array")
    sq1.innerHTML=prompt()
    sq2.innerHTML=prompt();
    sq3.innerHTML=prompt()
    sq4.innerHTML=prompt()
    sq5.innerHTML=prompt()
    sq6.innerHTML=prompt()
    sq7.innerHTML=prompt()
    sq8.innerHTML=prompt()
}

function cheak(){
    if(String(sq1.innerHTML)===value){
        sq1.style.backgroundColor="green";
    }
    else if(String(sq2.innerHTML)===value){
        sq1.style.backgroundColor="red";
        sq2.style.backgroundColor="green";
    }
    else if(String(sq3.innerHTML)===value){
        sq1.style.backgroundColor="red";
        sq2.style.backgroundColor="red";
        sq3.style.backgroundColor="green";
    }
    else if(String(sq4.innerHTML)===value){
        sq1.style.backgroundColor="red";
        sq2.style.backgroundColor="red";
        sq3.style.backgroundColor="red";
        sq4.style.backgroundColor="green";
    }
    else if(String(sq5.innerHTML)===value){
        sq1.style.backgroundColor="red";
        sq2.style.backgroundColor="red";
        sq3.style.backgroundColor="red";
        sq4.style.backgroundColor="red";
        sq5.style.backgroundColor="green";
    }
    else if(String(sq6.innerHTML)===value){
        sq1.style.backgroundColor="red";
        sq2.style.backgroundColor="red";
        sq3.style.backgroundColor="red";
        sq4.style.backgroundColor="red";
        sq5.style.backgroundColor="red";
        sq6.style.backgroundColor="green";
        
    }
    else if(String(sq7.innerHTML)===value){
        sq1.style.backgroundColor="red";
        sq2.style.backgroundColor="red";
        sq3.style.backgroundColor="red";
        sq4.style.backgroundColor="red";
        sq5.style.backgroundColor="red";
        sq6.style.backgroundColor="red";
        sq7.style.backgroundColor="green";
        
    }
    else if(String(sq8.innerHTML)===value){
        sq1.style.backgroundColor="red";
        sq2.style.backgroundColor="red";
        sq3.style.backgroundColor="red";
        sq4.style.backgroundColor="red";
        sq5.style.backgroundColor="red";
        sq6.style.backgroundColor="red";
        sq7.style.backgroundColor="red";
        sq8.style.backgroundColor="green";
        
    }
    else{
        sq1.style.backgroundColor="red";
        sq2.style.backgroundColor="red";
        sq3.style.backgroundColor="red";
        sq4.style.backgroundColor="red";
        sq5.style.backgroundColor="red";
        sq6.style.backgroundColor="red";
        sq7.style.backgroundColor="red";
        sq8.style.backgroundColor="red";
        txt.innerHTML="sorry"
        txt.style.color="red";
    }
}
    function numbersearch(){
        value=find.value;
        cheak();
    }

