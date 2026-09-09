const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if(menuToggle && mainNav){

  menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("open");

    menuToggle.textContent =
      mainNav.classList.contains("open")
      ? "✕"
      : "☰";

  });

}


document.querySelectorAll("#mainNav a").forEach(link => {

  link.addEventListener("click", () => {

    if(mainNav){
      mainNav.classList.remove("open");
    }

    if(menuToggle){
      menuToggle.textContent = "☰";
    }

  });

});


const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if(entry.isIntersecting){

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold:0.12
    }

  );


revealElements.forEach(element => {

  observer.observe(element);

});


const appointmentForm =
  document.getElementById("appointmentForm");


if(appointmentForm){

  appointmentForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
      this.querySelector('[name="name"]').value;

    alert(
      `Thank you ${name}! This is a demo appointment form. Please connect the form to email, WhatsApp or a booking system before publishing.`
    );

    this.reset();

  });

}