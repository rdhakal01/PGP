let markerCluster; // Declare the variable outside of the async function
let infoWindow;


async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: 28.216984195129687, lng: -81.48471842669254 };
  const map = new Map(document.getElementById("map"), {
    zoom: 7,
    center,
    mapId: "938d538613c03fe6",

/*
styles: [
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          { "hue": "#FFA800" },
          { "gamma": 1 }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          { "hue": "#679714" },
          { "saturation": 33.4 },
          { "lightness": -25.4 },
          { "gamma": 1 }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          { "hue": "#53FF00" },
          { "saturation": -73 },
          { "lightness": 40 },
          { "gamma": 1 }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
          { "hue": "#FBFF00" },
          { "gamma": 1 }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
          { "hue": "#00FFFD" },
          { "lightness": 30 },
          { "gamma": 1 }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          { "hue": "#00BFFF" },
          { "saturation": 6 },
          { "lightness": 8 },
          { "gamma": 1 }
        ]
      }
      // Add more styling rules as needed
    ]
*/
  });

// Fetch data from CSV and create trails array
  const trails = await fetchData();

infoWindow = new google.maps.InfoWindow();



// Create an array to hold standard Google Maps markers
const markerElements = [];
const markers = trails.map((trail) => {
const iconSize = new google.maps.Size(75, 110); // Adjust the size based on your preference
  const marker = new google.maps.Marker({
    // content: buildContent(trail),
    position: trail.position,
    map: map,
    title: trail.description,
icon: {
url: 'paws.png',
scaledSize: iconSize,
},
  });

markerElements.push(marker);


  // Use addListener for click event
  google.maps.event.addListener(marker, "click", () => {
    console.log("Marker clicked:", trail);
    toggleHighlight(marker, trail); // You can add your logic to show the info window here
  });

  return marker;
});

// Enable marker clustering with MarkerClusterer
markerCluster = new MarkerClusterer(map, markerElements, {
  gridSize: 20, // Adjust the gridSize based on your preference
  imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
  minimumClusterSize: 2, // Set the minimum number of markers to form a cluster
// styles: [{
   // width: 50,  // Adjust the width based on your preference
  //  height: 50, // Adjust the height based on your preference
    // url: 'path/to/your/custom-cluster-icon.png', // Replace with your custom cluster icon
 // }],
});










/*

// Create an array to hold standard Google Maps markers
const markers = trails.map((trail) => {
  return new google.maps.Marker({
    position: trail.position,
    map: map,
    title: trail.description,
  });
});



// Enable marker clustering with MarkerClusterer
markerCluster = new MarkerClusterer(map, markers, {
  gridSize: 20, // Adjust the gridSize based on your preference
  imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
minimumClusterSize: 2, // Set the minimum number of markers to form a cluster
});

*/



/*
// Create an array to hold standard Google Maps markers
const markers = trails.map((trail) => {
  return new google.maps.Marker({
    position: trail.position,
    map: map,
    title: trail.description,
  });
});



// Enable marker clustering with MarkerClusterer
markerCluster = new MarkerClusterer(map, markers, {
  gridSize: 20, // Adjust the gridSize based on your preference
  imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
minimumClusterSize: 2, // Set the minimum number of markers to form a cluster
});


*/



/*

// Create an array to hold AdvancedMarkerElements
  const markerElements = [];

  for (const trail of trails) {
console.log(trail.position); // Add this line for debugging
    const advancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(trail),
      position: trail.position,
      title: trail.description,
    });

markerElements.push(advancedMarkerElement);

    advancedMarkerElement.addListener("click", () => {
console.log("AdvancedMarkerElement clicked:", trail);
      toggleHighlight(advancedMarkerElement, trail);
    });

// markerElements.push(advancedMarkerElement);
  }



// Enable marker clustering with google.maps.MarkerClusterer
console.log(window.MarkerClusterer); // Check if MarkerClusterer is available
const markerClusterAdvanced = new MarkerClusterer(map, markerElements, {
//  gridSize: 30, // Adjust the gridSize based on your preference
  // minimumClusterSize: 2, // Set the minimum number of markers to form a cluster
});


return markerElements; // Return the array of AdvancedMarkerElements
*/



