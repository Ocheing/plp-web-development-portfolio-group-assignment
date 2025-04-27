// This script handles the typing effect for the text in the hero section of the webpage.
    document.addEventListener("DOMContentLoaded", function () {
        const typedTextElement = document.querySelector(".typed-text");
        const cursorElement = document.querySelector(".cursor");
        const textArray = ["Freelancer", "Web Designer", "Web Developer", "Photographer"];
        const typingDelay = 100; // Delay between each character
        const disappearingDelay = 100; // Delay before the text disappears
        const newTextDelay = 500; // Delay before typing the next word
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            cursorElement.style.display = "none"; // Hide the cursor while typing
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(clearText, disappearingDelay);
            }
        }

        function clearText() {
            typedTextElement.textContent = "\u00A0"; // Clear the text
            charIndex = 0;
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0; // Loop back to the first word
            setTimeout(type, newTextDelay);
        }

        type();
    });
