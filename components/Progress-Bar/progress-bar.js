// theme color
// https://codepen.io/aybukeceylan/pen/OJRNbZp

export default class WC_Progress_Bar extends HTMLElement {
    /**
     * attributes in web components to be observed
     * @param {}
     * @return {[]}
     * @example get observedAttributes using JavaScript:
     * document.querySelector('wc-progress-bar').constructor.observedAttributes;
     */
    static get observedAttributes() {
        return ['data-theme', 'data-text', 'data-text-position', 'data-span-width'];
    }

    /**
     * get current data-theme attribute in web components
     * @param {}
     * @return {string} default value of dataTheme is 'orange'
     * @example document.querySelector('wc-progress-bar').dataTheme;
     */
    get dataTheme() {
        return this.getAttribute('data-theme') || 'orange'; // return this.dataset.theme || 'orange';
    }

    /**
     * set current data-theme attribute to a new value
     * @param {string} a new value
     * @return {string}
     * @example document.querySelector('wc-progress-bar').dataTheme = 'pink';
     */
    set dataTheme(value) {
        this.setAttribute('data-theme', value);
    }

    get dataText() {
        return this.getAttribute('data-text') || '50%'; // return this.dataset.text || '50%';
    }

    set dataText(value) {
        this.setAttribute('data-text', value);
    }

    get dataTextPosition() {
        return this.getAttribute('data-text-position') || 'right'; // return this.dataset.textPosition || 'right';
    }

    set dataTextPosition(value) {
        this.setAttribute('data-text-position', value);
    }

    get dataSpanWidth() {
        return this.getAttribute('data-span-width') || '50%';
    }
    set dataSpanWidth(value) {
        this.setAttribute('data-span-width', value);
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
                result.push(style[key]);
            }
            else return result;
        }
    }

    /**
     * get the element in shadow DOM
     * @param {string} CSS selector
     * @return {element}
     * @example document.querySelector('wc-progress-bar').getElement('span');
     */
    getElement(selector) {
        return this.shadowRoot.querySelector(selector);
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
     * get the value of CSS variable
     * @param {string} CSS Variable Name
     * @return {string}
     * @example document.querySelector('wc-progress-bar').get('--span-width');
     */
    get(CSSVariableName) {
        return this.shadowRoot.styleSheets[0].cssRules[0].style.getPropertyValue(CSSVariableName);
    }

    /**
     * check if CSS variable exists in the shadowRoot
     * @param {string} CSS Variable Name
     * @return {boolean}
     * @example document.querySelector('wc-progress-bar').has('--span-width');
     */
    has(CSSVariableName) {
        return this.CSSVariables.includes(CSSVariableName);
    }

    // TODO
    save() {

    }

    // TODO
    restore() {

    }

    constructor() {
        // always call super first in constructor
        super();

        // create a shadow root
        this.attachShadow({
            mode: "open",
        });

        this.theme = {
            "orange": "#ff942e",
            "blue-magenta": "#4f3ff0",
            "cyan": "#096c86",
            "pink": "#df3670",
            "green-cyan": "#34c471",
        };

        this.shadowRoot.innerHTML = `
        <div part='container'>
        <div part='inner'>
        <span part='bar' data-text=''></span>
        </div>
        </div>
        <style>
        :host {
            --border-radius: initial;
            --div-width: initial;
            --div-height: initial;
            --div-background-color: initial;
            --span-width: initial;
            --span-background-color: initial;
            --span-theme-background-color: initial;
            --span-transition: initial;
            --hover-span-animation: initial;
            --before-top: initial;
            --before-left: initial;
            --before-transform: initial;
            --text-color: initial;
        }
        :host {
            box-sizing: border-box;
        }
        @keyframes hover-move {
            0% {
                width: 0%;
            }
            100% {
                width: var(--span-width, 50%);
            }
        }
        div[part='container'] {
            margin: 1rem;
        }
        div[part='inner'] {
            margin: auto;
            position: relative;
            width: var(--div-width, 100px);
            height: var(--div-height, 0.25rem);
            background-color: var(--div-background-color, #e5e5e5);
            border-radius: var(--border-radius, 4px);
        }
        span {
            display: block;
            width: var(--span-width, 50%);
            height: 100%;
            background-color: var(--span-background-color, var(--span-theme-background-color));
            border-radius: var(--border-radius, 4px);
            transition: var(--span-transition, width 0.3s linear);
        }
        span::before {
            position: absolute;
            content: attr(data-text);
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            top: var(--before-top);
            left: var(--before-left);
            transform: var(--before-transform);
            color: var(--text-color);
        }
        div[part='inner']:hover span {
            animation: hover-move var(--hover-span-animation, 0.3s ease-in-out);
        }
        </style>
        `;
    }

    updateTheme(theme) {
        this.set('--span-theme-background-color', this.theme[theme]);
    }
    updateText(text) {
        this.getElement('span').setAttribute('data-text', text);
    }
    updateTextPosition(position) {
        switch (position) {
            case "left":
                this.set('--before-top', '50%');
                this.set('--before-left', '0');
                this.set('--before-transform', 'translate(calc(-100% - 0.5rem), -50%)');
                break;
            case "right":
                this.set('--before-top', '50%');
                this.set('--before-left', 'var(--div-width, 100px)');
                this.set('--before-transform', 'translate(0.5rem, -50%)');
                break;
            case "top":
                this.set('--before-top', '0');
                this.set('--before-left', `var(--span-width, 50%)`);
                this.set('--before-transform', 'translate(-50%, calc(-100% - 0.5rem))');
                break;
            case "bottom":
                this.set('--before-top', '100%');
                this.set('--before-left', `var(--span-width, 50%)`);
                this.set('--before-transform', 'translate(-50%, 0.5rem)');
                break;
            case "center":
                this.set('--before-top', '50%');
                this.set('--before-left', `var(--span-width, 50%)`);
                this.set('--before-transform', 'translate(0.5rem, -50%)');
                // adjust size
                this.set('--div-height', '1.5rem');
                this.set('--div-width', '300px');
                this.set('--border-radius', '1.5rem');
                break;
            default:
                break;
        }
    }
    updateSpanWidth(width) {
        this.set('--span-width', width);
    }

    connectedCallback() {
        this.updateTheme(this.dataTheme);
        this.updateText(this.dataText);
        this.updateTextPosition(this.dataTextPosition);
        this.updateSpanWidth(this.dataSpanWidth);
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'data-theme':
                this.updateTheme(newValue);
                break;
            case 'data-text':
                this.updateText(newValue);
                break;
            case 'data-text-position':
                this.updateTextPosition(newValue);
                break;
            case 'data-span-width':
                this.updateSpanWidth(newValue);
                break;
            default:
                break;
        }
    }
}

// define the custom element
customElements.define("wc-progress-bar", WC_Progress_Bar);