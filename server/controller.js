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
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A feather in the hand is better than a bird in the air.",
      "A fresh start will put you on your way.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getDailyMotivation: (req, res) => {
    const motivations = [
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      "Your limitation—it's only your imagination.",
      "Push yourself, because no one else is going to do it for you.",
      "Sometimes later becomes never. Do it now.",
      "Great things never come from comfort zones.",
    ];

    let randomIndex = Math.floor(Math.random() * motivations.length);
    let randomMotivation = motivations[randomIndex];

    res.status(200).send(randomMotivation);
  },

  setGoal: (req, res) => {
    const { goal } = req.body;
    res.status(201).send("Goal set successfully!");
  },
  updateProgress: (req, res) => {
    const { progress } = req.body;
    res.status(200).send("Progress updated successfully!");
  },
};
