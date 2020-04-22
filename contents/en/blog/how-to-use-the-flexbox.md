---
name: 'how-to-use-the-flexbox'
trans: 'como-utilizar-el-flexbox'
title: Learning how to use css flexbox
year: 21 Feb 2020
updatedDate: 21 Mar 2020
color: '#edece7'
category: 'css'
cardAlt: 'Article on how to use the flexbox'
isTextColorDark: true
noMainImage: false
# extraComponent: 'Datatable'
id: 'how-to-use-flexbox'
description: |
  The flexbox or flexible box modules was designed as an alternative to the already used css grid system, perhaps you have already used it thanks to the bootstrap framework, basically it is a system based on rows and columns while the box system.
---

## The Flexbox or flexible box modules

The flexbox or flexible box modules was designed as an alternative to the already used css grid system, perhaps you have already used it thanks to the bootstrap framework, basically it is a system based on rows and columns while the flexbox flexible box system is more focused in positioning of boxes, here is an example:

```css
  #wrapper {
    display: flex;
    flex-direction: row;
  }
```

Here the `display` property initializes the use of flexible modules in the id container #wrapper` flex-direction` indicates the direction of the main axis `flex-wrap` indicates the multiline overflow of the elements in the container

## The two axes
<image-responsive imageURL="blog/how-to-use-flexbox/flexbox-en-02.svg" width="100%" alt="Photo of the axes where the main axis and the secondary axis of the system are represented from flexbox "/>

### Main Axis
The main axis is determined by the `flex-direction` property which takes `row`, `row-reverse`,` column` and `column-reverse` as values ​​when we use `row` as the value the main axis is displayed from left to right.

### Secundary Axis or cross axis
The secondary axis in columns as in the image above, on the contrary when we use `column` the main axis is displayed from top to bottom and the secondary axis is displayed along the rows.

<image-responsive imageURL="blog/how-to-use-flexbox/flexbox-03.svg" width="100%" alt="Photo of the axes where the secondary axis of the flexbox system is represented" />

## flex-wrap
Another important property is the `flex-wrap` property which enables the multiline of the children inside the container taking `wrap`, `nowrap` &` wrap-reverse` as the value, with `nowrap` being the default value.

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .item {
    width: 300px;
  }
```

It is important to note that if the children have a predetermined width and we use the `nowrap` value in the` flex-wrap` property, the browser will rearrange their width if they exceed the parent container's path.

We can also define the two values ​​of `flex-wrap` and` flex-direction` in a single property `flex-flow`.

```css
  #wrapper {
    display: flex;
    flex-flow: row wrap; / * <flex-direction> <flex-wrap> * /
  }
```
## justify-content
`justify-content`
Defines the position of the elements with respect to the main axis
```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
```

`justify-content: flex-start`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-04.svg" width="100%" alt="Photo showing flex-start of the justify-content property" />

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
```

`justify-content: flex-end`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-05.svg" width="100%" alt="Photo showing flex-end of justify-content property" />

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
```

`justify-content: center`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-06.svg" width="100%" alt="Photo where justify-content property center is presented" />

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
```

`justify-content: space-between`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-07.svg" width="100%" alt="Photo showing space-between of the justify-content property" />

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
```

`justify-content: space-around`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-09.svg" width="100%" alt="Photo showing space-around of the justify-content property" />

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
```

`justify-content: space-evenly`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-08.svg" width="100%" alt="Photo showing space-evenly of the justify-content property" />

## align-items
`align-items`
Defines the position of the elements with respect to the secondary axis
`align-items: flex-start`

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-04.svg" width="100%" alt="Photo showing the flex-start value of the align-items property" />

`align-items: flex-end`
```css
  #wrapper {
    display: flex;
	flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-11.svg" width="100%" alt="Photo showing the flex-end value of the align-items property" />

`align-items: center`
```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-12.svg" width="100%" alt="Photo showing the center value of the align-items property" />

`align-items: stretch`
```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-13.svg" width="100%" alt="Photo showing the stretch value of the align-items property" />

`align-items: baseline`
```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-10.svg" width="100%" alt="Photo showing the baseline value of the align-items property" />

## align-self
This property allows us to directly modify the alignment of a child element in the secondary axis. `align-self` accepts the same values ​​as` align-items` (`flex-start`,` flex-end`, `center` etc)

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .items {
    width: 100px;
  }
  .item3 {
    align-self: center;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/align-self-14.svg" width="100%" alt="Photo showing the center value of the align-self property" />

## Aligning the child elements

In case we want to have more control of the child objects within the container we can assign properties to them, we must emphasize that by modifying these properties we are manipulating how the child objects are shown in the space available in the parent container

`flex-grow` enables child objects to grow inside the parent container if indicated by the positive number value
```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .item {
    width: 300px;
    flex-grow: 1;
  }
```
if some of the child elements have a higher value in the `flex-grow` property this element will take more space from the remainder in the container.

`flex-basis` defines the base size of child objects before distributing them in the container the default value is `auto`
[see graphic](https://www.w3.org/TR/css-flexbox-1/images/rel-vs-abs-flex.svg)

`flex-shrink` determines the shrinkage of the elements with respect to the parent container, if a value of 0 is specified the elements spilled out of the parent container. The higher the number the greater the shrinkage.

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .item {
    width: 300px;
    flex-grow: 1;
    flex-shrink: 1;
  }
```
Commonly, the shortcut `flex` is used to define the three values ​​in a single property` flex-grow`, `flex-shrink` and` flex-basis`.

```css
  #wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .item {
    width: 300px;
    flex: 1 1 auto; / * flex-grow flex-shrink flex-basis * /
  }
```
### The browser support for the flexbox specification is:
- Safari 6.1+ (prefixed with -webkit-)
- Android 4.4+
- iOS 7.1+ (prefixed with -webkit-)
- Chrome 29+
- Firefox 28+
- Internet Explorer 11+
- Opera 17+

[Source](https://caniuse.com/#feat=flexbox).

## Conclusion
We've covered all the most common CSS flexbox properties. The next step is to try to make any project using the flexbox properties, go and practice.

