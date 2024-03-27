function initializeDefaultContent() {
  const defaultH2Element = document.createElement("h2");
  defaultH2Element.textContent = "Circle of Fifths";
  defaultH2Element.classList.add("chord-list"); // Die gleiche Klasse für Konsistenz
  circle.appendChild(defaultH2Element); // Füge es dem Kreis hinzu
}


const keys = [
    { name: "A", chords: ["A", "Amaj7", "Bm", "Bm7", "C#m", "C#m7", "D", "Dmaj7", "E", "E7", "F#m", "F#m7", "G#dim"]},
    { name: "E", chords: ["E", "Emaj7", "F#m", "F#m7", "G#m", "G#m7", "A", "Amaj7", "B", "B7", "C#m", "C#m7", "D#dim"]},
    { name: "B", chords: ["B", "Bmaj7", "C#m", "C#m7", "D#m", "D#m7", "E", "Emaj7", "F#", "F#7", "G#m", "G#m7", "A#dim"]},
    { name: "Gb/F#", chords: ["Gb/F#", "Gbmaj7", "Abm", "Abm7", "Bbm", "Bbm7", "Cb", "Cbmaj7", "Db", "Db7", "Ebm", "Ebm7", "Fdim"]},
    { name: "Db", chords: ["Db", "Dbmaj7", "Ebm", "Ebm7", "Fm", "Fm7", "Gb", "Gbmaj7", "Ab", "Ab7", "Bbm", "Bbm7", "Cdim"]},
    { name: "Ab", chords: ["Ab", "Abmaj7", "Bbm", "Bbm7", "Cm", "Cm7", "Db", "Dbmaj7", "Eb", "Eb7", "Fm", "Fm7", "Gdim"]},
    { name: "Eb", chords: ["Eb", "Ebmaj7", "Fm", "Fm7", "Gm", "Gm7", "Ab", "Abmaj7", "Bb", "Bb7", "Cm", "Cm7", "Ddim"]},
    { name: "Bb", chords: ["Bb", "Bbmaj7", "Cm", "Cm7", "Dm", "Dm7", "Eb", "Ebmaj7", "F", "F7", "Gm", "Gm7", "Adim"]},
    { name: "F", chords: ["F", "Fmaj7", "Gm", "Gm7", "Am", "Am7", "Bb", "Bbmaj7", "C", "C7", "Dm", "Dm7", "Edim"]},
    { name: "C", chords: ["C", "Cmaj7", "Dm", "Dm7", "Em", "Em7", "F", "Fmaj7", "G", "G7", "Am", "Am7", "Bdim"]},
    { name: "G", chords: ["G", "Gmaj7", "Am", "Am7", "Bm", "Bm7", "C", "Cmaj7", "D", "D7", "Em", "Em7", "F#dim"]},
    { name: "D", chords: ["D", "Dmaj7", "Em", "Em7", "F#m", "F#m7", "G", "Gmaj7", "A", "A7", "Bm", "Bm7", "C#dim"]},
    ];
const mKeys = [
    { name: "C#m", chords: ["C#m", "E", "Emaj7", "F#m", "F#m7", "G#m", "G#m7", "G#", "G#7", "A", "Amaj7", "B", "B7", "C#m7", "D#dim"] },
    { name: "G#m", chords: ["G#m", "B", "Bmaj7", "C#m", "C#m7", "D#m", "D#m7", "D#", "D#7", "E", "Emaj7", "F#", "F#7", "G#m7", "A#dim"] },
    { name: "Ebm/D#m", chords: ["Ebm/D#m", "Ebm7", "Gb", "Gbmaj7", "Abm", "Abm7", "Bbm", "Bbm7", "Bb", "Bb7", "Cb", "Cbmaj7", "Db", "Db7", "Fdim"] },
    { name: "Bbm", chords: ["Bbm", "Bbm7", "Ebm", "Db", "Dbmaj7", "Ebm7", "Fm", "Fm7", "F", "F7", "Gb", "Gbmaj7", "Ab", "Ab7", "Cdim"] },
    { name: "Fm", chords: ["Fm", "Fm7", "Ab", "Abmaj7", "Bbm", "Bbm7", "Cm", "Cm7", "C", "C7", "Db", "Dbmaj7", "Eb", "Eb7", "Gdim"] },
    { name: "Cm", chords: ["Cm", "Cm7", "Eb", "Ebmaj7", "Fm", "Fm7", "Gm", "Gm7", "G", "G7", "Ab", "Abmaj7", "Bb", "Bb7", "Ddim"] },
    { name: "Gm", chords: ["Gm", "Gm7", "Bb", "Bbmaj7", "Cm", "Cm7", "Dm", "Dm7", "D", "D7", "Eb", "Ebmaj7", "F", "F7", "Adim"] },
    { name: "Dm", chords: ["Dm", "Dm7", "F", "Fmaj7", "Gm", "Gm7", "Am", "Am7", "A", "A7", "Bb", "Bbmaj7", "C", "C7", "Edim"] },
    { name: "Am", chords: ["Am", "Am7", "C", "Cmaj7", "Dm", "Dm7", "Em", "Em7", "E", "E7", "F", "Fmaj7", "G", "G7", "Bdim"] },
    { name: "Em", chords: ["Em", "Em7", "G", "Gmaj7", "Am", "Am7", "Bm", "Bm7", "B", "B7", "C", "Cmaj7", "D", "D7", "F#dim"] },
    { name: "Bm", chords: ["Bm", "Bm7", "D", "Dmaj7", "Em", "Em7", "F#m", "F#m7", "F#", "F#7", "G", "Gmaj7", "A", "A7", "C#dim"] },
    { name: "F#m", chords: ["F#m", "F#m7", "A", "Amaj7", "Bm", "Bm7", "C#m", "C#m7", "C#", "C#7", "D", "Dmaj7", "E", "E7", "G#dim"] },
  ];

