let finalMessage = [];
const day = ["today", "tomorrow"];
const weather = ["sunny", "rainy", "cloudy", "clear"];
const item = ["a winter jacket", "an umbrella", "suncream", "a hoodie"];
let dayNumber = Math.floor(Math.random() * 2);
let weatherNumber = Math.floor(Math.random() * 4);
let itemNumber = Math.floor(Math.random() * 4);

finalMessage = [day[dayNumber] + " it is going to be " + weather[weatherNumber] + " we would recommed to go outside with " + item[itemNumber]];
console.log(finalMessage);