document.addEventListener('DOMContentLoaded', () => {
    const brainSVG = document.getElementById('brainSVG');
    const infoText = document.getElementById('infoText');
    let timeoutId; // Variable to store the timeout ID

    // Wait for the SVG to load and then add interactivity
    brainSVG.addEventListener('load', () => {
        const svgDoc = brainSVG.contentDocument; // Access the SVG document

        // Ensure the pink path element is accessible
        const pinkElement = svgDoc.getElementById('path2804');
        if (pinkElement) {
            // Add hover effect for yellow highlighting
            pinkElement.addEventListener('mouseenter', () => {
                pinkElement.style.fill = 'yellow'; // Highlight on hover
            });

            pinkElement.addEventListener('mouseleave', () => {
                pinkElement.style.fill = '#f515cf'; // Return to original color after hover
            });

            // Add click event to display the info
            pinkElement.addEventListener('click', (event) => {
                // Get the position of the clicked element relative to the SVG container
                const boundingBox = pinkElement.getBoundingClientRect();
                const svgContainer = brainSVG.getBoundingClientRect();

                // Position the info text beside the image
                infoText.style.display = 'block';
                infoText.style.top = `${boundingBox.top - svgContainer.top}px`; // Align top
                infoText.style.left = `${boundingBox.right - svgContainer.left + 10}px`; // Position to the right

                // Update the text content inside the infoText div
                infoText.textContent = "Basal Ganglia: located in the middle of brain affected by Parkinson's disease";

                // Clear any existing timeout before starting a new one
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // Hide the text box after 5 seconds
                timeoutId = setTimeout(() => {
                    infoText.style.display = 'none';
                }, 5000); // 10 seconds
            });
        } 
    });
});
