// Navigation Bar - Animation
document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
        document.querySelector('body').classList.add('scroll')
    }
    else {
    document.querySelector('body').classList.remove('scroll')
    }
});

// Customer Reviews - Previous/Next Buttons
document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const reviewsContainer = document.querySelector('.cr-container');

    let currentIndex = 0;

    function showReviews() {
        const reviews = document.querySelectorAll('.cr-item');
        reviews.forEach(review => review.style.display = 'none');
        for (let i = currentIndex; i < currentIndex + 2; i++) {
            if (reviews[i]) reviews[i].style.display = 'block';
        }
    }

    nextButton.addEventListener('click', function() {
        const reviews = document.querySelectorAll('.cr-item');
        if (currentIndex + 2 < reviews.length) {
            currentIndex += 2;
            showReviews();
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex -= 2;
            showReviews();
        }
    });

    showReviews();
});