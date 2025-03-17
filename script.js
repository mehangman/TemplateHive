/* script.js */

// Function to generate Official Resume Preview
function generateResume() {
  // Get resume form values
  const name = document.getElementById('resumeName').value;
  const email = document.getElementById('resumeEmail').value;
  const phone = document.getElementById('resumePhone').value;
  const summary = document.getElementById('resumeSummary').value;
  const skills = document.getElementById('resumeSkills').value;
  
  // Build resume preview content
  const resumeContent = `
    <div class="resume-preview-content">
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Professional Summary</h3>
      <p>${summary}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    </div>
  `;
  
  // Output the content
  document.getElementById('resumeOutput').innerHTML = resumeContent;
}

// Function to generate Marriage Biodata Preview
function generateBiodata() {
  // Get biodata form values
  const name = document.getElementById('bioName').value;
  const age = document.getElementById('bioAge').value;
  const height = document.getElementById('bioHeight').value;
  const religion = document.getElementById('bioReligion').value;
  const caste = document.getElementById('bioCaste').value;
  const education = document.getElementById('bioEducation').value;
  const occupation = document.getElementById('bioOccupation').value;
  const contact = document.getElementById('bioContact').value;
  
  // Build biodata preview content
  const biodataContent = `
    <div class="biodata-preview-content">
      <h2>${name}</h2>
      <p><strong>Age:</strong> ${age} | <strong>Height:</strong> ${height}</p>
      <p><strong>Religion:</strong> ${religion} | <strong>Caste:</strong> ${caste}</p>
      <h3>Education & Occupation</h3>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Occupation:</strong> ${occupation}</p>
      <h3>Contact Information</h3>
      <p>${contact}</p>
    </div>
  `;
  
  // Output the content
  document.getElementById('biodataOutput').innerHTML = biodataContent;
}
