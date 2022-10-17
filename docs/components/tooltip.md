# Tooltip

# CDN

<!-- tabs:start -->

#### **jsDelivr**

[tooltip.js](https://cdn.jsdelivr.net/gh/321paranoiawhy/ExquisiteUI/components/Tooltip/tooltip.js)

#### **unpkg**

TODO

<!-- tabs:end -->

?> Source code: [tooltip.js - GitHub](https://github.com/321paranoiawhy/ExquisiteUI/blob/master/components/Tooltip/tooltip.js)

# Demo

<!-- tabs:start -->

#### **GitHub Pages**

[GitHub Pages](https://321paranoiawhy.github.io/ExquisiteUI/components/Tooltip/tooltip.html)

<iframe
  src="https://321paranoiawhy.github.io/ExquisiteUI/components/Tooltip/tooltip.html"
  style="width: 100%; height: 300px; border: none;"
>
</iframe>

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/paraoiawhy/embed/gOzbvQr?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/gOzbvQr">
  Untitled</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

# HTML Structure

```HTML
<slot part="tooltip"></slot>
```

# HTML Attribute

## Overview

|   Attribute    |  Type  |   Default value    |                                                                         Optional value                                                                          |
| :------------: | :----: | :----------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   data-theme   | string |       github       |                                                                    github / light / material                                                                    |
|   data-text    | string | This is a tooltip. |                                                                    depends on user settings                                                                     |
| data-placement | string |    right-center    | top-left / top-center / top-right / right-top / right-center / right-bottom / bottom-left / bottom-center / bottom-right / left-top / left-center / left-bottom |
| data-animation | string |         /          |                                                               flow-in / flow-out / expand / swing                                                               |

## data-theme

| Attribute  |  Type  | Default value |      Optional value       |
| :--------: | :----: | :-----------: | :-----------------------: |
| data-theme | string |    github     | github / light / material |

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tooltip data-theme="github" data-text="GitHub Theme">GitHub Theme</wc-tooltip>
<wc-tooltip data-theme="light" data-text="Light Theme">Light Theme</wc-tooltip>
<wc-tooltip data-theme="material" data-text="Material Theme">Material Theme</wc-tooltip>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/paraoiawhy/embed/jOxEZjY?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/jOxEZjY">
  Untitled</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

## data-text

| Attribute |  Type  |   Default value    |      Optional value      |
| :-------: | :----: | :----------------: | :----------------------: |
| data-text | string | This is a tooltip. | depends on user settings |

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tooltip>Default</wc-tooltip>
<wc-tooltip data-text="This is a replaced tooltip.">Replace Text</wc-tooltip>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/paraoiawhy/embed/qBYEoBe?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/qBYEoBe">
  Untitled</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

## data-placement

|   Attribute    |  Type  | Default value |                                                                         Optional value                                                                          |
| :------------: | :----: | :-----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| data-placement | string | right-center  | top-left / top-center / top-right / right-top / right-center / right-bottom / bottom-left / bottom-center / bottom-right / left-top / left-center / left-bottom |

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tooltip data-text="Top Left" data-placement="top-left">TL</wc-tooltip>
<wc-tooltip data-text="Top Center" data-placement="top-center">TC</wc-tooltip>
<wc-tooltip data-text="Top Right" data-placement="top-right">TR</wc-tooltip>
<wc-tooltip data-text="Left Top" data-placement="left-top">LT</wc-tooltip>
<wc-tooltip data-text="Left Center" data-placement="left-center">LC</wc-tooltip>
<wc-tooltip data-text="Left Bottom" data-placement="left-bottom">LB</wc-tooltip>
<wc-tooltip data-text="Right Top" data-placement="right-top">RT</wc-tooltip>
<wc-tooltip data-text="Right Center" data-placement="right-center">RC</wc-tooltip>
<wc-tooltip data-text="Right Bottom" data-placement="right-bottom">RB</wc-tooltip>
<wc-tooltip data-text="Bottom Left" data-placement="bottom-left">BL</wc-tooltip>
<wc-tooltip data-text="Bottom Center" data-placement="bottom-center">BC</wc-tooltip>
<wc-tooltip data-text="Bottom Right" data-placement="bottom-right">BR</wc-tooltip>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/paraoiawhy/embed/YzLPayw?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/YzLPayw">
  Untitled</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

## data-animation

|   Attribute    |  Type  | Default value |           Optional value            |
| :------------: | :----: | :-----------: | :---------------------------------: |
| data-animation | string |       /       | flow-in / flow-out / expand / swing |

### flow-in

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tooltip data-text="Top Left" data-placement="top-left" data-animation="flow-in">TL</wc-tooltip>
<wc-tooltip data-text="Top Center" data-placement="top-center" data-animation="flow-in">TC</wc-tooltip>
<wc-tooltip data-text="Top Right" data-placement="top-right" data-animation="flow-in">TR</wc-tooltip>
<wc-tooltip data-text="Left Top" data-placement="left-top" data-animation="flow-in">LT</wc-tooltip>
<wc-tooltip data-text="Left Center" data-placement="left-center" data-animation="flow-in">LC</wc-tooltip>
<wc-tooltip data-text="Left Bottom" data-placement="left-bottom" data-animation="flow-in">LB</wc-tooltip>
<wc-tooltip data-text="Right Top" data-placement="right-top" data-animation="flow-in">RT</wc-tooltip>
<wc-tooltip data-text="Right Center" data-placement="right-center" data-animation="flow-in">RC</wc-tooltip>
<wc-tooltip data-text="Right Bottom" data-placement="right-bottom" data-animation="flow-in">RB</wc-tooltip>
<wc-tooltip data-text="Bottom Left" data-placement="bottom-left" data-animation="flow-in">BL</wc-tooltip>
<wc-tooltip data-text="Bottom Center" data-placement="bottom-center" data-animation="flow-in">BC
</wc-tooltip>
<wc-tooltip data-text="Bottom Right" data-placement="bottom-right" data-animation="flow-in">BR</wc-tooltip>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/paraoiawhy/embed/ZEoYxpm?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/ZEoYxpm">
  Untitled</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### flow-out

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tooltip data-text="Top Left" data-placement="top-left" data-animation="flow-out">TL</wc-tooltip>
<wc-tooltip data-text="Top Center" data-placement="top-center" data-animation="flow-out">TC</wc-tooltip>
<wc-tooltip data-text="Top Right" data-placement="top-right" data-animation="flow-out">TR</wc-tooltip>
<wc-tooltip data-text="Left Top" data-placement="left-top" data-animation="flow-out">LT</wc-tooltip>
<wc-tooltip data-text="Left Center" data-placement="left-center" data-animation="flow-out">LC</wc-tooltip>
<wc-tooltip data-text="Left Bottom" data-placement="left-bottom" data-animation="flow-out">LB</wc-tooltip>
<wc-tooltip data-text="Right Top" data-placement="right-top" data-animation="flow-out">RT</wc-tooltip>
<wc-tooltip data-text="Right Center" data-placement="right-center" data-animation="flow-out">RC</wc-tooltip>
<wc-tooltip data-text="Right Bottom" data-placement="right-bottom" data-animation="flow-out">RB</wc-tooltip>
<wc-tooltip data-text="Bottom Left" data-placement="bottom-left" data-animation="flow-out">BL</wc-tooltip>
<wc-tooltip data-text="Bottom Center" data-placement="bottom-center" data-animation="flow-out">BC
</wc-tooltip>
<wc-tooltip data-text="Bottom Right" data-placement="bottom-right" data-animation="flow-out">BR</wc-tooltip>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI tooltip data-animation flow-out" src="https://codepen.io/paraoiawhy/embed/LYmEdWV?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/LYmEdWV">
  ExquisiteUI tooltip data-animation flow-out</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### expand

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tooltip data-text="Top Left" data-placement="top-left" data-animation="expand">TL</wc-tooltip>
<wc-tooltip data-text="Top Center" data-placement="top-center" data-animation="expand">TC</wc-tooltip>
<wc-tooltip data-text="Top Right" data-placement="top-right" data-animation="expand">TR</wc-tooltip>
<wc-tooltip data-text="Left Top" data-placement="left-top" data-animation="expand">LT</wc-tooltip>
<wc-tooltip data-text="Left Center" data-placement="left-center" data-animation="expand">LC</wc-tooltip>
<wc-tooltip data-text="Left Bottom" data-placement="left-bottom" data-animation="expand">LB</wc-tooltip>
<wc-tooltip data-text="Right Top" data-placement="right-top" data-animation="expand">RT</wc-tooltip>
<wc-tooltip data-text="Right Center" data-placement="right-center" data-animation="expand">RC</wc-tooltip>
<wc-tooltip data-text="Right Bottom" data-placement="right-bottom" data-animation="expand">RB</wc-tooltip>
<wc-tooltip data-text="Bottom Left" data-placement="bottom-left" data-animation="expand">BL</wc-tooltip>
<wc-tooltip data-text="Bottom Center" data-placement="bottom-center" data-animation="expand">BC
</wc-tooltip>
<wc-tooltip data-text="Bottom Right" data-placement="bottom-right" data-animation="expand">BR</wc-tooltip>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI tooltip data-animation expand" src="https://codepen.io/paraoiawhy/embed/yLjyKbR?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/yLjyKbR">
  ExquisiteUI tooltip data-animation expand</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->

### swing

<!-- tabs:start -->

#### **HTML**

```HTML
<wc-tooltip data-text="Top Left" data-placement="top-left" data-animation="swing">TL</wc-tooltip>
<wc-tooltip data-text="Top Center" data-placement="top-center" data-animation="swing">TC</wc-tooltip>
<wc-tooltip data-text="Top Right" data-placement="top-right" data-animation="swing">TR</wc-tooltip>
<wc-tooltip data-text="Left Top" data-placement="left-top" data-animation="swing">LT</wc-tooltip>
<wc-tooltip data-text="Left Center" data-placement="left-center" data-animation="swing">LC</wc-tooltip>
<wc-tooltip data-text="Left Bottom" data-placement="left-bottom" data-animation="swing">LB</wc-tooltip>
<wc-tooltip data-text="Right Top" data-placement="right-top" data-animation="swing">RT</wc-tooltip>
<wc-tooltip data-text="Right Center" data-placement="right-center" data-animation="swing">RC</wc-tooltip>
<wc-tooltip data-text="Right Bottom" data-placement="right-bottom" data-animation="swing">RB</wc-tooltip>
<wc-tooltip data-text="Bottom Left" data-placement="bottom-left" data-animation="swing">BL</wc-tooltip>
<wc-tooltip data-text="Bottom Center" data-placement="bottom-center" data-animation="swing">BC
</wc-tooltip>
<wc-tooltip data-text="Bottom Right" data-placement="bottom-right" data-animation="swing">BR</wc-tooltip>
```

#### **Codepen**

<iframe height="300" style="width: 100%;" scrolling="no" title="ExquisiteUI tooltip data-animation swing" src="https://codepen.io/paraoiawhy/embed/dyePmzM?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paraoiawhy/pen/dyePmzM">
  ExquisiteUI tooltip data-animation swing</a> by huayi wen (<a href="https://codepen.io/paraoiawhy">@paraoiawhy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- tabs:end -->