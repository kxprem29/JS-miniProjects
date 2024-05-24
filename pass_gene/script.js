const btn=document.getElementById("btn")
const para=document.querySelector(".randompass")
// let numOfPass=prompt("Enter the length of Password you want....")

let password="";


for (let i = 0; i < 8; i++) {
    let dataAvl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}:?/1234567890";
    let dataAvlLen=dataAvl.length
    let temp= Math.round(Math.random()*dataAvlLen);
    password+=dataAvl[temp];
    
}
btn.addEventListener('click',function(e){
    document.body.style.backgroundColor="#265656";
     
    para.innerHTML=password
})
console.log(password);