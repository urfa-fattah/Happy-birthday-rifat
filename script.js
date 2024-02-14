document.getElementById('cakeImg').addEventListener('click', function() {
    alert('Happy Birthday, Rifat! 🎉🎂');

    // Add confetti effect
    confetti.start();
    setTimeout(() => {
        confetti.stop();
    }, 3000); // Stop confetti after 3 seconds
});
// Illuminating image sections on hover
document.querySelectorAll('.memory-img').forEach(image => {
    image.addEventListener('mouseenter', function() {
        this.classList.add('illuminate');
    });

    image.addEventListener('mouseleave', function() {
        this.classList.remove('illuminate');
    });
});
// To stop the animation when the page is not in focus (e.g., when the user switches to another tab)
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        pauseAnimation();
    } else {
        resumeAnimation();
    }
});

// Function to pause animation
function pauseAnimation() {
    const friendContainer = document.querySelector('.friend-container');
    friendContainer.style.animationPlayState = 'paused';
}
// To stop the animation when the page is not in focus (e.g., when the user switches to another tab)
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        pauseAnimation();
    } else {
        resumeAnimation();
    }
});

// Function to pause animation
// Function to pause the animation
function pauseAnimation() {
    const friendContainer = document.querySelector('.friend-container');
    friendContainer.style.animationPlayState = 'paused';
}

// Function to resume the animation
function resumeAnimation() {
    const friendContainer = document.querySelector('.friend-container');
    friendContainer.style.animationPlayState = 'running';
}

// To stop the animation when the page is not in focus (e.g., when the user switches to another tab)
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        pauseAnimation();
    } else {
        resumeAnimation();
    }
});
