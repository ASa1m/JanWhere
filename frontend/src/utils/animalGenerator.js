const fs = require('fs');
const { escape } = require('querystring');

function generateRandomAnimal() {
    const regions = ["Asia", "Africa", "North America", "South America", "Europe", "Australia"];
    const categories = ["Mammal", "Bird", "Fish", "Reptile", "Amphibian"];
    const names = ["Lion", "Tiger", "Bear", "Wolf", "Giraffe", "Elephant", "Rhino", "Hippo", "Kangaroo", "Crocodile"];
    const descriptions = ["The lion is a species in the family Felidae and a member of the genus Panthera.",                        "The tiger is the largest species among the Felidae and classified in the genus Panthera.",                        "The brown bear is a large bear species found across Eurasia and North America.",                        "The gray wolf is a species of canid native to the wilderness and remote areas of North America and Eurasia.",                        "The giraffe is a genus of African even-toed ungulate mammals, the tallest living terrestrial animals, and the largest ruminants.",                        "Elephants are mammals of the family Elephantidae and the largest existing land animals.",                        "The rhinoceros, commonly abbreviated to rhino, is a group of five extant species of odd-toed ungulates in the family Rhinocerotidae.",                        "The hippopotamus, also known as the common hippopotamus or river hippopotamus, is a large, mostly herbivorous, semiaquatic mammal and ungulate native to sub-Saharan Africa.",                        "Kangaroos are marsupials that are indigenous to Australia.",                        "Crocodiles are large aquatic reptiles that live throughout the tropics in Africa, Asia, the Americas, and Australia."];
    
    let randomLatitude, randomLongitude;
    do {
      randomLatitude = Math.random() * (37.1 - 23.5) + 23.5;
      randomLongitude = Math.random() * (81.3 - 60.7) + 60.7;
    } while (!isLocationInPakistan(randomLatitude, randomLongitude));
    
    const animal = {
      name: names[Math.floor(Math.random() * names.length)],
      region: "Asia",
      population: Math.floor(Math.random() * 10000),
      category: categories[Math.floor(Math.random() * categories.length)],
      location: {
        latitude: randomLatitude.toFixed(6),
        longitude: randomLongitude.toFixed(6)
      },
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      image: "https://source.unsplash.com/200x200/?" + categories[Math.floor(Math.random() * categories.length)]
    };
    
    return animal;
  }
  
  function isLocationInPakistan(latitude, longitude) {
    // Check if the location is within Pakistan's borders
    const pakistanBounds = {
      north: 37.1,
      south: 23.5,
      east: 81.3,
      west: 60.7
    };
    
    return latitude >= pakistanBounds.south && latitude <= pakistanBounds.north && longitude >= pakistanBounds.west && longitude <= pakistanBounds.east;
  }
  
  var animalData = [];
  // Example usage
  for (let i = 0; i < 10; i++){
    const randomAnimal = generateRandomAnimal();
    animalData.push(randomAnimal);

    //insert animal a text file as json
}
fs.writeFile('data.json', JSON.stringify(animalData), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
  