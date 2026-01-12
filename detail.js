// Data Produk
const products = [
  {id:1, name:"Kaos Putih", price:75000, category:"kaos", img:"img/produk1.jpg", desc:"Kaos putih nyaman & stylish."},
  {id:2, name:"Hoodie Abu", price:150000, category:"hoodie", img:"img/produk2.jpg", desc:"Hoodie hangat trendi."},
  {id:3, name:"Jaket Denim", price:250000, category:"jaket", img:"img/produk3.jpg", desc:"Jaket denim klasik."}
];

// Render semua produk
function renderProduk(list) {
  const container = document.getElementById("produkGrid");
  if (!container) return;
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.name}" onclick="lihatDetail(${p.id})">
        <h3>${p.name}</h3>
        <p>Rp ${p.price.toLocaleString()}</p>
      </div>
    `;
  });
}

// Filtering
function filterKategori() {
  const val = document.getElementById("categoryFilter").value;
  if (val === "semua") renderProduk(products);
  else renderProduk(products.filter(p => p.category === val));
}

// Lihat detail produk
function lihatDetail(id) {
  localStorage.setItem("selectedProduct", id);
  window.location = "detail.html";
}

// Tampilkan detail
function renderDetail() {
  const id = localStorage.getItem("selectedProduct");
  const p = products.find(x => x.id == id);
  if (!p) return;

  document.getElementById("detailProduk").innerHTML = `
    <div class="detail-card">
      <img src="${p.img}" alt="${p.name}">
      <h2>${p.name}</h2>
      <p>${p.desc}</p>
      <p><strong>Rp ${p.price.toLocaleString()}</strong></p>
      <button onclick="alert('Ditambahkan ke keranjang!')">Tambah ke Keranjang</button>
    </div>
  `;
}

if (document.getElementById("detailProduk")) {
  renderDetail();
} else if (document.getElementById("produkGrid")) {
  renderProduk(products);
}
