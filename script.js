// Menu button for phones
document.querySelector(".menu-btn").onclick = function () {
  document.getElementById("nav").classList.toggle("open");
};

// Contact form (only exists on contact.html)
var form = document.getElementById("contact-form");

if (form) {
  form.onsubmit = function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var note = document.getElementById("form-note");

    if (name == "" || email == "" || message == "") {
      note.innerHTML = "Please fill in all the fields.";
      return;
    }

    // open the email app with the message ready to send
    window.location.href =
      "mailto:natechege574@gmail.com?subject=Message from " + name +
      "&body=" + message + " (" + email + ")";
  };
}
