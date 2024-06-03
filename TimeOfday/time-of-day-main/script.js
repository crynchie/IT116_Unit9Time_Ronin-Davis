document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

document.addEventListener('DOMContentLoaded', function() {
    function getCurrentHour() {
        const now = new Date();
        return now.getHours();
    }

    function updatePage() {
        const hour = getCurrentHour();
        const content = document.getElementById('content');
        const timeImage = document.getElementById('timeImage');
        const greetingMessage = document.getElementById('greetingMessage');
        let bgColor, imgSrc, message;

        if (hour >= 5 && hour < 12) {
            // Morning
            bgColor = '#FFD700'; // Gold
            imgSrc = 'images/morning.jpg';
            message = 'Good Morning!';
        } else if (hour >= 12 && hour < 18) {
            // Afternoon
            bgColor = '#FF8C00'; // Dark Orange
            imgSrc = 'images/afternoon.jpg';
            message = 'Good Afternoon!';
        } else if (hour >= 18 && hour < 23) {
            // Evening
            bgColor = '#FF4500'; // Orange Red
            imgSrc = 'images/evening.jpg';
            message = 'Good Evening!';
        } else {
            // Night
            bgColor = '#2F4F4F'; // Dark Slate Gray
            imgSrc = 'images/night.jpg';
            message = 'Good Night!';
        }

        document.body.style.backgroundColor = bgColor;
        timeImage.src = imgSrc;
        greetingMessage.textContent = message;
    }

    function updateCopyright() {
        const now = new Date();
        const year = now.getFullYear();
        const copyright = document.getElementById('copyright');
        copyright.textContent = `© 2022-${year}`;
    }

    updatePage();
    updateCopyright();
});