const circle = document.getElementById("circle-of-fifths");
// Store previous key selected
let previousKey = '';


// Draw the minor keys
for (let i = 0; i < mKeys.length; i++) {
    const key = mKeys[i];
    const minorDiv = document.createElement("div");
  
    minorDiv.classList.add("key","minor", key.name);
  
    
    minorDiv.textContent = key.name;
  
    minorDiv.style.transform = `rotate(${(i + 1) * (360 / keys.length)}deg) translate(220px) rotate(${-((i + 1) * (360 / keys.length))}deg)`;
  
    // Beispiel für das Hinzufügen von Event-Listenern zu einem Moll-Key
minorDiv.addEventListener("click", () => {
  if (previousKey === key.name) {
    // Wenn der bereits ausgewählte Key erneut angeklickt wird (deselektieren)
    highlightKey(null); // Entfernt die Hervorhebung von allen Keys
    highlightChords([], ''); // Zeigt den Standard `<h2>` Tag an
    previousKey = ''; // Setzt previousKey zurück, da kein Key ausgewählt ist
  } else {
    // Ein neuer Key wurde ausgewählt
    highlightKey(minorDiv); // Hervorheben des neuen Keys
    highlightChords(key.chords, key.name); // Zeigt die Akkorde des ausgewählten Keys an
    previousKey = key.name; // Aktualisiert previousKey mit dem neu ausgewählten Key
  }
});

    
  
    
    circle.appendChild(minorDiv);
  }


  // Draw the major keys
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const majorDiv = document.createElement("div");
    
    majorDiv.classList.add("key", "major");
  
  
    majorDiv.textContent = key.name;
  
  
    majorDiv.style.transform = `rotate(${i * (360 / keys.length)}deg) translate(340px) rotate(${-i * (360 / keys.length)}deg)`;
  
  
    // Beispiel für das Hinzufügen eines Event-Listeners zu einem Key
// Beispiel für einen Event-Listener
majorDiv.addEventListener("click", () => {
  if (previousKey === key.name) {
    // Deselektieren des Keys
    highlightKey(null);
    highlightChords([], '');
  } else {
    // Neuer Key ausgewählt
    highlightKey(majorDiv);
    highlightChords(key.chords, key.name);
  }
});


  
    
  
    circle.appendChild(majorDiv);
   
  }

  initializeDefaultContent();


  function highlightKey(keyDiv) {
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => {
      key.classList.remove("highlight");
    });
  
    if (keyDiv) {
      keyDiv.classList.add("highlight");
    }
  }
  



  function highlightChords(chords, keyName) {
    // Remove existing .chord-list element if any
    const existingChordList = document.querySelector(".chord-list");
    if (existingChordList) {
      existingChordList.parentNode.removeChild(existingChordList);
    }
  
    // Check if the keyName is empty, indicating deselection
    if (keyName === '') {
      // Show the default "Circle of Fifths" heading
      const h2Element = document.createElement("h2");
      h2Element.textContent = "Circle of Fifths";
      h2Element.classList.add("chord-list");
      document.querySelector("#circle-of-fifths").appendChild(h2Element);
    } else if (chords.length > 0) {
      // If chords are present, display them
      const chordsDiv = document.createElement("div");
      chordsDiv.textContent = "Chords: " + chords.join(", ");
      chordsDiv.classList.add("chord-list");
      document.querySelector("#circle-of-fifths").appendChild(chordsDiv);
    } else {
      // This else part may not be necessary if we never have a case where chords are empty but a key is selected
      // However, if needed, it can handle unexpected states or future modifications
      const h2Element = document.createElement("h2");
      h2Element.textContent = "No chords available";
      h2Element.classList.add("chord-list");
      document.querySelector("#circle-of-fifths").appendChild(h2Element);
    }
  
    // Update the previous key based on current interaction
    previousKey = keyName;
  }
  




