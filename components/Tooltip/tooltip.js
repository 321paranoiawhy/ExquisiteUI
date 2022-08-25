
export default class WC_Tooltip extends HTMLElement {
    /**
     * @theme github / light / material
     */
    static get observedAttributes() {
        return ['data-theme', 'data-text', 'data-placement', 'data-arrow', 'data-trigger', 'data-z-index'];
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
        this.shadowRoot.styleSheets[0].cssRules[0].style.setProperty(CSSVariableName, CSSVariableValue);
    }

    get dataTheme() {
        return this.getAttribute('data-theme');
    }
    set dataTheme(value) {
        this.setAttribute('data-theme', value);
    }

    get dataText() {
        return this.getAttribute('data-text');
    }
    set dataText(value) {
        this.setAttribute('data-text', value);
    }

    get dataPlacement() {
        return this.getAttribute('data-placement');
    }
    set dataPlacement(value) {
        this.setAttribute('data-placement', value);
    }

    constructor() {
        // always call super first in constructor
        super();

        // create a shadow root
        this.attachShadow({
            mode: "open",
        });

        // default theme is github
        this.theme = {
            "github": { "color": "white", "background-color": "rgb(36,41,47)" },
            "light": { "color": "black", "background-color": "white" },
            "material": { "color": "white", "background-color": "#505355" },
        };

        this.shadowRoot.innerHTML = `
        <slot data-text='This is a tooltip.'></slot>
        <style>
        :host {
            display: inline-block;
            box-sizing: border-box;
            cursor: pointer;

            --color: initial;
            --background-color: initial;

            --before-top: initial;
            --before-left: initial;
            --after-top: initial;
            --after-left: initial;


            --offset: 0.5rem;
            --z-index: initial;
        }
        slot {
            position: relative;
            display: inline-block;
            padding: var(--padding, 0.5rem 0.75rem);
        }
        slot::before {
            visibility: hidden;
            content: attr(data-text);
            text-align: center;
            background-color: var(--background-color, rgb(36,41,47));
            color: var(--color, white);
            border-radius: var(--border-radius, 0.25rem);
            padding: var(--padding, 0.5rem 0.75rem);


            word-wrap: break-word;
            white-space: pre;
            pointer-events: none;

            position: absolute;
            z-index: var(--z-index, 666);
            top: var(--before-top, 50%);
            left: var(--before-left, 100%);
            transform: var(--before-transform, translate(var(--offset, 0.5rem), -50%));
        }

        slot::after {
            visibility: hidden;
            content: " ";
            position: absolute;

            top: var(--after-top, 50%);
            left: var(--after-left, 100%);

            transform: var(--after-transform, translateY(-50%));

            border: calc(var(--offset, 0.5rem) / 2) solid;

            border-color: var(--border-color, transparent var(--background-color, rgb(36,41,47)) transparent transparent);
        }

        slot:hover::before,
        slot:hover::after {
            visibility: visible;
        }
        </style>
        `;
    }

