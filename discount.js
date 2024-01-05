var amount=445;
var day="Monday"
var final_amount=amount;
if(145>amount){
    final_amount=amount-0.1*amount;
}else if(150<=amount<420){
    final_amount=amount-0.3*amount;
}else if(amount>420){
    final_amount=amount-0.5*amount;
}
if(day=="Monday"){
    final_amount=amount-16;
}
console.log(final_amount);