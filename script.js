document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".preview-link").forEach(function (previewLink) {
        previewLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            let iframe = this.closest("li").querySelector(".preview-frame");
            
            if (iframe.style.display === "none" || iframe.style.display === "") {
                iframe.src = this.getAttribute("data-src");
                iframe.style.display = "block";
            } else {
                iframe.style.display = "none";
                iframe.src = ""; // Clear the src to stop loading
            }
        });
    });
});


function toggleIframe(event) {
    event.preventDefault(); // Prevent default link action

    var iframe = document.getElementById('previewFrame');
    var currentDisplay = window.getComputedStyle(iframe).display;

    iframe.style.display = (currentDisplay === 'none') ? 'block' : 'none';
};

function searchFunction() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".Phy115-list ul li"); // Select all list items
    let collapsibles = document.querySelectorAll(".collapse"); // All collapsible elements

    // Hide all items initially
    items.forEach(item => item.style.display = "none");
    collapsibles.forEach(collapse => collapse.classList.remove("show")); // Collapse all sections

    // Loop through list items and show only matches
    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(input) && input !== "") {
            item.style.display = ""; // Show matching item

            // Expand parent collapsibles
            let parent = item.closest(".collapse");
            while (parent) {
                parent.classList.add("show"); // Expand section
                parent = parent.parentElement.closest(".collapse"); // Move to the next parent
            }
        }
    });
};
function myFunction() {
    var element = document.body;
    element.classList.toggle("darky");
 };

