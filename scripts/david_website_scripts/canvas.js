const wholeNoteUrl = "images/david_website_images/whole-note.svg";
const fullLedger = "images/david_website_images/full_score.png";

let staffLayer = document.getElementById("staff-layer");
let staffCtx = staffLayer.getContext("2d");

fitToContainer(staffLayer);

let noteLayer = document.getElementById("note-layer");
let noteCtx = noteLayer.getContext("2d");

function fitToContainer(canvas) {
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

const drawFullLedgerLine = () => {
  const image = new Image();
  image.src = fullLedger;
  const canvasWidth = staffLayer.width;
  const canvasHeight = staffLayer.height;
  console.log(canvasWidth);
  console.log(canvasHeight);
  image.onload = () => {
    // staffCtx.drawImage(image, 0, 0, 650, 400);
    staffCtx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
  };
};

const drawWholeNote = (posY) => {
  fitToContainer(noteLayer);

  const image = new Image();
  image.src = wholeNoteUrl;
  const posX = noteLayer.offsetWidth / 2;
  image.onload = () => {
    noteCtx.drawImage(
      image,
      posX,
      posY * (noteLayer.offsetHeight / 400),
      30 * (noteLayer.offsetHeight / 400),
      20 * (noteLayer.offsetHeight / 400)
    );
  };
};

const drawLedgerLine = (postY) => {
  const posX = noteLayer.offsetWidth / 2;
  noteCtx.beginPath();
  noteCtx.moveTo(posX - 20, postY);
  noteCtx.lineTo(posX + 45, postY);
  noteCtx.lineWidth = 2;
  noteCtx.stroke();
};

const drawTrebleNotes = (note, octave, needLedgerLine) => {
  switch (note) {
    //middleC
    case 0:
      drawWholeNote(174 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(185);
      }
      break;
    //D
    case 1:
      drawWholeNote(165 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(276);
      }
      break;
    //E
    case 2:
      drawWholeNote(155 - octave * 64);
      break;
    //F
    case 3:
      drawWholeNote(146 - octave * 64);
      break;
    //G
    case 4:
      drawWholeNote(137 - octave * 64);
      break;
    //A
    case 5:
      drawWholeNote(128 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(75);
      }
      break;
    //B
    case 6:
      drawWholeNote(119 - octave * 64);
      break;
  }
};

const drawBassNotes = (note, octave, needLedgerLine) => {
  switch (note) {
    //E
    case 0:
      drawWholeNote(320 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(330);
      }
      break;
    //F
    case 1:
      drawWholeNote(312 - octave * 64);
      break;
    //G
    case 2:
      drawWholeNote(303 - octave * 64);
      break;
    //A
    case 3:
      drawWholeNote(294 - octave * 64);
      break;
    //B
    case 4:
      drawWholeNote(285 - octave * 64);
      break;
    //C
    case 5:
      drawWholeNote(276 - octave * 64);
      if (needLedgerLine) {
        drawLedgerLine(222);
      }
      break;
    //D
    case 6:
      drawWholeNote(267 - octave * 64);
      break;
  }
};

const clearCanvas = () => {
  staffCtx.clearRect(0, 0, 950, 550);
  noteCtx.clearRect(0, 0, 950, 550);
};