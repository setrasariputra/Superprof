function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const period = hours < 12 ? "am" : "pm";
  const displayHours = hours % 12 || 12;

  // check malam
  if (hours >= 6 && hours < 18) {
    localStorage.setItem("malam", 0);
  } else {
    localStorage.setItem("malam", 1);
  }

  return `${day}/${month}/${year}, ${displayHours}:${minutes} ${period}`;
}

function printDays() {
  const timestamp = Date.now();
  let formatDays = formatDate(timestamp);

  // print lifetime
  let hari = 0;
  let lifetime = localStorage.getItem("lifetime");
  lifetime = parseInt(lifetime);
  
  const jam = lifetime;
  const satuHari = 24;

  const jumlahHari = Math.floor(jam / satuHari);
  const sisaJam = jam % satuHari;
  const showLifetime = jumlahHari + " hari " + sisaJam + " jam";

  // update level
  if(jumlahHari >= 15) {
    localStorage.setItem("level","older");
  }else{
    localStorage.setItem("level","kids");
  }

  // get level
  const level = localStorage.getItem("level");

  const days = document.querySelector(".days");
  days.innerHTML = formatDays;
  days.innerHTML += "<br />";
  days.innerHTML += "Lifetime: "+showLifetime;
  days.innerHTML += "<br />";
  days.innerHTML += "Level: "+level;
}

function updateLifeTime() {
    // update lifetime
    let lifetime = localStorage.getItem("lifetime");
    lifetime = parseInt(lifetime);
    current_lifetime = lifetime + 1;
    localStorage.setItem("lifetime", current_lifetime.toString());
}

function updateBackgroundMalam() {
  let forest = document.querySelector(".forest");
  let soil = document.querySelector(".soil");

  let malam = localStorage.getItem("malam");
  malam = parseInt(malam);
  if(malam == 1) {
     forest.style.backgroundImage = "url('assets/img/malam-forest.jpg')";
     soil.style.backgroundImage = "url('assets/img/malam-soil.jpg')";
  }else{
    forest.style.backgroundImage = "url('assets/img/forest.jpg')";
    soil.style.backgroundImage = "url('assets/img/soil.jpg')";
  }
}

function intervalPrintDays() {
  setInterval(printDays, 1000);
  setInterval(updateLifeTime, 60000);
  setInterval(updateBackgroundMalam, 1000);
}

function saveAction(action) {
    localStorage.setItem("action", action);
}

function clearAction() {
    localStorage.setItem("action", "");
}

function showPlatformerIdle() {
    let platformer = localStorage.getItem("platformer");
    let level = localStorage.getItem("level");
    let showPlatformer = document.querySelector("#showPlatformer");

    showPlatformer.innerHTML = "<img class='img-fluid' src='assets/img/"+level+"/"+platformer+"-idle.gif' />";
}

function showPlatformerTidur() {
    let platformer = localStorage.getItem("platformer");
    let level = localStorage.getItem("level");
    let showPlatformer = document.querySelector("#showPlatformer");

    showPlatformer.innerHTML = "<img class='img-fluid' src='assets/img/"+level+"/"+platformer+"-tidur.gif' />";
}

function showPlatformerMakan() {
    let platformer = localStorage.getItem("platformer");
    let level = localStorage.getItem("level");
    let showPlatformer = document.querySelector("#showPlatformer");

    showPlatformer.innerHTML = "<img class='img-fluid' src='assets/img/"+level+"/"+platformer+"-makan.gif' />";
}

function showPlatformerSakit() {
    let platformer = localStorage.getItem("platformer");
    let level = localStorage.getItem("level");
    let showPlatformer = document.querySelector("#showPlatformer");

    showPlatformer.innerHTML = "<img class='img-fluid' src='assets/img/"+level+"/"+platformer+"-sakit.gif' />";
}

function showPlatformerPenyembuhan() {
    let platformer = localStorage.getItem("platformer");
    let level = localStorage.getItem("level");
    let showPlatformer = document.querySelector("#showPlatformer");

    showPlatformer.innerHTML = "<img class='img-fluid' src='assets/img/"+level+"/"+platformer+"-penyembuhan.gif' />";
}

