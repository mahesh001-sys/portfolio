/* =========================================================
   TYPED.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  if (typeof Typed !== "undefined") {

    new Typed(".typing", {

      strings: [
        "Automation Frameworks",
        "CI/CD Pipelines",
        "QA Solutions",
        "Selenium Test Suites"
      ],

      typeSpeed: 75,

      backSpeed: 45,

      backDelay: 1400,

      startDelay: 300,

      loop: true,

      showCursor: true,

      cursorChar: "|"

    });

  }


  /* =======================================================
     THEME TOGGLE
  ======================================================= */

  const themeToggle =
    document.getElementById("theme-toggle");

  const body =
    document.body;


  function updateThemeButton() {

    if (!themeToggle) {
      return;
    }

    const isLight =
      body.classList.contains("light-mode");

    themeToggle.textContent =
      isLight ? "🌙" : "☀️";

    themeToggle.setAttribute(
      "aria-label",
      isLight
        ? "Switch to dark theme"
        : "Switch to light theme"
    );

    themeToggle.setAttribute(
      "title",
      isLight
        ? "Switch to dark theme"
        : "Switch to light theme"
    );

  }


  /* Load saved theme */

  const savedTheme =
    localStorage.getItem("portfolio-theme");


  if (savedTheme === "light") {

    body.classList.add("light-mode");

  }


  updateThemeButton();


  /* Toggle theme */

  if (themeToggle) {

    themeToggle.addEventListener(
      "click",
      () => {

        body.classList.toggle("light-mode");

        const isLight =
          body.classList.contains("light-mode");

        localStorage.setItem(
          "portfolio-theme",
          isLight ? "light" : "dark"
        );

        updateThemeButton();

      }
    );

  }


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const menuToggle =
    document.getElementById("menu-toggle");

  const navMenu =
    document.getElementById("nav-menu");


  if (menuToggle && navMenu) {

    menuToggle.addEventListener(
      "click",
      () => {

        const isOpen =
          navMenu.classList.toggle("open");


        menuToggle.setAttribute(
          "aria-expanded",
          String(isOpen)
        );


        menuToggle.setAttribute(
          "aria-label",
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        );


        const icon =
          menuToggle.querySelector("i");


        if (icon) {

          icon.className =
            isOpen
              ? "fas fa-xmark"
              : "fas fa-bars";

        }

      }
    );


    /* Close mobile menu after clicking a link */

    const navLinks =
      navMenu.querySelectorAll("a");


    navLinks.forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navMenu.classList.remove("open");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
          );


          const icon =
            menuToggle.querySelector("i");


          if (icon) {

            icon.className =
              "fas fa-bars";

          }

        }
      );

    });

  }


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const animatedElements =
    document.querySelectorAll(
      ".skill-group, .project-card, .cert-card, .contact-card"
    );


  /*
     Make sure content remains visible if
     IntersectionObserver is not available.
  */

  if (!("IntersectionObserver" in window)) {

    animatedElements.forEach(element => {

      element.style.opacity = "1";

      element.style.transform =
        "translateY(0)";

    });

  } else {

    const observer =
      new IntersectionObserver(
        (entries, observerInstance) => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "is-visible"
              );

              observerInstance.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.1
        }
      );


    animatedElements.forEach(element => {

      element.classList.add(
        "reveal-item"
      );

      observer.observe(element);

    });

  }


  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  const navigationLinks =
    document.querySelectorAll(
      ".nav-link"
    );


  if (
    sections.length > 0 &&
    navigationLinks.length > 0
  ) {

    const sectionObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              const currentId =
                entry.target.getAttribute("id");


              navigationLinks.forEach(link => {

                link.classList.remove(
                  "active"
                );


                const linkTarget =
                  link.getAttribute("href");


                if (
                  linkTarget ===
                  `#${currentId}`
                ) {

                  link.classList.add(
                    "active"
                  );

                }

              });

            }

          });

        },
        {
          rootMargin:
            "-35% 0px -55% 0px",

          threshold: 0
        }
      );


    sections.forEach(section => {

      sectionObserver.observe(section);

    });

  }


  /* =======================================================
     RESUME LINK CHECK
  ======================================================= */

  const resumeLink =
    document.querySelector(
      'a[href*="maheshTestingResume"]'
    );


  if (resumeLink) {

    resumeLink.addEventListener(
      "click",
      () => {

        console.log(
          "Resume download requested."
        );

      }
    );

  }

});
