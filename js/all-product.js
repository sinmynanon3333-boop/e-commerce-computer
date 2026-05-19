import { laptop, desktop, components } from "./data.js";
window.get_item = function (id) {
  window.location.href = `/product-detail.html?id=${id}`;
};
const laptop_section = document.getElementById("laptop");
const desktop_section = document.getElementById("desktop");
const components_section = document.getElementById("components");
for (let i = 0; i < laptop.length; i++) {
  laptop_section.innerHTML += ` <div
          class="col-6 col-lg-3"
          onclick="get_item(${laptop[i].id})"
        >
          <div class="product">
            <div class="img-wrap">
              <span class="badge-tag">Limited</span>
              <img src="${laptop[i].image}" alt="GPU" />
            </div>
            <div class="cat">id:${laptop[i].id}</div>
            <div class="name">${laptop[i].short_name}</div>
            <div class="price text-cyan">${laptop[i].price}$</div>
          </div>
        </div>
     `;
}
for (let i = 0; i < desktop.length; i++) {
  desktop_section.innerHTML += `
        <div
          class="col-6 col-lg-3"
          onclick="get_item(${desktop[i].id})"
        >
          <div class="product">
            <div class="img-wrap">
              <span class="badge-tag">Limited</span>
              <img src="${desktop[i].image}" alt="GPU" />
            </div>
            <div class="cat">id:${desktop[i].id}</div>
            <div class="name">${desktop[i].short_name}</div>
            <div class="price text-cyan">${desktop[i].price}$</div>
          </div>
        </div>`;
}
for (let i = 0; i < components.length; i++) {
  components_section.innerHTML += `<div
          class="col-6 col-lg-3"
          onclick="get_item(${components[i].id})"
        >
          <div class="product">
            <div class="img-wrap">
              <span class="badge-tag">Limited</span>
              <img src="${components[i].image}" alt="GPU" />
            </div>
            <div class="cat">id:${components[i].id}</div>
            <div class="name">${components[i].short_name}</div>
            <div class="price text-cyan">${components[i].price}$</div>
          </div>
        </div>`;
}
const params = new URLSearchParams(window.location.search);
  const get_id = Number(params.get("product"));