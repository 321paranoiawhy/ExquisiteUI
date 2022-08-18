let dom = document.querySelector('wc-progress-bar').shadowRoot;
let newStyle = document.createElement('style')
newStyle.innerHTML = ':host {--color: red;}';
dom.appendChild(newStyle);
dom.styleSheets
dom.styleSheets.push(newStyle);


let newConstructor = new CSSStyleSheet();
dom.adoptedStyleSheets = [newConstructor];
newConstructor.replace(':host {--color: red;}');
