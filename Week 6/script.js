// Selecting elements
const backBtn = document.getElementById('backBtn');
const overlay = document.querySelector('.overlay');
const modalButton = document.querySelector('#seeBtn');
const closeButton = document.querySelector('.close-modal');

// Function to toggle modal visibility
const toggleModal = () => {
    overlay.classList.toggle('hidden');
};

// Function to smoothly scroll back to top
const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Function to handle scroll event
const scrollFunction = () => {
    if (window.scrollY > 200) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }
};

// Event listeners
modalButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
backBtn.addEventListener('click', backToTop);
window.addEventListener('scroll', scrollFunction);
