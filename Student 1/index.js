let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logospan = document.querySelectorAll(".lg");

      window.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
          logospan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.add("active");
            }, (idx + 1) * 400)
            
          });
        });

        setTimeout(() => {
          logospan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.remove("active");
              span.classList.add("fade")
            }, (idx + 1) * 50)
          });
        }, 3800);

        setTimeout(() => {
          intro.style.top = "-100vh"
        }, 4000);

        setTimeout(() => {
          location.href="/Student 2/index.html"
        }, 4800);
        
      });


      