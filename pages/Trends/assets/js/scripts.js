let favoriteBrand = "";

function checkBrand() {
    favoriteBrand = document.getElementById("userInput").value.trim().toLowerCase();
    const topBrands = ["uniqlo", "dr. martens", "zara", "bershka", "muji", "adidas", "nike", "converse", "puma", "zara"]; // top picks

    let outputMessage = "";
    if (topBrands.includes(favoriteBrand)) {
        outputMessage = `${favoriteBrand.charAt(0).toUpperCase() + favoriteBrand.slice(1)} is one of the top picks!`;
    } else if (favoriteBrand) {
        outputMessage = `${favoriteBrand.charAt(0).toUpperCase() + favoriteBrand.slice(1)} is not on the list, but it's a great choice!`;
    } else {
        outputMessage = "Please enter a brand name.";
    }

    document.getElementById("output").innerText = outputMessage; //output
}

// looping through an array
function displayBrands() {
    const brands = ["Maligaya CLothing Co.", "Kultura", "Richboyz", "Cinemasun", "A.kin"];
    const brandsList = document.getElementById("brandsList");

    if (brandsList) {
        brandsList.innerHTML = ""; 

        for (let brand of brands) {
            const listItem = document.createElement("li");
            listItem.textContent = brand;
            brandsList.appendChild(listItem);
        }
    }
}

window.onload = function () {
    displayBrands(); // calling function 
};
