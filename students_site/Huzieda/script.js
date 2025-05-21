document.querySelectorAll(".artist, .sport").forEach(item => {
    item.addEventListener("click", function() {
        document.getElementById(this.getAttribute("data-modal")).style.display = "block";
    });
});

document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function() {
        this.closest(".modal").style.display = "none";
    });
});

window.addEventListener("click", function(event) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});