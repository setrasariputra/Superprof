// Inisialisasi variabel
      var canvas = document.getElementById("gameArea");
      var ctx = canvas.getContext("2d");
      var x = canvas.width;
      var y = canvas.height / 2;
      var dx = -2;
      var dy = 0;
      var radius = 20;

      // Fungsi menggambar objek
      function drawObject() {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "#333333";
        ctx.fill();
        ctx.closePath();
      }

      // Fungsi update posisi objek
      function updatePosition() {
        x += dx;
        y += dy;
        if (x - radius < 0) {
          x = canvas.width + radius;
        }
      }

      // Fungsi menggambar objek dan update posisi objek setiap frame
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawObject();
        updatePosition();
        animationId = requestAnimationFrame(draw);
      }

      function stopAnimation() {
        cancelAnimationFrame(animationId);
      }

      function jump() {
        let object = document.querySelector("#showPlatformer");
        let jumping = false;

        if (!jumping) {
        showPlatformerLompat();
          jumping = true;
          object.classList.add("jumping");
          setTimeout(function () {
            jumping = false;
            object.classList.remove("jumping");
            showPlatformerLari();
          }, 600);
        }
      }