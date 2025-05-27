      const spamWords = [
        "gratis",
        "dinero",
        "haz clic",
        "oferta",
        "gana",
        "compra",
        "bit.ly",
        "promoción",
      ];

      function cleanText(text) {
        return text
          .toLowerCase()
          .replace(/[.,!?¡¿()":;]/g, "") // quitar puntuación común
          .trim();
      }

      function simpleSpamClassifier(text) {
        const cleaned = cleanText(text);
        let count = 0;
        for (let word of spamWords) {
          if (cleaned.includes(word)) count++;
        }
        return count >= 1 ? "🔴 Spam" : "🟢 No es spam";
      }

      function classify() {
        const comment = document.getElementById("comment").value;
        if (!comment.trim()) {
          document.getElementById("result").textContent =
            "Por favor ingresa un comentario.";
          return;
        }

        const result = simpleSpamClassifier(comment);
        document.getElementById("result").textContent = `Resultado: ${result}`;
      }