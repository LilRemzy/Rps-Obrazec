document.addEventListener("DOMContentLoaded", () => {
  // Obrazec: na index.html je #loginForm, na signup.html pa #signupForm
  const obrazec = document.querySelector("#loginForm, #signupForm");
  if (!obrazec) return;

  const jePrijava = obrazec.id === "loginForm";
  const email = document.querySelector("#eposta");
  const passkeyBtn = document.querySelector("#passkeyBtn"); // obstaja samo na prijavi
  const socialButtons = document.querySelectorAll("[data-provider]");

  obrazec.setAttribute("novalidate", "");

  function prikaziVajo() {
    if (typeof Swal === "undefined") {
      console.error("SweetAlert2 se ni naložil.");
      return;
    }

    Swal.fire({
      title: "Demo only",
      text: `This is only a practice exercise. No information has been saved. This is not a real ${jePrijava ? "login" : "signup"} form.`,
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

  if (passkeyBtn) {
    passkeyBtn.addEventListener("click", prikaziVajo);
  }

  socialButtons.forEach((button) => {
    button.addEventListener("click", prikaziVajo);
  });
});