const _color = ["#fff"];
const _backgroundColor = ["#405cf5", "#fa6400", "#EA4C89"];
// default value
let color = _color[0];
let backgroundColor = _backgroundColor[0];

// TODO JavaScript 代码压缩 uglify

class WC_Button extends HTMLElement {
    constructor() {
        // always call super first in constructor
        super();
        // create a shadow root
        this.attachShadow({
            mode: "open",
        });
        this.shadowRoot.append(WC_Button.template.content.cloneNode(true));

        // get button reference of shadow DOM
        this.ref = this.shadowRoot.querySelector("button");
        // TODO
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "type":
                let type = this.getAttribute("type");
                switch (type) {
                    case "stripe":
                        break;
                    case "sketch":
                        this.ref.style.backgroundColor = _backgroundColor[1];
                        break;
                    case "dribbble":
                        this.ref.style.backgroundColor = _backgroundColor[2];
                        break;
                    default:
                        break;
                }
                // console.log("Type has changed!");
                // console.log(this);
                // console.log(this.ref);
                // console.log(this.ref.attributes);
                // console.log(this.ref.innerHTML);
                // console.log(this.ref.getAttribute("type"));
                // console.log(this.getAttribute("w"));
                // console.log(this.getAttribute("h"));
                // console.log(this.getAttribute("type"));
                // console.log(this.getAttribute("ref"));
                // let ref = this.getAttribute("ref");
                // globalThis.ref = this;
                break;
            case "w":
                // console.log(this);
                // console.log(this.attributes);
                // console.log(this.getAttribute("w"));
                // this.setAttribute("w", "200px");
                break;
            default:
                break;
        }
    }

    // get and set JavaScript attributes
    // get type() {
    //     return this.getAttribute("type");
    // }
    // set type(value) {
    //     this.setAttribute("type", value);
    // }

    // get backgroundColor() {
    //     return this.getAttribute("backgroundColor");
    // }
    // set backgroundColor(value) {
    //     this.setAttribute("backgroundColor", value);
    // }
}
// WC_Button.observedAttributes = [];
WC_Button.observedAttributes = ["w", "h", "type"];
WC_Button.template = document.createElement("template");
WC_Button.template.innerHTML = `
<style>
:host {

}
button {
    color: #fff;
    background-color: ${backgroundColor};
    box-sizing: border-box;
    text-align: center;
    border-radius: 6px;
    height: 20px;
    padding: 0 25px;
}
slot {

}
</style>
<button type="stripe">wc-button</button>
`;
customElements.define("wc-button", WC_Button);