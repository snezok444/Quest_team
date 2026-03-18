// Адрес прокси Corsfix
const PROXY = "https://proxy.corsfix.com/?";

// Адрес твоего Google Apps Script Web App
const WEBAPP_URL = "https://script.google.com/macros/s/ТВОЙ_ID/exec";

async function submitBooking(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const telegram = document.getElementById("telegram").value.trim();
  const time = document.getElementById("time").value;

  // Формируем URL
  const targetUrl = `${WEBAPP_URL}?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&telegram=${encodeURIComponent(telegram)}&time=${encodeURIComponent(time)}`;

  try {
    // Запрос идёт через Corsfix
    const response = await fetch(PROXY + targetUrl);
    const result = await response.json();

    if (result.ok) {
      document.getElementById("bookingForm").style.display = "none";
      document.getElementById("status").innerText = "✅ Время успешно забронировано!";
    } else {
      document.getElementById("status").innerText = "⚠️ Ошибка: " + result.message;
    }
  } catch (err) {
    document.getElementById("status").innerText = "❌ Ошибка при отправке данных";
    console.error(err);
  }
}

<script>
document.querySelectorAll('.dropdown-date').forEach(date => {
  date.addEventListener('click', () => {
    const grid = date.nextElementSibling;
    grid.style.display = grid.style.display === 'grid' ? 'none' : 'grid';
  });
});
</script>
