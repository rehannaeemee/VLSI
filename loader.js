// Load header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // ✅ Fix: handle index.html default case
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") {
      currentPage = "index.html";
    }

    // Highlight active nav link
    document.querySelectorAll("nav ul li a").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });

    // Menu toggle for mobile
    document.querySelector('.menu-toggle').addEventListener('click', () => {
      document.querySelector('nav ul').classList.toggle('show');
    });
  });

// Load footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
