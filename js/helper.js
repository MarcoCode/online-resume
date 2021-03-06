var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<span class="flex-item bio-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></span>';
var HTMLmobile = '<span class="flex-item bio-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></span>';
var HTMLemail = '<span class="flex-item bio-item"><span class="orange-text">email</span><span class="white-text">%data%</span></span>';
var HTMLtwitter = '<span class="flex-item bio-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></span>';
var HTMLgithub = '<span class="flex-item bio-item"><span id="hub-link" class="orange-text">github</span><span class="white-text">%data%</span></span>';
var HTMLblog = '<span class="flex-item bio-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></sp>';
var HTMLlocation = '<span class="flex-item bio-item"><span class="orange-text">location</span><span class="white-text">%data%</span></span>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="http://www.hecticmojo.com">%data%';
var HTMLworkTitle = '  - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="https://www.github.com/marcocode/cv">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#%website%">%data%';
var HTMLschoolDegree = '  --  %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h2>Online Classes</h2>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = '  -  %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function() {};
    $name.html(iName);
  });
});

function displaySkills() {
  if (bio.skills.length > 0) {
    var formattedSkill, i = 0;
    $('#header').append(HTMLskillsStart);

    for (var index in bio.skills) {
      formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
      $('#skills').append(formattedSkill);
      i++;
    }
  }
}

function generateResume(bio, work, education, projects) {
  bio.display();
  displaySkills();
  work.display();
  education.display();
  projects.display();
  $('#mapDiv').append(googleMap);
}

function inName(name) {
  var firstName = name.split(" ")[0].replace(/([^.])/, function(_, letter) {
    return letter.toUpperCase();
  });
  var lastName = name.split(" ")[1].toUpperCase();
  return firstName + " " + lastName;
}

clickLocations = [];

function logClicks(x, y) {
  clickLocations.push({
    x: x,
    y: y
  });
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {

    var locations = [];
    var extract = />[A-Z]\w+\s*\w+/;

    function getLocation(string) {
      return string.match(extract)[0].replace(">", "");
    }

    locations.push(getLocation(bio.contacts.location));

    education.schools.forEach(function(element) {
      locations.push(getLocation(element.location));
    });

    work.jobs.forEach(function(element) {
      locations.push(getLocation(element.location));
    });
    return locations;
  }

  function createMapMarker(placeData) {

    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {

    var service = new google.maps.places.PlacesService(map);

    locations.forEach(function(place) {
      var request = {
        query: place || "..."
      };

      service.textSearch(request, callback);
    });
  }

  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);
}

window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});
