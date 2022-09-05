# Button
# Demo

<!-- tabs:start -->

#### **GitHub Pages**

[GitHub Pages](https://321paranoiawhy.github.io/ExquisiteUI/components/Button/button.html)

<iframe
  src="https://321paranoiawhy.github.io/ExquisiteUI/components/Button/button.html"
  style="width: 100%; height: 300px; border: none;"
>
</iframe>

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - button" src="https://codepen.io/paraoiawhy/embed/Poewqaz?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/Poewqaz">
  ExquisiteUI - button</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

# HTML Structure

```HTML
<button><slot part="button"></slot></button>
```
# HTML Attribute

## Overview

| Attribute  |  Type   |      Default value      |                     Optional value                      |
| :--------: | :-----: | :---------------------: | :-----------------------------------------------------: |
| data-theme | string  |        bootstrap        | bootstrap / bootstrap-outline / element / element-plain |
| data-type  | string  | depends on `data-theme` |                 depends on `data-theme`                 |
| data-size  | string  |         medium          |                 small / medium / large                  |
| data-round | boolean |          false          |                      true / false                       |

## data-theme

### bootstrap

Reference: [Bootstrap Examples](https://getbootstrap.com/docs/4.0/components/buttons/#examples)

| Attribute |  Type  | Default value |                                Optional value                                 |
| :-------: | :----: | :-----------: | :---------------------------------------------------------------------------: |
| data-type | string |    primary    | primary / secondary / success / danger / warning / info / light / dark / link |

<!-- tabs:start -->

#### **bootstrap**

```HTML
<wc-button data-theme="bootstrap" data-type="primary">Primary</wc-button>
<wc-button data-theme="bootstrap" data-type="secondary">Secondary</wc-button>
<wc-button data-theme="bootstrap" data-type="success">Success</wc-button>
<wc-button data-theme="bootstrap" data-type="danger">Danger</wc-button>
<wc-button data-theme="bootstrap" data-type="warning">Warning</wc-button>
<wc-button data-theme="bootstrap" data-type="info">Info</wc-button>
<wc-button data-theme="bootstrap" data-type="light">Light</wc-button>
<wc-button data-theme="bootstrap" data-type="dark">Dark</wc-button>
<wc-button data-theme="bootstrap" data-type="link">Link</wc-button>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - button - bootstrap theme" src="https://codepen.io/paraoiawhy/embed/LYmERLO?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/LYmERLO">
  ExquisiteUI - button - bootstrap theme</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### bootstrap-outline

Reference: [Bootstrap: Outline-buttons](https://getbootstrap.com/docs/4.0/components/buttons/#outline-buttons)

| Attribute |  Type  | Default value |                                Optional value                                 |
| :-------: | :----: | :-----------: | :---------------------------------------------------------------------------: |
| data-type | string |    primary    | primary / secondary / success / danger / warning / info / light / dark / link |

<!-- tabs:start -->

#### **bootstrap-outline**

```HTML
<wc-button data-theme="bootstrap-outline" data-type="primary">Primary</wc-button>
<wc-button data-theme="bootstrap-outline" data-type="secondary">Secondary</wc-button>
<wc-button data-theme="bootstrap-outline" data-type="success">Success</wc-button>
<wc-button data-theme="bootstrap-outline" data-type="danger">Danger</wc-button>
<wc-button data-theme="bootstrap-outline" data-type="warning">Warning</wc-button>
<wc-button data-theme="bootstrap-outline" data-type="info">Info</wc-button>
<wc-button data-theme="bootstrap-outline" data-type="light">Light</wc-button>
<wc-button data-theme="bootstrap-outline" data-type="dark">Dark</wc-button>
<wc-button data-theme="bootstrap-outline" data-type="link">Link</wc-button>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - button - bootstrap-outline theme" src="https://codepen.io/paraoiawhy/embed/XWqJjep?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/XWqJjep">
  ExquisiteUI - button - bootstrap-outline theme</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### element

Reference: [Element UI: button Basic usage](https://element.eleme.io/#/en-US/component/button#basic-usage)

| Attribute |  Type  | Default value |               Optional value                |
| :-------: | :----: | :-----------: | :-----------------------------------------: |
| data-type | string |       /       | primary / success / info / warning / danger |

<!-- tabs:start -->

#### **element**

```HTML
<wc-button data-theme="element">Default</wc-button>
<wc-button data-theme="element" data-type="primary">Primary</wc-button>
<wc-button data-theme="element" data-type="success">Success</wc-button>
<wc-button data-theme="element" data-type="info">Info</wc-button>
<wc-button data-theme="element" data-type="warning">Warning</wc-button>
<wc-button data-theme="element" data-type="danger">Danger</wc-button>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - button - element theme" src="https://codepen.io/paraoiawhy/embed/WNJbGXe?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/WNJbGXe">
  ExquisiteUI - button - element theme</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### element-plain

| Attribute |  Type  | Default value |               Optional value                |
| :-------: | :----: | :-----------: | :-----------------------------------------: |
| data-type | string |       /       | primary / success / info / warning / danger |

<!-- tabs:start -->

#### **element-plain**

```HTML
<wc-button data-theme="element-plain">Default</wc-button>
<wc-button data-theme="element-plain" data-type="primary">Primary</wc-button>
<wc-button data-theme="element-plain" data-type="success">Success</wc-button>
<wc-button data-theme="element-plain" data-type="info">Info</wc-button>
<wc-button data-theme="element-plain" data-type="warning">Warning</wc-button>
<wc-button data-theme="element-plain" data-type="danger">Danger</wc-button>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - button - element-plain theme" src="https://codepen.io/paraoiawhy/embed/bGMNwYP?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/bGMNwYP">
  ExquisiteUI - button - element-plain theme</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

## data-size

| Attribute |  Type  | Default value |     Optional value     |
| :-------: | :----: | :-----------: | :--------------------: |
| data-size | string |    medium     | small / medium / large |

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-button data-size="small">Small</wc-button>
<wc-button data-size="medium">Medium</wc-button>
<wc-button data-size="large">Large</wc-button>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - button - data-size" src="https://codepen.io/paraoiawhy/embed/GRdgjyw?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/GRdgjyw">
  ExquisiteUI - button - data-size</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

## data-round

| Attribute |  Type   | Default value | Optional value |
| :-------: | :-----: | :-----------: | :------------: |
| data-size | boolean |     false     |  true / false  |

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-button data-theme="bootstrap">Not Round</wc-button>

<wc-button data-theme="bootstrap" data-round>Round</wc-button>
<wc-button data-theme="bootstrap-outline" data-round>Round</wc-button>
<wc-button data-theme="element" data-round>Round</wc-button>
<wc-button data-theme="element-plain" data-round>Round</wc-button>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - button - data-round" src="https://codepen.io/paraoiawhy/embed/ZEoYprp?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/ZEoYprp">
  ExquisiteUI - button - data-round</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->