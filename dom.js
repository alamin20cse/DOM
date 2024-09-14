console.log("HEllow DOM of js");
const licollection=document.getElementsByTagName('li');
console.log(licollection);
for(const li1 of licollection)
{
    console.log(li1.innerText);
}
const h1collection=document.getElementsByTagName('h1');
for(const i of h1collection)
{
    console.log(i.innerText)
}

const id_of_pone=document.getElementById('list_phone').style.color='yellow'
console.log(id_of_pone.innerText);
const class_of_furts=document.getElementsByClassName('list_furts');
console.log(class_of_furts);
const qurs=document.querySelectorAll('.list_furts + ul li');
// console.log(qurs.innerText);
for(const x of qurs)
{
    console.log(x.innerText);
}


const sc=document.querySelectorAll('section');
console.log(sc);
for(const sci of sc)
{
    sci.style.border='3px solid green';
    sci.style.marginBottom='5px';
    sci.style.borderRadius='24px';
    sci.style.background='lightgray';
}
const phoneContainar=document.getElementById('phone_containar');
phoneContainar.style.background='lime';
phoneContainar.classList.add('phone-bg');





const LiPn=document.getElementById('li_pn');
console.log(LiPn);
const li1=document.createElement('li');
li1.innerText='Shalbon ';
LiPn.appendChild(li1);