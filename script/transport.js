const txtTaxiChoice=document.getElementById("taxiChoice")
const txtkm = document.getElementById("km");/*Global variables always declared outside the function */
const txtStay = document.getElementById("stay")
const txtFuel = document.getElementById("fuel");
const txtStartingPoint=document.getElementById("startingPoint")
let txtTaxiC=document.getElementById("taxiC");
let txtTaxiCost=document.getElementById("taxiCost");
let txtoverCost=document.getElementById("overCost")
let txtOverallOrder=document.getElementById("overOrder")


const btnOrder = document.getElementById("vorder");/*button named order is taken from html and assigned to btnorder */
const btnReserve = document.getElementById("vreserve");

btnOrder.addEventListener("click",cost);/*This tells cost to run when btnorder pressed. btnorder is the name of variable for js only   */
btnReserve.addEventListener("click",out); 

function cost(){  
    event.preventDefault();
    console.log("Handle any data");   
      }
window.onload= function exampleFunction(){
    let taxiType=document.getElementById("taxiC");
    txtTaxiC.innerText="";
    let overallOrder=document.getElementById("overOrder");
    txtOverallOrder.innerText="";
    let taxiCost=document.getElementById("taxiCost");
    txtTaxiCost.innerText=0;
    let overallCost=document.getElementById("overCost");
    txtTaxiC.innerText=0
}
let TChoice = document.getElementById("taxiChoice")[0];
TChoice.addEventListener("change",taxi);
let totalCost=0;
function taxi(){
    txtTaxiC.innerText=TChoice.value;
}

txtkm.addEventListener("change", CurrentCost);
txtTaxiChoice.addEventListener("change", CurrentCost);
function CurrentCost(){
    if(TChoice.value==="Tuk-Tuk"){
        let costPerKm=50;
        Currentcost=(txtkm.value*costPerKm);    
    }
    else if(TChoice.value==="Mini-Car"){
        let costPerKm=75;
        Currentcost=txtkm.value*costPerKm;
    }
    else if(TChoice.value==="Luxury Car"){
        let costPerKm=100;
        Currentcost=txtkm.value*costPerKm;
    }
    else if(TChoice.value==="Luxury Van"){
        let costPerKm=150;
        Currentcost=txtkm.value*costPerKm;
    }
    else{
        let costPerKm=200;
        Currentcost=txtkm.value*costPerKm;
    }
    totalCost=totalCost+Currentcost;
    //txtTaxiCost.innerText=totalCost;
    txtTaxiC.innerText=document.getElementById("taxiChoice").value;
}

let costT=0;
txtTaxiCost.addEventListener("change",cost);
function cost(){
    if(TChoice.value==="Tuk-Tuk"){
        costT="50";    
    }
    if(TChoice.value==="Mini-Car"){
        costT="75";    
    }
    if(TChoice.value==="Luxury Car"){
        costT="100";    
    }
    if(TChoice.value==="Luxury Van"){
        costT="150";    
    }
    if(TChoice.value==="Luxury Bus"){
        costT="200";    
    }
    txtTaxiCost.innerText=costT;
}



let st;
let totalCost1;
txtStay.addEventListener("change",stay);
function stay(){
    if (document.getElementById("oneway").checked){
        totalCost1=totalCost;
        st=`oneway`;
       }
       if (document.getElementById("twoway").checked){
         totalCost1=2*totalCost;
         st=`twoway`;
       }
       if (document.getElementById("overnight").checked){
         totalCost1=(2*totalCost)+5000;
         st=`overnight`;
       }

  //alert("your order has been Ordered");
  txtoverCost.innerText=`${totalCost1}`;
}

let fl;
let fll;
txtFuel.addEventListener("change", fuel)
function fuel(){
    if (document.getElementById("high").checked){
       fl = totalCost1 + 2000;
       fll=`high`;
    }
    if (document.getElementById("medium").checked){
       fl = totalCost1 + 1000;
       fll=`medium`;
    }
    if (document.getElementById("low").checked){
       fl = totalCost1 + 500;
       fll=`low`
    }
    txtoverCost.innerText=`${fl}`;
}
const btnaFav= document.getElementById("aFav");
const btnoFav = document.getElementById("oFav");
btnaFav.addEventListener("click",addEntry);
let directory;
var en;

btnoFav.addEventListener("click",showEntries);
function showEntries(){
en=JSON.parse(localStorage.getItem('directory'));
fav.innerText="";
fav.innerText=en.vehi +" "+ en.fe +" "+ en.km +" " + en.st +" "+ en.address;
}
function addEntry(){
  const input={
    "vehi":txtTaxiChoice.value,
    "fe":fll,
    "km":txtkm.value,
    "st":st,
    "address":txtStartingPoint.value
  };
  localStorage.setItem('directory',JSON.stringify(input));
}

let n=0;
let loyal=document.getElementById("loyal");
let vorder=document.getElementById("vorder");
vorder.addEventListener("click",loyaltya);
function loyaltya(){
n=n+1;
}

let loyaltyp=0;
const btnCl=document.getElementById("cloyalty");
btnCl.addEventListener("click",checkl);
function checkl(){
if (n>3){
loyaltyp=n*20;
loyal.innerText=`The loyalty points is : ${loyaltyp}`
}
else{
 loyal.innerText=`0`;
}
}
function out(){
    txtTaxiCost.innerText="";
    txtTaxiC.innerText="";      
  alert("Thankyou for your reservation");
}




