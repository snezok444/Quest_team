const WEBAPP_URL = "https://script.google.com/macros/s/ТВОЙ_ID/exec";

async function submitBooking(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const telegram = document.getElementById("telegram").value.trim();
  const time = document.getElementById("time").value;

  const url = `${WEBAPP_URL}?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&telegram=${encodeURIComponent(telegram)}&time=${encodeURIComponent(time)}`;

  try {
    const response = await fetch(url);
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





