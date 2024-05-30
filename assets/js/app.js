function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Show the home section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

// let imageContainer = document.getElementById('gallery');
// console.log(imageContainer);

// let arrayOfImages = [
//     './assets/images/pexels-jc-siller-8634867.jpg' 

// ]
