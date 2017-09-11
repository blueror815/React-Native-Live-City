export default function isValidPassword(password) {
  const regex = /\d/g;
  if(password.length > 6) {
    return regex.test(password);
  }else{
    return false;
  }
}
