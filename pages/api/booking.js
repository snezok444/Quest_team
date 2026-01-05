export default async function handler(req, res) {
  const { name, phone, telegram, time } = req.query;

  const WEBAPP_URL = "https://script.google.com/macros/s/ТВОЙ_ID/exec";
  const url = `${WEBAPP_URL}?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&telegram=${encodeURIComponent(telegram)}&time=${encodeURIComponent(time)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Возвращаем ответ клиенту
    res.setHeader("Access-Control-Allow-Origin", "*"); // разрешаем CORS для фронтенда
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ ok: false, message: "Ошибка при запросе к Google Script" });
  }
}
