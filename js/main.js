// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));

// Modal
const modal = document.getElementById("serviceModal");
const closeModal = document.querySelector(".close-modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalList = document.getElementById("modalList");
const modalContactBtn = document.getElementById("modalContactBtn");

// Service data
const services = {
  web: {
    title: "Web Design & Development",
    description: "We create visually stunning, fast, and conversion-focused websites.",
    points: [
      "Custom UI/UX Design",
      "Mobile & SEO Optimized",
      "Fast Performance",
      "Secure & Scalable"
    ]
  },
  marketing: {
    title: "Digital Marketing",
    description: "Grow your audience and sales through data-driven marketing.",
    points: [
      "SEO & Content Strategy",
      "Social Media Campaigns",
      "Paid Advertising",
      "Analytics & Reporting"
    ]
  },
  strategy: {
    title: "Business Strategy",
    description: "We help businesses scale with clarity and direction.",
    points: [
      "Market Research",
      "Brand Positioning",
      "Growth Planning",
      "Operational Optimization"
    ]
  }
};

// Show modal
document.querySelectorAll(".learn-more").forEach(btn => {
  btn.addEventListener("click", () => {
    const service = services[btn.dataset.service];
    modalTitle.textContent = service.title;
    modalDescription.textContent = service.description;
    modalList.innerHTML = "";
    service.points.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      modalList.appendChild(li);
    });
    modal.style.display = "flex";
  });
});

// Close modal
closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; }

// Contact scroll
modalContactBtn.onclick = () => {
  modal.style.display = "none";
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};
