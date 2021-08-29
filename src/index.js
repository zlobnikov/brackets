module.exports = function check(str, bracketsConfig) {
  const openBrackets = {};
  bracketsConfig.forEach(brackets => {
    openBrackets[brackets[0]] = brackets[1];
  });

  const waitingList = [];

  for (let i = 0; i < str.length; ++i) {
    const bracket = str[i];

    if (bracket === waitingList[waitingList.length - 1]) {
      waitingList.pop();

    } else if (openBrackets[bracket]) {
      waitingList.push(openBrackets[bracket]);

    } else return false;
  }

  return waitingList.length === 0;
}
