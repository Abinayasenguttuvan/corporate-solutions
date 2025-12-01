function submitForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all details");
        return;
    }

    // IF ALL DETAILS FILLED → GO TO 404 PAGE
    window.location.href = "404.html";
}
