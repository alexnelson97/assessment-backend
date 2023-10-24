const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require("./controller");
const { getFortune } = require("./controller");
const { getDailyMotivation } = require("./controller");
const { setGoal } = require("./controller");
const { updateProgress } = require("./controller");

app.put("/api/progress", updateProgress);

app.post("/api/goal", setGoal);

app.get("/api/motivation", getDailyMotivation);

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.listen(4000, () => console.log("Server running on 4000"));
