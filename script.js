/* script.js */

// Function to generate a live resume preview from the Explorer form
function generateResume() {
  // Retrieve form values
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const template = document.getElementById("template").value;
  const bio = document.getElementById("bio").value;

  // Build a simple resume preview
  let resumeHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Template Style:</strong> ${template}</p>
    <p><strong>Bio:</strong> ${bio}</p>
  `;

  // Display the preview on the page
  document.getElementById("resume-output").innerHTML = resumeHTML;
}

// Function to simulate template submission in the Creator page
function submitTemplate(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get submission values
  const templateName = document.getElementById("templateName").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;

  // Display a confirmation message (in a real setup, you would send this data to a backend)
  const messageDiv = document.getElementById("creator-message");
  messageDiv.innerHTML = `<p>Thank you for submitting your template: <strong>${templateName}</strong>! We will review it shortly.</p>`;

  // Optionally, reset the form
  document.getElementById("template-form").reset();
}
