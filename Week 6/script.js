const backBtn= document.getElementById('backBtn');
const overlay = document.querySelector('.overlay');
const modalButton= document.querySelector('#seeBtn');
const closeButton= document.querySelector('.modal button');

const darkMode = document.querySelector('#darkmode-toggle-input');


const displayElement= ()=>{
    overlay.classList.toggle('hidden');
}

const closeElement=()=>{
    overlay.classList.toggle('hidden')
}






window.onscroll= function () {
    scrollFunction();
};
const scrollFunction= ()=>{
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backBtn.style.display= "block"
    }
    else{
        backBtn.style.display= "none"
    }
}
const backButton= ()=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop= 0;
    
}
const nightMode= ()=>{
    console.log('changed');
    
}
    
darkMode.addEventListener('click',nightMode);
backBtn.addEventListener('click',backButton);
modalButton.addEventListener('click', displayElement);
closeButton.addEventListener('click', closeElement);