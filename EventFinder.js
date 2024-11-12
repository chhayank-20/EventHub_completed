// rgb(54, 159, 217); blue
// rgb(118, 118, 118); grey
//  rgb(30, 30, 30); black

const dark = {
  color: "rgb(54, 159, 217)",
  background: "rgb(13, 13, 13)",
};
const cardColor = {
  color: "rgb(54, 159, 217)",
  // 'background' : 'rgb(88, 88, 88)',
};
const fontColor = {
  color: "rgb(54, 159, 217)",
};

const newData1 = [
  {
    title: "Tech Summit 2024",
    description: "A two-day conference on the latest tech trends.",
    date: "2024-11-22",
    time: "10:00 AM - 5:00 PM",
    location: "Indore Convention Centre, Indore, India",
    image: "01.avif",
  },
  {
    title: "Art Exhibition",
    description: "A showcase of local artists' work.",
    date: "2024-12-05",
    time: "12:00 PM - 8:00 PM",
    location: "Art Gallery, Pune, India",
    image: "02.avif",
  },
  {
    title: "Food Festival",
    description:
      "A culinary extravaganza featuring cuisines from around the world.",
    date: "2024-12-20",
    time: "11:00 AM - 10:00 PM",
    location: "Central Park, Indore, India",
    image: "03.avif",
  },
  {
    title: "Music Concert",
    description: "Live performances by popular bands.",
    date: "2024-11-15",
    time: "6:00 PM - 11:00 PM",
    location: "Indore Stadium, Indore, India",
    image: "04.avif",
  },
  {
    title: "Book Fair",
    description: "A wide collection of books from various genres.",
    date: "2024-10-25",
    time: "9:00 AM - 8:00 PM",
    location: "City Library, Bangalore, India",
    image: "05.avif",
  },
  {
    title: "Science Exhibition",
    description: "Interactive science exhibits for all ages.",
    date: "2024-09-30",
    time: "10:00 AM - 6:00 PM",
    location: "Science Museum, Hyderabad, India",
    image: "06.jpeg",
  },
  {
    title: "Film Festival",
    description: "Screening of award-winning films.",
    date: "2024-08-20",
    time: "5:00 PM - 11:00 PM",
    location: "Indore Cinema, Indore, India",
    image: "07.jpeg",
  },
  {
    title: "Yoga Workshop",
    description: "A day of relaxation and rejuvenation.",
    date: "2024-07-10",
    time: "8:00 AM - 2:00 PM",
    location: "Yoga Center, Pune, India",
    image: "08.jpeg",
  },
  {
    title: "Craft Fair",
    description: "Handmade crafts and local artisans.",
    date: "2024-06-18",
    time: "10:00 AM - 7:00 PM",
    location: "City Hall, Bangalore, India",
    image: "09.jpeg",
  },
  {
    title: "Charity Marathon",
    description: "A marathon to raise funds for charity.",
    date: "2024-05-30",
    time: "6:00 AM - 12:00 PM",
    location: "Central Park, Indore, India",
    image: "10.jpeg",
  },
  {
    title: "Dance Competition",
    description: "Showcase of local dance talent.",
    date: "2024-11-15",
    time: "2:00 PM - 8:00 PM",
    location: "Cultural Center, Indore, India",
    image: "03.avif",
  },
  {
    title: "Theater Performance",
    description: "Live play performance by a renowned theater group.",
    date: "2024-10-05",
    time: "7:00 PM - 10:00 PM",
    location: "Drama Theater, Bangalore, India",
    image: "02.avif",
  },
];
localStorage.setItem("events", JSON.stringify(newData1));

const newEventData = [
  // {
  //   "title": "Health & Wellness Fair",
  //   "description": "Exhibition of health and wellness products.",
  //   "date": "2024-09-12",
  //   "time": "9:00 AM - 5:00 PM",
  //   "location": "Health Center, Indore, India",
  //   "image": "04.avif"
  // },
  {
    title: "Sports Tournament 2024",
    description: "Inter-school sports competition.",
    date: "2024-08-20",
    time: "8:00 AM - 4:00 PM",
    location: "Sports Complex, Hyderabad, India",
    image: "11.jpeg",
  },
  {
    title: "Coding Bootcamp 2024",
    description: "Intensive bootcamp for aspiring coders.",
    date: "2024-07-01",
    time: "10:00 AM - 6:00 PM",
    location: "Indore IT Hub, Indore, India",
    image: "10.jpeg",
  },
];
localStorage.setItem("newEvents", JSON.stringify(newEventData));

const myEventsData = [];
localStorage.setItem("myEvents", JSON.stringify(myEventsData));

function getData() {
  const eventsList = localStorage.getItem("events");
  if (eventsList) {
    return JSON.parse(eventsList);
  } else {
    // Handle the case when there's no data or invalid data
    console.error("No events data found in local storage");
    return []; // Or return a default value
  }
}

function getNewData() {
  const eventsList = localStorage.getItem("newEvents");
  if (eventsList) {
    return JSON.parse(eventsList);
  } else {
    // Handle the case when there's no data or invalid data
    console.error("No events data found in local storage");
    return []; // Or return a default value
  }
}

function headerComponent() {
  const mainDiv = document.querySelector("#main");
  mainDiv.setAttribute("style", " padding:1rem; border: 2px solid black;");
  Object.assign(mainDiv.style, dark);

  const nav = document.querySelector("#nav");
  nav.setAttribute("style", " padding:1rem; border: 2px solid red;");
}

