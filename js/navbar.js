const nav = document.querySelector("nav");
const url_loc = window.location.href;
nav.style.cssText = `position: sticky;
  top: 0;
  z-index: 999;
  @media (max-width: 575.98px) {
    
}
  `;
const Home_page = () => {
  window.location.href = "index.html";
};
// nav.innerHTML = ` <div class="container d-flex align-items-center">
//     <span class="brand" onclick="Home_page()">How2berich</span>
//     <div class="d-none d-md-flex gap-4 mx-auto">
//       <a href="index.html"  id='home'>Home</a>
//       <a href="workstation-section.html" id='workstation-section.html' >Workstations</a>
//       <a href="laptop-section.html" id='laptop-section.html'>Laptops</a>
//       <a href="product-page.html" id='product-page.html'>All products</a>
//     </div>
//     <div class="ms-auto d-flex gap-3">
//       <a href="#"><i class="bi bi-search"></i></a>
//       <a href="cart-checkout.html"><i class="bi bi-bag"></i></a>
//     </div>
//   </div>`;
nav.innerHTML = `<div class="container d-flex align-items-center">
    <span class="brand" onclick="Home_page()">How2berich</span>

    <!-- Desktop links -->
    <div class="d-none d-md-flex gap-4 mx-auto">
      <a href="index.html" id="home">Home</a>
      <a href="workstation-section.html" id="workstation-section.html">Workstations</a>
      <a href="laptop-section.html" id="laptop-section.html">Laptops</a>
      <a href="product-page.html" id="product-page.html">All products</a>
    </div>

    <div class="ms-auto d-flex gap-3 align-items-center">
      <a href="cart-checkout.html"><i class="bi bi-bag"></i></a>
      <!-- Hamburger: only on mobile -->
      <button class="d-md-none btn p-0 border-0 bg-transparent fs-4 text-white"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileNav"
        aria-controls="mobileNav">
        <i class="bi bi-list" ></i>
      </button>
    </div>
  </div>

  <!-- Offcanvas mobile menu -->
  <div class="offcanvas offcanvas-end w-50 vh-100" tabindex="-1" id="mobileNav" aria-labelledby="mobileNavLabel" style="z-index:99999">
    <div class="offcanvas-header text-white" style="background-color:#0a0e12">
      <h5 class="offcanvas-title" id="mobileNavLabel">How2berich</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column gap-3 " style="background-color:#0a0e12">
      <a href="index.html" id="mob-home">Home</a>
      <a href="workstation-section.html" id="mob-workstation-section.html">Workstations</a>
      <a href="laptop-section.html" id="mob-laptop-section.html">Laptops</a>
      <a href="product-page.html" id="mob-product-page.html">All products</a>
    </div>
  </div>`;
const a_tag = document.querySelectorAll("nav a");
a_tag.forEach((a) => {
  if (a.href == url_loc) {
    a.setAttribute("class", "text-cyan");
  }
});
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.href;
    document.body.style.transition = "opacity 0.2s";
    document.body.style.opacity = "0";
    setTimeout(() => (window.location.href = href), 200);
  });
});
const btn_home = document.querySelector(".brand");
btn_home.addEventListener("mouseover", () => {
  btn_home.style.cursor = "pointer";
});
