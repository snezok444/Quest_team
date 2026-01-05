const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbz0xcZ6xtFZOXm5miAVOfkWJLtkWoqN6B20ux-bp783NlRhMTNbqbafgsK0yluUZZyQ/exec";
// твоя ссылка

async function submitBooking(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const telegram = document.getElementById("telegram").value.trim();
  const time = document.getElementById("time").value;

  if (!name !telephone !telegram !time) {
    document.getElementById("status").innerText = "Заполните все поля!";
    return;
  }

  const url = ${WEBAPP_URL}?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&telegram=${encodeURIComponent(telegram)}&time=${encodeURIComponent(time)};

  try {
    const response = await fetch(url);
    const result = await response.json();

    if (result.ok) {
      // Скрываем форму
      document.getElementById("bookingForm").style.display = "none";
      // Показываем сообщение
      document.getElementById("status").innerText = "Время забронировано! С вами свяжется администратор!";
    } else {
      document.getElementById("status").innerText = "Ошибка: " + result.message;
    }
  } catch (err) {
    document.getElementById("status").innerText = "Ошибка при бронировании";
    console.error(err);
  }
}