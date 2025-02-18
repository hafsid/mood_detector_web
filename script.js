document.addEventListener("DOMContentLoaded", function() {
    // Check if there's a saved dark mode preference in localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    
    // Set initial theme based on saved preference
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    
    // Event listener for toggle switch
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        darkModeToggle.checked = isDarkMode; // Set toggle position based on preference
    
        darkModeToggle.addEventListener("change", function() {
            if (darkModeToggle.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "true");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "false");
            }
        });
    }
});
