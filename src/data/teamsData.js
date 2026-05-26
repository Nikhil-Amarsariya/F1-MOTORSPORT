import alpinelogo from "../assets/alpine.png";

import astonmartinlogo from "../assets/astonmartin.png";

import ferrarilogo from "../assets/ferrari.png";

import haaslogo from "../assets/haas.png";  

import mclarenlogo from "../assets/mclaren.png";

import mercedeslogo from "../assets/mercedes.png";

import redbulllogo from "../assets/redbull.png";

import rblogo from "../assets/rb.png";

import sauberlogo from "../assets/kicksauber.jpg";

import williamslogo from "../assets/williams.png";



const teamsData = [
  {
    id: 1,

    name: "Red Bull Racing",

    driver1: "Max Verstappen",

    driver2: "Yuki Tsunoda",

    principal: "Christian Horner",

    engine: "Honda RBPT",

    championships: 6,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/red-bull-racing",

    logo:
      redbulllogo,

    color:
      "linear-gradient(135deg, #0600ef, #1f5eff)",
  },

  {
    id: 2,

    name: "Mercedes",

    driver1: "George Russell",

    driver2: "Kimi Antonelli",

    principal: "Toto Wolff",

    engine: "Mercedes",

    championships: 8,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/mercedes",

    logo:
      mercedeslogo,

    color:
      "linear-gradient(135deg, #00a19b, #31e1c5)",
  },

  {
    id: 3,

    name: "Ferrari",

    driver1: "Charles Leclerc",

    driver2: "Lewis Hamilton",

    principal: "Fred Vasseur",

    engine: "Ferrari",

    championships: 16,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/ferrari",

    logo:
      ferrarilogo,

    color:
      "linear-gradient(135deg, #8b0000, #ff2d2d)",
  },

  {
    id: 4,

    name: "McLaren",

    driver1: "Lando Norris",

    driver2: "Oscar Piastri",

    principal: "Andrea Stella",

    engine: "Mercedes",

    championships: 8,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/mclaren",

    logo:
      mclarenlogo,

    color:
      "linear-gradient(135deg, #ff6a00, #ffb347)",
  },

  {
    id: 5,

    name: "Aston Martin",

    driver1: "Fernando Alonso",

    driver2: "Lance Stroll",

    principal: "Mike Krack",

    engine: "Mercedes",

    championships: 0,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/aston-martin",

    logo:
      astonmartinlogo,

    color:
      "linear-gradient(135deg, #00594f, #00b894)",
  },

  {
    id: 6,

    name: "Alpine",

    driver1: "Pierre Gasly",

    driver2: "Franco Colapinto",

    principal: "Oliver Oakes",

    engine: "Renault",

    championships: 2,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/alpine",

    logo:
      alpinelogo,

    color:
      "linear-gradient(135deg, #005bea, #00c6fb)",
  },

  {
    id: 7,

    name: "RB",

    driver1: "Liam Lawson",

    driver2: "Isack Hadjar",

    principal: "Laurent Mekies",

    engine: "Honda RBPT",

    championships: 0,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/rb",

    logo:
      rblogo,

    color:
      "linear-gradient(135deg, #1e3c72, #2a5298)",
  },

  {
    id: 8,

    name: "Williams",

    driver1: "Alex Albon",

    driver2: "Carlos Sainz",

    principal: "James Vowles",

    engine: "Mercedes",

    championships: 9,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/williams",

    logo:
      williamslogo,

    color:
      "linear-gradient(135deg, #0057ff, #4facfe)",
  },

  {
    id: 9,

    name: "Kick Sauber",

    driver1: "Nico Hulkenberg",

    driver2: "Gabriel Bortoleto",

    principal: "Jonathan Wheatley",

    engine: "Ferrari",

    championships: 0,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/kick-sauber",

    logo:
      sauberlogo,

    color:
      "linear-gradient(135deg, #0f9b0f, #96c93d)",
  },

  {
    id: 10,

    name: "Haas",

    driver1: "Esteban Ocon",

    driver2: "Oliver Bearman",

    principal: "Ayao Komatsu",

    engine: "Ferrari",

    championships: 0,

    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1320,q_auto/content/dam/fom-website/teams/2025/haas",

    logo:
      haaslogo,

    color:
      "linear-gradient(135deg, #2c3e50, #bdc3c7)",
  },
];

export default teamsData;



