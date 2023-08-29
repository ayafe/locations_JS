let infoWindows = [];
let activeTabId = 'AU'; // Set the default active tab
const defaultTab = 'AU'; // Set the ID of the default tab you want to display



  // Function to show the default tab
  function showDefaultTab() {
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
    document.getElementById(defaultTab).style.display = "block";
  }

  // Call the function to show the default tab when the page loads
  window.onload = showDefaultTab;

  const locationLists = document.querySelectorAll('.location-list');

  

  // AU search functionality
  document.getElementById('locationSearchAU').addEventListener('input', function () {
    searchLocations(this.value, 'AU');
  });

  // USA search functionality
  document.getElementById('locationSearchUSA').addEventListener('input', function () {
    searchLocations(this.value, 'USA');
  });
  // NZ search functionality
  document.getElementById('locationSearchNZ').addEventListener('input', function () {
    searchLocations(this.value, 'NZ');
  });

// Europe search functionality
document.getElementById('locationSearchEurope').addEventListener('input', function () {
    searchLocations(this.value, 'EUROPE');
});

  function searchLocations(searchTerm, tabId) {
    const locations = document.querySelectorAll(`#${tabId} .location`);
    locations.forEach(location => {
      const locationText = location.textContent.toLowerCase();
      if (locationText.includes(searchTerm.toLowerCase())) {
        location.style.display = "block";
      } else {
        location.style.display = "none";
      }
    });
  }
  
  // Function to open a specific tab
function openTab(tabId) {
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
        const tabStoreDetails = tabs[i].querySelector('.store-details');
        if (tabStoreDetails) {
            tabStoreDetails.innerHTML = ''; // Clear the store details for each tab
        }
    }
    document.getElementById(tabId).style.display = "block";
    activeTabId = tabId; // Update the activeTabId
    // Close the current info window when switching tabs
    
	currentInfoWindow = null;
    // Close all open info windows
    closeAllInfoWindows();
}



function closeAllInfoWindows() {
    infoWindows.forEach(infoWindow => {
        infoWindow.close();
    });
}


// Function to handle state filter links
function setupStateFilter(tabId) {
    const stateLinks = document.querySelectorAll(`#${tabId} .state-link`);
    stateLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const state = this.getAttribute('data-state');
            filterLocationsByState(state, tabId);
        });
    });
}

function filterLocationsByState(selectedState) {
    const locations = document.querySelectorAll('.location');
    
    locations.forEach(location => {
        const locationStateElement = location.querySelector('.location-state');
        
        if (locationStateElement !== null) {
            const locationState = locationStateElement.textContent;
            
            if (selectedState === 'All' || locationState.trim() === selectedState.trim()) {
                location.style.display = 'block';
            } else {
                location.style.display = 'none';
            }
        }
    });
}


// Function to show all locations
function showAllLocations(tabId) {
    const locations = document.querySelectorAll(`#${tabId} .location`);
    locations.forEach(location => {
        location.style.display = "block";
    });
}



// Call setupStateFilter for each tab
setupStateFilter('AU');
setupStateFilter('EUROPE');
setupStateFilter('USA');