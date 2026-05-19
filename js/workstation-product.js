import { components, desktop, desktop_hero } from "./data.js";
const display_arrival = document.getElementById("product");
export let get_id;
window.add_to_cart = function (get_id) {
  let cart_arr = [];
  if (get_id > 35) {
    if (get_id >= 36 && get_id <= 32) {
      for (let i = 0; i < hero_data.length; i++) {
        if (get_id == hero_data[i].id) {
          cart_arr.push(hero_data[i]);
        }
      }
    } else if (get_id >= 39 && get_id <= 41) {
      for (let i = 0; i < desktop_hero.length; i++) {
        if (get_id == desktop_hero[i].id) {
          cart_arr.push(desktop_hero[i]);
        }
      }
    } else {
      for (let i = 0; i < laptop_hero.length; i++) {
        if (get_id == laptop_hero[i].id) {
          cart_arr.push(laptop_hero[i]);
        }
      }
    }
  } else if (get_id <= 11) {
    for (let i = 0; i < laptop.length; i++) {
      if (get_id == laptop[i].id) {
        cart_arr.push(laptop[i]);
      }
    }
  } else if (get_id >= 12 && get_id <= 23) {
    for (let i = 0; i < desktop.length; i++) {
      if (get_id == desktop[i].id) {
        cart_arr.push(desktop[i]);
      }
    }
  } else {
    for (let i = 0; i < components.length; i++) {
      if (get_id == components[i].id) {
        cart_arr.push(components[i]);
      }
    }
  }
  if (localStorage.getItem("user_cart") != null) {
    const arr = JSON.parse(localStorage.getItem("user_cart"));
    arr.forEach((ar) => cart_arr.push(ar));
    localStorage.removeItem("user_cart");
  }
  localStorage.setItem("user_cart", JSON.stringify(cart_arr));
  const alert = document.createElement("div");
  alert.style.cssText = ` position: fixed; top:20px; right: 20px;
    display:flex;
    gap:15px;
    background:#0a0e12; ; color: white;
    border:2px  green solid; border-radius: 8px;
    padding :10px 0px;
    padding-right:10px;
    padding-left:10px;
    z-index:99999;
    `;
  document.body.prepend(alert);
  alert.innerHTML = ` <i class="bi bi-cart-check text-success fs-3 " c></i> 
  <p class=" text-center d-block my-auto">items added to the cart</p>`;
  setTimeout(() => {
    alert.remove();
  }, 2000);
};
window.get_item = function (id) {
  window.location.href = `/product-detail.html?id=${id}`;
};

const product = [desktop, components];
let old_index = -1;
let ramdomed = [];
for (let i = 0; i < 8; i++) {
  let random_index;
  let ramdom_product = Math.floor(Math.random() * 2);
  let chose_product = product[ramdom_product];
  
  do {
    random_index = Math.floor(Math.random() * 12);
  } while (random_index === old_index || ramdomed.includes(random_index));
  old_index = random_index;
  ramdomed.push(old_index);
  display_arrival.innerHTML += `
 <div class="col-6 col-lg-3" id="what" onclick="get_item(${chose_product[random_index].id})">
        <div class="product">
          <div class="img-wrap">
            <span class="badge-tag">New</span>
            <img src="${chose_product[random_index].image}" alt="">
          </div>
          <div class="cat">id:${chose_product[random_index].id}</div>
          <div class="name">${chose_product[random_index].short_name}</div>
          <div class="price text-cyan">${chose_product[random_index].price}$</div>
        </div>
      </div>
`;
}
// hero section
const change_hero = document.getElementById("hero_product");
let currentIndex = 0;
change_hero.innerHTML = `<div class="col-lg-6">
            <span class="chip mb-4"
              ><span class="dot"></span> Enterprise Tier</span
            >
            <h1 class="mt-3 text-gradient">
              ${desktop_hero[currentIndex].name}<span class="ghost">${desktop_hero[currentIndex].marketing}</span>
            </h1>
            <p class="text-muted2 mt-3" style="max-width: 460px">
             ${desktop_hero[currentIndex].description}
            </p>

            <div class="row g-2 mt-3" style="max-width: 460px">
              <div class="col-6">
                <div class="spec-pill">
                  <span class="lbl">CPU</span><span>${desktop_hero[currentIndex].spec.cpu}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="spec-pill">
                  <span class="lbl">GPU</span><span>${desktop_hero[currentIndex].spec.gpu}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="spec-pill">
                  <span class="lbl">RAM</span><span>${desktop_hero[currentIndex].spec.ram}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="spec-pill">
                  <span class="lbl">Storage</span><span>${desktop_hero[currentIndex].spec.storage}</span>
                </div>
              </div>
            </div>

            <div class="d-flex gap-3 mt-4">
              <button class="btn btn-cyan" onclick="add_to_cart(${desktop_hero[currentIndex].id})">Add to Cart</button>
              <button class="btn btn-ghost" onclick="get_item(${desktop_hero[currentIndex].id})">View Specs</button>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <img
              src="${desktop_hero[currentIndex].image}"
              alt="Featured workstation"
              class="ws-img "
              height="450px"
            />
          </div>`;
setInterval(() => {
  change_hero.style.transition = "opacity 0.5s ease-out";
  change_hero.style.opacity = "0";
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % desktop_hero.length;
    change_hero.innerHTML = `<div class="col-lg-6" ')>
            <span class="chip mb-4"
              ><span class="dot"></span> Enterprise Tier</span
            >
            <h1 class="mt-3 text-gradient">
              ${desktop_hero[currentIndex].name}<span class="ghost">${desktop_hero[currentIndex].marketing}</span>
            </h1>
            <p class="text-muted2 mt-3" style="max-width: 460px">
             ${desktop_hero[currentIndex].description}
            </p>
            <div class="row g-2 mt-3" style="max-width: 460px">
              <div class="col-6">
                <div class="spec-pill">
                  <span class="lbl">CPU</span><span>${desktop_hero[currentIndex].spec.cpu}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="spec-pill">
                  <span class="lbl">GPU</span><span>${desktop_hero[currentIndex].spec.gpu}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="spec-pill">
                  <span class="lbl">RAM</span><span>${desktop_hero[currentIndex].spec.ram}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="spec-pill">
                  <span class="lbl">Storage</span><span>${desktop_hero[currentIndex].spec.storage}</span>
                </div>
              </div>
            </div>

            <div class="d-flex gap-3 mt-4">
              <button class="btn btn-cyan" onclick="add_to_cart(${desktop_hero[currentIndex].id})">Add to Cart</button>
              <button class="btn btn-ghost" onclick="get_item(${desktop_hero[currentIndex].id})">View Specs</button>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <img
              src="${desktop_hero[currentIndex].image}"
              alt="Featured workstation"
              class="ws-img "
              height="450px"
            />
          </div>`;
    change_hero.style.opacity = "1";
    change_hero.style.transition = "opacity 0.5s ease-in-out";
  }, 1000);
}, 4000);
