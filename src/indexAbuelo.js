import * as components from "./components/indexPadre.js";
class AppContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
      <app-container>
      <h1>${this.nombre}</h1>
				<p></p>
                <p></p>
                <p></p>
                <button></button>
      
      </app-container>
      `;
  }
}
customElements.define("app-container", AppContainer);