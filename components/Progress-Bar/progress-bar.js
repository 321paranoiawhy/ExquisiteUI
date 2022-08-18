// theme color
// https://codepen.io/aybukeceylan/pen/OJRNbZp
// https://encycolorpedia.com/ff942e

// ! 1. import assertions (json modules)
// https://v8.dev/features/import-assertions
// https://github.com/tc39/proposal-import-assertions
// https://github.com/tc39/proposal-json-modules
// https://2ality.com/2021/01/import-assertions.html
// 1.1 static import
// import themeColor from './colors/theme.json' assert {type: 'json'};
// fetch('./colors/theme.json');

// 1.2 dynamic import: https://v8.dev/features/import-assertions#dynamic-import()
// const themeColor = await import('./colors/theme.json', {
//     assert: { type: 'json' }
// });
// console.log(themeColor.default);
// FireFox: Uncaught SyntaxError: import assertions are not currently supported
// https://github.com/Fyrd/caniuse/issues/5928#issuecomment-1057056155

// ! 2. XMLHttpRequest: https://zh.javascript.info/xmlhttprequest
// let xhr = new XMLHttpRequest();
// xhr.open('GET', './colors/theme-color.json');
// xhr.responseType = 'json';
// xhr.send();
// xhr.onload = function () {
//     console.log(xhr.response);
// };

// ! 3. axios: https://axios-http.com/docs/intro
// const axios = require('axios').default;
// const test = await axios.post('./colors/theme-color.json');
// console.log(test.data.data);

// ! 4. fetch: https://zh.javascript.info/fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html
const _response = await fetch('./colors/theme-color.json');
const _themeColor = await _response.json();
// or use via:
// fetch('./colors/theme-color.json')
//     .then(response => response.json())
//     .then(data => console.log(data));



export default class WC_Progress_Bar extends HTMLElement {
    constructor() {
        // always call super first in constructor
        super();

        // create a shadow root
        this.attachShadow({
            mode: "open",
        });

        // basic settings
        // const settings = {
        //     backgroundColor: this.getAttribute("background-color") || "#e5e5e5",
        //     progressColor: this.getAttribute("progress-color") || _themeColor[this.getAttribute("theme")] || "#ff942e",
        //     progress: this.getAttribute("progress") || "50%",
        //     animation: this.getAttribute("animation") || "0.3s ease-in-out",
        //     position: this.getAttribute("position") || "absolute",
        // }

        // basic settings
        const settings = (() => {
            const backgroundColor = this.getAttribute("background-color") || "#e5e5e5";
            const progressColor = this.getAttribute("progress-color") || _themeColor[this.getAttribute("theme")] || "#ff942e";
            const progress = this.getAttribute("progress") || "50%";
            const animation = this.getAttribute("animation") || "0.3s ease-in-out";
            // TODO
            const position = this.getAttribute("position") || "absolute";
            return {
                backgroundColor,
                progressColor,
                progress,
                animation,
                position,
            };
        })();

        // create new CSS style sheets using CSSStyleSheet constructor
        // let currentCSSStyleSheet = new CSSStyleSheet();
        this.currentCSSStyleSheet = new CSSStyleSheet();

        this.currentCSSStyleSheet.replace(`:host {
        }
        @keyframes speed {
            0% {
                width: 0%;
            }
            100% {
                width: var(--progress, ${settings.progress});
            }
        }
        :host div {
            background-color: var(--background-color, ${settings.backgroundColor});
        }
        :host div span {
            width: var(--progress, ${settings.progress});
            background-color: var(--progress-color, ${settings.progressColor});
        }
        :host div:hover span {
            animation: speed var(--animation, ${settings.animation});
        }`);


        this.shadowRoot.adoptedStyleSheets = [this.currentCSSStyleSheet];

        // structure: a span nested in a div, and a span after the div
        // CSS style: low priority -> high priority
        // progress-bar.css -> <style></style> -> inline-style

        this.shadowRoot.innerHTML = `
        <div>
        <span><slot name='progress'></slot></span>
        </div>
        <span><slot name='text'>111</slot></span>
        <style>@import "./progress-bar.css";</style>
        `;
    }

    // return an array composed of static properties to be observed
    // or, define observedAttributes outside of this class via:
    // WC_Progress_Bar.observedAttributes = ["background-color", "progress-color", "theme", "progress", "animation"];
    static get observedAttributes() {
        return ["background-color", "progress-color", "theme", "progress", "animation"];
    }

    // Using the lifecycle callbacks: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
    attributeChangedCallback(name, oldValue, newValue) {
        // avoid invoking when first connected
        // only when value exactly changes from oldValue to newValue
        if (oldValue && newValue !== oldValue) {
            console.log(newValue);
            // let obj = {};
            // obj[`${name}`] = newValue;
            // console.log(obj);
            // this.update(obj);
            this.update({ [name]: newValue });
        }
        // if (oldValue && newValue !== oldValue) {
        //     switch (name) {
        //         case "background-color":
        //             this.shadowRoot.querySelector('div').style.backgroundColor = newValue;
        //             break;
        //         case "progress-color":
        //             this.shadowRoot.querySelector('div span').style.color = newValue;
        //             break;
        //         case "theme":
        //             this.shadowRoot.querySelector('div span').style.color = newValue;
        //             break;
        //         case "progress":
        //             this.shadowRoot.querySelector('div span').style.width = newValue;
        //             this.settings.progress = newValue;
        //             break;
        //         case "animation":
        //             // before -> animation:
        //             // after ;
        //             // https://zh.javascript.info/regexp-lookahead-lookbehind#zong-jie
        //             // notice: there should be no ; in newValue
        //             // replace innerHTML with newValue
        //             this.shadowRoot.innerHTML = this.shadowRoot.innerHTML.replace(/(?<=animation:)[\s\S]*(?=;)/, newValue);
        //             console.log(this.shadowRoot.innerHTML);
        //             break;
        //         default:
        //             break;
        //     }
        // }
    }
    // update current CSSStyleSheet
    update(newValue) {
        // only receive an object parameter
        if (typeof newValue !== 'object') {
            throw new TypeError('Function parameter must be an object ! Please check the type of parameter.');
        }
        else {
            let newStyle = '';
            for (let key in newValue) {
                // newStyle += key + ': ' + `${newValue[key]}` + ';';
                newStyle += '--' + key + ': ' + `${newValue[key]}` + ';';
            }
            // delete the old style at index 0 and insert the new style at the same index
            this.currentCSSStyleSheet.deleteRule(0);
            this.currentCSSStyleSheet.insertRule(`:host {
                ${newStyle}
            }`, 0);
        }
        return this.currentCSSStyleSheet;
        // update style via:
        // let dom = document.querySelector('wc-progress-bar').shadowRoot;
        // dom.update({'--progress':'10%','--progress-color':'red'});
    };
}

// define the custom element
customElements.define("wc-progress-bar", WC_Progress_Bar);

// get class wc-progress-bar definition
// const def = customElements.get('wc-progress-bar');
// const newElement = new def();
// document.body.appendChild(newElement);