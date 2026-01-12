const products = [
    { id: 1, name: "Kaos Oversize White", category: "atasan", price: "Rp 125.000", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" },
    { id: 2, name: "Jaket Denim Blue", category: "jaket", price: "Rp 350.000", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500" },
    { id: 3, name: "Celana Chino Khaki", category: "bawahan", price: "Rp 210.000", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500" }
];

function displayProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;
    
    container.innerHTML = "";
    products.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">${p.price}</p>
                <button class="btn" onclick="alert('Berhasil ditambah!')">Beli Sekarang</button>
            </div>`;
    });
}

window.onload = displayProducts;
