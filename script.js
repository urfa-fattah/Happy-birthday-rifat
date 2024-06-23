// Initialize EmailJS with your user ID
(function() {
    emailjs.init("mC6GMM4COU56Tm3-Z"); // Replace with your EmailJS user ID
})();

// Function to send message using EmailJS
function sendMessage(name, email, message) {
    emailjs.send("service_fg0ucbc", "template_txen3ai", {
        to_name: "Rifat",
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        // Clear form fields after successful submission
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
    });
}

// Function to handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form values
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validate form inputs (basic validation)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Send message using EmailJS
    sendMessage(name, email, message);
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
        alert('Birthday email sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send the birthday email. Please try again later.');
    });

    // Store the current year in local storage to ensure the email is sent only once per year
    localStorage.setItem('lastSentYear', new Date().getFullYear());
}

// Function to check if today is the birthday and if the email has already been sent this year
function checkAndSendEmail() {
    const today = new Date();
    const birthdayMonth = 5; // February (month is 0-indexed)
    const birthdayDate = 23;
    const birthdayHour = 13;

    // Get the year when the email was last sent from local storage
    const lastSentYear = localStorage.getItem('lastSentYear');

    if (today.getMonth() === birthdayMonth && today.getDate() === birthdayDate && today.getHours() === birthdayHour) {
        if (lastSentYear !== today.getFullYear().toString()) {
            sendBirthdayEmail();
        } else {
            console.log('Birthday email already sent this year.');
        }
    }
}

// Function to handle manual email sending button click
document.getElementById('sendEmailButton').addEventListener('click', function() {
    sendBirthdayEmail();
});

// Function to handle confetti effect on clicking cake image
document.getElementById('cakeImg').addEventListener('click', function() {
    alert('Happy Birthday, Rifat! 🎉🎂');

    // Add confetti effect
    confetti.start();
    setTimeout(() => {
        confetti.stop();
    }, 3000); // Stop confetti after 3 seconds
});

// Run the email check immediately when the page loads
checkAndSendEmail();
