let qrContainer = document.getElementById("qrcode");
let qrcode = new QRCode(qrContainer, {
  width: 200,
  height: 200,
  colorDark: "#333",
  colorLight: "#fff",
  correctLevel: QRCode.CorrectLevel.H
});

qrcode.makeCode("Welcome to Chandru's QR Generator");

function generateQr() {
  const input = document.getElementById("qr-input").value.trim();
  if (!input) {
    alert("Please enter text or a URL to generate a QR Code!");
    return;
  }

  qrcode.makeCode(input);

  qrContainer.style.animation = "fadeIn 0.6s ease";
  setTimeout(() => (qrContainer.style.animation = ""), 600);
}
