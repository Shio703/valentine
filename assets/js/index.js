const btnId = document.getElementById("btn");

let numberOfRejections = 0;
const really = () => {
  // TODO: Show some kitty picture.
};
let prevPosition = { clientX: null, clientY: null };

// maxSafeScreenWidth && height is 40% of screen's inner size.
const maxSafeScreenWidth = (window.innerWidth / 100) * 40;
const maxSafeScreenHeight = (window.innerHeight / 100) * 40;
console.log(maxSafeScreenWidth, maxSafeScreenHeight);

btnId.addEventListener("mouseover", (event) => {
  numberOfRejections++;

  if (numberOfRejections > 5) really();

  // randomNumberX && Y is random number up to maxSafeScreen size.
  const randomNumberX = Math.round(Math.random() * maxSafeScreenWidth);
  const randomNumberY = Math.round(Math.random() * maxSafeScreenHeight);

  // here i'am checking if newly generated numbers are not the previous.
  if (event.clientX !== prevPosition.clientX) {
    btnId.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px)`;
    prevPosition.clientX = event.clientX;
    prevPosition.clientY = event.clientY;
    return;
  }

  btnId.style.transform = `translate(${prevPosition.clientX + 70}px, ${prevPosition.clientY + 70}px)`;

  console.log(event);
  console.log(prevPosition);
});
