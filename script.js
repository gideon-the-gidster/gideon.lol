document.addEventListener('DOMContentLoaded', () => {
    // select the card element
    const card = document.querySelector('.card');
    
    // add the active class to trigger the fade-in
    // use a slight timeout to ensure the transition plays smoothly
    setTimeout(() => {
        card.classList.add('fade-in-active');
    }, 100);

    console.log("Profile loaded successfully."); // this is pretty much optional tbh
});