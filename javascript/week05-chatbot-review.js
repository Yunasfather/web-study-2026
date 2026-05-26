// 1. customTrim(text) <- 사용자로부터 입력을 받아 공백제거 할 함수

function customTrim(text) {
  let startStr = 0;
  let lastStr = text.length - 1;

  while (startStr <= lastStr && text[startStr] === " ") {
    startStr++;
  }

  while (lastStr >= startStr && text[lastStr] === " ") {
    lastStr--;
  }

  let result = "";
  for (let i = startStr; i <= lastStr; i++) {
    result += text[i];
  }

  return result;
}
// 2. customToLowerCase(text) <- 사용자로 받은 문자를 소문자로 변경하는 함수
function customToLowerCase(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    result +=
      code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : text[i];
  }

  return result;
}

// 3. preprocessMessage(message) <- 위 두 함수들을 순차적으로 진행할 수 있게 제어하는 함수
function preprocessMessage(message) {
  let trimmed = customTrim(message);
  let lowerd = customToLowerCase(trimmed);
  return lowerd;
}
// 4. getResponse(message) <- 응답 함수
function getResponse(message) {
  let clean = preprocessMessage(message);

  if (clean.includes("안녕")) {
    return "안녕하세요!";
  } else if (clean.includes("공부")) {
    return "공부 중입니다.";
  } else if (clean.includes("취업")) {
    return "취업준비중입니다.";
  } else {
    return "왜 찾았나요?";
  }
}

// 5. simulateChat(userInput) <- 간단한 챗봇대화형 함수

function simulateChat(userInput) {
  let answer = getResponse(userInput);
  return `사용자 ${userInput}\n '챗봇: ${answer}`;
}

console.log(customTrim("  hello  "));
console.log(customTrim("hello  "));
console.log(customTrim("  hello"));
console.log(customTrim("hello"));
console.log(customTrim("     "));

console.log(customToLowerCase("HELLO World!"));
console.log(customToLowerCase("ABC abc 123"));

// console.log(preprocessMessage("   HELLO World!   "));

// console.log(simulateChat("  Hello bot!  "));
// console.log(simulateChat("bye now"));
// console.log(simulateChat("what is this?"));

console.log(getResponse("안녕"));
console.log(simulateChat("  안녕!  "));

