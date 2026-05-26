function customTrim(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end.length && str[start] === " ") {
    start++;
  }

  while (end >= start && str[end] === " ") {
    end--;
  }
  let result = "";
  for (let i = start; i <= end; i++) {
    result += str[i];
  }
  return result;
}

// A-Z -> a-b를 만드려는 함수
function customToLowerCase(str) {
  let result = '';
  result += ()
}

let test = customTrim(" Hello, ChatTest ");
console.log(test);



