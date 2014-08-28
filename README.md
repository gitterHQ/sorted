# Sorted

*__"Sorted"__: British informal: dealt with satisfactorily*

[![Build Status](https://travis-ci.org/gitterHQ/sorted.svg?branch=master)](https://travis-ci.org/gitterHQ/sorted)
[![Testling](https://ci.testling.com/gitterHQ/sorted.png)](https://ci.testling.com/gitterHQ/sorted)


Sorted is a tiny mixin for CollectionViews and CompositeViews in __[Marionette.JS](http://marionettejs.com/)__ which allows the order of the underlying collection to be maintained in the view.

## Usage

Simply mix the `SortedMixin` into your `CollectionView`-based class. This can be done using underscore's `extend` method, like this:

```
var MyCollectionView = Marionette.CollectionView.extend({
});
_.extend(MyCollectionView.prototype, SortedMixin);
```

Although personally, we prefer using [__cocktail__](https://github.com/onsi/cocktail) for mixins:

```
var MyCollectionView = Marionette.CollectionView.extend({
});
cocktail.mixin(MyCollectionView, SortedMixin);
```

Once the mixin has been installed the collectionview will always maintain the order of the underlying collection.

## Information

Build by [Tim Lind](https://twitter.com/timlind) and [Andrew Newdigate](https://twitter.com/suprememoocow) for [Gitter](https://gitter.im) and [Troupe](https://trou.pe).

## Licence

The MIT License (MIT)

Copyright (c) 2014 Gitter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
