const primaryDisplay = document.querySelector(".numbers_box_result");
const secondaryDisplay = document.querySelector(".numbers_box_operation");

const onChange = () => {
    const cont = primaryDisplay.textContent;
    console.log(cont);
}

primaryDisplay.addEventListener("change", onChange);

export { primaryDisplay, secondaryDisplay };