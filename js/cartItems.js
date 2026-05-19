const table = document.getElementById("table_show");
let items = JSON.parse(localStorage.getItem("user_cart"));
const show_sum = document.querySelector(".summary");
function remove(id) {
  for (let i = 0; i < items.length; i++) {
    if (id === items[i].id) {
      items.splice(i, 1);
      table.innerHTML = "";
      sum_items = [];
      show_items();
      show_sum.innerHTML = "";
      summary(sum_items);
      save_json(items);
    }
  }
}
const summary = (total, discount = 0.1) => {
  let sum = 0;
  if (total === undefined) {
    console.log("what");
  } else {
    for (let i = 0; i < total.length; i++) {
      sum += total[i];
    }
    show_sum.innerHTML += ` <h3>Order_Summary</h3>
            <div class="sum-row">
              <span>Subtotal</span><span class="val">${sum}$</span>
            </div>
            <div class="sum-row">
              <span>Shipping (Express)</span><span class="free">Free</span>
            </div>
            <div class="sum-row">
              <span>Estimated Tax</span><span class="val">${discount * 100}%</span>
            </div>
            <div class="divider"></div>
            <div class="total-row mb-3">
              <span class="lbl">Total-Cost:</span>
              <span class="amt">${sum + sum * 0.1}$</span>
            </div>
            <button class="btn-cyan mb-2" onclick="buy()">Order now</button>
           `;
  }
};
function buy() {
  localStorage.removeItem("user_cart");
  if (items == null) {
    alert("Please select one item");
  } else {
    window.location.href = "/order-confirmed.html";
  }
}
if (items !== null) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].count === undefined) {
      items[i].count = 1;
    }
  }

  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      const { count: c1, ...a } = items[i];
      const { count: c2, ...b } = items[j];
      if (JSON.stringify(a) === JSON.stringify(b)) {
        items[i].count++;
        items.splice(j, 1);
        j--;
      }
    }
  }
} else {
  table.innerHTML = `<div class="cart-card mb-3">
  <h4 class="text-center ">No items </h4>
  </div>`;
  summary((sum = 0));
}

const save_json = (item) => {
  let json_updated = [];
  for (let i = 0; i < item.length; i++) {
    json_updated.push(item[i]);
  }
  localStorage.removeItem("user_cart");
  localStorage.setItem("user_cart", JSON.stringify(json_updated));
};
let sum_items = [];
const show_items = () => {
  for (let i = 0; i < items.length; i++) {
    table.innerHTML += `
<div class="cart-card mb-3">
        <div class="row g-3 align-items-center">
          <div class="col-3 col-md-2">
            <img class="thumb" src="${items[i].image}" alt="GPU">
          </div>
          <div class="col-9 col-md-7">
            <h3 class="item-title">${items[i].short_name}</h3>
            <div class="sn">${items[i].description.substring(0, 50)}</div>
            <div class="mt-2 mb-3">
              <span class="tag">24GB VRAM</span>
              <span class="tag">Liquid Cooled</span>
            </div>
            <div class="d-flex align-items-center gap-3">
              <div class="qty">
                <button onclick="minus_item(${items[i].id})">−</button>
                <span class="val">${items[i].count}</span>
                <button onclick="plue_item(${items[i].id})">+</button>
              </div>
              <button class="remove-btn ms-auto d-md-none""><i class="bi bi-trash3 me-1"></i>Remove</button>
            </div>
          </div>
          <div class="col-md-3 text-md-end">
            <div class="price-lg">$${items[i].price}</div>
            <button class="remove-btn d-none d-md-inline-block mt-2"  onclick="remove(${items[i].id})"><i class="bi bi-trash3 me-1"></i>Remove</button>
          </div>
        </div>
      </div>`;
    sum_items.push(items[i].price * items[i].count);
  }
};
const plue_item = (id) => {
  for (let i = 0; i < items.length; i++) {
    if (id === items[i].id) {
      items[i].count++;
      table.innerHTML = "";
      sum_items = [];
      show_items();
      show_sum.innerHTML = "";
      summary(sum_items);
      save_json(items);
    }
  }
};
const minus_item = (id) => {
  for (let i = 0; i < items.length; i++) {
    if (id === items[i].id) {
      items[i].count--;
      if (items[i].count == 0) {
        items.splice(i, 1);
      }
      table.innerHTML = "";
      sum_items = [];
      show_items();
      show_sum.innerHTML = "";
      summary(sum_items);
      save_json(items);
    }
  }
};
show_items();
summary(sum_items);
const to_buy = document.getElementById("buy");