function showPlatformerLari() {
    let platformer = localStorage.getItem("platformer");
    let level = localStorage.getItem("level");
    let showPlatformer = document.querySelector("#showPlatformer");

    showPlatformer.innerHTML = "<img class='img-fluid' src='assets/img/"+level+"/"+platformer+"-lari.gif' />"; 
}
function showPlatformerLompat() {
    let platformer = localStorage.getItem("platformer");
    let level = localStorage.getItem("level");
    let showPlatformer = document.querySelector("#showPlatformer");

    showPlatformer.innerHTML = "<img class='img-fluid' src='assets/img/"+level+"/"+platformer+"-lompat.png' />"; 
}

function showPlatformerGame() {
    const canvas = document.querySelector("#gameArea");
    canvas.style.display = "block";
    draw();
    showPlatformerLari();
}

function stopPlatformerGame() {
    const canvas = document.querySelector("#gameArea");
    canvas.style.display = "none";

    stopAnimation();
}


// Start Makan Bar
function showMakanBar() {
  let makan = localStorage.getItem("makan");
  makan = parseInt(makan);

  let barbgcolor = "aqua";
  if (makan < 30) {
    barbgcolor = "red";
  }

  // print
  let makanBar = document.querySelector("#showMakanBar");
  makanBar.innerHTML = "<div class='text-left'><i class='fa-solid fa-utensils fa-beat text-warning' title='Makan'></i></div>";
  makanBar.innerHTML += "<div class='progress-container'>";
  makanBar.innerHTML += "<div class='progress-value' style='background-color:" + barbgcolor + ";width: " + makan +"%;'></div>";
  makanBar.innerHTML += "</div>";
}

function intervalMakanBar() {
  showMakanBar();

    setInterval(function () {
      let current_makan = "";
      let makan = localStorage.getItem("makan");
      makan = parseInt(makan);

      if (makan > 0) {
        current_makan = makan - 1;
        localStorage.setItem("makan", current_makan.toString());
      } else {
        current_makan = 0;
        localStorage.setItem("makan", current_makan.toString());
      }

      showMakanBar();
    }, 30000);
}
// End Makan Bar

// Start Tidur Bar
function showTidurBar() {
    let tidur = localStorage.getItem("tidur");
    tidur = parseInt(tidur);
  
    let barbgcolor = "aqua";
    if (tidur < 30) {
      barbgcolor = "red";
    }
  
    // print
    let tidurBar = document.querySelector("#showTidurBar");
    tidurBar.innerHTML = "<div class='text-end'><i class='fa-solid fa-bed fa-beat text-warning' title='Tidur'></i></div>";
    tidurBar.innerHTML += "<div class='progress-container'>";
    tidurBar.innerHTML += "<div class='progress-value' style='background-color:" + barbgcolor + ";width: " + tidur +"%;'></div>";
    tidurBar.innerHTML += "</div>";
  }
  
  function intervalTidurBar() {
    showTidurBar();
  
      setInterval(function () {
        let current_tidur = "";
        let tidur = localStorage.getItem("tidur");
        tidur = parseInt(tidur);
  
        if (tidur > 0) {
          current_tidur = tidur - 1;
          localStorage.setItem("tidur", current_tidur.toString());
        } else {
          current_tidur = 0;
          localStorage.setItem("tidur", current_tidur.toString());
        }
  
        showTidurBar();
      }, 30000);
  }
  // End Tidur Bar

  // Start Game Bar
