export default class BaseElement extends HTMLElement {
    constructor() {
        // always call super first in constructor
        super();

        // create a shadow root
        this.attachShadow({
            mode: "open",
        });
    }
}