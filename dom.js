const email = document.querySelector(".email");
const num = document.querySelector(".num");
const btn = document.querySelector("button");
const divs = document.querySelector(".divs");
const pass = document.querySelector(".pass");
const btnchek = document.querySelector(".btnchek")
const tit = document.qs

btn.addEventListener("click", () => {
  if (email.value !== "" || num.value !== "" || pass.value!=="")  {
    task();

    
  } 
});

btnchek.addEventListener("click",()=>{
 divs.lastChild.remove()
 
})


function task() {
  divs.innerHTML +=` <div class="title">
  <h1> ${email.value}</h1>
  <h6>NAME</h6>
  <h2>     ${num.value.slice(0,4)} - ${num.value.slice(4,8)} 
  ${num.value.slice(8,12)} - ${num.value.slice(12,16)}</h2>
  <h3>  ${pass.value.slice(0,2)} / ${pass.value.slice(2,4)}</h3>
  <h5>VALID TILL</h5>
  <img class="logo1" src="./img/Logo.png" alt="img">
  </div>`;
  email.value=""
  num.value=""
  pass.value=""

}