    update(name, value) {
        switch (name) {
            case "data-theme":
                this.set('--color', this.theme[this.dataTheme]['color']);
                this.set('--background-color', this.theme[this.dataTheme]['background-color']);
                break;
            case "data-text":
                this.shadowRoot.querySelector('slot').setAttribute('data-text', value);
                break;
            case "data-placement":
                switch (this.dataPlacement) {
                    // top
                    case "top-left":
                        this.set('--before-top', '0');
                        this.set('--before-left', '50%');
                        this.set('--before-transform', 'translate(-50%, calc(-100% - var(--offset, 0.5rem)))');
                        this.set('--after-top', '0');
                        this.set('--after-left', '25%');
                        this.set('--after-transform', 'translate(-50%, -100%)');
                        this.set('--border-color', 'var(--background-color, rgb(36,41,47)) transparent transparent');
                        break;
                    case "top-center":
                        this.set('--before-top', '0');
                        this.set('--before-left', '50%');
                        this.set('--before-transform', 'translate(-50%, calc(-100% - var(--offset, 0.5rem)))');
                        this.set('--after-top', '0');
                        this.set('--after-left', '50%');
                        this.set('--after-transform', 'translate(-50%, -100%)');
                        this.set('--border-color', 'var(--background-color, rgb(36,41,47)) transparent transparent');
                        break;
                    case "top-right":
                        this.set('--before-top', '0');
                        this.set('--before-left', '50%');
                        this.set('--before-transform', 'translate(-50%, calc(-100% - var(--offset, 0.5rem)))');
                        this.set('--after-top', '0');
                        this.set('--after-left', '75%');
                        this.set('--after-transform', 'translate(-50%, -100%)');
                        this.set('--border-color', 'var(--background-color, rgb(36,41,47)) transparent transparent');
                        break;

                    // right
                    case "right-top":
                        this.set('--after-top', '25%');
                        break;
                    case "right-bottom":
                        this.set('--after-top', '75%');
                        break;

                    // bottom
                    case "bottom-left":
                        this.set('--before-top', '100%');
                        this.set('--before-left', '50%');
                        this.set('--before-transform', 'translate(-50%, var(--offset, 0.5rem))');
                        this.set('--after-top', '100%');
                        this.set('--after-left', '25%');
                        this.set('--after-transform', 'translate(-50%, 0)');
                        this.set('--border-color', 'transparent transparent var(--background-color, rgb(36,41,47))');
                        break;
                    case "bottom-center":
                        this.set('--before-top', '100%');
                        this.set('--before-left', '50%');
                        this.set('--before-transform', 'translate(-50%, var(--offset, 0.5rem))');
                        this.set('--after-top', '100%');
                        this.set('--after-left', '50%');
                        this.set('--after-transform', 'translate(-50%, 0)');
                        this.set('--border-color', 'transparent transparent var(--background-color, rgb(36,41,47))');
                        break;
                    case "bottom-right":
                        this.set('--before-top', '100%');
                        this.set('--before-left', '50%');
                        this.set('--before-transform', 'translate(-50%, var(--offset, 0.5rem))');
                        this.set('--after-top', '100%');
                        this.set('--after-left', '75%');
                        this.set('--after-transform', 'translate(-50%, 0)');
                        this.set('--border-color', 'transparent transparent var(--background-color, rgb(36,41,47))');
                        break;

                    // left
                    case "left-top":
                        this.set('--before-top', '50%');
                        this.set('--before-left', '0');
                        this.set('--before-transform', 'translate(calc(-100% - var(--offset, 0.5rem)), -50%)');
                        this.set('--after-top', '25%');
                        this.set('--after-left', '0');
                        this.set('--after-transform', 'translate(-100%, -50%)');
                        this.set('--border-color', 'transparent transparent transparent var(--background-color, rgb(36,41,47))');
                        break;
                    case "left-center":
                        this.set('--before-top', '50%');
                        this.set('--before-left', '0');
                        this.set('--before-transform', 'translate(calc(-100% - var(--offset, 0.5rem)), -50%)');
                        this.set('--after-top', '50%');
                        this.set('--after-left', '0');
                        this.set('--after-transform', 'translate(-100%, -50%)');
                        this.set('--border-color', 'transparent transparent transparent var(--background-color, rgb(36,41,47))');
                        break;
                    case "left-bottom":
                        this.set('--before-top', '50%');
                        this.set('--before-left', '0');
                        this.set('--before-transform', 'translate(calc(-100% - var(--offset, 0.5rem)), -50%)');
                        this.set('--after-top', '75%');
                        this.set('--after-left', '0');
                        this.set('--after-transform', 'translate(-100%, -50%)');
                        this.set('--border-color', 'transparent transparent transparent var(--background-color, rgb(36,41,47))');
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        // this.update('data-text', this.dataText);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.update(name, newValue);
    }
}

// define the custom element
customElements.define("wc-tooltip", WC_Tooltip);