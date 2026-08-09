
const products = [
  {
    id: 1,
    name: "ขนมปังเคลือบคาราเมล",
    emoji: "🍞",
    price: 35,
    tag: "เมนูแนะนำของร้าน",
    badge: "ขายดี",
    badgeType: "best",
    short: "หนุบหนับ หอมเนยและคาราเมล",
    desc: "ขนมปัง หอมเนยและคาราเมล เนื้อหนึบ เหมาะสำหรับรับประทานคู่กับกาแฟ นม หรือชา",
    features: [
      "ทำสดใหม่จากทางร้าน",
      "รสชาติหวานอร่อย",
      "เหมาะสำหรับรับประทานเล่น",
      "ราคา 35 บาท"
    ]
  },
  {
    id: 2,
    name: "คุกกี้ช็อกโกแลตชิพ",
    emoji: "🍪",
    price: 30,
    tag: "ของหวานตัวใหม่",
    badge: "ใหม่",
    badgeType: "new",
    short: "กรอบนอก นุ่มใน ช็อกโกแลตเต็มคำ",
    desc: "คุกกี้โฮมเมดอบใหม่ทุกวัน กรอบขอบนอก นุ่มตรงกลาง อัดแน่นด้วยช็อกโกแลตชิพเกรดพรีเมียม",
    features: [
      "อบสดใหม่ทุกเช้า",
      "ช็อกโกแลตชิพแท้ 100%",
      "เก็บได้นาน 5 วัน",
      "ราคา 30 บาท"
    ]
  },
  {
    id: 3,
    name: "มัฟฟินบลูเบอร์รี่",
    emoji: "🧁",
    price: 40,
    tag: "เมนูสุดคุ้ม",
    short: "ฟู นุ่ม เต็มไปด้วยบลูเบอร์รี่",
    desc: "มัฟฟินเนื้อฟูนุ่ม อบพร้อมบลูเบอร์รี่สดเม็ดโต หอมกลิ่นเนยอ่อน ๆ ทานเป็นมื้อเช้าได้สบาย",
    features: [
      "ใส่บลูเบอร์รี่สดจริง",
      "เนื้อฟูเบา ไม่หวานเลี่ยน",
      "เหมาะทานคู่กาแฟยามเช้า",
      "ราคา 40 บาท"
    ]
  },
  {
    id: 4,
    name: "โดนัทน้ำตาล",
    emoji: "🍩",
    price: 25,
    tag: "เมนูยอดฮิต",
    short: "นุ่มหนึบ คลุกน้ำตาลหอมหวาน",
    desc: "โดนัทเนื้อนุ่มหนึบ ทอดใหม่ทุกวัน คลุกน้ำตาลบาง ๆ พอดีคำ หวานกำลังดี",
    features: [
      "ทอดใหม่ทุกวัน",
      "เนื้อนุ่มหนึบไม่อมน้ำมัน",
      "คลุกน้ำตาลสูตรพิเศษ",
      "ราคา 25 บาท"
    ]
  },
  {
    id: 5,
    name: "ครัวซองต์เนยสด",
    emoji: "🥐",
    price: 45,
    tag: "พรีเมียมจากเตาอบ",
    short: "ชั้นกรอบร่วน หอมเนยแท้",
    desc: "ครัวซองต์อบใหม่ทุกวัน ตีชั้นแป้งด้วยเนยแท้ กรอบร่วนด้านนอก นุ่มหอมด้านใน",
    features: [
      "ใช้เนยแท้ล้วน",
      "อบใหม่ทุกเช้า",
      "ชั้นแป้งกรอบร่วน 27 ชั้น",
      "ราคา 45 บาท"
    ]
  },
  {
    id: 6,
    name: "พายแอปเปิ้ล",
    emoji: "🥧",
    price: 38,
    tag: "เมนูตามฤดูกาล",
    short: "แป้งกรอบ ไส้แอปเปิ้ลอบอบอุ่น",
    desc: "พายแป้งกรอบชั้นบาง สอดไส้แอปเปิ้ลตุ๋นอบเชยหอมหวาน อุ่นเสิร์ฟอร่อยที่สุด",
    features: [
      "ไส้แอปเปิ้ลตุ๋นสูตรโฮมเมด",
      "แป้งกรอบหลายชั้น",
      "โรยอบเชยหอมกรุ่น",
      "ราคา 38 บาท"
    ]
  }
];


