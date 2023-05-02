# cocktail-api

My first time interacting with an API. 
In this case we send a simple request to the CocktailDB for drink recipes. 

Type in any ingredient for a drink recipe. 

This is a JavaScript code for a web application that fetches and displays cocktail details based on user input. Here's what it does:

- Declares an asynchronous function called getDrink that gets triggered when the button is clicked
- Retrieves the user's input from an HTML input element
- Fetches data from the CocktailDB API with the input value
- Parses the response data into JSON format
- Displays the cocktail name, image, instructions, and ingredients by modifying the relevant HTML elements
- Sets up an addIngredients function that iterates through the ingredient list and adds them to an unordered list on the page
- Listens for button clicks and calls the getDrink function.
