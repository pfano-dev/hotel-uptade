const modal = document.querySelector('#backdrop');
const bookBtn = document.getElementById("btn");
const bookBtn1 = document.getElementById("btn1");
const bookBtn2 = document.getElementById("btn2");
const bookBtn3 = document.getElementById("btn3");
const CheckBtn = document.getElementById("bookBtn");
const CheckBTN = document.getElementById("CheckBTN");
const checkInModal = document.getElementById("checkInModal")
const checkInModals = document.getElementById("checkInModa")



const openModal = ()=>{

  backdrop.classList.toggle('backdropVisible');
  checkInModal.classList.remove('checkInModals');
  checkInModal.classList.add('checkInModal');
  
}

const openModa = ()=>{

  checkInModals.classList.remove('checkInModa');
  checkInModals.classList.add('checkInMod');
  
}

const closeModal =()=>{
  backdrop.classList.toggle('backdropVisible');
  checkInModal.classList.remove('checkInModal');
  checkInModal.classList.add('checkInModals'); 
  checkInModals.classList.add('checkInModa');
  checkInModals.classList.remove('checkInMod');
}
const conf =()=>{
  alert("your payment is confirmed")
  backdrop.classList.toggle('backdropVisible');
  checkInModal.classList.remove('checkInModal');
  checkInModal.classList.add('checkInModals'); 
  checkInModals.classList.add('checkInModa');
  checkInModals.classList.remove('checkInMod');
}





bookBtn.addEventListener("click",openModal)
bookBtn1.addEventListener("click",openModal)
bookBtn2.addEventListener("click",openModal)
bookBtn3.addEventListener("click",openModal)
modal.addEventListener("click",closeModal)
CheckBtn.addEventListener("click",openModa)
CheckBTN.addEventListener("click",conf)