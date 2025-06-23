// Toggle sidebar visibility on mobile
function toggleSidebar() {
  document.querySelector('.Sidebar').classList.toggle('active');
}

// Hide sidebar when any nav link is clicked (mobile UX)
document.querySelectorAll('.Sidebar nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      document.querySelector('.Sidebar').classList.remove('active');
    }
  });
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Animate skill bars on load
window.onload = () => {
  document.getElementById("htmlBar").style.width = "90%";
  document.getElementById("cssBar").style.width = "89%";
};

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}
