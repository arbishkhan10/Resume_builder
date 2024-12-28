document.getElementById('resume_form')?.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameElement = document.getElementById('name') as HTMLInputElement | null;
  const emailElement = document.getElementById('email') as HTMLInputElement | null;
  const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
  const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
  const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
  const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;

  if (!nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillsElement) {
    console.error("One or more form elements are missing!");
    return;
  }

  const name = nameElement.value;
  const email = emailElement.value;
  const phone = phoneElement.value;
  const education = educationElement.value;
  const experience = experienceElement.value;
  const skills = skillsElement.value;

  const resumeOutput = `
    <div id="resumeOutput">
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
        
        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>

        <h3>Work Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skills}</p>
    </div>
  `;

  const resumeOutputElement = document.querySelector('.resumeOutput');
  if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
  } else {
    console.error('The resume output element is missing.');
  }
});

function makeEditable() {
  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach((element) => {
    element.addEventListener('click', () => {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";
      if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue;
        input.classList.add('editing-input');
        currentElement.style.display = 'none';
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();

        // Save changes on blur
        input.addEventListener('blur', () => {
          currentElement.textContent = input.value;
          currentElement.style.display = '';
          input.remove();
        });
      }
    });
  });
}
