function passLength(password) {
  if (password != null) {
    if (password.length > 5) {
      return true;
    }
  }
  return false;
}

function passNumber(password) {
  if (password != null) {
    if (/\d/.test(password) == true) {
      return true;
    }
  }
  return false;
}

function passCapital(password) {
  if (password != null) {
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      return true;
    }
  }
  return false;
}

function userValid(username) {
  if (username != null) {
    if (username.length > 5) {
      return true;
    }
  }
  return false;
}

export { passLength, passNumber, passCapital, userValid };
