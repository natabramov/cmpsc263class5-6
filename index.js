document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addButton").addEventListener("click", addIngredient);
    // functionality to allow user to hit Enter to add ingredients
    document.getElementById("recipeInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {addIngredient();}
    })
});

function addIngredient() {
    let input = document.getElementById("recipeInput");
    let ingredient = input.value.trim();

    if (ingredient) {
        let list = document.getElementById("recipeList");

        // adds ingredient to the grocery list as a list item
        let listItem = document.createElement("li");
        listItem.className = "recipe-item";

        // creates checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "ingredient-checkbox";

        // puts the ingredient in a span
        let textSpan = document.createElement("span");
        textSpan.textContent = ingredient;

        // adds the checkbox and ingredient text into a span so it is on the same line
        listItem.appendChild(checkbox);
        listItem.appendChild(textSpan);
        // adds the list item to the overall ol
        list.appendChild(listItem);

        // clears the input field
        input.value = "";
    }
}
