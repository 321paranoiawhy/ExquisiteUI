# `Web Components class name`

`export default class xxx extends HTMLElement`, `xxx` should be named:

1. Each class name should start with `WC_`, which means the first letter of `Web Components`.
2. After `WC_`, the first letter of each word should be capitalized.
3. There is no spaces or punctuation within each word.
4. Other than `WC_`, it corresponds to `Upper Camel Case` (also called `Pascal`) naming convention.

For example:

* WC_Button
* WC_Alerts
* WC_ProgressBar
* ...

# `Web Components HTML tag name`

`<xxx></xxx>`, `xxx` should be named:

1. all letters should be lower case.
2. each word should be joined with a dash symbol `-`.

For example:

* WC_Button -> wc-button -> `<wc-button></wc-button>`
* WC_Alerts -> wc-alerts -> `<wc-alerts></wc-alerts>`
* WC_ProgressBar -> wc-progress-bar -> `<wc-progress-bar></wc-progress-bar>`
* ...

# `HTML attribute name`

`<wc-button xxx='yyy'></wc-button>`, `xxx` should be named in `data-wc-settings`. It should be a string somewhat similar to `JSON`, for example:

`<wc-button data-wc-settings="{ 'theme': 'orange' }"></wc-button>`

So that its value can be converted to an object via:

```JavaScript
// JavaScript
const dom = document.querySelector('wc-button');

// get value of 'data-wc-settings' attribute
let value = dom.getAttribute('data-wc-settings'); // "{ 'theme': 'orange' }"
// or access dataset property of the DOM
// 'data-wc-settings' attribute will be converted to
// wcSettings property of DOM's dataset property
// let value = dom.dataset.wcSettings; // "{ 'theme': 'orange' }"

// before converting it to an object
// replace all `'` to `"`, or it would throw an Uncaught SyntaxError
JSON.parse(value.replace(/'/g, '"')); // '{ "theme": "orange" }'
```

Notice that besides `data-wc-settings`, there are no any other attributes added in `wc-button` here. This is a setting on purpose, in order not to leave too many attributes in the element. And users can add attributes whenever you need. But be cautious about adding too many, however, that's up to you.

And there is a recommendation that `data-wc-settings` attribute value is just for initialization such as web components styles. Do not try to change it after web components are connected to the DOM. Whenever you want to style the element inside `shadow DOM`, you can try via the following two ways:

## change `CSS variables value` in `CSS`

```CSS
/* CSS */
```

## change `CSS variables value` in `JavaScript`

```JavaScript
// JavaScript
```

# `shadow DOM element part attribute value`

`<div part='xxx'></div>`, `xxx` should be named:

# `shadow DOM slot element name attribute value`

`<slot name='xxx'></slot>`, `xxx` should be named:

Notice: `slot name attribute value` may be the same as `light DOM element slot attribute value`:

`<slot name='slot'></slot>` matches `<div slot='slot'></div>`.

# `CSS variable name`

`--xxx-yyy`, `xxx` means `CSS Selectors` while `yyy` means `CSS property`.
