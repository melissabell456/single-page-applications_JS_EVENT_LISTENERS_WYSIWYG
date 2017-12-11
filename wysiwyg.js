let characters = [
{
    title: "Antagonist",
    name: "Grinch",
    bio: "'You're a mean one, Mr. Grinch' didn't just come out of nowhere. The Grinch is the lead antagonist of the movie and has some pretty nasty traits. He is sour about anything to do with Christmas and lives alone on the top of Mt. Crumpit with his dog Max. It is said that the Grinch's heart is 'two sizes too small'.The Grinch undergoes a major character change at the end of the movie, where his feelings for Christmas change drastically.",
    image: "https://thegrinchiah.weebly.com/uploads/1/5/6/0/15601704/800061139.jpg?177",
    lifespan: {
      birth: 1966,
      death: "n/a"
    }
  },
{
    title: "Protagonist",
    name: "Cindy Lou Who",
    bio: "Cindy Lou Who is a young girl who lives with her family in Whoville. She is full of joy and has a very kind heart. When everyone wanted to shun the grinch, she embraced him. She belives that everyone should have a chance to be included and is determined to show the Whos of Whoville what Christmas is really all about.",
    image: "https://thegrinchiah.weebly.com/uploads/1/5/6/0/15601704/311357502.jpg?180",
    lifespan: {
      birth: 1966,
      death: "n/a"
    }
  },
{
    title: "Unwilling Antagonist",
    name: "Max",
    bio: "The Grinch's slave..I mean, loyal sidekick.",
    image: "https://thegrinchiah.weebly.com/uploads/1/5/6/0/15601704/594919243.jpg?175",
    lifespan: {
      birth: 1966,
      death: "n/a"
    }
  },
{
    title: "Antagonist",
    name: "The Mayor, Augustus",
    bio: "Augustus is who the Grinch seems to dislike the most. He is the mayor of Who-ville and wants the Grinch to be no part of their town. He went to school with the Grinch as a boy, and teased him to no end. He now has a relationship with Martha May, another reason the Grinch hates him so much.",
    image: "https://thegrinchiah.weebly.com/uploads/1/5/6/0/15601704/832856276.jpg?199",
    lifespan: {
        birth: 2000,
        death: 2000
    }
}
];

let userInputField = document.getElementById("inputField");
let pplBox = document.getElementById("allPeople");

for (let i = 0; i < characters.length; i++) {
    let personBox = document.createElement("div");
    personBox.setAttribute("class", "person");
    pplBox.appendChild(personBox);
    // add h2 to DOM for title with text
    let charTitleField = document.createElement("h2");
    personBox.appendChild(charTitleField);
    let charTitleContent = document.createTextNode(characters[i].title);
    charTitleField.appendChild(charTitleContent);
    // add h3 to DOM for name with text
    let charNameField = document.createElement("h3");
    personBox.appendChild(charNameField);
    let charNameContent = document.createTextNode(characters[i].name);
    charNameField.appendChild(charNameContent);
    // add p to DOM for bio with text
    let charBioField = document.createElement("p");
    personBox.appendChild(charBioField);
    let charBioContent = document.createTextNode(characters[i].bio);
    charBioField.appendChild(charBioContent);
    // add img to DOM for image with link
    let charIMGField = document.createElement("div");
    personBox.appendChild(charIMGField);
    charIMGField.innerHTML = `<img src=${characters[i].image}>`;
    // add lifespen to DOM w/ contents
    let charLifeSpanField = document.createElement("p");
    personBox.appendChild(charLifeSpanField);
    let charLifeSpanContent = document.createTextNode(characters[i].lifespan.birth + " - " + characters[i].lifespan.death);
    charLifeSpanField.appendChild(charLifeSpanContent);
    personBox.addEventListener("click", function() {
        personBox.classList.toggle("clicked");
        userInputField.focus();
        userInputField.addEventListener("input", function () {
        charBioField.innerText = userInputField.value;
        });
    });
}

userInputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        userInputField.value = " ";
    };
})

