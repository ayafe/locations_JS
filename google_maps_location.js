let map;
let currentInfoWindow = null; // Declare the variable here
let z=1;

    $.getJSON('http://geolocation-db.com/json/', function(data) {
    // This function will be executed when the response is received.
    // The 'data' parameter will contain the JSON data from the response.

    // Accessing different properties from the JSON data.
    var countryName = data.country_name;
    var city = data.city;
    var postalCode = data.postal;
    var latitude = data.latitude;
    var longitude = data.longitude;
    var ipAddress = data.IPv4;
    var state = data.state;
	var countryCode=data.country_code;


// Checking if the country code is "US" and printing "USA" to the screen.
switch (countryCode){
	case 'US':
	initMap('USA');
	openTab('USA');
		//document.getElementById("output").textContent = "USA";
		break;
	case 'AU':
		initMap('AU');
		//document.getElementById("output").textContent = "Australia";
		break;
	case 'NZ':
	initMap('NZ');
		//document.getElementById("output").textContent = "NZ";
		break;
	case 'IE':
	initMap('EUROPE');
		//document.getElementById("output").textContent = "EUROPE";
		break;
	case 'GB':
	initMap('EUROPE');
		//document.getElementById("output").textContent = "EUROPE";
		break;
	case 'MT':
	initMap('EUROPE');
		//document.getElementById("output").textContent = "EUROPE";
		break;
	case 'TW':
		initMap('ASIA');
	default:
	initMap('ASIA');
	
		//document.getElementById("output").textContent = "USA";
	}
    /* Display the extracted information in the console.
    console.log('Country Name:', countryName);
    console.log('City:', city);
    console.log('Postal Code:', postalCode);
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
    console.log('IP Address:', ipAddress);
    console.log('State:', state);
    console.log('country code:', countryCode);
    console.log('x', x);
    console.log('y', y);
    console.log('z', z);
	*/
});


