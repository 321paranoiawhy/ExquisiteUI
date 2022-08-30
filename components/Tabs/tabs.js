export default class WC_Tabs extends HTMLElement {
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

    get dataType() {
        return this.getAttribute('data-type');
    }
    set dataType(value) {
        this.setAttribute('data-type', value);
    }

    get dataPosition() {
        return this.getAttribute('data-position');
    }
    set dataPosition(value) {
        this.setAttribute('data-position', value);
    }

    get dataTheme() {
        return this.getAttribute('data-theme');
    }
    set dataTheme(value) {
        this.setAttribute('data-theme', value);
    }

    constructor() {
        // always call super first in constructor
        super();

        // create a shadow root
        this.attachShadow({
            mode: "open",
        });

        this.currentIndex = this.dataIndex || 0;

        this.shadowRoot.innerHTML = `
        <div class="tab"><slot name="tab"></slot><div class="border"></div></div>
        <div class="panel"><slot name="panel"></slot></div>
        <style>
        :host {
            --flex-direction: initial;
        }
        :host {
            display: flex;
            flex-direction: var(--host-flex-direction, column);
        }
        .border {
            position: absolute;
            left: var(--border-left, 0);
            top: var(--border-top, calc(100% - var(--border-height, 2px) + 1rem));
            width: var(--border-width);
            height: var(--border-height, 2px);
            background-color: var(--border-background-color, #409eff);
            z-index: 6;
            transform: translate(var(--border-translate));
            transition: all 0.3s linear;
        }
        .tab {
            display: flex;
            align-items: center;
            flex-direction: var(--tab-flex-direction, row);
            gap: var(--tab-gap, 0 2rem);
            position: relative;
            /* TODO */
            /* overflow-x: var(--tab-overflow-x, hidden); */
        }
        .tab::after {
            content: "";
            position: absolute;
            top: var(--tab-after-top, calc(100% - 2px + 1rem));
            left: var(--tab-after-left, 0);
            width: var(--tab-after-width, 100%);
            height: var(--tab-after-height, 2px);
            background-color: var(--tab-after-background-color, #e4e7ed);
        }
        .tab ::slotted(*) {
            margin-top: 0;
            margin-bottom: 0;
            color: var(--tab-color, #303133);
            cursor: var(--tab-cursor, pointer);
            position: relative;
            white-space: nowrap;
        }


        .tab ::slotted(.selected) {
            color: var(--tab-selected-color, #409eff);
            z-index: 1;
            transition: all 0.3s linear;
        }
        .tab ::slotted(:not(.selected):hover) {
            color: var(--tab-hover-color, #409eff);
        }

        .panel ::slotted(*) {
            padding: var(--panel-padding, 2rem 0 0 );
        }
        .panel ::slotted(:not(.selected)) {
            visibility: hidden;
            opacity: 0;
            display: none;
        }
        </style>
        `;

        this.style = this.shadowRoot.styleSheets[0].cssRules[0].style;
    }

    updatePosition() {
        switch (this.dataPosition) {
            case "left":
                this.set('--border-left', 'calc(100% + 1rem)');
                this.set('--border-top', this.dom.tabArray[this.currentIndex].offsetTop + 'px');
                this.set('--border-width', '2px');
                this.set('--border-height', this.dom.tabArray[this.currentIndex].offsetHeight + 'px');
                break;
            case "right":
                this.set('--border-left', '-1rem');
                this.set('--border-top', this.dom.tabArray[this.currentIndex].offsetTop + 'px');
                this.set('--border-width', '2px');
                this.set('--border-height', this.dom.tabArray[this.currentIndex].offsetHeight + 'px');
                break;
            case "top":
                this.set('--border-width', this.dom.tabArray[this.currentIndex].offsetWidth + 'px');
                this.set('--border-translate', this.dom.tabArray[this.currentIndex].offsetLeft + 'px');
                break;
            case "bottom":
                this.set('--border-width', this.dom.tabArray[this.currentIndex].offsetWidth + 'px');
                this.set('--border-translate', this.dom.tabArray[this.currentIndex].offsetLeft + 'px');
                break;
            default:
                this.set('--border-width', this.dom.tabArray[this.currentIndex].offsetWidth + 'px');
                this.set('--border-translate', this.dom.tabArray[this.currentIndex].offsetLeft + 'px');
                break;
        }
    }

    connectedCallback() {
        this.setAttribute('tabindex', 0);

        this.dom = {
            tabSlot: this.shadowRoot.querySelector('slot[name="tab"]'),
            panelSlot: this.shadowRoot.querySelector('slot[name="panel"]'),
        };
        this.dom.tabArray = this.dom.tabSlot.assignedElements();
        this.dom.panelArray = this.dom.panelSlot.assignedElements();

        this.dom.tabArray.forEach(element => {
            element.setAttribute('tabindex', 0);
            if (element.getAttribute('data-disabled') === "true") {
                element.style.setProperty('--tab-cursor', 'not-allowed');
                element.style.setProperty('--tab-color', '#00000040');
                element.style.setProperty('--tab-hover-color', '#00000040');
            }
        });


        this.updatePosition();


        this.dom.tabArray[this.currentIndex].classList.add('selected');
        this.dom.panelArray[this.currentIndex].classList.add('selected');


        this.dom.tabSlot.onclick = this.onTabClick.bind(this); // this.dom.tabSlot.addEventListener('click', this.onTabClick);
    }

    onTabClick(e) {
        const index = this.dom.tabArray.indexOf(e.target);
        if (e.target.getAttribute("data-disabled") == "true") return;
        if (e.target.slot === 'tab' && index !== this.currentIndex) {
            // remove selected class
            this.dom.tabArray[this.currentIndex].classList.remove('selected');
            this.dom.panelArray[this.currentIndex].classList.remove('selected');
            // add selected class
            this.dom.tabArray[index].classList.add('selected'); // e.target.classList.add('selected');
            this.dom.panelArray[index].classList.add('selected');

            // update current index
            this.currentIndex = index;

            if (this.dataPosition === 'left' || this.dataPosition === 'right') {
                this.set('--border-height', e.target.offsetHeight + 'px');
                this.set('--border-translate', `0, ${e.target.offsetTop}px`);
            }
            // this.dataPosition === 'top' || this.dataPosition === 'bottom'
            else {
                this.set('--border-width', e.target.offsetWidth + 'px');
                this.set('--border-translate', e.target.offsetLeft + 'px');
            }
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'data-index':
                if (oldValue !== null) {
                    const index = this.dataIndex;
                    // remove selected class
                    this.dom.tabArray[this.currentIndex].classList.remove('selected');
                    this.dom.panelArray[this.currentIndex].classList.remove('selected');
                    // add selected class
                    this.dom.tabArray[index].classList.add('selected'); // e.target.classList.add('selected');
                    this.dom.panelArray[index].classList.add('selected');
                    // update current index
                    this.currentIndex = index;
                }
                break;
            case 'data-position':
                switch (this.dataPosition) {
                    case "top":
                        this.set('--host-flex-direction', 'column');
                        this.set('--tab-flex-direction', 'row');
                        this.set('--panel-padding', '2rem 0 0');
                        break;
                    case "bottom":
                        this.set('--host-flex-direction', 'column-reverse');
                        this.set('--tab-flex-direction', 'row');
                        this.set('--panel-padding', '0 0 1rem');
                        break;
                    case "left":
                        this.set('--host-flex-direction', 'row');
                        this.set('--tab-flex-direction', 'column');
                        this.set('--tab-gap', '1rem 0');
                        this.set('--tab-after-top', '0');
                        this.set('--tab-after-left', 'calc(100% + 1rem)');
                        this.set('--tab-after-width', '2px');
                        this.set('--tab-after-height', '100%');

                        this.set('--panel-padding', '0 0 0 2rem');
                        break;
                    case "right":
                        this.set('--host-flex-direction', 'row-reverse');
                        this.set('--tab-flex-direction', 'column');
                        this.set('--tab-gap', '1rem 0');
                        this.set('--tab-after-top', '0');
                        this.set('--tab-after-left', '-1rem');
                        this.set('--tab-after-width', '2px');
                        this.set('--tab-after-height', '100%');

                        this.set('--panel-padding', '0 2rem 0 0');
                        break;
                    default:
                        break;
                }
                break;
            case "data-theme":
                if (this.dataTheme === "material-design") {
                    this.set('--border-background-color', '#6200ee');
                    this.set('--tab-color', 'rgba(0, 0, 0, 0.6)');
                    this.set('--tab-selected-color', '#6200ee');
                    this.set('--tab-hover-color', '#6200ee');
                }
                break;
            default:
                break;
        }
    }
}

// define the custom element
customElements.define("wc-tabs", WC_Tabs);