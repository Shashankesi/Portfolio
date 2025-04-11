// Universe Stars Animation
const canvas = document.getElementById('universe');
const ctx = canvas.getContext('2d');
let stars = [];
let numStars = 150;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function initStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach(star => {
    star.x += star.vx;
    star.y += star.vy;
    if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.vy *= -1;
  });
}

function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}

initStars();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
});

// Typing Animation
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const words = ["Front-End Developer", "Selenium WebDriver", "Creative Coder"];
let wordIndex = 0, charIndex = 0, typingDelay = 100, erasingDelay = 60, newWordDelay = 1500;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingDelay + 300);
  }
}

// Sidebar Skill Icons Animation
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, 500);

  const icons = document.querySelectorAll(".skills-icons img");
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("show-icon");
    }, index * 150);
  });

  // Live Clock
  function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    clock.textContent = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Show only #about section on load
  sections.forEach(section => {
    section.style.display = section.id === 'about' ? 'block' : 'none';
  });
});

// Scroll Reveal for Service Cards
const serviceCards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});
serviceCards.forEach(card => observer.observe(card));

// Dynamic SPA Section Switching
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').replace('#', '');

    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');

    sections.forEach(section => {
      section.style.display = section.id === targetId ? 'block' : 'none';
    });
  });
});
// Contact form submit handler (for UI feedback)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you for your message, Shashank will get back to you soon!");

  // Optionally reset the form
  this.reset();
});
// Function to toggle the certificates section
function toggleCertificates() {
  const section = document.getElementById("certificates");
  section.style.display = section.style.display === "none" ? "block" : "none";
}

// Optional: Trigger it with a button
document.getElementById("show-cert-btn").addEventListener("click", toggleCertificates);

function toggleCertificates() {
  const certSection = document.getElementById("certificates");
  certSection.style.display = certSection.style.display === "none" ? "block" : "none";
}

