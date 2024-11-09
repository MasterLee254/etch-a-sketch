// Function to create the grid dynamically
function createGrid(size) {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Clear the grid before generating a new one

    const totalSquares = size * size;
    const squareSize = 960 / size; // Calculate the size of each square in pixels

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('gridSquare');
        square.style.width = `${squareSize}px`; // Set width dynamically
        square.style.height = `${squareSize}px`; // Set height dynamically
        gridContainer.appendChild(square);

        let opacity = 0; // Initial opacity for the "lightening" effect

        square.addEventListener('mouseover', () => {
            // Random color effect
            const randomColor = `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`;
            square.style.backgroundColor = randomColor;

            // Progressive lightening effect
            opacity += 0.1;
            if (opacity > 1) opacity = 1;
            square.style.opacity = opacity;
        });
    }
}

// Function to generate random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to handle the resize button
function resizeGrid() {
    let newSize = prompt('Enter the number of squares per side (max 100):');
    newSize = parseInt(newSize);
    if (newSize > 100) {
        alert('Size is too large. Maximum allowed is 100.');
        return;
    }
    if (newSize && newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Invalid input. Please enter a valid number between 1 and 100.');
    }
}

// Initialize the grid with a default size (16x16)
createGrid(16);

// Event listener for the resize button
document.getElementById('resizeButton').addEventListener('click', resizeGrid);
