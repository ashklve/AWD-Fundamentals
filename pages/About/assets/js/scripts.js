// Variable Declaration
const topBrands = ["Uniqlo", "Dr. Martens", "Zara"];

function checkBrand() {
    // Input
    const userInput = document.getElementById('userInput').value.trim();

    // Conditional Statements
    if (userInput === "") {
        document.getElementById('output').textContent = "Please enter a brand name.";
        return;
    }

    if (topBrands.includes(userInput)) {
        document.getElementById('output').textContent = `${userInput} is one of the top picks! Great choice!`;
    } else {
        document.getElementById('output').textContent = `${userInput} is not in the top picks. Try another brand!`;
    }

    // Looping Statements: Display all top brands
    const topBrandsList = document.createElement('ul');
    topBrands.forEach(brand => {
        const listItem = document.createElement('li');
        listItem.textContent = brand;
        topBrandsList.appendChild(listItem);
    });

    const interactiveSection = document.querySelector('.interactive');
    const existingList = interactiveSection.querySelector('ul');
    if (existingList) {
        interactiveSection.removeChild(existingList);
    }
    interactiveSection.appendChild(topBrandsList);
}
