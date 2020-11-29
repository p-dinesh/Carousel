var phone = document.getElementById("phone");
var phoneError = document.getElementById("phoneError");
var back = document.getElementById("back");
var signUpForm = document.querySelector(".login-form form");

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  console.log("event", event);
  var uname = document.querySelector("#uname");
  var password = document.querySelector("#pass");
  var passwordOne = document.querySelector("#pass1");
  var fName = document.querySelector("#fname");
  var lName = document.querySelector("#lname");
  var phoneNumber = document.querySelector("#phone");
  var store = {
    username: uname.value,
    pass: password.value,
    phonenumber: phoneNumber.value,
  };

  document.getElementById("error").innerHTML = "&nbsp;";
  document.getElementById("firstName").innerHTML = "&nbsp;";
  document.getElementById("lastName").innerHTML = "&nbsp;";
  document.getElementById("phoneNo").innerHTML = "&nbsp;";
  document.getElementById("match").innerHTML = "&nbsp;";

  if (isEmpty(fName.value)) {
    document.getElementById("firstName").innerHTML = "Field is Empty";
    isValid = false;
  } else if (!isUsername(fName.value)) {
    document.getElementById("firstName").innerHTML =
      "Username must only contain characters and hypen";
    isValid = false;
  }

  if (isEmpty(lName.value)) {
    document.getElementById("lastName").innerHTML = "Field is Empty";
    isValid = false;
  } else if (!isUsername(lName.value)) {
    document.getElementById("lastName").innerHTML =
      "Username must only contain characters and hypen";
    isValid = false;
  }

  if (isEmpty(uname.value)) {
    document.getElementById("error").innerHTML = "Field is Empty";
    isValid = false;
  } else if (!isUsername(uname.value)) {
    document.getElementById("error").innerHTML =
      "Username must only contain characters and hypen";
    isValid = false;
  }

  if (isEmpty(phone.value)) {
    document.getElementById("phoneError").innerHTML = "Field is Empty";
    isValid = false;
  } else if (!isPhoneNumber(phone.value)) {
    document.getElementById("phoneError").innerHTML =
      "Number Should be 10 Digit";
    isValid = false;
  }

  if (isEmpty(password.value)) {
    document.getElementById("phoneNo").innerHTML = "Field is Empty";
    isValid = false;
  } else if (!isPassword(password.value)) {
    document.getElementById("phoneNo").innerHTML =
      "Password contain atleast one lowercase, uppercase, and special character";
    isValid = false;
  }

  if (password.value == passwordOne.value) {
    isValid = isValid && true;
  } else {
    document.getElementById("match").innerHTML = "Password does not match";
    isValid = false;
  }

  if (isValid) {
    phoneError.innerHTML = "&nbsp;";
    var otp = Math.floor(Math.random() * (99999 - 10000) + 10000);
    var submit = document.getElementById("submit");
    alert("OTP is " + otp + ". Do not share this with anyone");
    otpPopup();

    submit.addEventListener("click", function () {
      var inputOtp = document.getElementById("input-otp").value;
      if (otp == inputOtp) {
        localStorage.setItem("store", JSON.stringify(store));
        var otpmodal = document.getElementById("otpmyModal");
        otpmodal.style.display = "none";
        setTimeout(function () {
          window.location.href = "login.html";
        }, 2000);
      } else {
        document.getElementById("invalidOtp").innerHTML = "Invalid Otp";
      }
    });

    registerPopup();
  }
});

function registerPopup() {
  var registermodal = document.getElementById("registermyModal");
  registermodal.style.display = "block";
}

function otpPopup() {
  var otpmodal = document.getElementById("otpmyModal");
  otpmodal.style.display = "block";
}

function isEmpty(value) {
  return value.trim().length === 0;
}

function isPhoneNumber(value) {
  return /^[0-9]{10}$/.test(value);
}

function isUsername(value) {
  return /^[a-zA-Z\-]+$/.test(value);
}

function isPassword(value) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
    value
  );
}
