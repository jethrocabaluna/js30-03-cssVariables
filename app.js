const inputs = document.querySelectorAll("input");
const inputsRange = document.querySelectorAll("input[type=\"range\"]");

function handleUpdate(e) {
    let suffix = e.target.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, `${e.target.value + suffix}`);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));