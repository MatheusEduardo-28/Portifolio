const navItem = document.querySelectorAll('.nav-item');

navItem.forEach((item) => {
    item.addEventListener("click", () =>{
        if (body.classList.contains("menu-nav-active")){
            body.classList.contains("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});