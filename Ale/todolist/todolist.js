// javascript variable => var, let, const
let nonRoutine = [
    "Mengerjakan Tugas",
    "Menyiram Tanaman",
    "Membeli Perlengkapan",
  ];

  let routine = [
    "Minum Air",
    "Belajar",
    "Membereskan Kamar",
    "Memberi Makan Hewan",
  ];

  function printLoopDataNonRoutine(arr, label) {
    let totalNonRoutine = arr.length;

    // print data Non Routine
    let printDataNonRoutine = "<h3>" + label + "</h3>";
    printDataNonRoutine += "<ul class='checklist'>";

    // start loop data array
    for (let i = 0; i < totalNonRoutine; i++) {
      printDataNonRoutine +=
        "<li><input onclick='toggleCheckbox(this)' type='checkbox' name='list' id='list-nr-" +
        i +
        "' /> <label for='list-nr-" +
        i +
        "'>" +
        arr[i] +
        "</label></li>";
    }
    // end loop data array

    printDataNonRoutine += "</ul>";

    return printDataNonRoutine;
  }

  // print output
  let printLoopNonRoutine = printLoopDataNonRoutine(nonRoutine,"Non-Routine");
  document.querySelector("#data-non-routine").innerHTML = printLoopNonRoutine;

  // Routine
  function printLoopDataRoutine(arr, label) {
    let totalRoutine = arr.length;

    let printDataRoutine = "<h3>" + label + "</h3>";
    printDataRoutine += "<ul class='checklist'>";

    // start looping Routine
    for (let i = 0; i < totalRoutine; i++) {
      printDataRoutine +=
        "<li><input onclick='toggleCheckbox(this)' type='checkbox' name='list' id='list-r-" +
        i +
        "' /> <label for='list-r-" +
        i +
        "'>" +
        arr[i] +
        "</label></li>";
    }
    printDataRoutine += "</ul>";

    return printDataRoutine;
  }

  // print output Routine
  let printLoopRoutine = printLoopDataRoutine(routine, "Routine");
  document.querySelector("#data-routine").innerHTML = printLoopRoutine;

  function toggleCheckbox(checkbox) {
    console.log(checkbox);
    checkbox.nextElementSibling.classList.toggle("checked");
  }

  function toggleInputForm(target) {
    // document.querySelector("#input-routine").classList.toggle("hide");
    document.querySelector("#" + target).classList.toggle("hide");
    document.querySelector("#" + target).value = "";
  }

  function addDataInputNonRoutine(element_input, element_print, arr, label) {
    const inputNonRoutine = document.querySelector("#" + element_input);
    inputNonRoutine.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        console.log("click enter");
        // ambil data dari input
        const dataInputNonRoutine = inputNonRoutine.value;
        arr.push(dataInputNonRoutine);

        // print output
        let printLoopNonRoutine = printLoopDataNonRoutine(arr, label);
        document.querySelector("#" + element_print).innerHTML =
          printLoopNonRoutine;
      }
    });
  }

  addDataInputNonRoutine("input-non-routine","data-non-routine",nonRoutine,"Non-Routine");
  addDataInputNonRoutine("input-routine", "data-routine", routine, "Routine");