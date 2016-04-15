# Elasticons
CSS icons with *elastic* transitions.

`elasticon.css` is a collection of CSS-animated icons. Feel free to customize as the Sass source is included.

Initial inspiration from [jonsuh's Hamburgers](https://github.com/jonsuh/hamburgers).

## Usage

1. Include the CSS in the `<head>` of your site:

  ```html
  <link href="dist/elasticons.min.css" rel="stylesheet">
  ```

2. Add the base icon markup :

  ```html
  <button class="elasticon" type="button">
    <span></span>
  </button>
  ```

  `<div>` is also an option if accessibility is not a concern :

  ```html
  <div class="elasticon">
    <span></span>
  </div>
  ```

3. Append the wanted class name :

  ```html
  <button class="elasticon elasticon-hamburger" type="button">
    <span></span>
  </button>
  ```

## Currently available icons
- hamburger
- plus
- cross
- tick
- square
- circle
- play
- reverse
- chevron-left
- chevron-right
- search