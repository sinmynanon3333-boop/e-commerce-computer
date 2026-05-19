import {
  desktop,
  components,
  laptop,
  hero_data,
  desktop_hero,
  laptop_hero,
} from "./data.js";
window.to_cart = function (id) {
  add_to_cart(id);
  window.location.href = "/cart-checkout.html";
};
window.add_to_cart = function (get_id) {
  let cart_arr = [];
  if (get_id > 35) {
    if (get_id >= 36 && get_id <= 38) {
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
    z-index:9999999;
    `;
  document.body.prepend(alert);
  alert.innerHTML = ` <i class="bi bi-cart-check text-success fs-3 " c></i> 
  <p class=" text-center d-block my-auto">items added to the cart</p>`;
  setTimeout(() => {
    alert.remove();
  }, 2000);
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const get_id = Number(params.get("id"));
  const show_product = document.querySelector(".how");
  if (get_id > 35) {
    if (get_id == 36 && get_id <= 38) {
      for (let i = 0; i < hero_data.length; i++) {
        if (get_id == hero_data[i].id) {
          show_product.innerHTML = `
         <div class="col-lg-7 ">
          <div class="main-img mb-3">
            <img src="${hero_data[i].image}" alt="Acer Nitro V" />
          </div>
          </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center gap-3 mb-2">
            <span class="tag-new">New Arrival</span>
            <span class="model">Model: <b>ANV15-51-71</b></span>
          </div>
          <h1 class="title">${hero_data[i].name}</h1>
          <p class="subtitle">
            ${hero_data[i].description}
          </p>

          <div class="d-flex flex-wrap gap-2 my-4">
            <span class="pill"><i class="bi bi-gpu-card"></i> RTX</span>
            <span class="pill"
              ><i class="bi bi-display"></i>Display</span
            >
            <span class="pill"><i class="bi bi-cpu"></i> Intel</span>
          </div>

          <div class="my-4">
            <span class="price">$${hero_data[i].price}</span>
            <span class="price-old">$${hero_data[i].price + 300}</span>
          </div>

          <div class="d-grid gap-2">
            <button class="btn-cyan" onclick="add_to_cart(${hero_data[i].id})">
              <i class="bi bi-cart"></i> &nbsp; Add to Cart
            </button>
            <button class="btn-ghost" onclick="to_cart(${hero_data[i].id})">Buy Now</button>
          </div>
        </div>`;
        }
      }
    } else if (get_id >= 39 && get_id <= 41) {
      for (let i = 0; i < desktop_hero.length; i++) {
        if (get_id == desktop_hero[i].id) {
          show_product.innerHTML = `
         <div class="col-lg-7 ">
          <div class="main-img mb-3">
            <img src="${desktop_hero[i].image}" alt="Acer Nitro V" />
          </div>
          </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center gap-3 mb-2">
            <span class="tag-new">New Arrival</span>
            <span class="model">Model: <b>ANV15-51-71</b></span>
          </div>
          <h1 class="title">${desktop_hero[i].name}</h1>
          <p class="subtitle">
            ${desktop_hero[i].description}
          </p>

          <div class="d-flex flex-wrap gap-2 my-4">
            <span class="pill"><i class="bi bi-gpu-card"></i> RTX </span>
            <span class="pill"
              ><i class="bi bi-display"></i>Display</span
            >
            <span class="pill"><i class="bi bi-cpu"></i> Intel</span>
          </div>

          <div class="my-4">
            <span class="price">$${desktop_hero[i].price}</span>
            <span class="price-old">$${desktop_hero[i].price + 300}</span>
          </div>

          <div class="d-grid gap-2">
            <button class="btn-cyan" onclick="add_to_cart(${desktop_hero[i].id})">
              <i class="bi bi-cart"></i> &nbsp; Add to Cart
            </button>
            <button class="btn-ghost" onclick="to_cart(${
              desktop_hero[i].id
            })">Buy Now</button>
          </div>
        </div>`;
        }
      }
    } else {
      for (let i = 0; i < laptop_hero.length; i++) {
        if (get_id == laptop_hero[i].id) {
          show_product.innerHTML = `
         <div class="col-lg-7 ">
          <div class="main-img mb-3">
            <img src="${laptop_hero[i].image}" alt="Acer Nitro V" />
          </div>
          </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center gap-3 mb-2">
            <span class="tag-new">New Arrival</span>
            <span class="model">Model: <b>ANV15-51-71</b></span>
          </div>
          <h1 class="title">${laptop_hero[i].name}</h1>
          <p class="subtitle">
            ${laptop_hero[i].description}
          </p>

          <div class="d-flex flex-wrap gap-2 my-4">
            <span class="pill"><i class="bi bi-gpu-card"></i> RTX</span>
            <span class="pill"
              ><i class="bi bi-display"></i> Display</span
            >
            <span class="pill"><i class="bi bi-cpu"></i> Intel</span>
          </div>

          <div class="my-4">
            <span class="price">$${laptop_hero[i].price}</span>
            <span class="price-old">$${laptop_hero[i].price + 200}</span>
          </div>

          <div class="d-grid gap-2">
            <button class="btn-cyan" onclick="add_to_cart(${laptop_hero[i].id})">
              <i class="bi bi-cart"></i> &nbsp; Add to Cart
            </button>
            <button class="btn-ghost" onclick="to_cart(${laptop_hero[i].id})">Buy Now</button>
          </div>
        </div>`;
        }
      }
    }
  } else if (get_id >= 12 && get_id <= 23) {
    for (let i = 0; i < desktop.length; i++) {
      if (get_id === desktop[i].id) {
        show_product.innerHTML = `
         <div class="col-lg-7 ">
          <div class="main-img mb-3">
            <img src="${desktop[i].image}" alt="Acer Nitro V" />
          </div>
          </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center gap-3 mb-2">
            <span class="tag-new">New Arrival</span>
            <span class="model">Model: <b>ANV15-51-71</b></span>
          </div>
          <h1 class="title">${desktop[i].title}</h1>
          <p class="subtitle">
            ${desktop[i].description}
          </p>

          <div class="d-flex flex-wrap gap-2 my-4">
            <span class="pill"><i class="bi bi-gpu-card"></i> RTX</span>
            <span class="pill"
              ><i class="bi bi-display"></i>Display</span
            >
            <span class="pill"><i class="bi bi-cpu"></i> Intel </span>
          </div>

          <div class="my-4">
            <span class="price">$${desktop[i].price}</span>
            <span class="price-old">$${desktop[i].price + 200}</span>
          </div>

          <div class="d-grid gap-2">
            <button class="btn-cyan" onclick="add_to_cart(${desktop[i].id})">
              <i class="bi bi-cart"></i> &nbsp; Add to Cart
            </button>
            <button class="btn-ghost" onclick="to_cart(${desktop[i].id})">Buy Now</button>
          </div>
        </div>`;
      }
    }
  } else if (get_id >= 24) {
    for (let i = 0; i < components.length; i++) {
      if (get_id === components[i].id) {
        show_product.innerHTML = `
          <div class="col-lg-7 ">
          <div class="main-img mb-3">
            <img src="${components[i].image}" alt="Acer Nitro V" />
          </div>
          </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center gap-3 mb-2">
            <span class="tag-new">New Arrival</span>
            <span class="model">Model: <b>ANV15-51-71</b></span>
          </div>
          <h1 class="title">${components[i].title}</h1>
          <p class="subtitle">
           ${components[i].title}
          </p>

          <div class="d-flex flex-wrap gap-2 my-4">
            <span class="pill"><i class="bi bi-gpu-card"></i> RTX</span>
            <span class="pill"
              ><i class="bi bi-display"></i>Display</span
            >
            <span class="pill"><i class="bi bi-cpu"></i> Intel</span>
          </div>

          <div class="my-4">
            <span class="price">$${components[i].price}</span>
            <span class="price-old">$${components[i].price + 200}</span>
          </div>

          <div class="d-grid gap-2">
            <button class="btn-cyan" onclick="add_to_cart(${components[i].id})">
              <i class="bi bi-cart"></i> &nbsp; Add to Cart
            </button>
            <button class="btn-ghost" onclick="to_cart(${components[i].id})">Buy Now</button>
          </div>
        </div>`;
      }
    }
  } else {
    for (let i = 0; i < laptop.length; i++) {
      if (get_id == laptop[i].id) {
        show_product.innerHTML = `
          <div class="col-lg-7 ">
          <div class="main-img mb-3">
            <img src="${laptop[i].image}" alt="Acer Nitro V" />
          </div>
          </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center gap-3 mb-2">
            <span class="tag-new">New Arrival</span>
            <span class="model">Model: <b>ANV15-51-71</b></span>
          </div>
          <h1 class="title">${laptop[i].title}</h1>
          <p class="subtitle">
           ${laptop[i].description}
          </p>

          <div class="d-flex flex-wrap gap-2 my-4">
            <span class="pill"><i class="bi bi-gpu-card"></i> RTX </span>
            <span class="pill"
              ><i class="bi bi-display"></i>Display</span
            >
            <span class="pill"><i class="bi bi-cpu"></i> Intel</span>
          </div>

          <div class="my-4">
            <span class="price">$${laptop[i].price}</span>
            <span class="price-old">$${laptop[i].price + 100}</span>
          </div>

          <div class="d-grid gap-2">
            <button class="btn-cyan" onclick="add_to_cart(${laptop[i].id})">
              <i class="bi bi-cart"></i> &nbsp; Add to Cart
            </button>
            <button class="btn-ghost" onclick="to_cart(${laptop[i].id})">Buy Now</button>
          </div>
        </div>`;
      }
    }
  }
});
