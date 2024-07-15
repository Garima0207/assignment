let favoriteRecipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
};
console.log(favoriteRecipe.title);
console.log(`Serves: ${favoriteRecipe.servings}`);
console.log("Ingredients:");
favoriteRecipe.ingredients.forEach(function(ingredient) {
    console.log(ingredient);
});