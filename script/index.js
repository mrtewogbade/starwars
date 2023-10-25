
function openFullImg(pic) {
    const fullImgBox = document.getElementById("fullImgBox");
    const fullImg = document.getElementById("fullImg");

    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    const fullImgBox = document.getElementById("fullImgBox");
    fullImgBox.style.display = "none";
}

// Function to display character data
function displayCharacterData(data) {
    const characterDataDisplay = document.getElementById('character-data-display');
    characterDataDisplay.innerHTML = `
      <h1> Bio Data </h1>
      <p>Name: ${data.name}</p>
      <p>Height: ${data.height}</p>
      <p>Gender: ${data.gender}</p>


      <!-- Add more properties as needed -->
    `;
  }
  
  // Function to fetch character data from SWAPI
  function fetchCharacterData(characterName) {
    const apiUrl = `https://swapi.dev/api/people/?search=${characterName}`;
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(data => {
        if (data.results.length > 0) {
          const character = data.results[0];
          displayCharacterData(character);
        } else {
          console.log(`Character not found: ${characterName}`);
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
      });
  }
  
  // Add click event handlers to your gallery items
  const galleryItems = document.querySelectorAll('.img-gallery img');
  galleryItems.forEach(item => {
    item.addEventListener('click', function () {
      const characterName = item.getAttribute('data-character');
      fetchCharacterData(characterName);
    });
  });
  
