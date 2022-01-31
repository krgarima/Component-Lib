const dismissIcon = document.querySelector('#dismissIcon');
const dismissCard = document.querySelector('#removeDismissibleCard');

const removeCard = () => {
dismissCard.style.display= "none";
}


dismissIcon.addEventListener('click', removeCard);