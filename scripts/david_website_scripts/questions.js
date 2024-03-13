let tries = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("option-buttons");

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const selectAnswer = (e) => {
  console.log(e.target.id);
  tries++;
  const selectedBtn = e.target;
  const isCorrect = JSON.parse(selectedBtn.dataset?.correct);

  console.log(`${selectedBtn.id}-mp3`);

  if (isCorrect) {
    score++;
    selectedBtn.classList.add("text-[#668d85]");

    //play audio for note
    let audio = new Audio(
      `../audio/david_website_audio/Note ${selectedBtn.id}.mp3`
    );
    audio.play();

    //reset canvas
    setTimeout(resetState, 1000);
    setTimeout(displayQuestion, 2300);
  } else {
    selectedBtn.classList.add("text-black");
  }

  document.getElementById("score").innerHTML = `Score: ${score}/${tries}`;
};

window.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    document.getElementById("A").click();
  } else if (event.key === "b") {
    document.getElementById("B").click();
  } else if (event.key === "c") {
    document.getElementById("C").click();
  } else if (event.key === "d") {
    document.getElementById("D").click();
  } else if (event.key === "e") {
    document.getElementById("E").click();
  } else if (event.key === "f") {
    document.getElementById("F").click();
  } else if (event.key === "g") {
    document.getElementById("G").click();
  }
});

const displayQuestion = (isTreble) => {
  //display buttons
  answerButtonElement.classList.remove("hidden");

  let noteIndex = getRandomInt(0, 26);
  // let noteIndex = 25;
  console.log("note index: ", noteIndex);

  let noteType;
  let clefType = 0; //0 is treble
  if (noteIndex < 13) {
    noteType = bassNotes;
  } else {
    noteIndex = noteIndex - 13;
    noteType = trebleNotes;
    clefType = 1;
  }

  console.log("note index Updated: ", noteIndex);

  let note;
  let ledgerLIne = false;
  let octave = 0;
  if (noteIndex == 0 || noteIndex == 12) {
    ledgerLIne = true;
  }

  if (noteIndex >= 7) {
    octave = 1;
    note = noteType[noteIndex - 7];
  } else {
    note = noteType[noteIndex];
  }

  drawFullLedgerLine();
  if (clefType == 0) {
    drawBassNotes(note.value, octave, ledgerLIne);
  } else {
    drawTrebleNotes(note.value, octave, ledgerLIne);
  }

  console.log("note name: ", note.name);
  const correctButton = Array.from(answerButtonElement.children).find(
    (el) => el.id === note.name
  );

  console.log("correct Button: ", answerButtonElement.children);

  correctButton.dataset.correct = true;

  answerButtonElement.addEventListener("click", selectAnswer);
};

const resetState = () => {
  Array.from(answerButtonElement.children).forEach((el) => {
    el.dataset.correct = false;
    el.classList.remove("text-black");
    el.classList.remove("text-[#668d85]");
  });

  answerButtonElement.classList.add("hidden");
  clearCanvas();
};

resetState();
displayQuestion();
