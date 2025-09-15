<script>
    const heart = document.getElementById("heart");
    const finalMessage = document.getElementById("final-message");
    const gameArea = document.getElementById("game-area");
    const verses = document.querySelectorAll(".verse");
    const spotifyBtn = document.getElementById("spotify-btn");

    // posição inicial
    moveHeart();

    // quando clica no coração
    heart.addEventListener("click", () => {
      heart.style.display = "none";
      finalMessage.style.display = "block";
      showVerses();
      startFallingHearts();
    });

    // faz o coração se mexer sozinho
    function moveHeart() {
      const areaWidth = gameArea.clientWidth - 50;
      const areaHeight = gameArea.clientHeight - 50;

      setInterval(() => {
        const x = Math.random() * areaWidth;
        const y = Math.random() * areaHeight;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.transform = "scale(1.2)";
        setTimeout(() => { heart.style.transform = "scale(1)"; }, 200);
      }, 1000);
    }

    // revela o poema verso por verso
    function showVerses() {
      let delay = 0;
      verses.forEach((verse, index) => {
        setTimeout(() => {
          verse.style.display = "block";
        }, delay);
        delay += 2000; // cada verso aparece 2s depois do anterior
      });
      // mostra o botão no final
      setTimeout(() => {
        spotifyBtn.style.display = "inline-block";
      }, delay + 500);
    }

    // efeito de corações caindo
    function startFallingHearts() {
      setInterval(() => {
        const heartEl = document.createElement("div");
        heartEl.classList.add("falling-heart");
        heartEl.textContent = "❤️";
        heartEl.style.left = Math.random() * 100 + "vw";
        heartEl.style.animationDuration = (3 + Math.random() * 2) + "s";
        document.body.appendChild(heartEl);

        setTimeout(() => {
          heartEl.remove();
        }, 5000);
      }, 300);
    }
  </script>
