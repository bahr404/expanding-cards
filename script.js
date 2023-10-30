const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach((cardContainer) => {
    cardContainer.addEventListener('click', () => {
        // Remove active class from all card containers
        cardContainers.forEach((container) => {
            container.classList.remove('active');
        });

        // Add active class to the clicked card container
        cardContainer.classList.add('active');
    });
});
