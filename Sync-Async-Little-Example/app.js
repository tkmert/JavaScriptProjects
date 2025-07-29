const startButton = document.getElementById("startButton");
const outputDiv = document.getElementById("output");

startButton.addEventListener("click", () => {
  outputDiv.textContent = "Processing...";

  // Create a Promise
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve("Operation successful!");
      } else {
        reject("Something went wrong.");
      }
    }, 2000);
  });

  // Handle the Promise result
  myPromise
    .then((message) => {
      outputDiv.textContent = message;
    })
    .catch((error) => {
      outputDiv.textContent = error;
    });
});
 
