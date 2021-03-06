var bio = {
  'name': HTMLheaderName.replace("%data%", 'Marco Bagnasco'),
  'role': HTMLheaderRole.replace("%data%", 'Junior Web Developer'),
  'contacts': {
    'mobile': HTMLmobile.replace("%data%", '0777 - 404XXXX'),
    'email': HTMLemail.replace("%data%", 'admin@hecticmojo.com'),
    'github': HTMLgithub.replace("%data%", "marcocode"),
    'location': HTMLlocation.replace("%data%", "London")
  },
  'welcomeMessage': 'Welcome to my website',
  'skills': [
    'Problem Solver', 'Team Work', 'Ruby', 'JavaScript', 'TDD'
  ],
  'biopic': HTMLbioPic.replace("%data%", 'images/avatar.png'),
  display() {
    var contactsDiv = '<div class="flex-box" id="contacts"></div>';
    $('#header').append(bio.name, bio.role, bio.biopic, contactsDiv);
    $('#contacts').append(bio.contacts['email'], bio.contacts['github'], bio.contacts['location']);
    $('#footerContacts').append(bio.contacts['email'], bio.contacts['mobile'], bio.contacts['github']);
  }
};

var work = {
  'jobs': [{
    'position': HTMLworkTitle.replace("%data%", "Junior Developer"),
    'employer': HTMLworkEmployer.replace("%data%", 'Freelance'),
    'dates': HTMLworkDates.replace("%data%", '10/2015 - present'),
    'location': HTMLworkLocation.replace("%data%", 'London'),
    'workDescription': HTMLworkDescription.replace("%data%", "Front-End (JavaScript/Angular), Back-End (Ruby/RubyOnRails), OpenSource (Git/GitHub)")
  }, {
    'position': HTMLworkTitle.replace("%data%", "Manager"),
    'employer': HTMLworkEmployer.replace("%data%", 'Young Harmonisers UK'),
    'dates': HTMLworkDates.replace("%data%", '1/2016 - 06/2016'),
    'location': HTMLworkLocation.replace("%data%", 'Dagenham'),
    'workDescription': HTMLworkDescription.replace("%data%", "Recruitment and Training, Quality Control, Teaching.")
  }, {
    'position': HTMLworkTitle.replace("%data%", "Music Teacher"),
    'employer': HTMLworkEmployer.replace("%data%", 'Young Harmonisers UK'),
    'dates': HTMLworkDates.replace("%data%", '10/2014 - 01/2016'),
    'location': HTMLworkLocation.replace("%data%", 'London'),
    'workDescription': HTMLworkDescription.replace("%data%", "Drums Teaching up to Grade 5, Piano Assistance, Music Theory")
  }, {
    'position': HTMLworkTitle.replace("%data%", "Sales/Team Leader"),
    'employer': HTMLworkEmployer.replace("%data%", 'Various'),
    'dates': HTMLworkDates.replace("%data%", '9/2008 - 06/2012'),
    'location': HTMLworkLocation.replace("%data%", 'Savona / London'),
    'workDescription': HTMLworkDescription.replace("%data%", "Sales, Customer assistance, Customer service supervision")
  }, {
    'position': HTMLworkTitle.replace("%data%", "Computer Engineer"),
    'employer': HTMLworkEmployer.replace("%data%", 'Telmec S.N.C.'),
    'dates': HTMLworkDates.replace("%data%", '1/1999 - 06/2006'),
    'location': HTMLworkLocation.replace("%data%", 'Carcare Savona'),
    'workDescription': HTMLworkDescription.replace("%data%", "Computer system assembling, LAN, Helpdesk, onsite assistance")
  }],
  display() {
    work.jobs.forEach(function(element) {
      $('#workExperience').append(HTMLworkStart, element.position, element.dates, element.location, element.employer, element.workDescription);
    })
  }
};

var education = {
  'schools': [{
    'name': HTMLschoolName.replace("%data%", "BIMM London - UWL").replace("#%website%", "http://www.bimm.co.uk"),
    'location': HTMLschoolLocation.replace("%data%", 'London'),
    'degree': HTMLschoolDegree.replace("%data%", 'BA(Hons)'),
    'majors': ['Music'],
    'dates': HTMLschoolDates.replace("%data%", '10/2012 - 06/2015'),
    'url': 'https://www.bimm.co.uk'
  }, {
    'name': HTMLschoolName.replace("%data%", "Liceo Scientifico G.Calasanzio").replace("#%website%", "http://http://www.liceocarcare.gov.it/"),
    'location': HTMLschoolLocation.replace("%data%", 'Savona, Italy'),
    'degree': HTMLschoolDegree.replace("%data%", 'Maturità Scientifica'),
    'majors': ['Music'],
    'dates': HTMLschoolDates.replace("%data%", '10/1993 - 06/1999'),
    'url': 'http://http://www.liceocarcare.gov.it/'
  }],
  'onlineCourses': [{
    'title': HTMLonlineTitle.replace("%data%", 'Ronin'),
    'school': HTMLonlineSchool.replace("%data%", "Makers Academy").replace("#%website%", "http://www.makersacademy.com"),
    'date': HTMLonlineDates.replace("%data%", '11/2015 - 04/2016')
  }, {
    'title': HTMLonlineTitle.replace("%data%", 'Front-End Nano-Degree'),
    'school': HTMLonlineSchool.replace("%data%", "Udacity").replace("#%website%", "http://www.udacity.com"),
    'date': HTMLonlineDates.replace("%data%", '06/2016 - present')
  }],
  display() {
    for (var index in education) {
      if (index === 'schools') {
        $('#education').append(HTMLschoolStart, education[index][0].name, education[index][0].degree, education[index][0].location, education[index][0].dates);
        $('#education').append(education[index][1].name, education[index][1].degree, education[index][1].location, education[index][1].dates);
        continue;
      } else {
        $('#education').append(HTMLonlineClasses);
        $('#education').append(education[index][0].title, education[index][0].school, education[index][0].date);
        $('#education').append(education[index][1].title, education[index][1].school, education[index][1].date);
        return;
      }
    }
  }
};

var projects = {
  'projects': [{
    'title': HTMLprojectTitle.replace("%data%", "GitHub API - Vanilla JavaScript"),
    'dates': HTMLprojectDates.replace("%data%", "May 2016"),
    'description': HTMLprojectDescription.replace("%data%", "Public repositories query - Built using vanilla JS"),
    'images': HTMLprojectImage.replace("%data%", "images/githubVanilla.png")
  }, {
    'title': HTMLprojectTitle.replace("%data%", "BBC iPlayer Lister"),
    'dates': HTMLprojectDates.replace("%data%", "May 2016"),
    'description': HTMLprojectDescription.replace("%data%", "API query, with pagination and filters - Built with AngularJS"),
    'images': HTMLprojectImage.replace("%data%", "images/iplayer.png")
  }, {
    'title': HTMLprojectTitle.replace("%data%", "FairMuse"),
    'dates': HTMLprojectDates.replace("%data%", "April 2016"),
    'description': HTMLprojectDescription.replace("%data%", "FullStack App, built in a team of 4 as final project @Makers Academy- Built with AngularJS served by Ruby on Rails API"),
    'images': HTMLprojectImage.replace("%data%", "images/fairmuse.png")
  }],
  display() {
    projects.projects.forEach(function(element) {
      $('#projects').append(HTMLprojectStart, element.title, element.dates, element.description, element.images);
    });
  }
};

generateResume(bio, work, education, projects);
