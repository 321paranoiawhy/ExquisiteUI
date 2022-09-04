# Using HTML

## HTML Element Attribute Value

Set the value of HTML element attribute `data-example` to `example`:

```HTML
<HTMLTag data-example="example"></HTMLTag>
```

> `HTMLTag` can be specified such as `wc-button`, `wc-tabs`, `wc-tooltip` and all other components provided by `ExquisiteUI`.

> `data-example` can be specified such as `data-theme`, `data-type`, `data-index` and all other `data-*` attributes defined in current component.

Once the component is connected to the `DOM`, each attribute set with a valid value will take effect.

Whenever you want to change the component style, you may do that in the following two ways:

```javascript
// assume that dom exactly points to the current component -- HTMLTag

// setProperty
dom.setProperty('data-example', 'new value');
// dataset
dom.dataset.example = 'new value';
```

## Inline Style

Change the `CSS` variable `--color` to `red`:

```HTML
<HTMLTag style="--color: red;"></HTMLTag>
```

This will influence all related `CSS` property values and component style will be updated accordingly. For example:

```css
div {
    color: var(--color, blue);
}
```

Thus, the color of `div` will be `red` rather than blue.