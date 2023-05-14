let cl = console.log;

const bgColor = document.getElementById("bgColor");
const body1 = document.getElementById("body1");

const onBgColorHandler = (eve) => {
    let selectedColor  = eve.target.value;
    cl(selectedColor)
    body1.style.backgroundColor = selectedColor
}





bgColor.addEventListener("change", onBgColorHandler)


//const username = document.getElementById("username")

//const onfocusHandler = (eve) => {
    //eve.target.style.border = "2px solid hotpink";
//}

//const onBlurHandler = (eve) => {
 //   eve.target.style.border = "1px solid pink";
//}

//const onKeyDownHandler = (eve) => {
   // eve.target.style.backgroundColor = "aqua";
//}
// keyUp >>> Actual User data(typing) 
//const onKeyUpHandler = (eve) => {
 //   eve.target.style.backgroundColor = "#ffF";
  //  cl(eve.target.value)
//}


//>>> Event Binding...
//username.addEventListener("focus", onfocusHandler);
//username.addEventListener("blur", onBlurHandler);
//username.addEventListener("keydown", onKeyDownHandler);
//username?.addEventListener("keyup", onKeyUpHandler);

