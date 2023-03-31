const fortunes = [
  "A friend asks only for your time not your money.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A feather in the hand is better than a bird in the air.",
  "A fresh start will put you on your way.",
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  addFortune: (req, res) => {
    let { name } = req.body;

    console.log(name);

    fortunes.push(name);

    res.status(200).send(fortunes);
  },
  deleteFortune: (req, res) => {
    let index = req.params.id - 1;

    fortunes.splice(index, 1);

    res.status(200).send(fortunes);
  },
  swapFortune: (req, res) => {
    const {type} = req.body;
     let index = req.params.id - 1;
    
     fortunes[index].concat(type)

     res.status(200).send(fortunes);
  },
};
