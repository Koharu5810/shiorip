import './bootstrap';

console.log("app.ts loaded");

const button = document.querySelector<HTMLButtonElement>("#hello-button");
const result = document.querySelector<HTMLDivElement>("#hello-result");

if (!button) {
    console.warn("ボタン要素が見つかりません (#hello-button)");
}
if (!result) {
    console.warn("結果表示用の要素が見つかりません (#hello-result)");
}

if (button && result) {
    button.addEventListener("click", () => {
        result.textContent = "TypeScript からこんにちは！";
    });
}
