document.addEventListener("DOMContentLoaded", () => {
  const obrazec = document.querySelector("#signupForm");
  const email = document.querySelector("#eposta");
  const socialButtons = document.querySelectorAll("[data-provider]");

  obrazec.setAttribute("novalidate", "");

  function prikaziVajo() {
    if (typeof Swal === "undefined") {
      alert("SweetAlert2 se ni naložil. Preveri internetno povezavo.");
      return;
    }

    Swal.fire({
      title: "Demo only",
      text: "This is only a practice exercise. No information has been saved. This is not a real signup form.",
      icon: "info",
      position: "center",
      confirmButtonText: "OK",
      confirmButtonColor: "#008060",
      backdrop: true,
      allowOutsideClick: true
    });
  }

  function prikaziNapako(besedilo) {
    if (typeof Swal === "undefined") {
      alert("SweetAlert2 se ni naložil. Preveri internetno povezavo.");
      return;
    }

    Swal.fire({
      title: "Check your email",
      text: besedilo,
      icon: "warning",
      position: "center",
      confirmButtonText: "OK",
      confirmButtonColor: "#008060",
      backdrop: true,
      allowOutsideClick: true
    }).then(() => email.focus());
  }

  obrazec.addEventListener("submit", (event) => {
    event.preventDefault();

    const vrednost = email.value.trim();

    if (vrednost === "") {
      prikaziNapako("Please enter your email address.");
      return;
    }

    if (!vrednost.includes("@")) {
      prikaziNapako("Your email is missing the @ sign. Please add it.");
      return;
    }

    if (!email.checkValidity()) {
      prikaziNapako("Please enter a valid email address, for example name@example.com.");
      return;
    }

    // Vse je pravilno
    prikaziVajo();
  });

  socialButtons.forEach((button) => {
    button.addEventListener("click", prikaziVajo);
  });
});