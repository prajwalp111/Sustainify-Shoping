const products = {
    "T-Shirt": { carbon: 5, water: 2700 },
    "Jeans": { carbon: 20, water: 7600 },
    "Shoes": { carbon: 14, water: 4400 },
    "Laptop": { carbon: 200, water: 19000 },
    "Smartphone": { carbon: 80, water: 13000 },

    // 🌱 Food Items
    "Apple": { carbon: 0.4, water: 125 },
    "Banana": { carbon: 0.8, water: 160 },
    "Rice (1kg)": { carbon: 4, water: 2500 },
    "Wheat (1kg)": { carbon: 1.6, water: 1827 },
    "Milk (1L)": { carbon: 3.2, water: 1000 },
    "Chicken (1kg)": { carbon: 6.9, water: 4325 },
    "Eggs (12)": { carbon: 2.1, water: 196 },
    "Cheese (1kg)": { carbon: 13.5, water: 5060 },
    "Bread (1 loaf)": { carbon: 0.5, water: 650 },
    "Potatoes (1kg)": { carbon: 0.5, water: 287 },
    "Tomatoes (1kg)": { carbon: 2.1, water: 214 },
    "Onions (1kg)": { carbon: 0.5, water: 325 },
    "Carrots (1kg)": { carbon: 0.3, water: 195 },
    "Soybeans (1kg)": { carbon: 2, water: 2144 },
    "Tofu (1kg)": { carbon: 2, water: 2450 },
    "Peanuts (1kg)": { carbon: 2.8, water: 4325 },
    "Almonds (1kg)": { carbon: 3, water: 16000 },
    
    // 🍔 Processed Foods
    "Chocolate (1kg)": { carbon: 19, water: 17196 },
    "Coffee (1kg)": { carbon: 29, water: 18000 },
    "Tea (1kg)": { carbon: 1.4, water: 8000 },
    "Beer (1L)": { carbon: 1.2, water: 300 },
    "Wine (1L)": { carbon: 1.8, water: 870 },
    "Soda (1L)": { carbon: 0.5, water: 170 },
    "Chips (1 pack)": { carbon: 2.4, water: 185 },
    "Cereal (1kg)": { carbon: 2.5, water: 1820 },
    "Pasta (1kg)": { carbon: 1.5, water: 1850 },
    "Sugar (1kg)": { carbon: 3.2, water: 1500 },
    
    // 🏠 Household & Daily Items
    "Paper (1kg)": { carbon: 2.5, water: 3000 },
    "Plastic Bottle (1 unit)": { carbon: 0.1, water: 50 },
    "Cotton Shirt": { carbon: 4, water: 2500 },
    "Denim Jacket": { carbon: 25, water: 8100 },
    "Wool Sweater": { carbon: 15, water: 8000 },
    "Leather Shoes": { carbon: 25, water: 17000 },
    "Notebook": { carbon: 1, water: 500 },
    "Toilet Paper (1 roll)": { carbon: 0.6, water: 140 },
    "Soap Bar": { carbon: 0.8, water: 800 },
    "Shampoo Bottle": { carbon: 2, water: 700 },
    "Toothpaste Tube": { carbon: 1.2, water: 500 },
    "Glass Bottle": { carbon: 1.5, water: 250 },
    
    // 🎮 Tech Items
    "Gaming Console": { carbon: 120, water: 25000 },
    "Smartwatch": { carbon: 40, water: 8000 },
    "Tablet": { carbon: 90, water: 16000 },
    "LED TV": { carbon: 250, water: 35000 },
    "Desktop PC": { carbon: 400, water: 45000 }
};


function addProduct() {
    const selectedProduct = document.getElementById("productSelect").value;
    if (selectedProduct) {
        const list = document.getElementById("shoppingList");
        const item = document.createElement("li");
        item.className = "list-group-item d-flex justify-content-between align-items-center";
        item.innerHTML = `
    ${selectedProduct}
    <span class="badge bg-info">${products[selectedProduct].carbon} kg CO₂</span>
    <span class="badge bg-primary">${products[selectedProduct].water} L Water</span>
    <button class="btn btn-danger btn-sm" data-product="${selectedProduct}" onclick="removeProduct(this,'${selectedProduct}')">Remove</button>`;
        list.appendChild(item);
        updateTotals(products[selectedProduct].carbon, products[selectedProduct].water);
        //                   tshirt,jeans,...  
    }
}

function removeProduct(button,product) {
    // const product = button.dataset.product;                            // Get product name
    updateTotals(-products[product].carbon, -products[product].water); // Update totals
    button.parentElement.remove();                                     // Remove item from UI
}

function updateTotals(carbon, water) {
    const totalCarbon = document.getElementById("totalCarbon");
    const totalWater = document.getElementById("totalWater");
    let currentCarbon = parseFloat(totalCarbon.textContent);
    let currentWater = parseFloat(totalWater.textContent);
    totalCarbon.textContent = (currentCarbon + carbon >= 0) ? currentCarbon + carbon : 0;
totalWater.textContent = (currentWater + water >= 0) ? currentWater + water : 0;

}