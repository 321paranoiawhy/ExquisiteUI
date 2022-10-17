export default class WC_Tooltip extends HTMLElement {
    /**
     * @theme github / light / material
     * @text default: This is a tooltip.
     * @placement default: right-center
     * @placement optional: top-left / top-center / top-right / right-top / right-center / right-bottom
     *                      bottom-left / bottom-center / bottom-right / left-top / left-center / left-bottom
     */
    static get observedAttributes() {
        return ['data-theme', 'data-text', 'data-placement', 'data-animation', 'data-arrow', 'data-trigger', 'data-z-index'];
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

    /**
     * get all CSS variables defined in the shadowRoot
     * @param {}
     * @return {[]}
     * @example document.querySelector('wc-progress-bar').CSSVariables;
     */
    get allCSSVariables() {
        const style = this.shadowRoot.styleSheets[0].cssRules[0].style;
        const result = [];
        for (let key in style) {
            if (!Number.isNaN(Number(key))) {
                if (style[key].startsWith('--')) {
                    result.push(style[key])
                };
            }
            else return result;
        }
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

    get dataAnimation() {
        return this.getAttribute('data-animation');
    }
    set dataAnimation(value) {
        this.setAttribute('data-animation', value);
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
            "light": { "color": "#313131", "background-color": "white" },
            "material": { "color": "white", "background-color": "#505355" },
        };

        this.shadowRoot.innerHTML = `
        <slot part="tooltip"></slot>
        <style>
        :host {
            display: inline-block;
            box-sizing: border-box;
            cursor: pointer;


            --color: initial;
            --background-color: initial;
            --padding: initial;
            --border-radius: initial;

            --content: initial;
            --before-top: initial;
            --before-left: initial;
            --before-transform: initial;
            --after-top: initial;
            --after-left: initial;
            --after-transform: initial;


            --offset: initial;
            --z-index: initial;
            --border-color: initial;

            --animation: initial;

            --flow-in: initial;
        }

        @keyframes flow-in {
            0% {
                transform: var(--flow-in, translate(20px, -50%));
            }
        }

        @keyframes flow-out {
            0% {
                transform: var(--flow-out, translate(-20px, -50%));
            }
        }

        @keyframes expand {
            0% {
                transform: scale3d(0.2, 0.2, 1);
            }
        }

        @keyframes swing {
            0% {
                transform: rotate3d(0, 0, 1, 60deg);
            }
        }

        slot {
            position: relative;
            display: inline-block;
            padding: var(--padding, 0.5rem 0.75rem);
        }
        slot::before {
            content: var(--content, 'This is a tooltip.');
            text-align: center;
            background-color: var(--background-color, rgb(36,41,47));
            color: var(--color, white);
            border-radius: var(--border-radius, 0.25rem);
            padding: var(--padding, 0.5rem 0.75rem);

            word-wrap: break-word;
            white-space: pre;

            top: var(--before-top, 50%);
            left: var(--before-left, 100%);
            transform: var(--before-transform, translate(var(--offset, 0.5rem), -50%));
        }
        slot::after {
            content: " ";
            top: var(--after-top, 50%);
            left: var(--after-left, 100%);
            transform: var(--after-transform, translateY(-50%));
            border: calc(var(--offset, 0.5rem) / 2) solid;
            border-color: var(--border-color, transparent var(--background-color, rgb(36,41,47)) transparent transparent);
        }
        slot::before,
        slot::after {
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            position: absolute;
            z-index: var(--z-index, 666);
            pointer-events: none;
        }
        slot:hover::before,
        slot:hover::after {
            visibility: visible;
            opacity: 1;
            animation: var(--animation);
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
                this.set('--content', "'" + value + "'");
                break;
            case "data-animation":
                if (this.dataAnimation === 'flow-in') {
                    this.set('--animation', 'flow-in 0.3s linear');
                    if (this.dataPlacement === 'top-left') {
                        this.set('--flow-in', 'translate(0, calc(-20px - 100%))');
                    }
                    else if (this.dataPlacement === 'top-center') {
                        this.set('--flow-in', 'translate(-50%, calc(-20px - 100%))');
                    }
                    else if (this.dataPlacement === 'top-right') {
                        this.set('--flow-in', 'translate(-100%, calc(-20px - 100%))');
                    }
                    else if (this.dataPlacement === 'bottom-left') {
                        this.set('--flow-in', 'translate(0, 20px)');
                    }
                    else if (this.dataPlacement === 'bottom-center') {
                        this.set('--flow-in', 'translate(-50%, 20px)');
                    }
                    else if (this.dataPlacement === 'bottom-right') {
                        this.set('--flow-in', 'translate(-100%, 20px)');
                    }
                    else if (this.dataPlacement === 'left-top') {
                        this.set('--flow-in', 'translate(calc(-20px - 100%), -50%)');
                    }
                    else if (this.dataPlacement === 'left-center') {
                        this.set('--flow-in', 'translate(calc(-20px - 100%), -50%)');
                    }
                    else if (this.dataPlacement === 'left-bottom') {
                        this.set('--flow-in', 'translate(calc(-20px - 100%), -50%)');
                    }
                }

                if (this.dataAnimation === 'flow-out') {
                    this.set('--animation', 'flow-out 0.3s linear');
                    if (this.dataPlacement === 'top-left') {
                        this.set('--flow-out', 'translate(0, calc(20px - 100%))');
                    }
                    else if (this.dataPlacement === 'top-center') {
                        this.set('--flow-out', 'translate(-50%, calc(20px - 100%))');
                    }
                    else if (this.dataPlacement === 'top-right') {
                        this.set('--flow-out', 'translate(-100%, calc(20px - 100%))');
                    }
                    else if (this.dataPlacement === 'bottom-left') {
                        this.set('--flow-out', 'translate(0, -20px)');
                    }
                    else if (this.dataPlacement === 'bottom-center') {
                        this.set('--flow-out', 'translate(-50%, -20px)');
                    }
                    else if (this.dataPlacement === 'bottom-right') {
                        this.set('--flow-out', 'translate(-100%, -20px)');
                    }
                    else if (this.dataPlacement === 'left-top') {
                        this.set('--flow-out', 'translate(calc(20px - 100%), -50%)');
                    }
                    else if (this.dataPlacement === 'left-center') {
                        this.set('--flow-out', 'translate(calc(20px - 100%), -50%)');
                    }
                    else if (this.dataPlacement === 'left-bottom') {
                        this.set('--flow-out', 'translate(calc(20px - 100%), -50%)');
                    }
                }

                if (this.dataAnimation === 'expand') {
                    this.set('--animation', 'expand 0.3s linear');
                }

                if (this.dataAnimation === 'swing') {
                    console.log(111)
                    this.set('--animation', 'swing 0.3s linear');
                }
                break;
            case "data-placement":
                switch (this.dataPlacement) {
                    // top
                    case "top-left":
                        this.set('--before-top', '0');
                        this.set('--before-left', '0');
                        this.set('--before-transform', 'translate(0, calc(-100% - var(--offset, 0.5rem)))');

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
                        this.set('--before-left', '100%');
                        this.set('--before-transform', 'translate(-100%, calc(-100% - var(--offset, 0.5rem)))');
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
                        this.set('--before-left', '0');
                        this.set('--before-transform', 'translate(0, var(--offset, 0.5rem))');
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
                        this.set('--before-left', '100%');
                        this.set('--before-transform', 'translate(-100%, var(--offset, 0.5rem))');
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
        this.setAttribute('tabindex', 0);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.update(name, newValue);
    }
}

// define the custom element
customElements.define("wc-tooltip", WC_Tooltip);