function navBar() {
  const navbar = document.createElement("nav");
  navbar.setAttribute(
    "style",
    "margin:0; padding:1rem; align-items:center; justify-content:center; display:flex; flex-wrap:wrap; "
  );
  Object.assign(navbar.style, dark);

  // Create the Eventbrite logo
  const navLogo = document.createElement("a");
  navLogo.setAttribute(
    "style",
    "color:red; font-weight:bold; font-size:1.5rem; margin-left:0rem; margin-right:3rem;"
  );
  Object.assign(navLogo.style, fontColor);
  navLogo.textContent = "EventHub";
  // navLogo.href='#';
  // navbar.appendChild(navLogo);

  // Create the search bar
  const searchBar = document.createElement("div");
  searchBar.style.display = "flex";
  searchBar.style.alignItems = "center";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search events";
  searchInput.setAttribute(
    "style",
    "display:flex; align-items:center; margin:0; padding:0.75rem; box-shadow: 5px 5px 20px rgb(54, 159, 217); border-radius: 1rem; border-bottom-left-radius: 1rem  ;"
  );
  searchInput.id = "searchInput";
  searchBar.appendChild(navLogo);
  searchBar.appendChild(searchInput);
  searchInput.addEventListener("keyup", () => {
   try {
        let slidesDiv = document.querySelector("#slidesDiv");
        let mainDiv = document.querySelector("#main");
        mainDiv.removeChild(slidesDiv);
      } catch (error) {
      }
    try {
      eventsCard2();  
    } catch (error) {}
    try {
      eventsCard1();
    } catch (error) {}
  });

  navbar.appendChild(searchBar);

  const svgSearch = document.createElement("span");
  svgSearch.setAttribute("id", "svg1");
  const svgContent1 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>`;
  svgSearch.innerHTML = svgContent1;
  svgSearch.setAttribute(
    "style",
    "background-color:white; padding:0.5rem; margin:5px; border-radius:50%;"
  );
  // navbar.appendChild(svgSearch);
  searchBar.appendChild(svgSearch);

  // navigation links
  const navLinks = document.createElement("ul");
  navLinks.style.listStyleType = "none";
  navLinks.style.margin = "0";
  navLinks.style.padding = "0";
  navLinks.style.display = "flex";

  const navItems = ["Home", "Create Events", "My Tickets", "Log In", "Sign Up"];
  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    // a.style.color='red';
    a.style.textDecoration = "none";
    a.style.fontFamily = "cursive";
    a.style.fontWeight = "900";
    Object.assign(a.style, fontColor);
    a.id = item;
    li.appendChild(a);
    li.setAttribute("style", "padding:1rem; ");
    navLinks.appendChild(li);
  });
  navbar.appendChild(navLinks);
  document.body.appendChild(navbar);

  const home = document.getElementById("Home");
  home.addEventListener("click", homePage);
  // findEvents.style.color='red';

  const createEvents = document.getElementById("Create Events");
  // createEvents.style.color='red';
  createEvents.addEventListener("click", createEvent);

  const findMyTickets = document.getElementById("My Tickets");
  // findMyTickets.style.color='red';myEventsPage
  findMyTickets.addEventListener("click", myEventsPage);

  const logIn = document.getElementById("Log In");
  logIn.addEventListener("click", logInPage);
  logIn.style.marginLeft = "5rem";
  logIn.innerHTML =
    '<svg width="40px" height="35px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 45 53.718 c -10.022 0 -18.175 -8.153 -18.175 -18.175 S 34.978 17.368 45 17.368 c 10.021 0 18.175 8.153 18.175 18.175 S 55.021 53.718 45 53.718 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(54, 159, 217); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 74.821 70.096 c -3.543 -5.253 -8.457 -9.568 -14.159 -12.333 c -2.261 -1.096 -4.901 -1.08 -7.247 0.047 c -2.638 1.268 -5.47 1.91 -8.415 1.91 c -2.945 0 -5.776 -0.643 -8.415 -1.91 c -2.343 -1.125 -4.984 -1.143 -7.247 -0.047 c -5.702 2.765 -10.616 7.08 -14.16 12.333 C 9.457 63.308 6 54.552 6 45 C 6 23.495 23.495 6 45 6 s 39 17.495 39 39 C 84 54.552 80.543 63.308 74.821 70.096 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(54, 159, 217); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>';

  const signUp = document.getElementById("Sign Up");
  signUp.id = "signUpsvg";
  signUp.addEventListener("click", signUpPage);
  // signUp.style.color='red';
  signUp.innerHTML =
    '<svg width="40px" height="35px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(54, 159, 217); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/><path d="M 33.643 48.187 c -7.877 0 -14.287 -6.409 -14.287 -14.286 s 6.409 -14.287 14.287 -14.287 S 47.93 26.023 47.93 33.9 S 41.521 48.187 33.643 48.187 z M 33.643 25.614 c -4.569 0 -8.287 3.717 -8.287 8.287 s 3.717 8.287 8.287 8.287 S 41.93 38.47 41.93 33.9 S 38.212 25.614 33.643 25.614 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(27,167,173); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 49.246 67.32 v -7.814 c 0 -6.067 -4.964 -11.032 -11.032 -11.032 h -7.814 c -6.067 0 -11.032 4.964 -11.032 11.032 v 7.814 H 49.246" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(27,167,173); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 49.246 70.32 H 19.369 c -1.657 0 -3 -1.343 -3 -3 v -7.814 c 0 -7.737 6.294 -14.032 14.032 -14.032 h 7.814 c 7.737 0 14.031 6.295 14.031 14.032 v 7.814 C 52.246 68.978 50.903 70.32 49.246 70.32 z M 22.369 64.32 h 23.877 v -4.814 c 0 -4.429 -3.603 -8.032 -8.031 -8.032 H 30.4 c -4.429 0 -8.032 3.604 -8.032 8.032 V 64.32 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(27,167,173); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><circle cx="36.676" cy="30.866" r="11.286" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/><path d="M 36.68 45.15 c -7.877 0 -14.287 -6.409 -14.287 -14.287 s 6.409 -14.286 14.287 -14.286 s 14.286 6.409 14.286 14.286 S 44.557 45.15 36.68 45.15 z M 36.68 22.578 c -4.569 0 -8.287 3.717 -8.287 8.286 c 0 4.569 3.717 8.287 8.287 8.287 c 4.569 0 8.286 -3.717 8.286 -8.287 C 44.966 26.295 41.249 22.578 36.68 22.578 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 51.807 64.759 v -7.814 c 0 -6.067 -4.964 -11.032 -11.032 -11.032 h -7.814 c -6.067 0 -11.032 4.964 -11.032 11.032 v 7.814 H 51.807" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 51.808 67.759 H 21.93 c -1.657 0 -3 -1.343 -3 -3 v -7.813 c 0 -7.737 6.294 -14.032 14.032 -14.032 h 7.814 c 7.737 0 14.032 6.295 14.032 14.032 v 7.813 C 54.808 66.416 53.465 67.759 51.808 67.759 z M 24.93 61.759 h 23.878 v -4.813 c 0 -4.429 -3.603 -8.032 -8.032 -8.032 h -7.814 c -4.429 0 -8.032 3.604 -8.032 8.032 V 61.759 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><circle cx="63.149" cy="59.189" r="16.219" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(54, 159, 217); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/><path d="M 69.48 63.864 H 52.788 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 H 69.48 c 1.657 0 3 1.343 3 3 S 71.138 63.864 69.48 63.864 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(27,167,173); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 61.135 72.211 c -1.657 0 -3 -1.343 -3 -3 V 52.519 c 0 -1.657 1.343 -3 3 -3 s 3 1.343 3 3 v 16.692 C 64.135 70.868 62.792 72.211 61.135 72.211 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(27,167,173); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 72.111 60.71 H 55.419 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 16.692 c 1.657 0 3 1.343 3 3 S 73.769 60.71 72.111 60.71 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 63.766 69.056 c -1.657 0 -3 -1.343 -3 -3 V 49.363 c 0 -1.657 1.343 -3 3 -3 s 3 1.343 3 3 v 16.692 C 66.766 67.713 65.423 69.056 63.766 69.056 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>';
}

function slidesDiv() {
  const mainDiv = document.querySelector("#main");
  Object.assign(mainDiv.style, dark);
  const slidesDiv = document.createElement("div");
  slidesDiv.classList.add("slides-container");
  slidesDiv.id = "slidesDiv";
  slidesDiv.style.background = "rgb(30, 30, 30)";

  slidesDiv.style.display = "flex";
  slidesDiv.style.flexDirection = "column";

  const image1 = document.createElement("img");
  slidesDiv.appendChild(image1);
  image1.src = "slide1.jpg";
  image1.alt = "Slide 1";
  image1.style.width = "100%";
  image1.style.height = "400px";
  image1.classList.add("slide-image");

  const image2 = document.createElement("img");
  slidesDiv.appendChild(image2);
  image2.src = "slide2.jpg";
  image2.alt = "Slide 2";
  image2.style.width = "100%";
  image2.style.height = "400px";
  image2.classList.add("slide-image");

  const image3 = document.createElement("img");
  slidesDiv.appendChild(image3);
  image3.src = "slide3.jpg";
  image3.alt = "Slide 3";
  image3.style.width = "100%";
  image3.style.height = "400px";
  image3.classList.add("slide-image");

  let currentImageIndex = 0;

  function showNextImage() {
    const images = slidesDiv.querySelectorAll(".slide-image");
    images.forEach((image) => (image.style.display = "none"));
    images[currentImageIndex].style.display = "block";
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  setInterval(showNextImage, 2500);

  mainDiv.appendChild(slidesDiv);
}

function eventsCard1() {
  eventsList = getData();
  try {
    const eventsDiv = document.querySelector("#eventsDiv");
    const mainDiv = document.querySelector("#main");
    const h2 = document.querySelector("#OtherEvents");
    mainDiv.removeChild(eventsDiv);
    mainDiv.removeChild(h2);
  } catch (error) {}
  const eventsDiv = document.createElement("div");
  eventsDiv.id = "eventsDiv";
  eventsDiv.setAttribute(
    "style",
    "margin:0rem 5%; padding:1rem; padding-top:0; display:flex; flex-wrap:wrap; background:rgb(30, 30, 30);"
  );
  const mainDiv = document.querySelector("#main");

  const h2 = document.createElement("h1");
  h2.innerText = "Other Events";
  h2.id = "OtherEvents";
  h2.setAttribute("style", "margin-left:10%; margin-top:3%;");
  if (newEventData) {
    mainDiv.appendChild(h2);
  }

  const searchInput = document.querySelector("#searchInput").value.toLowerCase();

  if (searchInput == "") {
    for (let i = 0; i < eventsList.length; i++) {
      const card = document.createElement("div");
      card.setAttribute(
        "style",
        "margin:1rem; padding:1rem; box-shadow: 10px 10px 10px grey; width:26%;"
      );
      Object.assign(card.style, cardColor);

      card.addEventListener("click", () => {
        console.log(eventsList[i]);
        eventDetails(eventsList[i]);
      });

      const cardImage = document.createElement("div");
      const image = document.createElement("img");
      image.src = eventsList[i].image;
      image.alt = "Card Image";
      image.style.width = "90%";
      image.style.height = "60%";
      image.style.objectFit = "cover";
      cardImage.appendChild(image);

      // Create the card content container
      const cardContent = document.createElement("div");
      const title = document.createElement("h2");
      title.textContent = eventsList[i].title;
      cardContent.appendChild(title);

      const description = document.createElement("p");
      description.textContent = eventsList[i].description;
      cardContent.appendChild(description);

      const date = document.createElement("p");
      date.textContent = eventsList[i].date;
      cardContent.appendChild(date);

      const time = document.createElement("p");
      time.textContent = eventsList[i].time;
      cardContent.appendChild(time);

      const location = document.createElement("p");
      location.textContent = eventsList[i].location;
      cardContent.appendChild(location);

      card.appendChild(cardImage);
      card.appendChild(cardContent);
      eventsDiv.appendChild(card);
    }
  } else {
    for (let i = 0; i < eventsList.length; i++) {
      if (eventsList[i].title.toLowerCase().includes(searchInput)) {
        const card = document.createElement("div");
        card.setAttribute(
          "style",
          "margin:1rem; padding:1rem; box-shadow: 10px 10px 10px grey; width:26%;"
        );
        Object.assign(card.style, cardColor);

        card.addEventListener("click", () => {
          console.log(eventsList[i]);
          eventDetails(eventsList[i]);
        });

        const cardImage = document.createElement("div");
        const image = document.createElement("img");
        image.src = eventsList[i].image;
        image.alt = "Card Image";
        image.style.width = "90%";
        image.style.height = "60%";
        image.style.objectFit = "cover";
        cardImage.appendChild(image);

        // Create the card content container
        const cardContent = document.createElement("div");
        const title = document.createElement("h2");
        title.textContent = eventsList[i].title;
        cardContent.appendChild(title);

        const description = document.createElement("p");
        description.textContent = eventsList[i].description;
        cardContent.appendChild(description);

        const date = document.createElement("p");
        date.textContent = eventsList[i].date;
        cardContent.appendChild(date);

        const time = document.createElement("p");
        time.textContent = eventsList[i].time;
        cardContent.appendChild(time);

        const location = document.createElement("p");
        location.textContent = eventsList[i].location;
        cardContent.appendChild(location);

        card.appendChild(cardImage);
        card.appendChild(cardContent);
        eventsDiv.appendChild(card);
      }
    }
  }
  mainDiv.appendChild(eventsDiv);
}

function eventsCard2() {
  newEventsList = getNewData();
  try {
    const eventsDiv = document.querySelector("#newEventsDiv");
    const mainDiv = document.querySelector("#main");
    mainDiv.removeChild(eventsDiv);
  } catch (error) {}
  try {
    const mainDiv = document.querySelector("#main");
    const h2 = document.querySelector("#NewlyAddedEvents");
    mainDiv.removeChild(h2);
  } catch (error) {}
  const eventsDiv = document.createElement("div");
  eventsDiv.id = 'newEventsDiv';
  eventsDiv.setAttribute(
    "style",
    "margin:0rem 5%; padding:1rem; padding-top:0; display:flex; flex-wrap:wrap; background:rgb(30, 30, 30);"
  );
  const mainDiv = document.querySelector("#main");
  const h2 = document.createElement("h1");
  h2.innerText = "Newly Added Events";
  h2.id = "NewlyAddedEvents";
  h2.setAttribute("style", "margin-left:10%; margin-top:3%;");
  if (newEventData) {
    mainDiv.appendChild(h2);
  }

  const searchInput = document.querySelector("#searchInput").value.toLowerCase();
  if (searchInput == "") {
  for (let i = 0; i < newEventsList.length; i++) {
    const card = document.createElement("div");
    card.setAttribute(
      "style",
      "margin:1rem; padding:1rem; box-shadow: 10px 10px 10px grey; width:26%;"
    );
    Object.assign(card.style, cardColor);
  
    card.addEventListener("click", () => {
      console.log(newEventsList[i]);
      eventDetails(newEventsList[i]);
    });

    const cardImage = document.createElement("div");
    const image = document.createElement("img");
    image.src = newEventsList[i].image;
    // image.src = imageData;
    image.alt = "Card Image";
    image.style.width = "90%";
    image.style.height = "60%";
    image.style.objectFit = "cover";
    cardImage.appendChild(image);

    // Create the card content container
    const cardContent = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = newEventsList[i].title;
    cardContent.appendChild(title);

    const description = document.createElement("p");
    description.textContent = newEventsList[i].description;
    cardContent.appendChild(description);

    const date = document.createElement("p");
    date.textContent = newEventsList[i].date;
    cardContent.appendChild(date);

    const time = document.createElement("p");
    time.textContent = newEventsList[i].time;
    cardContent.appendChild(time);

    const location = document.createElement("p");
    location.textContent = newEventsList[i].location;
    cardContent.appendChild(location);

    card.appendChild(cardImage);
    card.appendChild(cardContent);
    eventsDiv.appendChild(card);
  }
} else {
  for (let i = 0; i < newEventsList.length; i++) {
    if (newEventsList[i].title.toLowerCase().includes(searchInput)) {
      const card = document.createElement("div");
    card.setAttribute(
      "style",
      "margin:1rem; padding:1rem; box-shadow: 10px 10px 10px grey; width:26%;"
    );
    Object.assign(card.style, cardColor);
  
    card.addEventListener("click", () => {
      console.log(newEventsList[i]);
      eventDetails(newEventsList[i]);
    });

    const cardImage = document.createElement("div");
    const image = document.createElement("img");
    image.src = newEventsList[i].image;
    // image.src = imageData;
    image.alt = "Card Image";
    image.style.width = "90%";
    image.style.height = "60%";
    image.style.objectFit = "cover";
    cardImage.appendChild(image);

    // Create the card content container
    const cardContent = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = newEventsList[i].title;
    cardContent.appendChild(title);

    const description = document.createElement("p");
    description.textContent = newEventsList[i].description;
    cardContent.appendChild(description);

    const date = document.createElement("p");
    date.textContent = newEventsList[i].date;
    cardContent.appendChild(date);

    const time = document.createElement("p");
    time.textContent = newEventsList[i].time;
    cardContent.appendChild(time);

    const location = document.createElement("p");
    location.textContent = newEventsList[i].location;
    cardContent.appendChild(location);

    card.appendChild(cardImage);
    card.appendChild(cardContent);
    //   card.appendChild(cardFooter);
    eventsDiv.appendChild(card);
  }}}

  mainDiv.appendChild(eventsDiv);
}

function eventDetails(event) {
  const eventDetail = document.createElement("div");
  eventDetail.id = "eventDetail";
  anEvent = event;
  // alert(anEvent);
  eventDetail.setAttribute(
    "style",
    "box-shadow: 1px 1px 20px rgb(54, 159, 217); border-radius:1rem; background:#f2f2f2; position: fixed; width:80%; height:70%; margin:2% 10%; display:flex; background:rgb(30, 30, 30);"
  );
  const body = document.querySelector("#body");
  const mainDiv = document.querySelector("#main");
  body.removeChild(mainDiv);
  body.appendChild(eventDetail);
  try {
    let footer = document.getElementById("footer");
    let body = document.getElementById("body");
    body.removeChild(footer);
  } catch (error) {
  }

  const cardImage = document.createElement("div");
  const image = document.createElement("img");
  image.src = anEvent.image;
  image.alt = "Card Image";
  image.style.width = "90%";
  image.style.height = "100%";
  image.style.objectFit = "contain";
  cardImage.appendChild(image);

  // Create the card content container
  const cardContent = document.createElement("div");
  Object.assign(cardContent.style, fontColor);
  const title = document.createElement("h2");
  title.textContent = anEvent.title;
  cardContent.appendChild(title);

  const description = document.createElement("p");
  description.textContent = anEvent.description;
  cardContent.appendChild(description);

  const date = document.createElement("p");
  date.textContent = anEvent.date;
  cardContent.appendChild(date);

  const time = document.createElement("p");
  time.textContent = anEvent.time;
  cardContent.appendChild(time);

  const location = document.createElement("p");
  location.textContent = anEvent.location;
  cardContent.appendChild(location);

  // Create the card footer container
  const bookTicket = document.createElement("div");
  bookTicket.textContent = "Book My Tickets";
  bookTicket.setAttribute(
    "style",
    "background:rgb(54, 159, 217); margin:4rem 3rem; margin-left:0; padding: 1rem; border-radius:1rem; box-shadow: 2px 2px 2px grey; cursor:pointer; color:black;"
  );
  cardContent.appendChild(bookTicket);
  bookTicket.addEventListener("click", () => {
    myEventsData.push(anEvent);
    alert('Booking Successful');
    console.log(myEventsData);
  });

  // Append the image, content, and footer to the card
  eventDetail.appendChild(cardImage);
  eventDetail.appendChild(cardContent);
  //   eventDetail.appendChild(cardFooter);
}

function signUpPage() {
  const logIn = document.createElement("div");
  logIn.setAttribute(
    "style",
    "box-shadow: 1px 1px 20px rgb(54, 159, 217); border-radius:1rem; background:#f2f2f2; position: fixed; width:70%; height:75%; margin:1% 15%; display:flex; background:rgb(225,225,225); "
  );
  logIn.id = "signUpPage";
  // Object.assign(logIn.style,cardColor);
  const body = document.querySelector("#body");
  const mainDiv = document.querySelector("#main");
  const signUpPage = document.querySelector("#logInPagehb");
  const createEvent = document.querySelector("#createEventDiv");
  try {
    body.removeChild(createEvent);
  } catch (error) {}
  try {
    body.removeChild(mainDiv);
  } catch (error) {}
  try {
    let footer = document.getElementById("footer");
    let body = document.getElementById("body");
    body.removeChild(footer);
  } catch (error) {
  }
  try {
    body.removeChild(signUpPage);
  } catch (error) {}
  body.appendChild(logIn);

  const leftDiv = document.createElement("div");
  leftDiv.setAttribute("style", "height:90%; width:45%;  margin:2%;");
  logIn.appendChild(leftDiv);
  leftDiv.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509711!2d144.95373531531943!3d-37.81627997975142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed30!2sYour%20Location%20Name!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  const rightDiv = document.createElement("form");
  rightDiv.setAttribute(
    "style",
    "background:#a1ddff; height:90%; width:45%; margin:2%; "
  );

  const h1 = document.createElement("h2");
  h1.innerText = "Sign-Up";
  h1.setAttribute(
    "style",
    "padding:5px; margin:2%; margin-left:25%; width:45%;"
  );

  const name = document.createElement("input");
  name.setAttribute(
    "style",
    "border: 2px solid black;  padding:7px; margin:1%; margin-left:25%; width:45%; border-radius:0.75rem; "
  );
  name.placeholder = "Username";
  name.id = "username";
  const usernameError = document.createElement("small");
  usernameError.id = "usernameError";
  usernameError.setAttribute(
    "style",
    "color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );
  name.addEventListener("keyup", validateUsername);

  const email = document.createElement("input");
  email.setAttribute(
    "style",
    "border: 2px solid black; padding:7px; margin:1%; margin-left:25%; width:45%; border-radius:0.75rem;"
  );
  email.placeholder = "Email";
  email.id = "email";
  email.addEventListener("keyup", validateEmail);
  const emailError = document.createElement("small");
  emailError.id = "emailError";
  emailError.setAttribute(
    "style",
    "color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );

  const password = document.createElement("input");
  password.type = "password";
  password.setAttribute(
    "style",
    "border: 2px solid black; padding:7px; margin:1%; margin-left:25%; width:45%; border-radius:0.75rem;"
  );
  password.placeholder = "password";
  password.id = "password";
  password.addEventListener("keyup", validatePassword);
  const passwordError = document.createElement("small");
  passwordError.id = "passwordError";
  passwordError.setAttribute(
    "style",
    "color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );

  const number = document.createElement("input");
  number.setAttribute(
    "style",
    "border: 2px solid black; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );
  number.placeholder = "Phone no.";
  number.id = "contact";
  number.addEventListener("keyup", validateContact);
  const contactError = document.createElement("small");
  contactError.id = "contactError";
  contactError.setAttribute(
    "style",
    "color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );

  const address = document.createElement("input");
  address.setAttribute(
    "style",
    "border: 2px solid black; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );
  address.placeholder = "Address";
  address.id = "address";
  address.addEventListener("keyup", validateAddress);
  const addressError = document.createElement("small");
  addressError.id = "addressError";
  addressError.setAttribute(
    "style",
    "color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );

  const pin = document.createElement("input");
  pin.setAttribute(
    "style",
    "border: 2px solid black; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );
  pin.placeholder = "pin-code";
  pin.id = "pincode";
  pin.addEventListener("keyup", validatePincode);
  const pincodeError = document.createElement("small");
  pincodeError.id = "pincodeError";
  pincodeError.setAttribute(
    "style",
    "color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.setAttribute(
    "style",
    "background:rgb(54, 159, 217); margin-left:40%; margin-top:5%; padding:5px 14px; border-radius:0.41rem; "
  );
  rightDiv.addEventListener("submit", (event) => {
    let contactStaus = validateContact();
    let addressStatus = validateAddress();
    let pincodeStatus = validatePincode();
    let usernameStatus = validateUsername();
    let emailStatus = validateEmail();
    let passwordStatus = validatePassword();
    //   alert(1);
    if (
      contactStaus &&
      addressStatus &&
      pincodeStatus &&
      usernameStatus &&
      emailStatus &&
      passwordStatus
    ) {
      profileSignUp();
      return true;
    }
    event.preventDefault();
    return false;
  });

  // submitBtn.addEventListener('click', validateContact);

  rightDiv.appendChild(h1);
  rightDiv.appendChild(name);
  rightDiv.appendChild(usernameError);
  rightDiv.appendChild(email);
  rightDiv.appendChild(emailError);
  rightDiv.appendChild(password);
  rightDiv.appendChild(passwordError);
  rightDiv.appendChild(number);
  rightDiv.appendChild(contactError);
  rightDiv.appendChild(address);
  rightDiv.appendChild(addressError);
  rightDiv.appendChild(pin);
  rightDiv.appendChild(pincodeError);
  rightDiv.appendChild(submitBtn);

  logIn.appendChild(rightDiv);

  function validateContact() {
    let status = true;
    // alert(1);
    let contact = document.getElementById("contact").value;
    let contactError = document.getElementById("contactError");
    if (contact.length == 0) {
      status = false;
      contactError.innerText = "Contact number is required";
    } else if (isNaN(contact)) {
      status = false;
      contactError.innerText = "Only digits are allowed";
    } else if (contact.length != 10) {
      status = false;
      contactError.innerText = "Contact number must have 10 digits";
    } else contactError.innerText = "";
    return status;
  }
  function togglePassword(currentObj) {
    let password = document.getElementById("password");
    if (currentObj.innerText == "Show") {
      password.type = "text";
      currentObj.innerText = "Hide";
    } else if (currentObj.innerText == "Hide") {
      password.type = "password";
      currentObj.innerText = "Show";
    }
  }
  function validatePassword() {
    let status = true;
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (password.length == 0) {
      status = false;
      passwordError.innerText = "Password is required";
    } else if (password.length < 6 || password.length > 10) {
      status = false;
      passwordError.innerText = "Password length must be between 6 to 10";
    } else passwordError.innerText = "";
    return status;
  }
  function validateUsername() {
    let status = true;
    let username = document.getElementById("username").value;
    let usernameError = document.getElementById("usernameError");
    if (username.length == 0) {
      status = false;
      usernameError.innerText = "username is required.";
    } else usernameError.innerText = "";
    return status;
  }
  function validateEmail() {
    let status = true;
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    if (email.length == 0) {
      status = false;
      emailError.innerText = "Email is required.";
    } else emailError.innerText = "";
    return status;
  }
  function validateAddress() {
    let status = true;
    let address = document.getElementById("address").value;
    let addressError = document.getElementById("addressError");
    if (address.length == 0) {
      status = false;
      addressError.innerText = "Address is required.";
    } else addressError.innerText = "";
    return status;
  }
  function validatePincode() {
    let status = true;
    let pincode = document.getElementById("pincode").value;
    let pincodeError = document.getElementById("pincodeError");
    if (pincode.length == 0) {
      status = false;
      pincodeError.innerText = "Pincode is required.";
    } else pincodeError.innerText = "";
    return status;
  }

  function profileSignUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const user = {
      email: email,
      password: password,
    };

    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Display a success message or redirect to another page
    alert("Signup successful!");
  }

  // Object.assign(body.style,dark);
}

function logInPage() {
  const logIn = document.createElement("div");
  logIn.setAttribute(
    "style",
    "box-shadow: 1px 1px 20px rgb(54, 159, 217); border-radius:1rem; background:#f2f2f2; position: fixed; width:70%; height:70%; margin:2% 15%; display:flex; "
  );
  logIn.id = "logInPage";
  const body = document.querySelector("#body");
  // document.body.appendChild(logIn);
  const mainDiv = document.querySelector("#main");
  const signUpPage = document.querySelector("#signUpPage");
  const createEvent = document.querySelector("#createEventDiv");
  const myEventsPage = document.querySelector("#myEventsPage");
  try {
    let footer = document.getElementById("footer");
    let body = document.getElementById("body");
    body.removeChild(footer);
  } catch (error) {
  }
  try {
    body.removeChild(createEvent);
  } catch (error) {}
  try {
    body.removeChild(mainDiv);
  } catch (error) {}

  try {
    body.removeChild(signUpPage);
  } catch (error) {}
  try {
    body.removeChild(myEventsPage);
  } catch (error) {}

  body.appendChild(logIn);

  const rightDiv = document.createElement("form");
  rightDiv.setAttribute(
    "style",
    "background:#a1ddff; height:90%; width:45%; margin:2%; "
  );

  const h1 = document.createElement("h2");
  h1.innerText = "Log In";
  h1.setAttribute(
    "style",
    "padding:5px; margin:5%; margin-left:25%; width:45%;"
  );

  const email = document.createElement("input");
  email.setAttribute(
    "style",
    "border: 2px solid black; padding:7px; margin:2%; margin-left:25%; width:45%; border-radius:0.75rem;"
  );
  email.placeholder = "Email";
  email.id = "email";
  email.addEventListener("keyup", validateEmail);
  const emailError = document.createElement("small");
  emailError.id = "emailError";
  emailError.setAttribute(
    "style",
    "color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );

  const password = document.createElement("input");
  password.type = "password";
  password.setAttribute(
    "style",
    "border: 2px solid black; padding:7px; margin:2%; margin-left:25%; width:45%; border-radius:0.75rem;"
  );
  password.placeholder = "password";
  password.id = "password";
  password.addEventListener("keyup", validatePassword);
  const passwordError = document.createElement("small");
  passwordError.id = "passwordError";
  passwordError.setAttribute(
    "style",
    "color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );

  const pin = document.createElement("input");
  pin.setAttribute(
    "style",
    "border: 2px solid black; padding:7px; margin:2%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );
  pin.placeholder = "pin-code";
  pin.id = "pincode";
  pin.addEventListener("keyup", validatePincode);
  const pincodeError = document.createElement("small");
  pincodeError.id = "pincodeError";
  pincodeError.setAttribute(
    "style",
    "color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;"
  );

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.setAttribute(
    "style",
    "background:rgb(54, 159, 217); margin-left:40%; margin-top:5%; padding:5px 14px; border-radius:0.41rem; "
  );
  rightDiv.addEventListener("submit", (event) => {
    let emailStatus = validateEmail();
    let passwordStatus = validatePassword();

    if (passwordStatus && emailStatus) {
      profile();
      return true;
    }
    event.preventDefault();
    return false;
  });

  rightDiv.appendChild(h1);
  rightDiv.appendChild(email);
  rightDiv.appendChild(emailError);
  rightDiv.appendChild(password);
  rightDiv.appendChild(passwordError);
  rightDiv.appendChild(pin);
  rightDiv.appendChild(submitBtn);

  logIn.appendChild(rightDiv);

  const leftDiv = document.createElement("div");
  leftDiv.setAttribute("style", "height:90%; width:45%;  margin:2%;");
  logIn.appendChild(leftDiv);
  leftDiv.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509711!2d144.95373531531943!3d-37.81627997975142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed30!2sYour%20Location%20Name!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  function togglePassword(currentObj) {
    let password = document.getElementById("password");
    if (currentObj.innerText == "Show") {
      password.type = "text";
      currentObj.innerText = "Hide";
    } else if (currentObj.innerText == "Hide") {
      password.type = "password";
      currentObj.innerText = "Show";
    }
  }
  function validatePassword() {
    let status = true;
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (password.length == 0) {
      status = false;
      passwordError.innerText = "Password is required";
    } else if (password.length < 6 || password.length > 10) {
      status = false;
      passwordError.innerText = "Password length must be between 6 to 10";
    } else passwordError.innerText = "";
    return status;
  }

  function validateEmail() {
    let status = true;
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    if (email.length == 0) {
      status = false;
      emailError.innerText = "Email is required.";
    } else emailError.innerText = "";
    return status;
  }

  function validatePincode() {
    let status = true;
    let pincode = document.getElementById("pincode").value;
    let pincodeError = document.getElementById("pincodeError");
    if (pincode.length == 0) {
      status = false;
      pincodeError.innerText = "Pincode is required.";
    } else pincodeError.innerText = "";
    return status;
  }

  function profile() {
    // alert(5);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user exists and credentials match
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      // Successful login
      alert("Login successful!");
      const signUp = document.querySelector("#signUpsvg");
      signUp.innerHTML = "";
      // Redirect to a protected page or perform other actions
    } else {
      // Login failed
      alert("Invalid username or password");
    }
    // alert(10);
  }
}

function homePage() {
  const body = document.querySelector("#body");
  const logInPage = document.querySelector("#logInPage");
  const signUpPage = document.querySelector("#signUpPage");
  const eventDetail = document.querySelector("#eventDetail");
  const createEvent = document.querySelector("#createEventDiv");
  const myEventsPage = document.querySelector("#myEventsPage");
  // Object.assign(body.style,dark);
  try {
    let footer = document.getElementById("footer");
    let body = document.getElementById("body");
    body.removeChild(footer);
  } catch (error) {
  }
  try {
    body.removeChild(createEvent);
  } catch (error) {}
  try {
    body.removeChild(logInPage);
  } catch (error) {
    // console.log(error);
  }
  try {
    body.removeChild(signUpPage);
  } catch (error) {
    // console.log(error);
  }
  try {
    body.removeChild(eventDetail);
  } catch (error) {
    // console.log(error);
  }
  try {
    body.removeChild(myEventsPage);
  } catch (error) {
    // console.log(error);
  }
  try {
    const mainDiv = document.querySelector("#main");
    document.body.removeChild(mainDiv);
  } catch (error) {
    // console.log(error);
  }

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "main");
  body.setAttribute("style", "margin:0px;");
  body.appendChild(mainDiv);
  body.style.backgroundColor = "#0b0a0a";
  slidesDiv();

  eventsCard2();
  eventsCard1();
  footerComponent();
}

function createEvent() {
  const createEventDiv = document.createElement("div");
  createEventDiv.setAttribute(
    "style",
    "box-shadow: 1px 1px 20px rgb(54, 159, 217); border-radius:1rem; background:#f2f2f2; position: fixed; width:70%; height:70%; margin:2% 15%; display:flex; flex-wrap:wrap; "
  );
  createEventDiv.id = "createEventDiv";
  const body = document.querySelector("#body");
  // document.body.appendChild(logIn);
  const mainDiv = document.querySelector("#main");
  const signUpPage = document.querySelector("#signUpPage");
  const logInPage = document.querySelector("#logInPage");
  try {
    body.removeChild(mainDiv);
  } catch (error) {}
  try {
    body.removeChild(logInPage);
  } catch (error) {}
  try {
    body.removeChild(signUpPage);
  } catch (error) {}
  try {
    let footer = document.getElementById("footer");
    let body = document.getElementById("body");
    body.removeChild(footer);
  } catch (error) {
  }
  const createEventDivStyle = {
    // background:'red',
    margin: "0% 3%",
    padding: "0% 2%",
    width: "40%",
  };

  const eventNameDiv = document.createElement("div");
  Object.assign(eventNameDiv.style, createEventDivStyle);
  eventNameDiv.className = "eventDivClass";
  const eventNameh3 = document.createElement("h3");
  eventNameh3.innerText = "Events's Name : ";
  eventNameDiv.appendChild(eventNameh3);
  const eventName = document.createElement("input");
  eventName.id = "eventName";
  eventNameDiv.appendChild(eventName);
  createEventDiv.appendChild(eventNameDiv);

  const eventDescriptionDiv = document.createElement("div");
  Object.assign(eventDescriptionDiv.style, createEventDivStyle);
  eventDescriptionDiv.className = "eventDivClass";
  const eventDescriptionh3 = document.createElement("h3");
  eventDescriptionh3.innerText = "Description : ";
  eventDescriptionDiv.appendChild(eventDescriptionh3);
  const eventDescription = document.createElement("input");
  eventDescription.id = "eventDescription";
  eventDescriptionDiv.appendChild(eventDescription);
  createEventDiv.appendChild(eventDescriptionDiv);

  const eventDateDiv = document.createElement("div");
  Object.assign(eventDateDiv.style, createEventDivStyle);
  const eventDateh3 = document.createElement("h3");
  eventDateh3.innerText = "Date : ";
  eventDateDiv.appendChild(eventDateh3);
  const eventDate = document.createElement("input");
  eventDate.type = "date";
  eventDate.id = "eventDate";
  eventDateDiv.appendChild(eventDate);
  createEventDiv.appendChild(eventDateDiv);

  const eventTimeDiv = document.createElement("div");
  Object.assign(eventTimeDiv.style, createEventDivStyle);
  const eventTimeh3 = document.createElement("h3");
  eventTimeh3.innerText = "Time : ";
  eventTimeDiv.appendChild(eventTimeh3);
  const eventTime = document.createElement("input");
  eventTime.type = "time";
  eventTime.id = "eventTime";
  eventTimeDiv.appendChild(eventTime);
  createEventDiv.appendChild(eventTimeDiv);

  const eventLocationDiv = document.createElement("div");
  Object.assign(eventLocationDiv.style, createEventDivStyle);
  const eventLocationh3 = document.createElement("h3");
  eventLocationh3.innerText = "Location : ";
  eventLocationDiv.appendChild(eventLocationh3);
  const eventLocation = document.createElement("input");
  eventLocation.id = "eventLocation";
  eventLocationDiv.appendChild(eventLocation);
  createEventDiv.appendChild(eventLocationDiv);

  const eventImageDiv = document.createElement("div");
  Object.assign(eventImageDiv.style, createEventDivStyle);
  const eventImageh3 = document.createElement("h3");
  eventImageh3.innerText = "Image : ";
  eventImageDiv.appendChild(eventImageh3);
  const eventImage = document.createElement("input");
  eventImage.type = "file";
  eventImage.id = "eventImage";
  eventImageDiv.appendChild(eventImage);
  createEventDiv.appendChild(eventImageDiv);

  const addEvent = document.createElement("button");
  addEvent.textContent = "Add Event";
  addEvent.type = "submit";
  addEvent.setAttribute(
    "style",
    "background:rgb(54, 159, 217); margin:2% 2%;  padding:0rem; border-radius:1rem; box-shadow: 2px 2px 2px grey; width:95%; cursor:pointer; align-items:center; justify-content:center; display:flex; font-weight:900; border:none;"
  );

  // Add event listener to the 'Add Event' button
  addEvent.addEventListener("click", () => {
    // Get input values
    const eventName = document.querySelector("#eventName").value;
    const eventDescription = document.querySelector("#eventDescription").value;
    const eventDate = document.querySelector("#eventDate").value;
    const eventTime = document.querySelector("#eventTime").value;
    const eventLocation = document.querySelector("#eventLocation").value;
    const fileInput = document.getElementById("eventImage");
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Image = event.target.result;

      const eventData = {
        title: eventName,
        description: eventDescription,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        image: base64Image,
      };
      newEventData.push(eventData);
      localStorage.setItem("newEvents", JSON.stringify(newEventData));
    };
    reader.readAsDataURL(file);
    alert("Event successfully added!");
  });

  body.appendChild(createEventDiv);
  createEventDiv.appendChild(addEvent);

  // Object.assign(body.style,dark);
}

function myEventsPage() {
  const logIn = document.createElement("div");
  logIn.setAttribute(
    "style",
    "box-shadow: 1px 1px 20px rgb(54, 159, 217); border-radius:1rem; background:#f2f2f2;  width:70%; height:auuto; margin:2% 15%; display:flex; flex-wrap:wrap;"
  );
  logIn.id = "myEventsPage";
  const body = document.querySelector("#body");
  // document.body.appendChild(logIn);
  const mainDiv = document.querySelector("#main");
  const signUpPage = document.querySelector("#signUpPage");
  const createEvent = document.querySelector("#createEventDiv");
  const logInPage = document.querySelector("#logInPage");
  const eventDetail = document.querySelector('#eventDetail');
  try {
    body.removeChild(eventDetail);
  } catch (error) {}
  try {
    body.removeChild(createEvent);
  } catch (error) {}
  try {
    body.removeChild(logInPage);
  } catch (error) {}
  try {
    body.removeChild(mainDiv);
  } catch (error) {}
  try {
    let footer = document.getElementById("footer");
    let body = document.getElementById("body");
    body.removeChild(footer);
  } catch (error) {
  }
  try {
    body.removeChild(signUpPage);
  } catch (error) {}

  for (let i = 0; i < myEventsData.length; i++) {
    const card = document.createElement("div");
    card.setAttribute(
      "style",
      "margin:1rem; padding:1rem; box-shadow: 10px 10px 10px grey; width:24%;"
    );

    card.addEventListener("click", () => {
      console.log(myEventsData[i]);
      eventDetails(myEventsData[i]);
    });

    const cardImage = document.createElement("div");

    const image = document.createElement("img");
    image.src = myEventsData[i].image;
    image.alt = "Card Image";
    image.style.width = "90%";
    image.style.height = "60%";
    image.style.objectFit = "cover";
    cardImage.appendChild(image);

    // Create the card content container
    const cardContent = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = myEventsData[i].title;
    cardContent.appendChild(title);

    const description = document.createElement("p");
    description.textContent = myEventsData[i].description;
    cardContent.appendChild(description);

    const date = document.createElement("p");
    date.textContent = myEventsData[i].date;
    cardContent.appendChild(date);

    const time = document.createElement("p");
    time.textContent = myEventsData[i].time;
    cardContent.appendChild(time);

    const location = document.createElement("p");
    location.textContent = myEventsData[i].location;
    cardContent.appendChild(location);

    card.appendChild(cardImage);
    card.appendChild(cardContent);

    logIn.appendChild(card);
  }
  body.appendChild(logIn);
}

function footerComponent() {
  let mainDiv = document.getElementById("body");
  let footer = document.createElement("footer");
  footer.setAttribute("id", "footer");
  // Footer div with controlled layout to avoid overflow and extra scrollbars
  let footerDiv = document.createElement("div");
  footerDiv.setAttribute(
    "style",
    "padding: 20px; background-color: #343a40; color: white; display: flex; justify-content: space-between; flex-wrap: nowrap; align-items: "
  );

  // Helper function to create sections
  function createSection(title, content) {
    let section = document.createElement("div");
    section.setAttribute("class", "col-md-2 p-2");

    let sectionContent = document.createElement("div");
    sectionContent.setAttribute("style", "max-width: 250px; ");

    let sectionTitle = document.createElement("h5");
    sectionTitle.innerText = title;

    let sectionText = document.createElement("p");
    sectionText.setAttribute(
      "style",
      "font-size: 14px; line-height: 1.5; white-space: nowrap;"
    ); // Ensures all text is on one line unless a <br> is used
    sectionText.innerHTML = content;

    sectionContent.appendChild(sectionTitle);
    sectionContent.appendChild(sectionText);
    section.appendChild(sectionContent);

    return section;
  }

  // let mediaQuery = window.matchMedia("(max-width: 768px)");

  // Create wrapper div for the first four sections (50% width)
  let firstGroup = document.createElement("div");
  firstGroup.setAttribute(
    "style",
    "display: flex; justify-content: space-between; width: 50%; flex-wrap: nowrap; padding-right: 20px; margin-right: 20px; margin-left:20%;"
  );

  // About section
  let about = createSection(
    "ABOUT",
    "Contact Us <br> About Us <br> Careers  <br> Press <br> Corporate Information"
  );

  // Group Companies section
  let groupCompanies = createSection(
    "",
    ""
    //   "GROUP COMPANIES",
    //   "Myntra <br> Cleartrip <br> Shopsy"
  );

  // Help section
  let help = createSection(
    "HELP",
    "Payments  <br> FAQ <br> Report Infringement"
  );

  // Consumer Policy section
  let consumerPolicy = createSection(
    "CONSUMER POLICY",
    "  Security <br> Privacy <br> Sitemap <br> Grievance Redressal <br> EPR Compliance"
  );

  // Append the first four sections to the firstGroup div
  firstGroup.appendChild(about);
  firstGroup.appendChild(groupCompanies);
  firstGroup.appendChild(help);
  firstGroup.appendChild(consumerPolicy);

  // Create vertical divider (to be placed between groups)
  let divider = document.createElement("div");
  divider.setAttribute(
    "style",
    "border-left: 1px solid white; height: 100%; margin-right: 20px;"
  );

  // Create wrapper div for the remaining two sections (50% width)
  let secondGroup = document.createElement("div");
  secondGroup.setAttribute(
    "style",
    "display: flex; justify-content: space-around; width: 50%; flex-wrap: nowrap;"
  );

  // Mail Us section
  let mailUs = createSection(
    "Mail Us:",
    "  Building Alyssa, Begonia & <br> Clove Embassy Tech Village, <br> Outer Ring Road,<br>Devarabeesanahalli village,<br> Bengaluru,560103, <br> Karnataka,India"
  );

  // Registered Office section
  let registeredOffice = createSection(
    "Registered Office Address:",
    "  Building Alyssa, Begonia & <br> Clove Embassy Tech Village, <br> Outer Ring Road,<br>Devarabeesanahalli village,<br> Bengaluru,560103, <br> Karnataka,India,<br> CIN : U51109KA2012PTC6617,<br> Telephone: 044-4514700,<br>044-67415800"
  );

  // Append the remaining two sections to the secondGroup div
  secondGroup.appendChild(mailUs);
  secondGroup.appendChild(registeredOffice);

  // Append both groups and the divider to the footer div
  footerDiv.appendChild(firstGroup);
  footerDiv.appendChild(divider); // Add the vertical line here
  // footerDiv.appendChild(secondGroup);

  // Append the footer div to the main div
  footer.appendChild(footerDiv);
  mainDiv.appendChild(footer);
}
