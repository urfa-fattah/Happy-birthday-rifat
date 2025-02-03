// Initialize EmailJS with user ID
(function() {
    emailjs.init("mC6GMM4COU56Tm3-Z"); // Replace with your EmailJS user ID
})();

// Send message using EmailJS
function sendMessage(name, email, message) {
    const loadingButton = document.querySelector("footer button");
    loadingButton.textContent = "Sending..."; // Show loading message

    emailjs.send("service_fg0ucbc", "template_txen3ai", {
        to_name: "Rifat",
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
    })
    .finally(() => {
        loadingButton.textContent = "Send Birthday Email"; // Reset button text
    });
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    sendMessage(name, email, message);
});

// Send birthday email (improved check for sending once per year)
function sendBirthdayEmail() {
    const today = new Date();
    const birthdayMonth = 1; // February (0-indexed)
    const birthdayDate = 23;
    const birthdayHour = 13;

    const lastSentYear = localStorage.getItem('lastSentYear');

    if (today.getMonth() === birthdayMonth && today.getDate() === birthdayDate && today.getHours() === birthdayHour) {
        if (lastSentYear !== today.getFullYear().toString()) {
            emailjs.send("service_fg0ucbc", "template_txen3ai", {
                to_name: "Rifat",
                from_name: "Fattah",
                to_email: "rifat2456852@gmail.com",
                message: "Happy Birthday, Rifat! Wishing you joy and happiness."
            })
            .then(function(response) {
                console.log('Birthday Email Sent!');
                alert('Birthday email sent successfully!');
                localStorage.setItem('lastSentYear', today.getFullYear());
            }, function(error) {
                alert('Error in sending birthday email.');
            });
        } else {
            alert('You have already sent the birthday email this year!');
        }
    }
}

// Confetti effect
document.getElementById('cakeImg').addEventListener('click', function() {
    alert('Happy Birthday, Rifat! 🎉🎂');

    const confetti = new ConfettiGenerator({
        target: 'cakeImg',
        max: 150,
        size: 2,
        animate: true
    });
    confetti.render();
});
