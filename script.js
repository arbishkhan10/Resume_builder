var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('Email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('Education');
    var experienceElement = document.getElementById('Experience');
    var skillsElement = document.getElementById('skills');
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var education = educationElement.value;
    var experience = experienceElement.value;
    var skills = skillsElement.value;
    var resumeOutput = "\n        <div id=\"resumeOutput\">\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name, " </span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">  ").concat(email, " </span></p>\n            <p><strong>Phone Number:</strong>  <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n            \n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\" >").concat(education, "</p>\n\n            <h3>Work Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\" >").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\" >").concat(skills, "</p>\n        </div>\n    ");
    var resumeOutputElement = document.querySelector('.resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
    }
    else {
        console.error('The resume output element is missing.');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
