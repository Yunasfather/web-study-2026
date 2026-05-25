function customTrim(text) {
  let start = 0;
  let end = text.length - 1;

  // 앞쪽 공백을 건너뛰기 위해 start를 오른쪽으로 이동
  while (start <= end && text[start] === " ") {
    start++;
  }
  // 뒤쪽 공백을 건너뛰기 위해 end를 왼쪽으로 이동
  while (end >= start && text[end] === " ") {
    end--;
  }

  // 공백을 제외한 글을 담기 위해 result 변수 만듬
  let result = "";
  // start부터 end까지의 글자만 result에 이어 붙임
  for (let i = start; i <= end; i++) {
    result += text[i];
  }

  return result;
}

console.log(customTrim("  Hello, Jin?  "));
console.log(customTrim("  hello  "));
console.log(customTrim("hello  "));
console.log(customTrim("  hello"));
console.log(customTrim("hello"));
console.log(customTrim("     "));

function customToLowerCase(text) {
  // 변환한 글자들을 담을 빈 문자열
  let result = "";

  // 문자열을 한 글자씩 확인
  for (let i = 0; i < text.length; i++) {
    // i번째 글자를 문자 코드 숫자로 바꿈
    const code = text.charCodeAt(i);

    // 대문자 A~Z이면 소문자로 바꾸고, 아니면 그대로 붙임

    result +=
      code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : text[i];
  }

  return result;
}

console.log(customToLowerCase("HEELLO WOold"));
console.log(customToLowerCase("HELLO World!"));
console.log(customToLowerCase("JavaScript"));
console.log(customToLowerCase("ABC abc 123"));
console.log(customToLowerCase("hello"));

function preprocessMessage(message) {
  const trimmed = customTrim(message); // 위에서 만든 공백 제거 함수를 사용해서 message의 앞뒤 공백을 제거하고 trimmed에 담는다.

  const lowered = customToLowerCase(trimmed); // 공백이 제거된 trimmed를 소문자로 바꾼 결과를 lowered에 담는다.

  return lowered; // 공백 제거 + 소문자 변환이 끝난 최종 문자열을 반환한다.
}

console.log(preprocessMessage("   HELLO World!   "));

function getResponse(message) {
  // 사용자의 메시지를 공백 제거 + 소문자 변환해서 cleaned에 저장
  const cleaned = preprocessMessage(message);

  // includes()로 cleaned 안에 특정 단어가 포함되어 있는지 확인
  if (cleaned.includes("hello")) {
    return "Hi there! How can I help you?";
  } else if (cleaned.includes("bye")) {
    return "Good Bye!";
  } else {
    return "I'm not sure what you mean?";
  }
}

console.log(getResponse(" hey,Hello Jame?!  "));
console.log(getResponse("jame, Bye!"));
console.log(getResponse("what is this?"));

function simulateChat(userInput) {
  const response = getResponse(userInput);

  return `[User] ${userInput}\n[Bot] ${response}`;
}
//simulateChat(userInput)은 사용자가 입력한 문장을 받아서,
// 그 문장을 getResponse(userInput)에 넣어 챗봇 응답을 만든다.
// 그 다음 백틱 문자열을 사용해서 [User]에는 원래 입력값을 넣고,
// [Bot]에는 getResponse()가 반환한 응답을 넣는다.
// \n은 줄바꿈 역할을 한다.

console.log(simulateChat(" hey,Hello Jame?!  "));
console.log(simulateChat("jame, Bye!"));
console.log(simulateChat("what is this?"));
