export default async function handler(req, res) {
  // Получаем параметры из запроса
  const { name, phone, telegram, time } = req.query;

  // URL твоего Google Apps Script Web App (замени на свой!)
  const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwROhi0tc652Ev3a-p-IKzC4idCWbshYsMjXF-q3G6xfo32A_CED9lhpzpyX-Apos5k/exec";

  // Формируем полный URL с параметрами
  const url = `${WEBAPP_URL}?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&telegram=${encodeURIComponent(telegram)}&time=${encodeURIComponent(time)}`;

  try {
    // Отправляем запрос к Google Apps Script
    const response = await fetch(url);
    const data = await response.json();

    // Возвращаем ответ клиенту
    res.status(200).json(data);
  } catch (err) {
    // Если что-то пошло не так
    res.status(500).json({ ok: false, message: "Ошибка при запросе к Google Script" });
  }
}
