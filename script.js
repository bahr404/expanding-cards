const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach((cardContainer) => {
    cardContainer.addEventListener('click', () => {
        
        cardContainers.forEach((container) => {
            container.classList.remove('active');
        });

        
        cardContainer.classList.add('active');
    });
});

cardContainers.forEach((cardContainer) => {
    cardContainer.addEventListener('on click', () => {
        cardContainer.classList.remove('active');
    });
});
