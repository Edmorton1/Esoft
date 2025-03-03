function checkBracket(value) {
  if (
    value.split("(").length - 1 != value.split(")").length - 1 ||
    value.split("[").length - 1 != value.split("]").length - 1 ||
    value.split("{").length - 1 != value.split("}").length - 1
  ) {
    return false;
  }
  if (
    value.includes("(]") ||
    value.includes("(}") ||
    value.includes("[)") ||
    value.includes("[}") ||
    value.includes("{)") ||
    value.includes("{]")
  ) {
    return false;
  }
  return true;
}

const brackets = "{[(])}";
console.log(checkBracket(brackets));
