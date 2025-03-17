// script.js

// Function to generate a live resume preview from the Explorer form
function generateResume() {
  // Get values from the form
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const template = document.getElementById("template").value;
  const bio = document.getElementById("bio").value;

  // Build a simple resume preview based on the entered data
  let resumeHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Template Style:</strong> ${template}</p>
    <p><strong>Bio:</strong> ${bio}</p>
  `;

  // Insert the generated content into the preview area
  document.getElementById("resume-output").innerHTML = resumeHTML;
}

// Function to simulate a template submission in the Creator interface
function submitTemplate(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve values from the form
  const templateName = document.getElementById("templateName").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;

  // Display a confirmation message (in a real app, you’d send this data to a backend)
  const messageDiv = document.getElementById("creator-message");
  messageDiv.innerHTML = `<p>Thank you for submitting your template: <strong>${templateName}</strong>! We will review it shortly.</p>`;

  // Optionally reset the form after submission
  document.getElementById("template-form").reset();
}
