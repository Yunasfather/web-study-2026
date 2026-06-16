function getStudyAdvice(message) {
  const clean = message;

  if (clean.includes("javascript")) {
    return "JavaScript는 includes와 return을 복습하세요.";
  } else if (clean.includes("java")) {
    return "Java는 예외처리까지 마무리하세요.";
  } else if (clean.includes("github")) {
    return "GitHub 업로드 전에는 git status를 확인하세요.";
  } else {
    return "오늘도 작은 파일 하나는 남기세요.";
  }
}

console.log(getStudyAdvice("javascript"));
console.log(getStudyAdvice("java"));
console.log(getStudyAdvice("github"));
console.log(getStudyAdvice("c#"));
