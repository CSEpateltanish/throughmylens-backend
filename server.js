const express = require('express');
const cors = require('cors');
const path = require('path');
const Joi = require('joi');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb+srv://tanish:sxMu4PkkkO35AYmF@cluster0.7jpnj1j.mongodb.net/throughmylens?appName=Cluster0')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(cors());
app.use(express.json({ limit: '10mb' }));
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

// ── Mongoose schema & model ──
const SpotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  locationName: { type: String, required: true },
  city: { type: String, required: true },
  spotType: { type: String, required: true },
  description: { type: String, required: true },
  bestTime: { type: String, required: true },
  image: { type: String, default: null },
  date: { type: String, default: () => new Date().toLocaleDateString() }
});

SpotSchema.set('toJSON', {
  transform: function(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

const Spot = mongoose.model('Spot', SpotSchema);

// ── Joi validation schemas ──
var spotSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  locationName: Joi.string().min(2).required(),
  city: Joi.string().min(2).required(),
  spotType: Joi.string().valid('Golden Hour', 'Urban', 'Nature', 'Indoor').required(),
  description: Joi.string().min(10).required(),
  bestTime: Joi.string().valid('Early Morning / Sunrise', 'Morning', 'Midday', 'Afternoon', 'Golden Hour / Sunset', 'Blue Hour / Dusk', 'Night').required(),
  image: Joi.string().allow(null, '').optional()
});

var editSchema = Joi.object({
  name: Joi.string().min(2).required(),
  locationName: Joi.string().min(2).required(),
  city: Joi.string().min(2).required(),
  spotType: Joi.string().valid('Golden Hour', 'Urban', 'Nature', 'Indoor').required(),
  description: Joi.string().min(10).required(),
  bestTime: Joi.string().valid('Early Morning / Sunrise', 'Morning', 'Midday', 'Afternoon', 'Golden Hour / Sunset', 'Blue Hour / Dusk', 'Night').required(),
  image: Joi.string().allow(null, '').optional()
});

app.get('/api/photos', function(req, res) {
  res.json(photos);
});

app.get('/api/spots', async function(req, res) {
  try {
    var spots = await Spot.find().sort({ _id: -1 });
    res.json(spots);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

app.post('/api/spots', async function(req, res) {
  var result = spotSchema.validate(req.body);
  if (result.error) {
    return res.status(400).json({ success: false, message: result.error.details[0].message });
  }

  try {
    var newSpot = new Spot({
      name: result.value.name,
      email: result.value.email,
      locationName: result.value.locationName,
      city: result.value.city,
      spotType: result.value.spotType,
      description: result.value.description,
      bestTime: result.value.bestTime,
      image: result.value.image || null,
      date: new Date().toLocaleDateString()
    });
    await newSpot.save();
    res.json({ success: true, spot: newSpot });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

app.put('/api/spots/:id', async function(req, res) {
  var result = editSchema.validate(req.body);
  if (result.error) {
    return res.status(400).json({ success: false, message: result.error.details[0].message });
  }

  try {
    var update = {
      name: result.value.name,
      locationName: result.value.locationName,
      city: result.value.city,
      spotType: result.value.spotType,
      description: result.value.description,
      bestTime: result.value.bestTime
    };
    if (result.value.image) {
      update.image = result.value.image;
    }
    var spot = await Spot.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!spot) {
      return res.status(404).json({ success: false, message: 'Spot not found.' });
    }
    res.json({ success: true, spot: spot });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

app.delete('/api/spots/:id', async function(req, res) {
  try {
    var spot = await Spot.findByIdAndDelete(req.params.id);
    if (!spot) {
      return res.status(404).json({ success: false, message: 'Spot not found.' });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

app.listen(PORT, function() {
  console.log('Server running on port ' + PORT);
});