/*
// Create an array to hold standard Google Maps markers for clustering
const standardMarkers = trails.map((trail) => {
  return new google.maps.Marker({
    position: trail.position,
    map: map,
    title: trail.description,
  });
});

// Enable marker clustering with MarkerClusterer for standard markers
const markerCluster = new MarkerClusterer(map, standardMarkers, {
  gridSize: 20,
  imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
  minimumClusterSize: 2,
zoomOnClick: true, // Add this option to hide individual markers in clusters when clicked
});

// Create an array to hold AdvancedMarkerElements
const markerElements = [];

for (const trail of trails) {
  const advancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
    map,
    content: buildContent(trail),
    position: trail.position,
    title: trail.description,
  });

  advancedMarkerElement.addListener("click", () => {
    toggleHighlight(advancedMarkerElement, trail);
  });

  markerElements.push(advancedMarkerElement);
}

// Log the markerElements array for debugging
console.log(markerElements);

*/





}



async function fetchData() {
  try {
   // const response = await fetch('FloridaHikes.csv');
 const response = await fetch('https://raw.githubusercontent.com/rdhakal01/PGP-CSV/main/FloridaHikes.csv?token=GHSAT0AAAAAACPAU4V5PPHI5VMIUXBNXMB4ZPD2UWA');


    const data = await response.text();

    // Parse CSV data (use a library or implement your own parser)
    const parsedData = parseCSV(data);

    // Create trails array dynamically with default values for missing or invalid entries
const trails = parsedData.map((trail) => {
  const defaultTrail = {
    address: '',
    description: 'Unknown',
    type: 'Unknown',
    length: 0,
    difficulty: 0,
    time: 0,
    position: { lat: 0, lng: 0 },
  };

  return {
    ...defaultTrail,
    ...trail,
    position: {
      lat: parseFloat(trail.lat) || 0,
      lng: parseFloat(trail.lng) || 0,
    },
  };
});


    return trails;
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return [];
  }
}

function parseCSV(csv) {
  // Implement your CSV parsing logic here
  // This is a simple example, adjust based on your CSV structure
  const rows = csv.split('\n');
  const header = rows[0].split(',');

  return rows.slice(1).map((row) => {
    const values = row.split(',');
    const obj = {};

    for (let i = 0; i < header.length; i++) {
      const headerKey = header[i].trim(); // Trim extra spaces
    obj[headerKey] = (headerKey === 'lat' || headerKey === 'lng')
      ? parseFloat(values[i])
      : values[i];
  }

    return obj;
  });
}







/*

function toggleHighlight(markerView, trail) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}

*/



function toggleHighlight(marker, trail) {
    if (marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
            infoWindow.close();

// Stop marker animation when info window is closed
            google.maps.event.addListenerOnce(infoWindow, 'closeclick', () => {
                marker.setAnimation(null);
            });

        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            infoWindow.setContent(buildContent(trail));
            infoWindow.open(map, marker);
        }
    } else {
        console.error('Invalid marker:', marker);
    }
}




function buildContent(trail) {
  const infoWindowContent = `
    <div class="info-window-content">
        <div class="icon">
            <i aria-hidden="true" class="fa fa-icon fa-${trail.type}" title="${trail.type}"></i>
            <span class="fa-sr-only">${trail.type}</span>
        </div>
        <div class="details">
            <h3>${trail.description}</h3>
            <p>${trail.address}</p>
            <div class="features">
                <div>
                    <i aria-hidden="true" class="fa fa-ruler fa-lg ruler" title="length"></i>
                    <span class="fa-sr-only">length</span>
                    <span>${trail.length} mile</span>
                </div>
                <div>
                    <i aria-hidden="true" class="fa fa-stairs fa-lg stairs" title="difficulty"></i>
                    <span class="fa-sr-only">difficulty</span>
                    <span>${trail.difficulty}</span>
                </div>
                <div>
                    <i aria-hidden="true" class="fa fa-clock fa-lg clock" title="time"></i>
                    <span class="fa-sr-only">time</span>
                    <span>${trail.time} hour</span>
                </div>
            </div>
        </div>
    </div>
  `;

  return infoWindowContent;
}









/*
function buildContent(trail) {

console.log("Build content called:", trail);
  const content = document.createElement("div");

  content.classList.add("trail");
  content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${trail.type}" title="${trail.type}"></i>
        <span class="fa-sr-only">${trail.type}</span>
    </div>
    <div class="details">
        <div class="description">${trail.description}</div>
        <div class="address">${trail.address}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-ruler fa-lg ruler" title="length"></i>
            <span class="fa-sr-only">length</span>
            <span>${trail.length} mile</span></span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-stairs fa-lg stairs" title="difficulty"></i>
            <span class="fa-sr-only">difficulty</span>
            <span>${trail.difficulty}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-clock fa-lg clock" title="time"></i>
            <span class="fa-sr-only">time</span>
            <span>${trail.time} hour</sup></span>
        </div>
        </div>
    </div>
    `;
  return content;
}

*/

initMap();
