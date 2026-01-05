const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwROhi0tc652Ev3a-p-IKzC4idCWbshYsMjXF-q3G6xfo32A_CED9lhpzpyX-Apos5k/exec";

async function submitBooking(event) {
  event.preventDefault(); // предотвращаем перезагрузку страницы

  // Получаем значения из формы
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const telegram = document.getElementById("telegram").value.trim();
  const time = document.getElementById("time").value;

  const url = $WEBAPP_URL?name=$encodeURIComponent(name)&phone=$encodeURIComponent(phone)&telegram=$encodeURIComponent(telegram)&time=$encodeURIComponent(time);

  try {
    // Отправляем запрос
    const response = await fetch(url);
    const result = await response.json();

    // Обрабатываем ответ
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





