document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const day = params.get("day");
  const title = document.getElementById("day-title");

  if (day && title) {
    title.textContent = "شيت يوم " + day;
    loadEntries(day);
    document.getElementById("data-form").addEventListener("submit", e => {
      e.preventDefault();
      saveEntry(day);
    });
  }
});

function saveEntry(day) {
  const entry = {
    name: document.getElementById("clientName").value,
    phone: document.getElementById("phone").value,
    type: document.getElementById("type").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    price: document.getElementById("price").value,
    commission: document.getElementById("commission").value,
    status: document.getElementById("status").value,
  };

  let entries = JSON.parse(localStorage.getItem(day)) || [];
  entries.push(entry);
  localStorage.setItem(day, JSON.stringify(entries));
  loadEntries(day);
  document.getElementById("data-form").reset();
}

function loadEntries(day) {
  const entries = JSON.parse(localStorage.getItem(day)) || [];
  const container = document.getElementById("entries");
  container.innerHTML = "<h3>المعاينات</h3>";
  entries.forEach((e, i) => {
    container.innerHTML += `
      <div style="background:#fff3; padding:10px; margin:5px; border-radius:10px;">
        ${i+1}- ${e.name}, ${e.phone}, ${e.type}, ${e.date}, ${e.time}, ${e.price} جنيه, عمولة: ${e.commission}, الحالة: ${e.status}
      </div>`;
  });
}