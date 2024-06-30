const messageButton = document.querySelector('.primary');
        messageButton.addEventListener('click', function() {
            alert('Hello! You clicked the "Message" button.');
        });


const buttons = document.querySelectorAll('.button-animation');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {

        button.classList.add('animate');

        setTimeout(function() {
            button.classList.remove('animate');
        }, 1000);
    });
});
