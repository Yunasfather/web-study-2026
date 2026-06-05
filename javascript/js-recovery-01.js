function getStudyAdvice(message) {
  let cleand = message;

  if (cleand.includes("html")) {
    return "HTML/CSS 복습을 하세요.";
  } else if (cleand.includes("css")) {
    return "CSS선택지와 flexbox를 복습하세여";
  } else if (cleand.includes("git")) {
    return "git에 올리세여ㅛ";
  } else if (cleand.includes("javascript")) {
    return "JavaScript 함수와 return을 복습하세요.";
  } else {
    return "오늘도 자긍ㄴ 복습을 이어갑니다";
  }
}

console.log(getStudyAdvice("html"));
console.log(getStudyAdvice("css"));
console.log(getStudyAdvice("javascript"));
console.log(getStudyAdvice("git"));
console.log(getStudyAdvice("spring"));
