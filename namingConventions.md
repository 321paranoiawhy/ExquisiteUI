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

`<wc-button data-xxx='yyy'></wc-button>`

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