function showGameBar() {
    let game = localStorage.getItem("game");
    game = parseInt(game);
  
    let barbgcolor = "aqua";
    if (game < 30) {
      barbgcolor = "red";
    }
  
    // print
    let gameBar = document.querySelector("#showGameBar");
    gameBar.innerHTML = "<div class='text-left'><i class='fa-solid fa-gamepad fa-beat text-warning' title='Game'></i></div>";
    gameBar.innerHTML += "<div class='progress-container'>";
    gameBar.innerHTML += "<div class='progress-value' style='background-color:" + barbgcolor + ";width: " + game +"%;'></div>";
    gameBar.innerHTML += "</div>";
  }
  
  function intervalGameBar() {
    showGameBar();
  
      setInterval(function () {
        let current_game = "";
        let game = localStorage.getItem("game");
        game = parseInt(game);
  
        if (game > 0) {
          current_game = game - 1;
          localStorage.setItem("game", current_game.toString());
        } else {
          current_game = 0;
          localStorage.setItem("game", current_game.toString());
        }
  
        showGameBar();
      }, 30000);
  }
  // End Game Bar
  
    // Start Obat Bar

  function showObatBar() {
    let obat = localStorage.getItem("obat");
    obat = parseInt(obat);
  
    let barbgcolor = "aqua";
    if (obat < 30) {
      barbgcolor = "red";

      let sakit = localStorage.getItem("sakit");
      sakit = parseInt(sakit);
      let penyembuhan = localStorage.getItem("penyembuhan");
      penyembuhan = parseInt(penyembuhan);

      // platformer sakit
      localStorage.setItem("sakit", 1);
      if(penyembuhan == 0) {
        showPlatformerSakit();
      }    
    }else{
        // platformer normal
        //localStorage.setItem("sakit", 0);
        //showPlatformerIdle();
    }
  
    // print
    let obatBar = document.querySelector("#showObatBar");
    obatBar.innerHTML = "<div class='text-end'><i class='fa-solid fa-briefcase-medical fa-beat text-warning' title='Obat'></i></div>";
    obatBar.innerHTML += "<div class='progress-container'>";
    obatBar.innerHTML += "<div class='progress-value' style='background-color:" + barbgcolor + ";width: " + obat +"%;'></div>";
    obatBar.innerHTML += "</div>";
  }
  
  function intervalObatBar() {
    showObatBar();
  
      setInterval(function () {
        let current_obat = "";
        let obat = localStorage.getItem("obat");
        obat = parseInt(obat);
  
        if (obat > 0) {
          current_obat = obat - 1;
          localStorage.setItem("obat", current_obat.toString());
        } else {
          current_obat = 0;
          localStorage.setItem("obat", current_obat.toString());
        }
  
        showObatBar();

      }, 60000);
  }
  // End Obat Bar

function setupLocalStorage() {
  // get localStorage if exists
  const start_timestamp = localStorage.getItem("start_timestamp");
  const makan = localStorage.getItem("makan");
  const tidur = localStorage.getItem("tidur");
  const game = localStorage.getItem("game");
  const obat = localStorage.getItem("obat");
  const lifetime = localStorage.getItem("lifetime");
  const level = localStorage.getItem("level");
  const platformer = localStorage.getItem("platformer");
  const sakit = localStorage.getItem("sakit");
  const penyembuhan = localStorage.getItem("penyembuhan");
  const action = localStorage.getItem("action");
  const malam = localStorage.getItem("malam");

  // set empty
  localStorage.setItem("action", "");

  // validation
  if (
    start_timestamp === undefined ||
    start_timestamp === null ||
    start_timestamp == ""
  ) {
    localStorage.setItem("start_timestamp", Date.now());
  }
  if (makan === undefined || makan === null || makan == "") {
    localStorage.setItem("makan", 100);
  }
  if (tidur === undefined || tidur === null || tidur == "") {
    localStorage.setItem("tidur", 100);
  }
  if (game === undefined || game === null || game == "") {
    localStorage.setItem("game", 100);
  }
  if (obat === undefined || obat === null || obat == "") {
    localStorage.setItem("obat", 100);
  }
  if (lifetime === undefined || lifetime === null || lifetime == "") {
    localStorage.setItem("lifetime", 0);
  }
  if (level === undefined || level === null || level == "") {
    localStorage.setItem("level", "kids");
  }
  if (platformer === undefined || platformer === null || platformer == "") {
    localStorage.setItem("platformer", "lpg");
  }
  if (sakit === undefined || sakit === null || sakit == "") {
    localStorage.setItem("sakit", 0);
  }
  if (penyembuhan === undefined || penyembuhan === null || penyembuhan == "") {
    localStorage.setItem("penyembuhan", 0);
  }
  if (malam === undefined || malam === null || malam == "") {
    localStorage.setItem("malam", 0);
  }
}


