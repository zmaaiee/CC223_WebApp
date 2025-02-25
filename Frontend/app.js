let selectedTopic = null;
let completedTopics = new Set();

function selectTopic(index) {
    const topicElements = document.querySelectorAll(".topic");

    if (selectedTopic) {
        selectedTopic.classList.remove("selected");
    }

    selectedTopic = topicElements[index];
    selectedTopic.classList.add("selected");
}

function markComplete() {
  if (!selectedTopic || completedTopics.has(selectedTopic)) return;

  selectedTopic.classList.add("completed");
  completedTopics.add(selectedTopic);
  selectedTopic.classList.remove("selected"); // Deselect after marking as complete
  selectedTopic = null; // Reset selection

  updateProgress();

  // Send completed topic to backend
  fetch("http://localhost:3000/api/message")
    .then(response => response.json())
    .then(data => console.log("Message from backend:", data.message))
    .catch(error => console.error("Error fetching data:", error));
}

function updateProgress() {
    const totalTopics = document.querySelectorAll(".topic").length;
    const completedCount = document.querySelectorAll(".completed").length;
    const progressPercentage = (completedCount / totalTopics) * 100;

    document.getElementById("progress-bar").style.width = progressPercentage + "%";
    document.getElementById("progress-text").textContent = `${Math.round(progressPercentage)}% completed`;
}
