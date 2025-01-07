// Heart Animation
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.className = "heart-animation";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  setInterval(createFloatingHeart, 500);
  
  // Lazy Load Envelope
  document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("lazy-envelope");
    setTimeout(() => {
      envelope.style.opacity = 1;
      envelope.style.transition = "opacity 2s ease-in-out";
    }, 1000);
  });
  