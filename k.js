function openModal(file) {
    let modal = document.getElementById("modal");
    let iframe = document.getElementById("modal-iframe");
    iframe.src = file;
    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("modal");
    let iframe = document.getElementById("modal-iframe");
    iframe.src = "";
    modal.style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}

// Generate QR Code
document.addEventListener("DOMContentLoaded", function() {
    let qrContainer = document.getElementById("qrcode");
    let qrCode = new QRCode(qrContainer, {
        text: "https://www.linkedin.com/in/kishore-s2007?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        width: 200,
        height: 200
    });
});
