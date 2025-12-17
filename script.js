document.getElementById("year").textContent = new Date().getFullYear();

var btn = document.getElementById("toggleProjects");
var list = document.getElementById("projectList");

btn.onclick = function () {
  list.style.display = list.style.display === "none" ? "block" : "none";
};

document.getElementById(// show current year (safe even if footer is missing)
var year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// show / hide projects ONLY if button exists
var btn = document.getElementById("toggleProjects");
var list = document.getElementById("projectList");

if (btn && list) {
  btn.onclick = function () {
    list.style.display = list.style.display === "none" ? "block" : "none";
  };
}

// contact form validation (this is the important part)
var form = document.getElementById("contactForm");
var status = document.getElementById("status");

if (form && status) {
  form.onsubmit = function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill out all fields.";
      return;
    }

    status.textContent = "Form submitted (demo).";
    form.reset();
  };
}
"contactForm").onsubmit = function (e) {
  e.preventDefault();

  var status = document.getElementById("status");

  if (
    !document.getElementById("name").value ||
    !document.getElementById("email").value ||
    !document.getElementById("message").value
  ) {
    status.textContent = "Please fill out all fields.";
    return;
  }

  status.textContent = "Form submitted (demo).";
  this.reset();
};
