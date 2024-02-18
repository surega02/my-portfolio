/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector("#contact-form");
const contactMessage = document.querySelector("#contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm("service_jj4s773", "template_bk2avwc", "#contact-form", "MYEN1-CV9cBJskgKv").then(
    () => {
      // show sent message
      contactMessage.textContent = "Message sent successfully ✅";

      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      // Clear input fields
      contactForm.reset();
    },
    () => {
      // Show error message
      contactMessage.textContent = "Message not sent (service error) ❌";
    }
  );
};

contactForm.addEventListener("submit", sendEmail);
