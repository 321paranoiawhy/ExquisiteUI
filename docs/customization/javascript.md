# Using JavaScript

## HTML Element Attribute Value

There are three ways to set or change the value of the specified attribute, that is `setAttribute`, `dataset` and `dataExample`:

<!-- tabs:start -->

#### **HTML**

```HTML
<HTMLTag></HTMLTag>
```

#### **JavaScript**

```javascript
// assume that dom exactly points to the current component -- HTMLTag

// native: setAttribute or dataset
dom.setAttribute('data-example', 'new value');
dom.dataset.example = 'new value';

// a property setter defined in class
dom.dataExample = 'new value';

// this is because class HTMLTag has a method
// which binds the `dataExample` property via set keyword
// for example:
class HTMLTag extends HTMLElement {
    ...
    set dataExample(value) {
        return this.setAttribute('data-example', value);
    }
    ...
}
```

Before using the property setter, just ensure it is defined in class using `&&`:

```javascript
// if dataExample setter is not defined in class
// dataExample is set as a javascript property of dom (object)
// rather than HTML attribute
dom.dataExample = 'new value';

// dataExample setter is defined in class
dom.dataExample && dom.dataExample = 'new value';
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="Zdog trefoil" src="https://codepen.io/desandro/embed/preview/XWNWPve?default-tab=js&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/desandro/pen/XWNWPve">
  Zdog trefoil</a> by Dave DeSandro (<a href="https://codepen.io/desandro">@desandro</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

This will produce :

```HTML
<HTMLTag data-example="new value"></HTMLTag>
```

## CSS Variables

As `CSS` property can be inherited from element's parent element, you can change `CSS` variable value in the component which is the parent or grandparent of the element.

Or directly change `CSS` variable value in the element after selecting it.

<!-- tabs:start -->

#### **HTML**

```HTML
<HTMLTag></HTMLTag>
```

#### **JavaScript**

```javascript
// assume that dom exactly points to the current component -- HTMLTag

// 1. set the CSS variable value in the component itself
//    then the CSS property value of element
//    can be inherited from the component

// 1.1 style.setProperty
dom.style.setProperty('--color', 'red');
// 1.2 a global method defined in class to set the value of CSS variable
dom.set('--color', 'red');

// 2. select the specified element in the shadow DOM
//    then set the CSS variable value in itself
const div = dom.getElement('div'); // dom.shadowRoot.querySelector('div');
div.style.setProperty('--color', 'red');

```

<!-- tabs:end -->

## Override element style

Select the element and then override its style:

<!-- tabs:start -->

#### **HTML**

```HTML
<HTMLTag></HTMLTag>
```

#### **JavaScript**

```javascript
// assume that dom exactly points to the current component -- HTMLTag

const div = dom.getElement('div'); // dom.shadowRoot.querySelector('div');
div.style.color = "red";
```

<!-- tabs:end -->