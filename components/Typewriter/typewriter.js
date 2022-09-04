export default class WC_Typewriter extends HTMLElement {
    /**
     * @index default: 0
     * @type default: underscore
     * @type optional: underscore / card / top-right / right-top / right-center / right-bottom
     *                      bottom-left / bottom-center / bottom-right / left-top / left-center / left-bottom
     */
    static get observedAttributes() {
        return ['data-index', 'data-type', 'data-position', 'data-theme'];
    }

    /**
     * set CSS Variable to a specified new value
     * @param {string} CSS Variable Name
     * @param {string} CSS Variable Value
     * @return {}
     * @example document.querySelector('wc-progress-bar').set('--span-width', '100%');
     */
    // when need, just let CSSVariableValue be 'initial' to reset CSS variable
    set(CSSVariableName, CSSVariableValue) {
        // this.shadowRoot.styleSheets[0].cssRules[0].style.setProperty(CSSVariableName, CSSVariableValue);
        this.style.setProperty(CSSVariableName, CSSVariableValue);
    }

    get dataIndex() {
        return this.getAttribute('data-index');
    }
    set dataIndex(value) {
        this.setAttribute('data-index', value);
    }

    constructor() {
        // always call super first in constructor
        super();

        // create a shadow root
        this.attachShadow({
            mode: "open",
        });


        this.shadowRoot.innerHTML = `
        <div class="tab"><slot name="tab"></slot><div class="border"></div></div>
        <div class="panel"><slot name="panel"></slot></div>
        <style>
        </style>
        `;

        this.style = this.shadowRoot.styleSheets[0].cssRules[0].style;
    }


    connectedCallback() {
        this.setAttribute('tabindex', 0);
    }


    attributeChangedCallback(name, oldValue, newValue) {

    }
}

// define the custom element
customElements.define("wc-typewriter", WC_Typewriter);