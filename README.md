# Autolink

Turns links into clickable links

[![Build Status](https://travis-ci.org/gitterHQ/autolink.png?branch=master)](https://travis-ci.org/gitterHQ/autolink) [![Gitter chat](https://badges.gitter.im/gitterHQ/autolink.png)](https://gitter.im/gitterHQ/autolink)
-------------------------------

Autolink is a tiny library for finding hypertext links in your text nodes in your DOM and turning them into clickable links.

It's primary focus is on manipulating the DOM instead of manipulating markup, in order to avoid potential XSS leaks.

-------------------------------

# Using

Add `bin/autolink.js` to your project. It also supports AMD modules if thats your bag.

```
/* Somewhere in your code is a refernece to an HTMLElement like this */
var el.innerHTML = 'hello www.gitter.im world';

/* Simply call autolink and anchor tags will be created */
autolink(el);
```

# Building

```
npm install
wake
npm test
```


### License

The MIT License (MIT)

Copyright (c) 2014 Gitter

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
