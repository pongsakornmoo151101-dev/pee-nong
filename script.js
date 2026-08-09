let cart = [];
function addToCart(name, price) { cart.push({ name, price }); updateCart(); alert("เพิ่ม " + name + " ลงในตะกร้าแล้ว"); }
function updateCart() { const count = document.getElementById("cartCount"), items = document.getElementById("cartItems"), total = document.getElementById("cartTotal"); if (count) count.textContent = cart.length; if (!items || !total) return; if (cart.length === 0) { items.innerHTML = "ยังไม่มีสินค้า"; total.textContent = "0"; return } let sum = 0; items.innerHTML = ""; cart.forEach((item, index) => { sum += item.price; items.innerHTML += `<div class="cart-item">${item.name} - ฿${item.price} <button onclick="removeItem(${index})">ลบ</button></div>` }); total.textContent = sum }
function removeItem(index) { cart.splice(index, 1); updateCart() }
function showCart() { const box = document.getElementById("cartBox"); if (box) box.style.display = "block" }
function closeCart() { const box = document.getElementById("cartBox"); if (box) box.style.display = "none" }
function checkout() { if (cart.length === 0) { alert("กรุณาเลือกสินค้าก่อนสั่งซื้อ"); return } alert("รับคำสั่งซื้อเรียบร้อยแล้ว! ร้านจะติดต่อกลับเพื่อยืนยันออเดอร์"); cart = []; updateCart(); closeCart() }
function submitOrder(event) { event.preventDefault(); const name = document.getElementById("customerName").value; alert("ขอบคุณคุณ " + name + " ทางร้านได้รับข้อมูลแล้ว"); event.target.reset() }
function createEmojiStars() {
    const container = document.querySelector(".stars-container");
    const numStars = 10;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.textContent = "⭐";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDelay = (Math.random() * 3) + "s"; // สลับช่วงเวลา
        container.appendChild(star);
    }
}

window.onload = createEmojiStars;
document.addEventListener("mousemove", function(event) {

    const element = document.querySelector(".mouse-tilt");

    if (!element) return;

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const rotateY = (mouseX - x) / 40;
    const rotateX = (y - mouseY) / 40;

    element.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
});
document.addEventListener("mousemove", function (event) {

    const page = document.getElementById("page");

    if (!page) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const rotateY = (mouseX - centerX) / 100;
    const rotateX = (centerY - mouseY) / 100;

    page.style.transform =
        `perspective(1500px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
});