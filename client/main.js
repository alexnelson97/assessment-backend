const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);

const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

fortuneBtn.addEventListener("click", getFortune);

const motivationBtn = document.getElementById("motivationButton");

const getDailyMotivation = () => {
  axios.get("http://localhost:4000/api/motivation/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

motivationBtn.addEventListener("click", getDailyMotivation);

const goalForm = document.getElementById("goalForm");
const goalInput = document.getElementById("goalInput");

const setGoal = (event) => {
  event.preventDefault();

  const goal = goalInput.value;
  axios.post("http://localhost:4000/api/goal/", { goal }).then((res) => {
    alert(res.data);
    goalInput.value = "";
  });
};

goalForm.addEventListener("submit", setGoal);

const progressForm = document.getElementById("progressForm");
const progressInput = document.getElementById("progressInput");

const updateProgress = (event) => {
  event.preventDefault();

  const progress = progressInput.value;
  axios.put("http://localhost:4000/api/progress/", { progress }).then((res) => {
    alert(res.data);
    progressInput.value = ""; // Clear the input field
  });
};

progressForm.addEventListener("submit", updateProgress);
