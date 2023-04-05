const projects = document.getElementById("project-div");
const project = [
  {
    name: "Patreon $upport",
    details:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image: "images/patreon.png",
    github: "",
    link: "https://arryan-n.github.io/Comics-Patreon/",
  },
  {
    name: "Food Ordering site ",
    details:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "images/food.png",
    github: "",
    link: "https://arryan-n.github.io/Food-Ordering-Page/",
  },
  {
    name: "Password Generator",
    details:
      "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. ",
    image: "images/password.png",
    github: "",
    link: "https://arryan-n.github.io/password-Generator/",
  },
];

function renderprojects() {
  let toDisplay = `
   <h1 class="projects-heading">Some Things I’ve Built</h1>
       
    `;
  project.forEach((work) => {
    toDisplay += `
    <div class="mini-sec">
        <div class="img">
           <a href = "${work.link}">
            <img src="${work.image}">
           </a>
           <div class="layer"></div>
        </div>
        
        <div class="project-details">
         <div class="name">
           <h4 class="span">
           Featured Projects
           </h4>
           <h2> <a href="${work.link}" target="_blank"> ${work.name}</h2> </a>
          </div> 
           <div class="details">
           ${work.details}
           </div>
           <div>
           <i class="fa-brands fa-github"> </i>
           <i class="fa-solid fa-arrow-up-right-from-square"></i>
           </div>
        </div>
     </div>   
        `;
  });
  projects.innerHTML = toDisplay;
}
renderprojects();
