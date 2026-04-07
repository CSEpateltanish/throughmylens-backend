const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

var IMG_BASE = "https://csepateltanish.github.io/csce242/projects/part7/";

var photos = [
  {
    id: "landscape-island",
    title: "Island",
    category: "landscape",
    image: IMG_BASE + "images/photos/landscape/island.jpeg",
    date: "May 18, 2024",
    location: "Hilton Head, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "A calm shoreline that highlights the texture of coastal rocks and water."
  },
  {
    id: "landscape-waterfall",
    title: "Waterfall",
    category: "landscape",
    image: IMG_BASE + "images/photos/landscape/waterfall.jpeg",
    date: "June 2, 2024",
    location: "Pisgah Forest, North Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Moving water framed with natural rock detail and soft light."
  },
  {
    id: "landscape-leaves",
    title: "Leaves",
    category: "landscape",
    image: IMG_BASE + "images/photos/landscape/Leaves.jpeg",
    date: "October 14, 2021",
    location: "Mountains of Vermont",
    camera: "Canon EOS Rebel T7",
    description: "Fall colors and leaf texture focused to create a close natural composition."
  },
  {
    id: "landscape-mountains",
    title: "Mountains",
    category: "landscape",
    image: IMG_BASE + "images/photos/landscape/NC_Mountains.jpeg",
    date: "July 8, 2024",
    location: "Smoky Mountains, Tennessee",
    camera: "Canon EOS Rebel T7",
    description: "Wide mountain framing that emphasizes depth, layers, and haze across the range."
  },
  {
    id: "landscape-ocean",
    title: "Ocean",
    category: "landscape",
    image: IMG_BASE + "images/photos/landscape/Ocean.jpeg",
    date: "August 3, 2022",
    location: "Horseneck Beach, Dartmouth, Massachusetts",
    camera: "Canon EOS Rebel T7",
    description: "Open ocean lines and horizon with a clean, minimal landscape feel."
  },
  {
    id: "landscape-reedy",
    title: "Reedy",
    category: "landscape",
    image: IMG_BASE + "images/photos/landscape/ReedyRiver.jpeg",
    date: "September 9, 2017",
    location: "Falls Park, Greenville, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Reedy River in downtown Greenville, one of my personal favorites."
  },
  {
    id: "landscape-river",
    title: "River",
    category: "landscape",
    image: IMG_BASE + "images/photos/landscape/River_rocks.jpeg",
    date: "April 21, 2021",
    location: "Mountains of Vermont",
    camera: "Canon EOS Rebel T7",
    description: "Flowing water around rocks to show natural patterns and motion in one frame."
  },
  {
    id: "landscape-train",
    title: "Train",
    category: "landscape",
    image: IMG_BASE + "images/photos/landscape/Train.jpeg",
    date: "November 11, 2020",
    location: "Mt. Washington, Vermont",
    camera: "Canon EOS Rebel T7",
    description: "Train blowing steam as it climbs to over 6000 feet of elevation."
  },
  {
    id: "urban-miami",
    title: "Miami",
    category: "urban",
    image: IMG_BASE + "images/photos/urban/Miami.jpeg",
    date: "December 20, 2017",
    location: "Miami, Florida",
    camera: "Canon EOS Rebel T7",
    description: "Urban architecture and street energy combined in a clean, modern city shot."
  },
  {
    id: "urban-miami2",
    title: "Bayside",
    category: "urban",
    image: IMG_BASE + "images/photos/urban/Miami_2.jpeg",
    date: "December 21, 2017",
    location: "Downtown Miami, Florida",
    camera: "Canon EOS Rebel T7",
    description: "Bayside perspective focused on contrast between the boardwalk and sky in Miami."
  },
  {
    id: "urban-cola",
    title: "Columbia",
    category: "urban",
    image: IMG_BASE + "images/photos/urban/cola.jpg",
    date: "March 3, 2024",
    location: "Columbia, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "Street-level composition showing city rhythm, people flow, and structure."
  },
  {
    id: "urban-toronto",
    title: "Toronto",
    category: "urban",
    image: IMG_BASE + "images/photos/urban/Toronto.jpeg",
    date: "June 26, 2022",
    location: "Toronto, Ontario",
    camera: "Canon EOS Rebel T7",
    description: "Tall architecture and perspective lines that emphasize scale."
  },
  {
    id: "urban-gvl",
    title: "Greenville",
    category: "urban",
    image: IMG_BASE + "images/photos/urban/gvl.jpg",
    date: "September 28, 2016",
    location: "Greenville, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "A downtown moment focused on the color and pace of local Greenville streets."
  },
  {
    id: "urban-willyb",
    title: "Williams Brice",
    category: "urban",
    image: IMG_BASE + "images/photos/urban/WillyB.jpeg",
    date: "November 4, 2024",
    location: "Cincinnati, Ohio",
    camera: "iPhone 16 Pro Max",
    description: "Williams Brice in action during a UofSC classic, Sandstorm."
  },
  {
    id: "portrait-capecod",
    title: "Cape",
    category: "portrait",
    image: IMG_BASE + "images/photos/portrait/Cape_cod.jpeg",
    date: "July 17, 2021",
    location: "Cape Cod, Massachusetts",
    camera: "Canon EOS Rebel T7",
    description: "Portrait composition using natural light and a coastal background in Cape Cod."
  },
  {
    id: "portrait-ceremony",
    title: "Ceremony",
    category: "portrait",
    image: IMG_BASE + "images/photos/portrait/Ceremony.jpeg",
    date: "May 10, 2017",
    location: "Greenville, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "A candid portrait moment captured during a baby shower."
  },
  {
    id: "portrait-bird",
    title: "Bird",
    category: "portrait",
    image: IMG_BASE + "images/photos/portrait/bird.jpg",
    date: "August 15, 2024",
    location: "Riverbanks Zoo, Columbia, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "A wildlife portrait that isolates feather detail and expression."
  },
  {
    id: "portrait-cincy",
    title: "Cincy",
    category: "portrait",
    image: IMG_BASE + "images/photos/portrait/Cincy_Portrait.jpeg",
    date: "October 6, 2019",
    location: "Cincinnati, Ohio",
    camera: "Canon EOS Rebel T7",
    description: "City portrait of my uncle and aunt in Cincinnati."
  },
  {
    id: "portrait-graduation",
    title: "Graduation",
    category: "portrait",
    image: IMG_BASE + "images/photos/portrait/Graduation.jpeg",
    date: "September 14, 2019",
    location: "Columbia, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "A celebratory portrait marking my sister's nursing school graduation."
  },
  {
    id: "portrait-dog",
    title: "Dog",
    category: "portrait",
    image: IMG_BASE + "images/photos/portrait/dog.jpg",
    date: "November 2, 2024",
    location: "Greenville, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "A close portrait of a dog with focus on expression and fur detail."
  },
  {
    id: "portrait-giraffe",
    title: "Giraffe",
    category: "portrait",
    image: IMG_BASE + "images/photos/portrait/giraffe.jpg",
    date: "March 24, 2024",
    location: "Riverbanks Zoo, Columbia, South Carolina",
    camera: "Canon EOS Rebel T7",
    description: "An animal portrait framing the giraffe's posture and patterned texture."
  }
];

app.get('/api/photos', function(req, res) {
  res.json(photos);
});


app.listen(PORT, function() {
  console.log('Server running on port ' + PORT);
});
