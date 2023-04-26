// Selectors 
const menubtn = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const navHeader = document.querySelector(".nav");
const navBar = document.querySelector(".nav-bar");
const sectionHome = document.querySelector(".section-home");
const body = document.body;
const allAEl = document.querySelectorAll(".links:link");
// const activeNav = document.querySelector(".nav-active");

// for navlist---
menubtn.addEventListener("click", () => {
    console.log("clicked");
    navList.classList.toggle("menu-active");
});


// for sticky header----

const observerNav = new IntersectionObserver((enteries) => {
    const ent = enteries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
        navHeader.classList.add("nav-active");
        navBar.classList.add("nav-active");

    } else {
        navHeader.classList.remove("nav-active");
        navBar.classList.remove("nav-active");
    }

},
    {
        root: null,
        threshold: 0,
        rootMargin: "-70px",
    }
);
observerNav.observe(sectionHome);

// for smooth scrolling

allAEl.forEach(atag => {
    atag.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(atag.getAttribute("href"))
        const attribute = atag.getAttribute("href");

        if (attribute === "#home") {
            window.scrollTo(
                {
                    top: 0,
                    behavior: "smooth",
                }
            )


        } else if (attribute !== "#home" && attribute.startsWith("#")) {
            const href = document.querySelector(attribute);
            href.scrollIntoView({ behavior: "smooth" });
        }

        if (atag.classList.contains("links")) navList.classList.toggle("menu-active");
    })
})


// Used typed js--

const typedText = new Typed(".span-me", {
    strings: ["Developer", "UI/UX Designer", "Programmer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,

})











