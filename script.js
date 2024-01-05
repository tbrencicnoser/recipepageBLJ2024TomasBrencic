// Initialize variables for the pages and buttons
var currentPage = 1;
var totalPages = 9; // Update this to the total number of pages
var pages = [];
for (var i = 1; i <= totalPages; i++) {
    pages.push(document.getElementById('page' + i));
}

var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

// Funktion zum Aktualisieren der aktuellen Seite
function updatePage(newPage) {
    pages[currentPage - 1].style.display = 'none'; // Hide the current page
    currentPage = newPage;
    pages[currentPage - 1].style.display = 'block'; // Show the new page
}

// Event-Listener für die Buttons
prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
        updatePage(currentPage - 1);
    }
});

nextBtn.addEventListener('click', function() {
    if (currentPage < totalPages) {
        updatePage(currentPage + 1);
    }
});

// Initialisiere das Modal mit der ersten Seite sichtbar
window.onload = function() {
    pages[0].style.display = 'block';
};

// Holen Sie sich das Modal
var modal = document.getElementById("myModal");

// Holen Sie sich den Button, der das Modal öffnet
var btn = document.getElementById("myBtn");

// Holen Sie sich das <span> Element, das das Modal schließt
var span = document.getElementsByClassName("close")[0];

// Wenn der Benutzer den Button anklickt, öffnen Sie das Modal
btn.addEventListener('click', function() {
    modal.style.display = "block";
});

// Wenn der Benutzer auf <span> (x) klickt, schließen Sie das Modal
span.addEventListener('click', function() {
    modal.style.display = "none";
});

// Wenn der Benutzer irgendwo außerhalb des Modals klickt, schließen Sie es
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
