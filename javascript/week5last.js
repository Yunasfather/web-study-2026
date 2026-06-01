function maxNum(a, b) {
  let max = a;

  if (a < b) {
    max = b;
  }
  return max;
}

console.log(maxNum(10, 20));

function getResponse(message) {
  let user = message;
  if (user.includes("hello")) {
    return "Hi there! How can I help you?";
  } else if (user.includes("bye")) {
    return "Goobye";
  } else {
    return "I'm not sure what you mean";
  }
}

console.log(getResponse("hello bot"));
console.log(getResponse("what is this?"));

function greet(name, callback) {
  console.log("안녕하세요, " + name + "님!");
  callback();
}

function afterGreeting() {
  console.log("방문해 주셔서 감사합니다.");
}

greet("철수", afterGreeting);
