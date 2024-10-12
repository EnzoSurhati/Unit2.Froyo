
function countFlavors() {
  const userInput = document.getElementById("flavorInput").value; //plugging user input id which is flavorInput
  const flavorsArray = userInput.split(','); //splitting the string with commas
  const flavorCounts = {}; //empty object to store the counts

  for (let i = 0; i < flavorsArray.length; i++) { // looooooping
      const flavor = flavorsArray[i].trim().toLowerCase(); //removing the unwanted spaces in the string and converting it to lower case :)
      if (flavorCounts[flavor]) {
          flavorCounts[flavor] += 1; //increment the count by 1
      } else {
          flavorCounts[flavor] = 1; //if not, its 1
      }
  }

  let result = 'Flavor counts:\n'; //my little alert pop up page
  for (let flavor in flavorCounts) {
      result += flavor + ": " + flavorCounts[flavor] + "\n";
  }
  alert(result); 
}