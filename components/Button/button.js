export default class WC_Button extends HTMLElement {
    constructor() {
        // always call super first in constructor
        super();

        // create a shadow root
        this.attachShadow({
            mode: "open",
        });

        // https://github.com/LeaVerou/nudeui/blob/main/button-group/button-group.js#L9
        this.shadowRoot.innerHTML = `<button><slot></slot></button><style>@import "${new URL("button.css", import.meta.url)}";</style>`;
    }
}

// define the custom element
customElements.define("wc-button", WC_Button);