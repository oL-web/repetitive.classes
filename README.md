# repetitive.classes

Standalone classes() function as a UMD module from the repetitive.js library. Takes any DOM element/s and returns an object allowing you use methods on them, such as: adding, removing, toggling and checking if the element contains specified classes. It's like classList API but better and more browser compatible.



## Installation

The package is only 923 bytes minified.

You can install this package from npm:
```bash
npm install repetitive.classes
npm install --save repetitive.classes
npm install --save-dev repetitive.classes
```

Use in a browser:
```html
<script src="repetitive.classes.js"></script>
<script src="repetitive.classes.min.js"></script>
```

## Documentation

### [Click here for full documentation page]( https://ol-web.github.io/repetitivejs/documentation.html#classes)

Pick any DOM element or elements to manipulate its class/es. repetitive.classes will iterate over everything for you.
```javascript
classes(document.getElementById("please"));
classes(document.getElementsByClassName("help"));
classes(document.querySelectorAll("me"));
```

You have 4 methods to use: add, remove, toggle and contains:

```javascript
var el = document.querySelectorAll("buttton");

classes(el).add("btn-block btn-red other-class"); // adds these three classes to all button elements

classes(el).remove("btn-red btn-big btn-something"); // removes these three classes from all button elements if they have them

classes(el).toggle("btn-blue btn-gray"); // removes btn-blue and btn-gray class if the element has one, adds it if it doesn't

classes(el).contains("btn-blue btn-block"); // returns true if all buttons have these two classes, otherwise returns false
```

You can also chain methods(except for contains()) for better performance:

```javascript
classes(document.querySelectorAll("buttton")).add("btn btn-block").remove("some-class").toggle("btn-blue");
```

Also, for clarification - this:
```html
<div class="block block-blue block-big"></div>
<div class="block block-red block-big"></div>
```
after this:
```javascript
classes(document.querySelectorAll("div")).toggle("block-big block-blue");
```
will look like this:
```html
<div class="block"></div>
<div class="block block-red"></div>
```
## Is there something wrong?

Please tell me!