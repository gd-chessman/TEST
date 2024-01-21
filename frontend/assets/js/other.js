// Xuất hiện menu    
// Get the modal and button elements
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var body = document.body;

// Open the modal
openModalBtn.onclick = function() {
    modal.style.display = 'block';
    body.style.overflow = "hidden";
}

// Close the modal
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
    body.style.overflow = "auto";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}