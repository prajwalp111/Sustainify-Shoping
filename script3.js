const foodData = {
    "Apple": { calories: 52, protein: 0.3, fats: 0.2, nutrients: "Vitamin C, Fiber, Potassium" },
    "Banana": { calories: 89, protein: 1.1, fats: 0.3, nutrients: "Vitamin B6, Potassium, Fiber" },
    "Chicken Breast": { calories: 165, protein: 31, fats: 3.6, nutrients: "Protein, B Vitamins, Phosphorus" },
    "Eggs": { calories: 155, protein: 13, fats: 11, nutrients: "Vitamin D, Choline, Protein" },
    "Milk": { calories: 42, protein: 3.4, fats: 1, nutrients: "Calcium, Vitamin D, B12" },
    "Rice": { calories: 130, protein: 2.7, fats: 0.3, nutrients: "Carbohydrates, Manganese, Selenium" },
    "Almonds": { calories: 579, protein: 21, fats: 50, nutrients: "Vitamin E, Magnesium, Healthy Fats" },
    "Salmon": { calories: 208, protein: 20, fats: 13, nutrients: "Omega-3, Vitamin D, B12" },
    "Lentils": { calories: 116, protein: 9, fats: 0.4, nutrients: "Iron, Fiber, Protein" },
    "Avocado": { calories: 160, protein: 2, fats: 15, nutrients: "Healthy Fats, Potassium, Vitamin E" },
    "Lays (1 pack)": { calories: 160, protein: 2, fats: 10, nutrients: "Carbohydrates, Sodium, Fats" },
    "Maggi (1 pack)": { calories: 380, protein: 9, fats: 14, nutrients: "Iron, Sodium, Carbohydrates" },
    "Wheat (1kg)": { calories: 340, protein: 12, fats: 2, nutrients: "Fiber, Carbohydrates, Magnesium" },
    "Oats (1 cup)": { calories: 154, protein: 5, fats: 3, nutrients: "Fiber, Iron, Magnesium" },
    "Quinoa (1 cup)": { calories: 222, protein: 8, fats: 3.5, nutrients: "Protein, Fiber, Magnesium" },
    "Paneer (100g)": { calories: 265, protein: 18, fats: 20, nutrients: "Calcium, Protein, Fats" },
    "Tofu (100g)": { calories: 76, protein: 8, fats: 4.8, nutrients: "Iron, Protein, Calcium" },
    "Peanuts (100g)": { calories: 567, protein: 25.8, fats: 49.2, nutrients: "Healthy Fats, Vitamin E, Magnesium" },
    "Walnuts (100g)": { calories: 654, protein: 15, fats: 65, nutrients: "Omega-3, Antioxidants, Fiber" },
    "Chia Seeds (28g)": { calories: 138, protein: 4.7, fats: 8.6, nutrients: "Omega-3, Fiber, Calcium" },
    "Flaxseeds (28g)": { calories: 150, protein: 5.2, fats: 12, nutrients: "Omega-3, Fiber, Lignans" },
    "Sweet Potato (100g)": { calories: 86, protein: 1.6, fats: 0.1, nutrients: "Vitamin A, Fiber, Potassium" },
    "Broccoli (100g)": { calories: 55, protein: 3.7, fats: 0.6, nutrients: "Vitamin C, Fiber, Iron" },
    "Carrots (100g)": { calories: 41, protein: 0.9, fats: 0.2, nutrients: "Vitamin A, Fiber, Antioxidants" },
    "Spinach (100g)": { calories: 23, protein: 2.9, fats: 0.4, nutrients: "Iron, Vitamin K, Magnesium" },
    "Cucumber (100g)": { calories: 15, protein: 0.6, fats: 0.1, nutrients: "Hydration, Vitamin K, Antioxidants" },
    "Mango (100g)": { calories: 60, protein: 0.8, fats: 0.4, nutrients: "Vitamin C, Fiber, Antioxidants" },
    "Blueberries (100g)": { calories: 57, protein: 0.7, fats: 0.3, nutrients: "Antioxidants, Vitamin C, Fiber" },
    "Cottage Cheese (100g)": { calories: 98, protein: 11, fats: 4.3, nutrients: "Calcium, Protein, Probiotics" },
    "Dark Chocolate (100g)": { calories: 600, protein: 7.9, fats: 42, nutrients: "Antioxidants, Iron, Magnesium" },
    "Coconut (100g)": { calories: 354, protein: 3.3, fats: 33, nutrients: "Healthy Fats, Fiber, Manganese" }
};

function addProduct() {
    const selectedFood = document.getElementById("foodSelect").value;

    if (selectedFood in foodData) {
        const list = document.getElementById("shoppingList");
        const { calories, protein, fats, nutrients } = foodData[selectedFood];
        const item = document.createElement("div");

        item.classList.add("card", "bg-light", "p-3", "mt-3" );

        item.innerHTML = `<p class="mb-0  text-lg"><strong class="text-primary" id="newli">${selectedFood}:</strong> 
Calories: ${calories} kcal, Protein: ${protein} g, Fats: ${fats} g, Essential Nutrients: ${nutrients} </p>
<button class="btn btn-danger text-sm " style ="width:10%; " onclick="removeProduct(this,'${selectedFood}')">Remove</button>`;

        list.appendChild(item);

        updateTotals(calories, protein, fats);
    }
}


function updateTotals(calories, protein, fats) {
    const totalCalories = document.getElementById("totalCalory");
    const totalProtein = document.getElementById("totalProtein");
    const totalFats = document.getElementById("totalFats");

    totalCalories.textContent = parseFloat(totalCalories.textContent) + calories;
    totalProtein.textContent = parseFloat(totalProtein.textContent) + protein;
    totalFats.textContent = parseFloat(totalFats.textContent) + fats;
}

function removeProduct(button,food) {
    // const product = button.dataset.product;                            // Get product name
    updateTotals(-foodData[food].calories, -foodData[food].protein,-foodData[food].fats);  // Update totals
    
    button.parentElement.remove();                                     // Remove item from UI
}

