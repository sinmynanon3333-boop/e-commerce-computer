import { hero_data } from "./data.js";
const track = document.querySelector(".slider-track");
const totalSlides = document.querySelectorAll(".slide").length;
let currentIndex = 0;
const container_top = document.querySelector(".top");
container_top.innerHTML = `<div class="container py-5 h-100 d-flex">
          <div class="row align-items-end w-100 g-4 py-5">
            <div class="col-lg-7">
              <span class="chip mb-4"
                ><span class="dot"></span> Featured Rig</span
              >
              <h1 class="mt-3 text-gradient">
                ${hero_data[currentIndex].name}<br /><span class="ghost"
                  >${hero_data[currentIndex].marketing}</span
                >
              </h1>
              <p class="text-muted2 mt-3" style="max-width: 480px">
              ${hero_data[currentIndex].description}
              </p>
              <div class="d-flex gap-3 mt-4">
                <a class="btn btn-cyan" href="/laptop-section.html" >Laptop</a>
                <a class="btn btn-ghost" href="/workstation-section.html" >Desktop</a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="spec-card ms-lg-auto" style="max-width: 340px">
                <div class="row g-0">
                  <div><span class="lbl">GPU</span><span>${hero_data[currentIndex].gpu}</span></div>
                  <div>
                    <span class="lbl">Display</span><span>${hero_data[currentIndex].display}</span>
                  </div>
                  <div>
                    <span class="lbl">Storage</span><span>${hero_data[currentIndex].Storage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  track.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
  container_top.innerHTML = `<div class="container py-5 h-100 d-flex">
          <div class="row align-items-end w-100 g-4 py-5">
            <div class="col-lg-7">
              <span class="chip mb-4"
                ><span class="dot"></span> Featured Rig</span
              >
              <h1 class="mt-3 text-gradient">
                ${hero_data[currentIndex].name}<br /><span class="ghost"
                  >${hero_data[currentIndex].marketing}</span
                >
              </h1>
              <p class="text-muted2 mt-3" style="max-width: 480px">
              ${hero_data[currentIndex].description}
              </p>
              <div class="d-flex gap-3 mt-4">
                <a class="btn btn-cyan" href="/laptop-section.html">Laptop</a>
                <a class="btn btn-ghost"  href="/workstation-section.html">Desktop</a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="spec-card ms-lg-auto" style="max-width: 340px">
                <div class="row g-0">
                  <div><span class="lbl">GPU</span><span>${hero_data[currentIndex].gpu}</span></div>
                  <div>
                    <span class="lbl">Display</span><span>${hero_data[currentIndex].display}</span>
                  </div>
                  <div>
                    <span class="lbl">Storage</span><span>${hero_data[currentIndex].Storage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
}, 3000);
