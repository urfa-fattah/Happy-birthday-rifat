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

// Function to send birthday email using EmailJS
function sendBirthdayEmail() {
    emailjs.send("service_fg0ucbc", "template_txen3ai", {
        to_name: "Rifat",
        from_name: "Fattah",
        to_email: "rifat2456852@gmail.com",
        message: "Dear Rifat,\n\nOn your special day, I want to wish you all the happiness in the world. May your day be filled with laughter, joy, and unforgettable moments. You deserve the best, today and always!\n\nHappy birthday, my dear friend!\n\nWith love,\nOne of your best Friends Fattah"
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
}

// Function to schedule the email sending
function scheduleEmailSending() {
    const birthday = new Date();
    birthday.setMonth(1); // June (month is 0-indexed)
    birthday.setDate(15);
    birthday.setHours(00);
    birthday.setMinutes(00);
    birthday.setSeconds(00);

    const now = new Date();
    const timeUntilBirthday = birthday.getTime() - now.getTime();

    if (timeUntilBirthday > 0) {
        setTimeout(sendBirthdayEmail, timeUntilBirthday);
    } else {
        // Schedule for next year if the date has already passed this year
        birthday.setFullYear(birthday.getFullYear() + 1);
        const nextYearTimeUntilBirthday = birthday.getTime() - now.getTime();
        setTimeout(sendBirthdayEmail, nextYearTimeUntilBirthday);
    }
}

// Schedule the email when the page loads
scheduleEmailSending();
