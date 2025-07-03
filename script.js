// document.querySelector("button").addEventListener("click", function () {
//     alert("Sign-In Clicked!");
// });
document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", function() {
            let menu = this.querySelector(".dropdown-menu");
            menu.style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function() {
            let menu = this.querySelector(".dropdown-menu");
            menu.style.display = "none";
        });
    });
});
function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password!");
        return;
    }

    // Simulate login (in a real app, verify with a database)
    localStorage.setItem("user", username);
    window.location.href = "profile.html"; // Redirect to profile page
}
