document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("header nav a");
  
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;
    links.forEach(link => {
      let section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= fromTop + 60 &&
        section.offsetTop + section.offsetHeight > fromTop + 60
      ) {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
});



