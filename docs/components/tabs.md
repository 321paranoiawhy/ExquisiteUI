# Tabs

# CDN

<!-- tabs:start -->

#### **jsDelivr**

[tabs.js](https://cdn.jsdelivr.net/gh/321paranoiawhy/ExquisiteUI/components/Tabs/tabs.js)

#### **unpkg**

TODO

<!-- tabs:end -->

?> Source code: [tabs.js - GitHub](https://github.com/321paranoiawhy/ExquisiteUI/blob/master/components/Tabs/tabs.js)

# Demo

<!-- tabs:start -->

#### **GitHub Pages**

[GitHub Pages](https://321paranoiawhy.github.io/ExquisiteUI/components/Tabs/tabs.html)

<iframe
  src="https://321paranoiawhy.github.io/ExquisiteUI/components/Tabs/tabs.html"
  style="width: 100%; height: 300px; border: none;"
>
</iframe>

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - tabs" src="https://codepen.io/paraoiawhy/embed/MWGYGVK?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/MWGYGVK">
  ExquisiteUI - tabs</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

# HTML Structure

```HTML
<div class="tab"><slot name="tab" part="tab"></slot><div class="border"></div></div>
<div class="panel"><slot name="panel" part="panel"></slot></div>
```

# HTML Attribute

## Overview

|   Attribute   |  Type   | Default value |       Optional value        |
| :-----------: | :-----: | :-----------: | :-------------------------: |
|  data-theme   | string  |       /       |       material-design       |
| data-disabled | boolean |     false     |        true / false         |
|  data-index   | string  |       0       |     0 ~ tabs.length - 1     |
| data-position | string  |      top      | top / bottom / left / right |

## data-theme

| Attribute  |  Type  | Default value | Optional value  |
| :--------: | :----: | :-----------: | :-------------: |
| data-theme | string |       /       | material-design |

### default

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tabs>
  <p slot="tab">HTML</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus est animi cumque
    ullam explicabo odio laborum, veniam nesciunt.</div>
  <p slot="tab">CSS</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed voluptates repudiandae ab
    architecto beatae facilis expedita asperiores temporibus magni? Odit praesentium necessitatibus, cupiditate
    illum obcaecati, dignissimos explicabo ipsam provident aliquid aliquam laudantium, veniam rerum quidem illo
    sint quia nihil?</div>
  <p slot="tab">JavaScript</p>
  <div slot="panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptate perspiciatis
    officiis aliquid, voluptatum inventore perferendis mollitia eaque ad ab quae quis iusto tempore repellendus
    illo. Maxime quas iste in. Nisi voluptas ipsum ex quidem iure cum iusto possimus beatae a id. Deserunt
    consequatur quasi repudiandae placeat asperiores necessitatibus repellat odio, quod quos excepturi ea maxime
    sequi repellendus laborum inventore.</div>
</wc-tabs>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/paraoiawhy/embed/RwyNyEq?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/RwyNyEq">
  Untitled</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### material-design

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tabs data-theme="material-design">
  <p slot="tab">HTML</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus est animi cumque
    ullam explicabo odio laborum, veniam nesciunt.</div>
  <p slot="tab">CSS</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed voluptates repudiandae ab
    architecto beatae facilis expedita asperiores temporibus magni? Odit praesentium necessitatibus, cupiditate
    illum obcaecati, dignissimos explicabo ipsam provident aliquid aliquam laudantium, veniam rerum quidem illo
    sint quia nihil?</div>
  <p slot="tab">JavaScript</p>
  <div slot="panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptate perspiciatis
    officiis aliquid, voluptatum inventore perferendis mollitia eaque ad ab quae quis iusto tempore repellendus
    illo. Maxime quas iste in. Nisi voluptas ipsum ex quidem iure cum iusto possimus beatae a id. Deserunt
    consequatur quasi repudiandae placeat asperiores necessitatibus repellat odio, quod quos excepturi ea maxime
    sequi repellendus laborum inventore.</div>
</wc-tabs>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - tabs- default theme" src="https://codepen.io/paraoiawhy/embed/MWGYGxb?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/MWGYGxb">
  ExquisiteUI - tabs- default theme</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

## data-disabled

|   Attribute   |  Type   | Default value | Optional value |
| :-----------: | :-----: | :-----------: | :------------: |
| data-disabled | boolean |     false     |  true / false  |

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tabs>
  <p slot="tab">HTML</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus est animi cumque
    ullam explicabo odio laborum, veniam nesciunt.</div>
  <p slot="tab" data-disabled>CSS</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed voluptates repudiandae ab
    architecto beatae facilis expedita asperiores temporibus magni? Odit praesentium necessitatibus, cupiditate
    illum obcaecati, dignissimos explicabo ipsam provident aliquid aliquam laudantium, veniam rerum quidem illo
    sint quia nihil?</div>
  <p slot="tab">JavaScript</p>
  <div slot="panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptate perspiciatis
    officiis aliquid, voluptatum inventore perferendis mollitia eaque ad ab quae quis iusto tempore repellendus
    illo. Maxime quas iste in. Nisi voluptas ipsum ex quidem iure cum iusto possimus beatae a id. Deserunt
    consequatur quasi repudiandae placeat asperiores necessitatibus repellat odio, quod quos excepturi ea maxime
    sequi repellendus laborum inventore.</div>
</wc-tabs>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - tabs data-disabled" src="https://codepen.io/paraoiawhy/embed/WNJbJBv?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/WNJbJBv">
  ExquisiteUI - tabs data-disabled</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

## data-index

| Attribute  |  Type  | Default value |   Optional value    |
| :--------: | :----: | :-----------: | :-----------------: |
| data-index | string |       0       | 0 ~ tabs.length - 1 |

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tabs data-index="1" data-type="card">
  <p slot="tab">HTML</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus est animi cumque
    ullam explicabo odio laborum, veniam nesciunt.</div>
  <p slot="tab">CSS</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed voluptates repudiandae ab
    architecto beatae facilis expedita asperiores temporibus magni? Odit praesentium necessitatibus, cupiditate
    illum obcaecati, dignissimos explicabo ipsam provident aliquid aliquam laudantium, veniam rerum quidem illo
    sint quia nihil?</div>
  <p slot="tab">JavaScript</p>
  <div slot="panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptate perspiciatis
    officiis aliquid, voluptatum inventore perferendis mollitia eaque ad ab quae quis iusto tempore repellendus
    illo. Maxime quas iste in. Nisi voluptas ipsum ex quidem iure cum iusto possimus beatae a id. Deserunt
    consequatur quasi repudiandae placeat asperiores necessitatibus repellat odio, quod quos excepturi ea maxime
    sequi repellendus laborum inventore.</div>
</wc-tabs>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - tabs data-index" src="https://codepen.io/paraoiawhy/embed/xxjbjoY?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/xxjbjoY">
  ExquisiteUI - tabs data-index</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

## data-position

|   Attribute   |  Type  | Default value |       Optional value        |
| :-----------: | :----: | :-----------: | :-------------------------: |
| data-position | string |      top      | top / bottom / left / right |

### top

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tabs data-position="top">
  <p slot="tab">HTML</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus est animi cumque
    ullam explicabo odio laborum, veniam nesciunt.</div>
  <p slot="tab">CSS</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed voluptates repudiandae ab
    architecto beatae facilis expedita asperiores temporibus magni? Odit praesentium necessitatibus, cupiditate
    illum obcaecati, dignissimos explicabo ipsam provident aliquid aliquam laudantium, veniam rerum quidem illo
    sint quia nihil?</div>
  <p slot="tab">JavaScript</p>
  <div slot="panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptate perspiciatis
    officiis aliquid, voluptatum inventore perferendis mollitia eaque ad ab quae quis iusto tempore repellendus
    illo. Maxime quas iste in. Nisi voluptas ipsum ex quidem iure cum iusto possimus beatae a id. Deserunt
    consequatur quasi repudiandae placeat asperiores necessitatibus repellat odio, quod quos excepturi ea maxime
    sequi repellendus laborum inventore.</div>
</wc-tabs>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - tabs data-position (top)" src="https://codepen.io/paraoiawhy/embed/MWGYXgJ?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/MWGYXgJ">
  ExquisiteUI - tabs data-position (top)</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### bottom

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tabs data-position="bottom">
  <p slot="tab">HTML</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus est animi cumque
    ullam explicabo odio laborum, veniam nesciunt.</div>
  <p slot="tab">CSS</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed voluptates repudiandae ab
    architecto beatae facilis expedita asperiores temporibus magni? Odit praesentium necessitatibus, cupiditate
    illum obcaecati, dignissimos explicabo ipsam provident aliquid aliquam laudantium, veniam rerum quidem illo
    sint quia nihil?</div>
  <p slot="tab">JavaScript</p>
  <div slot="panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptate perspiciatis
    officiis aliquid, voluptatum inventore perferendis mollitia eaque ad ab quae quis iusto tempore repellendus
    illo. Maxime quas iste in. Nisi voluptas ipsum ex quidem iure cum iusto possimus beatae a id. Deserunt
    consequatur quasi repudiandae placeat asperiores necessitatibus repellat odio, quod quos excepturi ea maxime
    sequi repellendus laborum inventore.</div>
</wc-tabs>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - tabs data-position (bottom)" src="https://codepen.io/paraoiawhy/embed/YzLPvKR?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/YzLPvKR">
  ExquisiteUI - tabs data-position (bottom)</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### left

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tabs data-position="left">
  <p slot="tab">HTML</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus est animi cumque
    ullam explicabo odio laborum, veniam nesciunt.</div>
  <p slot="tab">CSS</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed voluptates repudiandae ab
    architecto beatae facilis expedita asperiores temporibus magni? Odit praesentium necessitatibus, cupiditate
    illum obcaecati, dignissimos explicabo ipsam provident aliquid aliquam laudantium, veniam rerum quidem illo
    sint quia nihil?</div>
  <p slot="tab">JavaScript</p>
  <div slot="panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptate perspiciatis
    officiis aliquid, voluptatum inventore perferendis mollitia eaque ad ab quae quis iusto tempore repellendus
    illo. Maxime quas iste in. Nisi voluptas ipsum ex quidem iure cum iusto possimus beatae a id. Deserunt
    consequatur quasi repudiandae placeat asperiores necessitatibus repellat odio, quod quos excepturi ea maxime
    sequi repellendus laborum inventore.</div>
</wc-tabs>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - tabs data-position (left)" src="https://codepen.io/paraoiawhy/embed/VwxYdwV?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/VwxYdwV">
  ExquisiteUI - tabs data-position (left)</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### right

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tabs data-position="right">
  <p slot="tab">HTML</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus est animi cumque
    ullam explicabo odio laborum, veniam nesciunt.</div>
  <p slot="tab">CSS</p>
  <div slot="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed voluptates repudiandae ab
    architecto beatae facilis expedita asperiores temporibus magni? Odit praesentium necessitatibus, cupiditate
    illum obcaecati, dignissimos explicabo ipsam provident aliquid aliquam laudantium, veniam rerum quidem illo
    sint quia nihil?</div>
  <p slot="tab">JavaScript</p>
  <div slot="panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptate perspiciatis
    officiis aliquid, voluptatum inventore perferendis mollitia eaque ad ab quae quis iusto tempore repellendus
    illo. Maxime quas iste in. Nisi voluptas ipsum ex quidem iure cum iusto possimus beatae a id. Deserunt
    consequatur quasi repudiandae placeat asperiores necessitatibus repellat odio, quod quos excepturi ea maxime
    sequi repellendus laborum inventore.</div>
</wc-tabs>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI - tabs data-position (right)" src="https://codepen.io/paraoiawhy/embed/LYmErEB?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/LYmErEB">
  ExquisiteUI - tabs data-position (right)</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->
