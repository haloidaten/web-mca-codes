function validateform() {
    let isvalid = true;

    document.getElementById("nameerror").textContent = "";
    document.getElementById("emailerror").textContent = "";
    document.getElementById("passworderror").textContent = "";
    document.getElementById("phoneerror").textContent = "";

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value.trim();

    
    if (name === "") {
        document.getElementById("nameerror").textContent =
            "Full name is required";
        isvalid = false;
    }

    
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

    if (email === "") {
        document.getElementById("emailerror").textContent =
            "Email is required";
        isvalid = false;
    } else if (!emailpattern.test(email)) {
        document.getElementById("emailerror").textContent =
            "Enter a valid email";
        isvalid = false;
    }

    
    if (password === "") {
        document.getElementById("passworderror").textContent =
            "Password is required";
        isvalid = false;
    } else if (password.length < 6) {
        document.getElementById("passworderror").textContent =
            "Password must be at least 6 characters long";
        isvalid = false;
    }

    
    const phonepattern = /^(\+91[\-\s]?)?[6789]\d{9}$/;

    if (phone === "") {
        document.getElementById("phoneerror").textContent =
            "Phone number is required";
        isvalid = false;
    } else if (!phonepattern.test(phone)) {
        document.getElementById("phoneerror").textContent =
            "Enter a valid Indian phone number";
        isvalid = false;
    }

    return isvalid;
}