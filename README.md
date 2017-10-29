# IF/ELSE PRACTICE

| JAVASCRIPT SYMBOL  |     MEANING     |
|--------------------|-----------------|
|         ==         | equals          |
|         !=         | does not equal  |
|         &&         | and             |


## Example
``` var likesSaltyFoods = prompt("Do you like salty foods?") ```

``` var likesSugaryFoods = prompt("Do you like sugary foods?") ```

``` JavaScript
if (likesSugaryFoods == "yes" && likesSaltyFoods == "yes") {
  alert("Have a delicious chocolate covered peanutbutter-filled pretzel!")
} else if (likesSugaryFoods == "no") && likesSaltyFoods == "no" {
  alert("I'm not sure what kind of food to give you!?")
}
```

## Add some more to your if/else statement in `script.js`
* **ELSE IF** the user likes salty food and does not like sugary food, alert the user and offer them something salty.
* **ELSE IF** the user does not like salty food and likes sweet food, alert the user and offer them something sweet.
* **ELSE** tell the user you don't know what to given them!
