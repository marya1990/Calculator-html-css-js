const display=document.querySelector(".display");
const numBtn=document.querySelectorAll(".number");
const clearBtn=document.querySelector(".operator.clear");
const lastClearBtn=document.querySelector(".operator.clearlast");
const plusBtn=document.querySelector(".operator.plus");
const minusBtn=document.querySelector(".operator.minus");
const multiBtn=document.querySelector(".operator.multi");
const divisBtn=document.querySelector(".operator.div");
const equalBtn=document.querySelector(".operator.equal");
const pointBtn=document.querySelector(".operator.point");
const btnPn=document.querySelector(".btnPn");
const precentBtn=document.querySelector(".operator.precent");
let pointstatus="noset" ;
let num1;
let num2;

let op="";let result;let resultStatus="noset";



numBtn.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        
         display.value+= e.target.textContent ;
        
    

      
    })
})
clearBtn.addEventListener("click",()=>{
    display.value="";
    pointstatus="noset";
    resultStatus="noset";
})
lastClearBtn.addEventListener("click",()=>{
    display.value=display.value.slice(0,-1);
    if (display.value.includes(".")){
        pointstatus="set";
    }else{pointstatus="noset"}
})
btnPn.addEventListener("click",()=>{
    
    display.value=(display.value)*(-1);
})
pointBtn.addEventListener("click",()=>{
    if (pointstatus==="noset"){
        display.value+=".";
        pointstatus="set"
    }else{display.value+=""}
   
})
plusBtn.addEventListener("click",()=>{
    num1=Number(display.value);
    display.value="";
    op="+";
    
    
})
minusBtn.addEventListener("click",()=>{
    num1=Number(display.value);
    display.value="";
    op="-";
    
    
})
  
multiBtn.addEventListener("click",()=>{
    num1=Number(display.value);
    display.value="";
    op="*";
    
    
})
  



divisBtn.addEventListener("click",()=>{
    num1=Number(display.value);
    display.value="";
    op="/";
    
    
})
precentBtn.addEventListener("click",()=>{
    display.value=((display.value)/100);
    
})
equalBtn.addEventListener("click",()=>{
  if(resultStatus=="noset"){
    
    num2=Number(display.value);
  
}  else{
    num1=Number(result);}
   
    switch(op){
        case "+":
            result=num1+num2;
            break
        case "*":
            result=num1*num2;
            break
        case "-":
            result=num1-num2;
            break
        case "/":
            result=num1/num2;
            break
        

            

}
display.value=result;
resultStatus="set";


})
