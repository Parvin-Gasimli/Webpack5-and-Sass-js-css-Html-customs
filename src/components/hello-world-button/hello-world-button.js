import "../hello-world-button/hello-world-button.scss";
class HelloWorldButton {
  buttonCssClasss = "hello-world-button"
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    const body = document.querySelector("body");
    button.classList.add(this.buttonCssClasss);
    body.appendChild(button);
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello How are you";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
  }
}
export default HelloWorldButton;
