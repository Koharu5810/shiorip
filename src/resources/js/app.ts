import './bootstrap';

const button = document.querySelector<HTMLButtonElement>("#hello-button");
const result = document.querySelector<HTMLDivElement>("#hello-result");

if (button && result) {
    button.addEventListener("click", () => {
        result.textContent = "TypeScript からこんにちは！";
    });
}
