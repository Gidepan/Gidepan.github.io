document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('QN0Zx1ENtiOl3hujH');

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const templateParams = {
            from_name: name,
            from_email: "gidepan002@gmail.com",
            to_email: email,
            message: message
        };

        emailjs.send('service_jkc3kwn', 'template_9nh1ldz', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    });
});
