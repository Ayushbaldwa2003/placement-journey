function calculate(){

let totalyear=parseInt(document.getElementById("totalyear").value);
let premiumyear=parseInt(document.getElementById("premiumyear").value);
let premium=parseInt(document.getElementById("premium").value);
let totalmoney=parseFloat(document.getElementById("totalmoney").value);
let imaginary=parseFloat(document.getElementById("imaginary").value);

let start=0;
let end=100;
let interest=0;

while(end-start>0.0001){

    let mid=start+(end-start)/2;
    let temp=(mid/100)+1;

    if(check(totalyear,premiumyear,premium,totalmoney,temp)){
        interest=mid;
        start=mid;
    }
    else{
        end=mid;
    }
}

document.getElementById("interest").innerText=
"LIC Interest ≈ "+interest.toFixed(4)+" %";

let imaginaryMoney = calculateMoney(totalyear,premiumyear,premium,(imaginary/100)+1);

document.getElementById("imaginaryMoney").innerText=
"Money with "+imaginary+"% = "+imaginaryMoney.toFixed(2);

let diff = imaginaryMoney - totalmoney;

document.getElementById("difference").innerText=
"Difference (Imaginary - LIC) = "+diff.toFixed(2);

document.getElementById("totalinvest").innerText=
"Total Invested = "+(premium*premiumyear).toFixed(2);
}

function check(totalyear,premiumyear,premium,totalmoney,interest){

let total=0;

for(let i=1;i<=totalyear;i++){

    if(i<=premiumyear){
        total+=premium;
        total=total*interest;
    }
    else{
        total=total*interest;
    }

    if(total>totalmoney){
        return false;
    }
}

return true;

}

function calculateMoney(totalyear,premiumyear,premium,interest){

let total=0;
for(let i=1;i<=totalyear;i++){

    if(i<=premiumyear){
        total+=premium;
        total=total*interest;
    }
    else{
        total=total*interest;
    }

}

return total;

}