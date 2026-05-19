import { laptop, desktop, components } from "./data.js";
const display_arrival = document.getElementById("new_arrival");
const list_products = [laptop, desktop, components];
export let get_id;
const ramdomed_list = () => {
  for (let i = 0; i < ramdomed.length; i++) {
    if (ramdomed[i] == old_index) {
      return true;
    }
    return false;
  }
};
window.get_item = function (id) {
  window.location.href = `/product-detail.html?id=${id}`;
};
let old_index = -1;
let ramdomed = [];
for (let i = 0; i < 8; i++) {
  let random_product_category = Math.floor(Math.random() * 3);
  let random_index;
  do {
    random_index = Math.floor(Math.random() * 12);
  } while (random_index === old_index || ramdomed.includes(random_index));
  old_index = random_index;
  ramdomed.push(old_index);
  let product = list_products[random_product_category];
  display_arrival.innerHTML += `
 <div class="col-6 col-lg-3" onclick="get_item(${product[random_index].id})">
      <div class="product">
        <div class="img-wrap">
          <span class="badge-tag">Limited</span>
          <img src="${product[random_index].image}" alt="GPU">
        </div>
        <div class="cat">id:${product[random_index].id}</div>
        <div class="name">${product[random_index].short_name}</div>
        <div class="price text-cyan">${product[random_index].price}$</div>
      </div>
    </div>
`;
}
