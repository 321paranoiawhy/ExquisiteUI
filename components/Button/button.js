export default class WC_Button extends HTMLElement {
    static get observedAttributes() {
        return ['data-theme', 'data-type', 'data-size', 'data-round'];
    }

    get dataTheme() {
        return this.getAttribute('data-theme');
    }

    set dataTheme(value) {
        this.setAttribute('data-theme', value);
    }

    get dataType() {
        return this.getAttribute('data-type');
    }

    set dataType(value) {
        this.setAttribute('data-type', value);
    }

    get dataSize() {
        return this.getAttribute('data-size');
    }

    set dataSize(value) {
        this.setAttribute('data-size', value);
    }

    get dataRound() {
        return this.getAttribute('data-round');
    }

    set dataRound(value) {
        this.setAttribute('data-round', value);
    }

    set(CSSVariableName, CSSVariableValue) {
        this.hostStyle.setProperty(CSSVariableName, CSSVariableValue);
    }

    get allCSSVariables() {
        // const style = this.hostStyle;
        const result = [];
        for (let key in this.hostStyle) {
            if (!Number.isNaN(Number(key))) {
                if (this.hostStyle[key].startsWith('--')) {
                    result.push(this.hostStyle[key])
                };
            }
            else return result;
        }
    }

    constructor() {
        // always call super first in constructor
        super();

        // create a shadow root
        this.attachShadow({
            mode: "open",
        });

        // https://github.com/LeaVerou/nudeui/blob/main/button-group/button-group.js#L9
        // this.shadowRoot.innerHTML = `<button><slot></slot></button><style>@import "${new URL("button.css", import.meta.url)}";</style>`;
        this.shadowRoot.innerHTML = `
        <button><slot part="button"></slot></button>
        <style>
        :host {
            --color: initial;
            --border-color: initial;
            --background-color: initial;

            --hover-color: initial;
            --hover-border-color: initial;
            --hover-background-color: initial;
            --text-decoration: initial;

            --padding: initial;
            --font-size: initial;
            --line-height: initial;
            --border-radius: initial;
        }

        button {
            border: 1px solid #007bff;
            color: var(--color, #fff);
            border-color: var(--border-color);
            background-color: var(--background-color, #007bff);
            cursor: pointer;
            user-select: none;
            white-space: nowrap;
            box-sizing: border-box;
            padding: var(--padding, 0.375rem 0.75rem);
            font-size: var(--font-size, 1rem);
            line-height: var(--line-height, 1.5);
            border-radius: var(--border-radius, 0.25rem);
            text-decoration: var(--text-decoration);
        }

        button:hover {
            color: var(--hover-color, #fff);
            border-color: var(--hover-border-color, #0069d9);
            background-color: var(--hover-background-color, #0069d9);
        }
        </style>
        `;

        this.hostStyle = this.shadowRoot.styleSheets[0].cssRules[0].style;
    }

    connectedCallback() {
        this.updateStyle(this.dataTheme, this.dataType);
        if (this.dataTheme === "element" || this.dataTheme === "element-plain") {
            this.set('--padding', '0.75rem 1.25rem');
            this.set('--font-size', '14px');
            this.set('--line-height', '1');
        }

        if (this.hasAttribute("data-round")) {
            this.set('--border-radius', '1.25rem');
        }

        switch (this.dataSize) {
            case "small":
                this.set('--font-size', '0.875rem');
                this.set('--padding', '0.25rem 0.5rem');
                break;
            case "medium":
                this.set('--font-size', '1rem');
                this.set('--padding', '0.375rem 0.75rem');
                break;
            case "large":
                this.set('--font-size', '1.25rem');
                this.set('--padding', '0.5rem 1rem');
                break;
            default:
                break;
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== null) {
            switch (name) {
                case "data-theme":
                    this.updateStyle(newValue, this.dataType);
                    break;
                case "data-type":
                    this.updateStyle(this.dataTheme, newValue);
                    break;
                case "data-size":
                    if (newValue === "small") {
                        this.set('--font-size', '0.875rem');
                        this.set('--padding', '0.25rem 0.5rem');
                    }
                    else if (newValue === "medium") {
                        this.set('--font-size', '1rem');
                        this.set('--padding', '0.375rem 0.75rem');
                    }
                    else if (newValue === "large") {
                        this.set('--font-size', '1.25rem');
                        this.set('--padding', '0.5rem 1rem');
                    }
                    break;
                case "data-round":
                    if (this.hasAttribute("data-round")) {
                        this.set('--border-radius', '1.25rem');
                    }
                    else this.set('--border-radius', 'initial');
                default:
                    break;
            }
            // if (name === "data-theme") {
            //     this.updateStyle(newValue, this.dataType);
            // }
            // else if (name === "data-type") {
            //     this.updateStyle(this.dataTheme, newValue);
            // }
            // else if (name === "data-size") {
            //     if (newValue === "small") {
            //         this.set('--font-size', '0.875rem');
            //         this.set('--padding', '0.25rem 0.5rem');
            //     }
            //     else if (newValue === "large") {
            //         this.set('--font-size', '1.25rem');
            //         this.set('--padding', '0.5rem 1rem');
            //     }
            //     else {
            //         this.set('--font-size', '1rem');
            //         this.set('--padding', '0.375rem 0.75rem');
            //     }
            // }
            // else if (name === "data-round") {
            //     if (this.hasAttribute("data-round")) {
            //         this.set('--border-radius', '1.25rem');
            //     }
            //     else this.set('--border-radius', 'initial');
            // }
        }
    }

    updateStyle(theme, style) {
        if (theme === "bootstrap") {
            switch (style) {
                case "primary":
                    this.set("--color", "initial");
                    this.set("--border-color", "initial");
                    this.set("--background-color", "initial");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "initial");
                    this.set("--hover-background-color", "initial");
                    this.set("--text-decoration", "initial");
                    break;
                case "secondary":
                    this.set("--color", "initial");
                    this.set("--border-color", "#6c757d");
                    this.set("--background-color", "#6c757d");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#5a6268");
                    this.set("--hover-background-color", "#5a6268");
                    this.set("--text-decoration", "initial");
                    break;
                case "success":
                    this.set("--color", "initial");
                    this.set("--border-color", "#28a745");
                    this.set("--background-color", "#28a745");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#1e7e34");
                    this.set("--hover-background-color", "#218838");
                    this.set("--text-decoration", "initial");
                    break;
                case "danger":
                    this.set("--color", "initial");
                    this.set("--border-color", "#dc3545");
                    this.set("--background-color", "#dc3545");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#bd2130");
                    this.set("--hover-background-color", "#c82333");
                    this.set("--text-decoration", "initial");
                    break;
                case "warning":
                    this.set("--color", "#212529");
                    this.set("--border-color", "#ffc107");
                    this.set("--background-color", "#ffc107");
                    this.set("--hover-color", "#212529");
                    this.set("--hover-border-color", "#d39e00");
                    this.set("--hover-background-color", "#e0a800");
                    this.set("--text-decoration", "initial");
                    break;
                case "info":
                    this.set("--color", "initial");
                    this.set("--border-color", "#17a2b8");
                    this.set("--background-color", "#17a2b8");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#117a8b");
                    this.set("--hover-background-color", "#138496");
                    this.set("--text-decoration", "initial");
                    break;
                case "light":
                    this.set("--color", "#212529");
                    this.set("--border-color", "#f8f9fa");
                    this.set("--background-color", "#f8f9fa");
                    this.set("--hover-color", "#212529");
                    this.set("--hover-border-color", "#dae0e5");
                    this.set("--hover-background-color", "#e2e6ea");
                    this.set("--text-decoration", "initial");
                    break;
                case "dark":
                    this.set("--color", "initial");
                    this.set("--border-color", "#343a40");
                    this.set("--background-color", "#343a40");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#1d2124");
                    this.set("--hover-background-color", "#23272b");
                    this.set("--text-decoration", "initial");
                    break;
                case "link":
                    this.set("--color", "#007bff");
                    this.set("--border-color", "transparent");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "#0056b3");
                    this.set("--hover-border-color", "transparent");
                    this.set("--hover-background-color", "transparent");
                    this.set("--text-decoration", "underline");
                    break;
                default:
                    this.set("--color", "initial");
                    this.set("--border-color", "initial");
                    this.set("--background-color", "initial");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "initial");
                    this.set("--hover-background-color", "initial");
                    this.set("--text-decoration", "initial");
                    break;
            }
        }
        else if (theme === "bootstrap-outline") {
            switch (style) {
                case "primary":
                    this.set("--color", "#007bff");
                    this.set("--border-color", "#007bff");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "initial");
                    this.set("--hover-background-color", "initial");
                    this.set("--text-decoration", "initial");
                    break;
                case "secondary":
                    this.set("--color", "#6c757d");
                    this.set("--border-color", "#6c757d");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#6c757d");
                    this.set("--hover-background-color", "#6c757d");
                    this.set("--text-decoration", "initial");
                    break;
                case "success":
                    this.set("--color", "#28a745");
                    this.set("--border-color", "#28a745");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#28a745");
                    this.set("--hover-background-color", "#28a745");
                    this.set("--text-decoration", "initial");
                    break;
                case "danger":
                    this.set("--color", "#dc3545");
                    this.set("--border-color", "#dc3545");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#dc3545");
                    this.set("--hover-background-color", "#dc3545");
                    this.set("--text-decoration", "initial");
                    break;
                case "warning":
                    this.set("--color", "#ffc107");
                    this.set("--border-color", "#ffc107");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "#212529");
                    this.set("--hover-border-color", "#ffc107");
                    this.set("--hover-background-color", "#ffc107");
                    this.set("--text-decoration", "initial");
                    break;
                case "info":
                    this.set("--color", "#17a2b8");
                    this.set("--border-color", "#17a2b8");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#17a2b8");
                    this.set("--hover-background-color", "#17a2b8");
                    this.set("--text-decoration", "initial");
                    break;
                case "light":
                    this.set("--color", "#f8f9fa");
                    this.set("--border-color", "#f8f9fa");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "#212529");
                    this.set("--hover-border-color", "#f8f9fa");
                    this.set("--hover-background-color", "#f8f9fa");
                    this.set("--text-decoration", "initial");
                    break;
                case "dark":
                    this.set("--color", "#343a40");
                    this.set("--border-color", "#343a40");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "#343a40");
                    this.set("--hover-background-color", "#343a40");
                    this.set("--text-decoration", "initial");
                    break;
                case "link":
                    this.set("--color", "#007bff");
                    this.set("--border-color", "transparent");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "#0056b3");
                    this.set("--hover-border-color", "transparent");
                    this.set("--hover-background-color", "transparent");
                    this.set("--text-decoration", "underline");
                    break;
                default:
                    this.set("--color", "#007bff");
                    this.set("--border-color", "#007bff");
                    this.set("--background-color", "transparent");
                    this.set("--hover-color", "initial");
                    this.set("--hover-border-color", "initial");
                    this.set("--hover-background-color", "initial");
                    this.set("--text-decoration", "initial");
                    break;
            }
        }
        else if (theme === "element") {
            switch (style) {
                case "primary":
                    this.set("--color", "#fff");
                    this.set("--border-color", "#409eff");
                    this.set("--background-color", "#409eff");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#66b1ff");
                    this.set("--hover-background-color", "#66b1ff");
                    this.set("--text-decoration", "initial");
                    break;
                case "success":
                    this.set("--color", "#fff");
                    this.set("--border-color", "#67c23a");
                    this.set("--background-color", "#67c23a");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#85ce61");
                    this.set("--hover-background-color", "#85ce61");
                    this.set("--text-decoration", "initial");
                    break;
                case "info":
                    this.set("--color", "#fff");
                    this.set("--border-color", "#909399");
                    this.set("--background-color", "#909399");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#a6a9ad");
                    this.set("--hover-background-color", "#a6a9ad");
                    this.set("--text-decoration", "initial");
                    break;
                case "warning":
                    this.set("--color", "#fff");
                    this.set("--border-color", "#e6a23c");
                    this.set("--background-color", "#e6a23c");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#ebb563");
                    this.set("--hover-background-color", "#ebb563");
                    this.set("--text-decoration", "initial");
                    break;
                case "danger":
                    this.set("--color", "#fff");
                    this.set("--border-color", "#f56c6c");
                    this.set("--background-color", "#f56c6c");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#f78989");
                    this.set("--hover-background-color", "#f78989");
                    this.set("--text-decoration", "initial");
                    break;
                default:
                    this.set("--color", "#606266");
                    this.set("--border-color", "#dcdfe6");
                    this.set("--background-color", "#fff");
                    this.set("--hover-color", "#409eff");
                    this.set("--hover-border-color", "#c6e2ff");
                    this.set("--hover-background-color", "#ecf5ff");
                    this.set("--text-decoration", "initial");
                    break;
            }
        }
        else if (theme === "element-plain") {
            switch (style) {
                case "primary":
                    this.set("--color", "#409eff");
                    this.set("--border-color", "#b3d8ff");
                    this.set("--background-color", "#ecf5ff");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#409eff");
                    this.set("--hover-background-color", "#409eff");
                    this.set("--text-decoration", "initial");
                    break;
                case "success":
                    this.set("--color", "#67c23a");
                    this.set("--border-color", "#c2e7b0");
                    this.set("--background-color", "#f0f9eb");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#67c23a");
                    this.set("--hover-background-color", "#67c23a");
                    this.set("--text-decoration", "initial");
                    break;
                case "info":
                    this.set("--color", "#909399");
                    this.set("--border-color", "#d3d4d6");
                    this.set("--background-color", "#f4f4f5");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#909399");
                    this.set("--hover-background-color", "#909399");
                    this.set("--text-decoration", "initial");
                    break;
                case "warning":
                    this.set("--color", "#e6a23c");
                    this.set("--border-color", "#f5dab1");
                    this.set("--background-color", "#fdf6ec");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#e6a23c");
                    this.set("--hover-background-color", "#e6a23c");
                    this.set("--text-decoration", "initial");
                    break;
                case "danger":
                    this.set("--color", "#f56c6c");
                    this.set("--border-color", "#fbc4c4");
                    this.set("--background-color", "#fef0f0");
                    this.set("--hover-color", "#fff");
                    this.set("--hover-border-color", "#f56c6c");
                    this.set("--hover-background-color", "#f56c6c");
                    this.set("--text-decoration", "initial");
                    break;
                default:
                    this.set("--color", "#606266");
                    this.set("--border-color", "#dcdfe6");
                    this.set("--background-color", "#fff");
                    this.set("--hover-color", "#409eff");
                    this.set("--hover-border-color", "#409eff");
                    this.set("--hover-background-color", "#fff");
                    this.set("--text-decoration", "initial");
                    break;
            }
        }
    }
}

// define the custom element
customElements.define("wc-button", WC_Button);