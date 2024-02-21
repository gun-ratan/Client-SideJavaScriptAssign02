document.addEventListener('DOMContentLoaded', function() {
    const myStudentId = document.getElementById('myStudentId');
    const customNumber = document.getElementById('customNumber');
    const changeCustomColorBtn = document.querySelector('.custColor');
    const changeRandomColorBtn = document.querySelector('.randColor');
    const imageSelect = document.getElementById('imageSelect');
    const images = document.getElementById('images');

    // Function to display student ID
    myStudentId.textContent = "Student ID: 200551703"; 

    // Function to change background color based on custom input
    changeCustomColorBtn.addEventListener('click', function() {
        const userInput = parseInt(customNumber.value);
        document.body.style.backgroundColor = getColor(userInput);
    });

    // Function to change background color based on random number
    changeRandomColorBtn.addEventListener('click', function() {
        const randomInput = Math.floor(Math.random() * 101);
        document.body.style.backgroundColor = getColor(randomInput);
    });

    // Function to populate image options
    addList();

    // Function to change image
    imageSelect.addEventListener('change', function() {
        const selectedOption = imageSelect.options[imageSelect.selectedIndex].value;
        images.src = selectedOption;
    });

    // Function to get color based on input value
    function getColor(value) {
        if (value < 0 || value > 100) {
            return 'red';
        } else if (value >= 0 && value <= 20) {
            return 'green';
        } else if (value > 20 && value <= 40) {
            return 'blue';
        } else if (value > 40 && value <= 60) {
            return 'orange';
        } else if (value > 60 && value <= 80) {
            return 'purple';
        } else {
            return 'yellow';
        }
    }

    // Function to generate options for select list
    function addList() {
        const imageOptions = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
        imageOptions.forEach(image => {
            const option = document.createElement('option');
            option.value = `./img/${image}`;
            option.textContent = image;
            imageSelect.appendChild(option);
        });
    }
});
// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

window.addEventListener('DOMContentLoaded', function() {
    var customNumberInput = document.getElementById('customNumber');
    var randColorButton = document.querySelector('.randColor');

    randColorButton.addEventListener('click', function() {
        // Generate random number between 1 and 100
        var randomNumber = generateRandomNumber();
        // Update the value of the "Enter number" input
        customNumberInput.value = randomNumber;
    });
});
