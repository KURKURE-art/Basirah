/* ===========================
   BASIRAH INSTITUTE
   SCRIPT.JS
=========================== */


/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("show");

    if (mobileMenu.classList.contains("show")) {

        menuBtn.innerHTML = "✖";

    } else {

        menuBtn.innerHTML = "☰";

    }

});


// Close mobile menu after clicking link

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("show");
        menuBtn.innerHTML = "☰";

    });

});



/* ===========================
   SIDEBAR CATEGORY SYSTEM
=========================== */


const sidebarButtons = document.querySelectorAll(".side-btn");


sidebarButtons.forEach(button => {


    button.addEventListener("click", () => {


        const content = button.nextElementSibling;



        // Close other opened sections

        document.querySelectorAll(".side-content").forEach(item => {

            if(item !== content){

                item.classList.remove("open");

            }

        });



        document.querySelectorAll(".side-btn").forEach(btn => {

            if(btn !== button){

                btn.classList.remove("active");

            }

        });



        // Toggle current section

        content.classList.toggle("open");

        button.classList.toggle("active");


    });


});