function initMap(region) {
    switch (region) {
        case 'AU':
            x = -25; y = 135;
			z=4;
            break;
        case 'USA':
            x = 37.774929; y = -122.419418;
            z = 3;
            break;
        case 'EUROPE':
            x = 48.856613; y = 2.352222;
            z = 3;
            break;
        case 'NZ':		
            x = -38.72423916723307; y = 176.04299994208205;
            z = 6;
            break;
        case 'SOUTHAMERICA':
            x = 23.634501; y = -102.552788;
            z = 4;
            break;
        case 'ASIA':
		    x = 23.982178121075467; y = 121.13106340453618;
            break;
        // Handle more cases...
        default:
            x = 19.563295168901785; y = 66.02993317224457; // Default (World map)
    }

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: z,
        center: { lat: x, lng: y }
    });

                const locations = [
{ lat: -37.8876953, lng: 145.0805995, name: 'Chadstone', anchor: 'Chadstone', state: 'VIC', url: 'https://www.chadstone.com.au/opening-hours', Address: '1341 Dandenong Road, Chadstone VIC 3148' },
{ lat: -37.7729067, lng: 144.8863552, name: 'Highpoint', anchor: 'Highpoint', state: 'VIC', url: 'https://www.highpoint.com.au/centre-info/opening-hours', Address: '120 - 200 Rosamond Rd, Maribyrnong VIC 3032' },
{ lat: -36.7655247, lng: 144.280931, name: 'Bendigo Marketplace', anchor: 'Bendigo Marketplace', state: 'VIC', url: 'https://bendigomarketplace.com.au/trading-hours/', Address: '116-120 Mitchell St, Bendigo VIC 3550' },
{ lat: -37.53211995, lng: 143.8234568, name: 'Stockland Wendouree', anchor: 'Stockland Wendouree', state: 'VIC', url: 'https://www.westfield.com.au/geelong/opening-hours', Address: 'Cnr Norman & Gillies Streets, Wendouree VIC 3355' },
{ lat: -37.696395, lng: 144.7753492, name: 'Watergardens Shopping Centre', anchor: 'Watergardens Shopping Centre', state: 'VIC', url: 'https://watergardens.qicre.com/Centre-Information/Opening-Hours', Address: '399 Melton Hwy, Taylors Lakes VIC 3038' },
{ lat: -38.1475485, lng: 144.3625276, name: 'Westfield Geelong', anchor: 'Westfield Geelong', state: 'VIC', url: 'https://www.westfield.com.au/geelong', Address: '95 Malop St, Geelong VIC 3220' },
{ lat: -37.6537547, lng: 145.0220845, name: 'Epping Plaza', anchor: 'Epping Plaza', state: 'VIC', url: 'https://pacificepping.qicre.com/Centre-Information/Opening-Hours', Address: '571-583 High Street, Epping VIC 3076' },
{ lat: -31.7437996, lng: 115.766492, name: 'Joondalup', anchor: 'Joondalup', state: 'WA', url: 'https://www.lakesidejoondalup.com.au/opening-hours/', Address: 'Lakeside Joondalup Shopping City - 420 Joondalup Dr, Joondalup WA 6027' },
{ lat: -33.87208667, lng: 151.2069785, name: 'Queen Victoria Building', anchor: 'Queen Victoria Building', state: 'NSW', url: 'https://www.qvb.com.au/opening-hours', Address: '455 George St, Sydney NSW 2000' },
{ lat: -33.7944766, lng: 151.1859555, name: 'Chatswood Chase', anchor: 'Chatswood Chase', state: 'NSW', url: 'https://www.chatswoodchasesydney.com.au/centre-info/opening-hours/', Address: '345 Victoria Ave, Chatswood NSW 2067' },
{ lat: -33.9448121, lng: 151.2242561, name: 'Westfield Eastgardens', anchor: 'Westfield Eastgardens', state: 'NSW', url: 'https://www.westfield.com.au/eastgardens/opening-hours', Address: '152 Bunnerong Rd, Eastgardens NSW 2036' },
{ lat: -32.76235825, lng: 151.59387775, name: 'Green Hills Shopping CentreÂ', anchor: 'Green Hills Shopping CentreÂ', state: 'NSW', url: 'https://www.stockland.com.au/shopping-centres/centres/stockland-green-hills/visit/opening-hours', Address: 'Molly Morgan Dr, East Maitland NSW 2323' },
{ lat: -33.7319684, lng: 151.0041557, name: 'Castle Towers', anchor: 'Castle Towers', state: 'NSW', url: 'https://www.castletowers.com.au/centre-information/opening-hours', Address: '6-14 Castle St, Castle Hill NSW 2154' },
{ lat: -33.7521108, lng: 150.69153275, name: 'Westfield Penrith', anchor: 'Westfield Penrith', state: 'NSW', url: 'https://www.westfield.com.au/penrith/opening-hours', Address: '585 High St, Penrith NSW 2750' },
{ lat: -33.7725086, lng: 150.9065565, name: 'Westpoint Blacktown', anchor: 'Westpoint Blacktown', state: 'NSW', url: 'https://westpoint.qicre.com/Centre-Information/Opening-Hours', Address: '17 Patrick St, Blacktown NSW 2148' },
{ lat: -34.0777715, lng: 150.797782, name: 'Macarthur Square', anchor: 'Macarthur Square', state: 'NSW', url: 'https://www.macarthursquare.com.au/opening-hours/', Address: '200 Gilchrist Dr, Campbelltown NSW 2560' },
{ lat: -34.0351222, lng: 151.1000671, name: 'Westfield Miranda', anchor: 'Westfield Miranda', state: 'NSW', url: 'https://www.westfield.com.au/miranda/opening-hours', Address: '600 Kingsway, Miranda NSW 2228' },
{ lat: -33.874608, lng: 151.1059595, name: 'Westfield Burwood', anchor: 'Westfield Burwood', state: 'NSW', url: 'https://www.westfield.com.au/burwood/opening-hours', Address: '100 Burwood Rd, Burwood NSW 2134' },
{ lat: -33.8177376, lng: 151.0021636, name: 'Westfield Parramatta', anchor: 'Westfield Parramatta', state: 'NSW', url: 'https://www.westfield.com.au/parramatta/opening-hours', Address: '159 - 175 Church Street, Parramatta NSW 2051' },
{ lat: -33.8914152, lng: 151.2508154, name: 'Westfield Bondi Junction', anchor: 'Westfield Bondi Junction', state: 'NSW', url: 'https://www.westfield.com.au/bondijunction/opening-hours', Address: '500 Oxford St, Bondi Junction NSW 2022' },
{ lat: -33.3085715, lng: 151.4119084, name: 'Westfield Tuggerah', anchor: 'Westfield Tuggerah', state: 'NSW', url: 'https://www.westfield.com.au/tuggerah/opening-hours', Address: '50 Wyong Rd, Tuggerah NSW 2259' },
{ lat: -30.2850931, lng: 153.08343, name: 'Roselands Shopping Centre', anchor: 'Roselands Shopping Centre', state: 'NSW', url: 'https://www.roselands.com.au/opening-hours', Address: '24 Roselands Drive, Roselands NSW 2196' },
{ lat: -34.0417723, lng: 150.7372674, name: 'Narellan Town Centre', anchor: 'Narellan Town Centre', state: 'NSW', url: 'https://www.narellantowncentre.com.au/customer-service/trading-hours', Address: '326 Camden Valley Way, Narellan NSW 2567' },
{ lat: -34.5646063, lng: 150.8390092, name: 'Stockland Shellharbour', anchor: 'Stockland Shellharbour', state: 'NSW', url: 'https://www.stockland.com.au/shopping-centres/centres/stockland-shellharbour/visit/opening-hours', Address: '211 Lakes entrance Road, Shellharbour City Centre NSW 2529' },
{ lat: -16.9256735, lng: 145.771288, name: 'Cairns Central', anchor: 'Cairns Central', state: 'QLD', url: 'https://www.cairnscentral.com.au/opening-hours/', Address: '1/21 McLeod St, Cairns City QLD 4870' },
{ lat: -26.654726, lng: 153.0885331, name: 'Sunshine Plaza', anchor: 'Sunshine Plaza', state: 'QLD', url: 'https://www.sunshineplaza.com/opening-hours/', Address: '154/164 Horton Parade, Maroochydore QLD 4558' },
{ lat: -27.4997198, lng: 152.9728546, name: 'Indooroopilly Shopping Centre', anchor: 'Indooroopilly Shopping Centre', state: 'QLD', url: 'https://indooroopillyshopping.com.au/opening-hours/', Address: '322 Moggill Road, Indooroopilly QLD 4608' },
{ lat: -27.38611015, lng: 153.03200635, name: 'Westfield Chermside', anchor: 'Westfield Chermside', state: 'QLD', url: 'https://www.westfield.com.au/chermside/opening-hours', Address: 'Cnr Gympie & Hamilton Roads, Chermside QLD 4032' },
{ lat: -27.93294075, lng: 153.33697205, name: 'Westfield Helensvale', anchor: 'Westfield Helensvale', state: 'QLD', url: 'https://www.westfield.com.au/helensvale/opening-hours', Address: '1-29 Millaroo Drive, Helensvale QLD 4212' },
{ lat: -35.0159567, lng: 138.544902, name: 'Westfield Marion', anchor: 'Westfield Marion', state: 'SA', url: 'https://www.westfield.com.au/marion/opening-hours', Address: '297 Diagonal Rd, Oaklands Park SA 5046' },
{ lat: -34.9806143, lng: 138.5134337, name: 'NewsXpress', anchor: 'NewsXpress', state: 'SA', url: '#', Address: '46 Jetty Road, Glenelg SA 5045' },
{ lat: -12.374606, lng: 130.881705, name: 'Casuarina Square', anchor: 'Casuarina Square', state: 'NT', url: 'casuarinasquare.com.au/centre-info/opening-hours-page/', Address: '247 Trower Road, Casuarina NT 0810' },

//USA locations
{ lat: 21.4198633 , lng: -157.805225 , name: 'Windward Mall' ,anchor:  'Windward Mall'
,state:'HI ' ,url: 'https://www.windwardmall.com/hours-directions/' ,Address:'46-056 Kamehameha Hwy, Kaneohe, Hawaii Phone number (808)2030809'},
{ lat: 34.146276 , lng: -118.256754 , name: 'Glendale Galleria' ,anchor:  'Glendale Galleria'
,state:'CL ' ,url: 'https://www.glendalegalleria.com/en/visit.html' ,Address:'100 W Broadway Suite 100, Glendale,'},
{ lat: 32.966101 , lng: -97.042636 , name: 'Grapevine Mills' ,anchor:  'Grapevine Mills'
,state:'TX ' ,url: 'https://www.simon.com/mall/grapevine-mills/hours' ,Address:'3000 Grapevine Mills Pkwy, Grapevine'},
{ lat: 32.807657 , lng: -96.623686 , name: 'Town East Mall' ,anchor:  'Town East Mall'
,state:'TX ' ,url: 'https://www.towneastmall.com/en/visit.html' ,Address:'2063 Town East Mall, Mesquite'},
//Europe Locations
{ lat: 53.32128906, lng: -6.39461517, name: 'Liffey Valley Shopping Centre', anchor: 'Liffey Valley Shopping Centre', state: 'Ireland', url: 'https://www.liffeyvalley.ie/centre/opening-hours/', Address: 'Fonthill Rd Clondalkin Dublin 22 D22R6K8 Phine Number (808)2030809' },
{ lat: 51.507568, lng: -0.2212683, name: 'Westfield London ', anchor: 'Westfield London ', state: 'UK', url: 'https://www.westfield.com/united-kingdom/london/access#address-info', Address: '1081 Ariel Way, London W12 7GF' },
{ lat: 51.54301987, lng: -0.00386322, name: 'Westfield Stratford City ', anchor: 'Westfield Stratford City ', state: 'UK', url: 'https://www.westfield.com/united-kingdom/stratfordcity/access', Address: '157 Montfichet Rd, London E20 1EJ' },
{ lat: 35.9128418, lng: 14.50143623, name: 'The Point Shopping Mall', anchor: 'The Point Shopping Mall', state: 'Malta', url: 'https://thepointmalta.com/', Address: 'Tigne Point Tas-Sliema TP, Tas-Sliema, Malta' },
//NZ locations

{ lat: -36.9139599 , lng: 174.8409543 , name: 'Sylvia Park Shopping Centre ' ,anchor:  'Sylvia Park Shopping Centre '
,  url: 'https://www.sylviapark.com/visit/' ,Address:  '286 Mount Wellington Highway, Mount Wellington, Auckland 1060, New Zealand (We are located near Jay Jays and Sunglass hut)' },
{ lat: -37.7482524 , lng: 175.23951505 , name: 'The Base ' ,anchor:  'The Base '
,state:"",  url: 'https://www.the-base.co.nz/en/opening-hours/' ,Address:   'Te Rapa Road & Wairere Drive, Hamilton 3200, New Zealand (We are located on the ground floor near Michael Hill)' },
{ lat: -40.356890 , lng: 175.613260 , name: 'The Plaza  ' ,anchor:  'The Plaza  '
,state:"",  url: 'https://www.theplaza.co.nz/en/opening-hours/' ,Address:  '84 The Square,  Palmerston North 2104, New Zealand (We are located between the Food Court & Kmart)' },
{ lat: -37.6756526 , lng: 176.2240784 , name: 'Bayfair Shopping Centre ' ,anchor:  'Bayfair Shopping Centre '
,state:"",  url: 'https://www.bayfair.co.nz/opening-hours/' ,Address:  ' 19 Girven Road, Mount Maunganui 3116, New Zealand  (We are located near the customer service desk) '},


                // Add more locations...
            ];

    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name
        });

        const content = `<a href="#${location.anchor}">${location.name}</a>`;

        const infoWindow = new google.maps.InfoWindow({
            content: content
        });





marker.addListener('click', () => {
    if (currentInfoWindow) {
        currentInfoWindow.close();
    }

    if (currentInfoWindow !== infoWindow) {
        infoWindow.open(map, marker);
        currentInfoWindow = infoWindow;

        // Render dynamic content for the selected location
        renderLocationDetails(location, activeTabId);
    } else {
        currentInfoWindow = null;
        infoWindow.close();
        document.getElementById(activeTabId + '-store-details').innerHTML = '';
    }
});

    });
}

function renderLocationDetails(location, tabId) {
    const dynamicContent = `
        <div class="AU-store-details">
            <h3>${location.name}</h3>
            <a href= "${location.url}" target="_blank">For Opening hours click here</a></h3>
            <p><b>Address:</b> ${location.Address}</p>
			<p class="location-state">State: ${location.state}</p>
            <!-- ...other content... -->
        </div>`;

    // Set the dynamic content to the 'store-details' element of the specified tab
    document.getElementById(tabId + '-store-details').innerHTML = dynamicContent;
	  // Display all locations within the specified tab
    showAllLocations(tabId);
}

function resetMap(tabId) {
    location.reload();
}

