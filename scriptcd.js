<script>
  // Укажи дату, до которой идёт отсчёт
  const targetDate = new Date("2026-02-09T00:00:00").getTime();

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "Время вышло!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "д " + hours + "ч " + minutes + "м " + seconds + "с";
  }, 1000);
</script>
