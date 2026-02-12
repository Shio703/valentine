const btnId = document.getElementById("btn");

let numberOfRejections = 0;
const really = () => {
  // TODO: Show some kitty picture.
};

// maxSafeScreenWidth && height is 40% of screen's inner size.
const maxSafeScreenWidth = (window.innerWidth / 100) * 40;
const maxSafeScreenHeight = (window.innerHeight / 100) * 40;
console.log(maxSafeScreenWidth, maxSafeScreenHeight);

btnId.addEventListener("mouseenter", (event) => {
  numberOfRejections++;

  if (numberOfRejections > 5) really();

  let prevPosition = { screenX: null, screenY: null };

  // randomNumberX && Y is random number up to maxSafeScreen size.
  const randomNumberX = Math.round(Math.random() * maxSafeScreenWidth);
  const randomNumberY = Math.round(Math.random() * maxSafeScreenHeight);

  // differenceInX && Y is difference between previous coordinates and currently generated.
  const differenceInX = event.screenX - prevPosition.screenX;
  const differenceInY = event.screenY - prevPosition.screenY;

  console.log("diffX: ", differenceInX, "diffY: ", differenceInY);
  prevPosition.screenX = event.screenX;
  prevPosition.screenY = event.screenY;

  // here i'am checking if newly generated number is greather at least with 100 than old one.
  if (differenceInX > 100 && differenceInY > 100) {
    btnId.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px)`;
    return;
  }

  btnId.style.transform = `translate(${prevPosition.screenX + 80}px, ${prevPosition.screenY + 80}px)`;

  console.log(event);
  console.log(prevPosition);
});
