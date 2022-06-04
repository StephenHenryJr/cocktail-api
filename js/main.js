// document.querySelector('button').addEventListener('click', getDrink)

// function getDrink(){
//     let drink = document.querySelector('input').value 
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.drinks[0])
//       document.querySelector('h2').innerText = data.drinks[0].strDrink
//       document.querySelector('img').src = data.drinks[0].strDrinkThumb
//       document.querySelector('h3').innerText = data.drinks[0].strInstructions
//       for (let i = 1; i < 16; i++) {
//         let ingredient = data.drinks[0][`strIngredient${i}`];
//         if(ingredient != null) {
//           console.log(ingredient)
//           let listItem = document.createElement('li')
//           listItem.innerHTML = ingredient;
//           document.querySelector('ul').appendChild(listItem)
//         }
//       }
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

// }

// getDrink()



let getDrink = async () => {
  let drink = document.querySelector('input').value;
  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[0]);
      document.querySelector('h2').innerText = data.drinks[0].strDrink;
      document.querySelector('img').src = data.drinks[0].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[0].strInstructions;
      function addIngredients() {
        for (let i = 1; i < 16; i++) {
          let ingredient = data.drinks[0][`strIngredient${i}`];
          if (ingredient != null) {
            console.log(ingredient);
            let listItem = document.createElement('li');
            listItem.innerHTML = ingredient;
            document.querySelector('ul').appendChild(listItem);
          }
        }
      }
      addIngredients();
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

getDrink()
document.querySelector('button').addEventListener('click', getDrink)