let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  bounceCartIcon();
  showToast("เพิ่ม " + name + " ลงตะกร้าแล้ว 🧁");
}

function updateCart() {
  const count = document.getElementById("cartCount"),
        items = document.getElementById("cartItems"),
        total = document.getElementById("cartTotal");
  if (count) count.textContent = cart.length;
  if (!items || !total) return;
  if (cart.length === 0) {
    items.innerHTML = "ยังไม่มีสินค้า";
    total.textContent = "0";
    return;
  }
  let sum = 0;
  items.innerHTML = "";
  cart.forEach((item, index) => {
    sum += item.price;
    items.innerHTML += `<div class="cart-item">${item.name} - ฿${item.price} <button onclick="removeItem(${index})">ลบ</button></div>`;
  });
  total.textContent = sum;
}

function bounceCartIcon() {
  const count = document.getElementById("cartCount");
  if (!count) return;
  count.classList.remove("cart-pop");
  void count.offsetWidth; // restart animation
  count.classList.add("cart-pop");
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function showCart() {
  const box = document.getElementById("cartBox");
  if (box) box.style.display = "block";
}

function closeCart() {
  const box = document.getElementById("cartBox");
  if (box) box.style.display = "none";
}

function checkout() {
  if (cart.length === 0) {
    showToast("กรุณาเลือกสินค้าก่อนสั่งซื้อ 🥺");
    return;
  }
  showToast("รับคำสั่งซื้อเรียบร้อยแล้ว! ร้านจะติดต่อกลับเพื่อยืนยันออเดอร์ 🎉");
  cart = [];
  updateCart();
  closeCart();
}

function submitOrder(event) {
  event.preventDefault();
  const name = document.getElementById("customerName").value;
  showToast("ขอบคุณคุณ " + name + " ทางร้านได้รับข้อมูลแล้ว 💌");
  event.target.reset();
}


function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}


function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = products.map(p => `
    <div class="product-card">
      ${p.badge ? `<span class="badge badge-${p.badgeType}">${p.badge}</span>` : ""}
      <div class="product-img">${p.emoji}</div>
      <h3>${p.name}</h3>
      <p>${p.short}</p>
      <strong>฿${p.price}</strong>
      <div class="card-buttons">
        <a class="detail-btn" href="detail.html?id=${p.id}">ดูรายละเอียด</a>
        <button class="add-to-cart-btn" data-id="${p.id}">เพิ่มลงตะกร้า</button>
      </div>
    </div>
  `).join("");
}


function renderDetail() {
  const container = document.getElementById("detailPage");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10) || 1;
  const p = products.find(x => x.id === id) || products[0];

  container.innerHTML = `
    <div class="detail-image">${p.emoji}</div>
    <div class="detail-info">
      <p class="tag">${p.tag}</p>
      <h2>${p.name}</h2>
      <div class="price">฿${p.price}</div>
      <p>${p.desc}</p>
      <h3>รายละเอียดสินค้า</h3>
      <ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
      <div class="detail-buttons">
        <button class="add-to-cart-btn" data-id="${p.id}">🛒 เพิ่มลงตะกร้า</button>
        <a href="index.html">← กลับหน้าแรก</a>
      </div>
    </div>
  `;
}

 
function createEmojiStars() {
  const container = document.querySelector(".stars-container");
  if (!container) return;
  const numStars = 10;
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.textContent = "⭐";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDelay = (Math.random() * 3) + "s";
    container.appendChild(star);
  }
}

// ============ ADD-TO-CART DELEGATION ============
document.addEventListener("click", function (event) {
  const btn = event.target.closest(".add-to-cart-btn");
  if (!btn) return;
  const id = parseInt(btn.dataset.id, 10);
  const product = products.find(p => p.id === id);
  if (product) addToCart(product.name, product.price);
});

// ============ INIT ============
window.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderDetail();
  updateCart();
  createEmojiStars();
});
