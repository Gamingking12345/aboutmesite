document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            

            pages.forEach(page => page.style.display = "none");
            
            const targetId = link.getAttribute("href");
            
            document.querySelector(targetId).style.display = "block";
        });
    });
});
