document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-box button");
    
    loginButton.addEventListener("click", function () {
        const emailInput = document.querySelector(".login-box input[type='text']").value;
        const passwordInput = document.querySelector(".login-box input[type='password']").value;
        
        if (emailInput === "" || passwordInput === "") {
            alert("Please fill in both fields.");
        } else {
            alert("Logging in...");
            // Simulate login (In a real application, you would send a request to the server here)
        }
    });
});
