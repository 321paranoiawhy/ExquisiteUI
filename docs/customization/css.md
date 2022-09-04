# Using CSS

## CSS Variables

Change the `CSS` variable value using `CSS` type selector:

<!-- tabs:start -->

#### **HTML**

```HTML
<HTMLTag></HTMLTag>
```

#### **CSS**

```css
/* CSS type selector */
HTMLTag {
    --color: red;
}
```

<!-- tabs:end -->

## ::part Selector

The `::part` `CSS` pseudo element selector will select any element within a shadow tree which has a matching part attribute. For example:

<!-- tabs:start -->

#### **HTML**

```HTML
<HTMLTag></HTMLTag>
```

#### **CSS**

```css
/* this will exactly match the element in HTMLTag element
which has a matching part attribute */
HTMLTag::part(example) {
    background-color: red;
}
```

#### **JavaScript**

```javascript
...
this.shadowRoot.innerHTML = `
    <div part="example"></div>
    `;
...
```

<!-- tabs:end -->

The background color of `div` will be reset to `red`.

### Browser Compatibility

[CSS selector: ::part - caniuse](https://caniuse.com/mdn-css_selectors_part)

[::part() - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::part#browser_compatibility)