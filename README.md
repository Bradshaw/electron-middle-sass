# electron-middle-sass

Compile `.sass` and `.scss` files to `.css` as they are requested by your [electron](https://electronjs.org/) app  
[Learn how to write Sass and Scss at sass-lang.com](http://sass-lang.com/)

*This project uses [electron-middle](https://www.npmjs.com/package/electron-middle), a middleware for electron*

## Install

Within your project folder, run `npm install electron-middle-sass`

## Usage

Require `electron-middle-sass` in your main electron project script:
```javascript
require('electron-middle-sass')
```

Now, whenever your app attempts to load a `.css` file, `electron-middle-sass` will try to find a `.scss` or a `.sass` file to compile and return instead  