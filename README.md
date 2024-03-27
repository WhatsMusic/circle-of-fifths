# Circle of Fifths Application

This application is a visual and interactive representation of the Circle of Fifths, a fundamental concept in music theory that illustrates the relationships between different musical keys. It is designed to help musicians, students, and enthusiasts understand and explore the connections between keys, including major and minor parallels, as well as to display the chords associated with a selected key.

![The image shows a graphic representation of the Circle of Fifths, which is a visual tool used in music theory to understand the relationships between different keys. The circle features the major keys on the outer part and their relative minor keys on the inner part, arranged in a circular layout. Each major key is adjacent to its fifth. Starting from the top and moving clockwise, the keys are C, G, D, A, E, B, Gb/F#, Db, Ab, Eb, Bb, and F. The corresponding minor keys are displayed in smaller circles inside the larger ones, starting from Am and moving in the same order: Am, Em, Bm, F#m, C#m, G#m, Ebm/D#m, Bbm, Fm, Cm, Gm, and Dm. The background is a gradient of dark to lighter green, and the text "Circle of Fifths" is centered at the bottom in white font.](/screenshot.jpeg){: width="800"}

## Features

- **Visual Representation of the Circle of Fifths**: The main feature of this application is its ability to visually represent the Circle of Fifths.
- **Interactive Key Selection**: Users can click on a key to see its associated chords displayed.
- **Dynamic Content**: The application dynamically updates to show the chords for the selected key or a default view when no key is selected.

## Implementation Details

### HTML Structure

The application's structure is defined in `index.html`. It includes a main container where the Circle of Fifths is displayed (`#circle-of-fifths`). The HTML file also links to the `style.css` for styling and `app.js` for functionality.

```html
<div class="main">
    <div id="circle-of-fifths"></div>
</div>
```

### JavaScript Functionality

The core functionality is implemented in `app.js`, which contains two main functions:

1. **highlightKey(keyDiv)**: This function is responsible for highlighting a selected key. It first removes any existing highlights from all keys and then adds a highlight to the selected key.

    ```javascript
    function highlightKey(keyDiv) {
        const keys = document.querySelectorAll(".key");
        keys.forEach((key) => {
            key.classList.remove("highlight");
        });

        if (keyDiv) {
            keyDiv.classList.add("highlight");
        }
    }
    ```

2. **highlightChords(chords, keyName)**: This function dynamically updates the displayed chords based on the selected key. It handles the removal of any existing chord lists, displays a default message when no key is selected, and shows the chords for the selected key.

    ```javascript
    function highlightChords(chords, keyName) {
        // Code to dynamically update chord display
    }
    ```

### Styling

The visual aspects of the Circle of Fifths and its interactive elements are styled using CSS. The stylesheet `style.css` is linked in the HTML file but is not detailed in the provided code snippets.

## Usage

To use the application, simply open `index.html` in a modern web browser. Click on any key within the Circle of Fifths to see its associated chords displayed. Clicking on another key updates the display to show the chords for the newly selected key.

## Development

This application is built using HTML, CSS, and JavaScript. It is designed to be simple, lightweight, and easily extendable for further features such as more detailed chord information, audio playback of chords, or integration with music theory lessons.

## Contributing

Contributions to the Circle of Fifths application are welcome. Whether it's adding new features, improving the existing code, or fixing bugs, your help is appreciated. Please feel free to fork the repository, make your changes, and submit a pull request.