
const recipes = [
    {
        title: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish.',
        ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
        steps: ['Boil pasta', 'Cook pancetta', 'Mix eggs and cheese', 'Combine all', 'Serve'],
        image: 'carbonara.jpg'
    },
    {
        title: 'Chicken Curry',
        description: 'A spicy and flavorful chicken dish.',
        ingredients: ['Chicken', 'Curry Powder', 'Onions', 'Garlic', 'Tomatoes'],
        steps: ['Cook onions and garlic', 'Add chicken', 'Add spices', 'Simmer', 'Serve'],
        image: 'chicken-curry.jpg'
    },
    {
        title: 'Chocolate Chip Cookies',
        description: 'Classic homemade cookies.',
        ingredients: ['Butter', 'Sugar', 'Brown Sugar', 'Eggs', 'Vanilla Extract', 'Flour', 'Baking Soda', 'Salt', 'Chocolate Chips'],
        steps: ['Cream butter and sugars', 'Add eggs and vanilla', 'Mix in dry ingredients', 'Stir in chocolate chips', 'Bake'],
        image: 'Chocolate-Chip-cookies.jpg'
    },
    {
        title: 'Caesar Salad',
        description: 'A crisp and refreshing salad.',
        ingredients: ['Romaine Lettuce', 'Caesar Dressing', 'Croutons', 'Parmesan Cheese', 'Lemon'],
        steps: ['Chop lettuce', 'Toss with dressing', 'Add croutons and cheese', 'Squeeze lemon', 'Serve'],
        image: 'Classic_Caesar.jpg'
    },
    {
        title: 'Tomato Soup',
        description: 'A warm and comforting soup.',
        ingredients: ['Tomatoes', 'Onion', 'Garlic', 'Vegetable Broth', 'Basil', 'Cream'],
        steps: ['Cook onions and garlic', 'Add tomatoes and broth', 'Simmer', 'Blend', 'Stir in cream', 'Serve'],
        image: 'Tomato-Soup.jpg'
    },
    {
        title: 'Pancakes',
        description: 'Fluffy and delicious breakfast pancakes.',
        ingredients: ['Flour', 'Baking Powder', 'Salt', 'Sugar', 'Milk', 'Egg', 'Butter'],
        steps: ['Mix dry ingredients', 'Add wet ingredients', 'Cook on griddle', 'Serve with syrup'],
        image: 'Pancakes.jpg'
    },
    {
        title: 'Guacamole',
        description: 'A creamy and flavorful avocado dip.',
        ingredients: ['Avocados', 'Onion', 'Tomato', 'Cilantro', 'Lime', 'Salt'],
        steps: ['Mash avocados', 'Mix in chopped onion, tomato, and cilantro', 'Add lime juice and salt', 'Serve'],
        image: 'Guacamole.jpg'
    },

    {
        title: 'Beef Stroganoff',
        description: 'A rich and creamy Russian beef dish.',
        ingredients: ['Beef', 'Mushrooms', 'Onions', 'Sour Cream', 'Beef Broth'],
        steps: ['Cook beef', 'Add onions and mushrooms', 'Stir in sour cream and broth', 'Simmer', 'Serve over noodles'],
        image: 'Beef-stroganoff.jpg'
    },
    {
        title: 'Vegetable Stir-Fry',
        description: 'A quick and healthy vegetable dish.',
        ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce', 'Garlic', 'Ginger'],
        steps: ['Chop vegetables', 'Stir-fry garlic and ginger', 'Add vegetables', 'Add soy sauce', 'Serve'],
        image: 'vegetable-stir-fry.jpg'
    },
    {
        title: 'Fish Tacos',
        description: 'A fresh and zesty Mexican dish.',
        ingredients: ['Fish Fillets', 'Tortillas', 'Cabbage', 'Lime', 'Sour Cream', 'Cilantro'],
        steps: ['Cook fish', 'Prepare toppings', 'Assemble tacos', 'Serve with lime wedges'],
        image: 'fish-tacos.jpg'
    }
];


document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query));
    displayRecipeList(filteredRecipes);
});

function displayRecipeList(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        recipeItem.innerHTML = `<h3>${recipe.title}</h3><p>${recipe.description}</p>`;
        recipeItem.addEventListener('click', () => displayRecipeDetails(recipe));
        recipeList.appendChild(recipeItem);
    });
}

function displayRecipeDetails(recipe) {
    const recipeDetails = document.getElementById('recipe-details');
    recipeDetails.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>Ingredients</h3>
        <ul id="ingredients-list">
            ${recipe.ingredients.map(ingredient => `<li class="ingredient">${ingredient}</li>`).join('')}
        </ul>
        <h3>Steps</h3>
        <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
        <button id="print-recipe">Print Recipe</button>
    `;
    document.getElementById('print-recipe').addEventListener('click', () => window.print());
    document.querySelectorAll('.ingredient').forEach(ingredient => {
        ingredient.addEventListener('click', () => {
            ingredient.classList.toggle('purchased');
        });
    });
}

//A display of all recipes
displayRecipeList(recipes);
