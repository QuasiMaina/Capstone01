// yes and no buttons
document.getElementById('yesButton').addEventListener('click', function() {
    alert('You clicked Yes!');
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('You clicked No!');
});



// Intro
document.querySelectorAll('.footer-icons a').forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.preventDefault();
        alert(`You clicked on ${this.title}`);
        
        // Change the icon color temporarily
        const originalColor = this.style.color;
        this.style.color = '#ffcc00'; // Change to a highlight color
        setTimeout(() => {
            this.style.color = originalColor; // Revert back to original color
        }, 300);
    });
});





