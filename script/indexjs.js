document.addEventListener("DOMContentLoaded", () => {
  const obrazec = document.querySelector("#loginForm");
  const email = document.querySelector("#eposta");
  const passkeyBtn = document.querySelector("#passkeyBtn");
  const socialButtons = document.querySelectorAll("[data-provider]");

  obrazec.setAttribute("novalidate", "");

  function prikaziVajo() {
    if (typeof Swal === "undefined") {
      console.error("SweetAlert2 se ni naložil.");
      return;
    }

    Swal.fire({
      title: "Demo only",
      text: "This is only a practice exercise. No information has been saved. This is not a real login form.",
      icon: "info",
      position: "center",
      confirmButtonText: "OK",
      confirmButtonColor: "#008060",
      backdrop: true
    });
  }

  function prikaziNapako(besedilo) {
    if (typeof Swal === "undefined") {
      console.error("SweetAlert2 se ni naložil.");
      return;
    }

    Swal.fire({
      title: "Check your email",
      text: besedilo,
      icon: "warning",
      position: "center",
      confirmButtonText: "OK",
      confirmButtonColor: "#008060",
      backdrop: true
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

  passkeyBtn.addEventListener("click", prikaziVajo);

  socialButtons.forEach((button) => {
    button.addEventListener("click", prikaziVajo);
  });
});