function actionClickMakan() {
    let sakit = localStorage.getItem("sakit");
    let action = localStorage.getItem("action");
    sakit = parseInt(sakit);
    if(sakit == 0) {
      if(action == '') {
        // jalan platformer
        showPlatformerMakan();
        saveAction("makan");

        let makanInterval = setInterval(function() {
          let makan = localStorage.getItem("makan");
          makan = parseInt(makan);
          let current_makan = makan + 1;
          if(current_makan > 100) {
            current_makan = 100;
          }
          localStorage.setItem("makan", current_makan.toString());

          // show makanbar
          showMakanBar();
        },1000);

        // update tidurBar
        setTimeout(function() {
          // clear interval
          clearInterval(makanInterval);

          // platformerIdle
          showPlatformerIdle();

          clearAction();
        },20000);
      }
    }
}

function actionClickTidur() {
    let sakit = localStorage.getItem("sakit");
    let action = localStorage.getItem("action");
    sakit = parseInt(sakit);
    if(sakit == 0) {
      if(action == '') {
        // jalan platformer
        showPlatformerTidur();
        saveAction("tidur");

        let tidurInterval = setInterval(function() {
            let tidur = localStorage.getItem("tidur");
            tidur = parseInt(tidur);
            let current_tidur = tidur + 1;
            if(current_tidur > 100) {
                current_tidur = 100;
            }
            localStorage.setItem("tidur", current_tidur.toString());

            // show tidurbar
            showTidurBar();
        },1000);

        // update tidurBar
        setTimeout(function() {
            // clear interval
            clearInterval(tidurInterval);

            // platformerIdle
            showPlatformerIdle();

            clearAction();
        },60000);
      }
    }
}

function actionClickGame() {
    let sakit = localStorage.getItem("sakit");
    let action = localStorage.getItem("action");
    sakit = parseInt(sakit);
    if(sakit == 0) {
      if(action == '') {
        // jalan platformer
        showPlatformerGame();
        saveAction("game");

        // update gameBar
        let gameInterval = setInterval(function() {
            let game = localStorage.getItem("game");
            game = parseInt(game);
            let current_game = game + 1;
            if(current_game > 100) {
                current_game = 100;
            }
            localStorage.setItem("game", current_game.toString());

            // show gamebar
            showGameBar();
        }, 1000);

        // update tidurBar
        setTimeout(function() {
            // clear interval
            clearInterval(gameInterval);

            // platformerIdle
            showPlatformerIdle();

            // stop game
            stopPlatformerGame();

            clearAction();
        },30000);
      }
    }
}

function actionClickObat() {
    // jalan platformer
    const sakit = localStorage.getItem("sakit");
    let action = localStorage.getItem("action");
    if(sakit == 1) {
      if(action == '') {
        localStorage.setItem("penyembuhan", 1);
        showPlatformerPenyembuhan();
        saveAction("penyembuhan");

        // update obatBar
        let obatInterval = setInterval(function() {
            let obat = localStorage.getItem("obat");
            obat = parseInt(obat);
            let current_obat = obat + 1;
            if(current_obat > 100) {
                current_obat = 100;
            }
            localStorage.setItem("obat", current_obat.toString());

            // show obatbar
            showObatBar();
        },1000);

        // update tidurBar
        setTimeout(function() {
            // clear interval
            clearInterval(obatInterval);

            // platformerIdle
            showPlatformerIdle();

            // set normal
            localStorage.setItem("penyembuhan", 0);
            localStorage.setItem("sakit", 0);

            clearAction();
        },50000);
      }
    }
}

function startGame() {
  // get localStorage if exists
  setupLocalStorage();

  // show platformer
  showPlatformerIdle();

  // print days
  intervalPrintDays();

  // Start indikator Bar
  // interval makan bar
  intervalMakanBar();
  // interval tidur bar
  intervalTidurBar();
  // interval tidur bar
  intervalGameBar();
  // interval obat bar
  intervalObatBar();
  // End indikator Bar

  // clickMakan
  const clickMakan = document.querySelector("#clickMakan");
  clickMakan.addEventListener("click", actionClickMakan);

  // clickTidur
  const clickTidur = document.querySelector("#clickTidur");
  clickTidur.addEventListener("click", actionClickTidur);

  // clickGame
  const clickGame = document.querySelector("#clickGame");
  clickGame.addEventListener("click", actionClickGame);

  // clickObat
  const clickObat = document.querySelector("#clickObat");
  clickObat.addEventListener("click", actionClickObat);

  // clickjump
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        const action = localStorage.getItem("action");
        if(action == "game") {
            jump();
        }

        event.preventDefault();
    }
  });

}

startGame();