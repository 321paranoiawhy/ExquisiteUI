## Lifecycle Hook

### attributeChangedCallback

### connectedCallback

### disconnectCallback

### adoptedCallback

## Global API

### observedAttributes

Get all observed attributes in current web components:

```javascript
dom.constructor.observedAttributes; // an array of strings: ['foo', 'bar', 'baz']
```

As long as the attribute in observedAttributes array changed, web components will be updated immediately as attributeChangedCallback was triggered.

### hostStyle

Get first `CSS` style declaration defined in `host`:

```javascript
dom.hostStyle; // CSSStyleDeclaration {...}
// equals to below
// dom.shadowRoot.styleSheets[0].cssRules[0].style
```

### allCSSVariables

List all `CSS` variables defined in `host` as an array:

```javascript
dom.allCSSVariables;
```

### set(CSSVariableName, CSSVariableValue)

Set the specified `CSS` variable defined in `host` to a specified value:

```javascript
dom.set('--color', 'red');
```

Before setting the `CSS` variable value, you may list all CSS variables defined in `host` to ensure it will take effect.

### data-* getter and setter

Get and set data-* attribute defined in component:

```javascript
// data-example attribute

// getter
dom.dataExample;
// setter
dom.dataExample = "example";

// or use dataset
dom.dataset.example;
dom.dataset.example = "example";
```

## Local API