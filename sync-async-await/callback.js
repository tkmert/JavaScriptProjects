function processUserInput(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function showThanks() {
  console.log("Thanks , complate the form.");
}

processUserInput("John", showThanks);

//
function wait(callback) {
  console.log("waiting...");
  setTimeout(() => {
    console.log("3 second pass.");
    callback();
  }, 3000);
}

function finish() {
  console.log("complated.");
}

wait(finish);
