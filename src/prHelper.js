export default function prHelper(value, title = null) {
  if (title) {
    console.log(` --------------- ${title} ---------------`);
  }
  console.log(JSON.stringify(value));
  return value;
}
