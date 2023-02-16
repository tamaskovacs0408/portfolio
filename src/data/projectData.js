const projectData = [
  {
    id: "p1",
    projectName: "Tint and shade generator",
    projectThumb: "projectThumbs/color_project.jpeg",
    projectDesc:
      "With this app you can generate the color scale of your color. You have to add your color by HEX code. The app generates 10 'light' shades of your color, and 10 'dark' shades.",
    projectTech: ["React"],
    ghLink: "https://github.com/tamaskovacs0408/color-generator",
    demoLink: "https://tamaskovacs0408.github.io/color-generator/",
  },
  {
    id: "p2",
    projectName: "HODLER Checker",
    projectThumb: "projectThumbs/hodler.jpg",
    projectDesc:
      "This React app get API data with Axios from the Coinpaprika API. You can check the current prices, 24H volume, market cap, circulating supply, All Time High price and date of the first 30 ranked crypto currencies. Also you can find some global data from the crypto market. The app has a dummy authentication, you have to add your username, email and password to sign up, and email and password to log in. Password stored in the local storage hashed by bcrypt. To navigate between pages I used React Router 6.",
    projectTech: ["React", "SASS"],
    ghLink: "https://github.com/tamaskovacs0408/crypto_app",
    demoLink: "https://hodler-checker.vercel.app/",
  },
  {
    id: "p3",
    projectName: "Recipe Finder",
    projectThumb: "projectThumbs/recipe_project.png",
    projectDesc:
      "You can find recipes from around a world with this React app. It uses the MealDB API to searching for recipes. When the recipes are found they are listed below the search bar. When you click on one of the listed recipes a modal opens with the food's ingredients and the cooking instructions. You can close the modal to click besides it. I used SASS for the styling, and the Dosis and Righteous fonts from Google Fonts.",
    projectTech: ["React", "SASS"],
    ghLink: "https://github.com/tamaskovacs0408/recipes_project",
    demoLink: "https://recipe-finder-tkwebdev.netlify.app/",
  },
  {
    id: "p4",
    projectName: "Docs",
    projectThumb: "projectThumbs/docs_screen.jpg",
    projectDesc:
      "This React app can create documents what you can edit or delete, they are shared public. The documents can be edited real time and two people can work on the same document. The app using Firebase / Firestore to store the data, React Toastify for the notifications and React Router V6 for the routing.",
    projectTech: ["React", "FirebaseDb", "MaterialUI"],
    ghLink: "https://github.com/tamaskovacs0408/docs_app",
    demoLink: "https://docs-mad3dqfuo-tamaskovacs0408.vercel.app/",
  },
  {
    id: "p5",
    projectName: "Weather App",
    projectThumb: "projectThumbs/weather_project.png",
    projectDesc:
      "You can get the current and the 7 days forecast weather with this React Weather App. The app is using GeoDB API for the cities and the OpenWeatherMap API for the weather.",
    projectTech: ["React", "SASS"],
    ghLink: "https://github.com/tamaskovacs0408/weather_app",
    demoLink: "https://tamaskovacs0408.github.io/weather_app/",
  },
  {
    id: "p6",
    projectName: "BMI Calculator",
    projectThumb: "projectThumbs/bmiscrn.png",
    projectDesc:
      "BMI (Body Mass Index) is a value derived from the weight and the height. It gives back your weight status (underweight, normal weight, overweight or obesity) which based on the calculated BMI points.",
    projectTech: ["React", "TypeScript", "Styled Components"],
    ghLink: "https://github.com/tamaskovacs0408/bmi_ts",
    demoLink: "https://tamaskovacs0408.github.io/bmi_ts/",
  },
  {
    id: "p7",
    projectName: "TKoin Blockchain",
    projectThumb: "projectThumbs/tkweb.png",
    projectDesc: "The TKoin is a blockchain made by Python.",
    projectTech: ["Python"],
    ghLink: "https://github.com/tamaskovacs0408/TKoin",
  },
  {
    id: "p8",
    projectName: "Rome",
    projectThumb: "projectThumbs/rome.png",
    projectDesc:
      "This website is rendered from ejs templates from an Express server. It's about Rome and some of it's famous sights, such as the Colosseum, Forum Romanum or the Pantheon. The content of the page are from the pixabay, rome.net, wikipedia, history.com.",
    projectTech: ["Express", "EJS"],
    ghLink: "https://github.com/tamaskovacs0408/Rome",
    demoLink: "https://romexpress.vercel.app/",
  },
  {
    projectName: "Places REST API",
    projectThumb: "projectThumbs/tkweb.png",
    projectDesc:
      "The Places REST API made with Express is a web service that allows users to retrieve information about various places along with their images and locations. The API provides endpoints for creating, retrieving, updating, and deleting places, as well as adding and retrieving image urls with each place. The Places REST API is a useful tool for building location-based applications that require access to information about places and their associated images and locations.",
    projectTech: ["Express"],
    ghLink: "https://github.com/tamaskovacs0408/places_api",
    demoLink: "https://places-api-tkwebdev.vercel.app/",
  },
];

export default projectData;