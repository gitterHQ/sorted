/* jshint unused:true, browser:true,  strict:true */
/* global JS:false, SortedMixin:false */

JS.Test.describe('SortedMixin', function() {
  'use strict';

  this.before(function() {
    this.el = document.createElement("DIV");
    document.body.appendChild(this.el);
  });

  this.describe('should do what it says on the tin', function() {

    var ItemView = Marionette.ItemView.extend({
      template: _.template('<%=name%>')
    });

    var CV = Marionette.CollectionView.extend({
      itemView: ItemView
    });
    _.extend(CV.prototype, SortedMixin);

    this.it('insert one at a time', function() {
      var collection = new Backbone.Collection();
      new CV({ el: this.el, collection: collection });

      var children;

      collection.add(new Backbone.Model({ name: 'Tiddles' }));

      children = $(this.el).find('div');
      this.assertEqual(1, children.length);
      this.assertEqual('Tiddles', children.eq(0).text());

      collection.add(new Backbone.Model({ name: 'Snuggles' }), { at: 0 });

      children = $(this.el).find('div');
      this.assertEqual(2, children.length);
      this.assertEqual('Snuggles', children.eq(0).text());
      this.assertEqual('Tiddles', children.eq(1).text());

      collection.add(new Backbone.Model({ name: 'Minkey' }), { at: 1 });

      children = $(this.el).find('div');
      this.assertEqual(3, children.length);
      this.assertEqual('Snuggles', children.eq(0).text());
      this.assertEqual('Minkey', children.eq(1).text());
      this.assertEqual('Tiddles', children.eq(2).text());
    });

    this.it('render a prepopulated collection', function() {
      var collection = new Backbone.Collection();
      collection.add(new Backbone.Model({ name: 'Tiddles' }));
      collection.add(new Backbone.Model({ name: 'Snuggles' }));
      collection.add(new Backbone.Model({ name: 'Minkey' }));

      new CV({ el: this.el, collection: collection }).render();

      var children = $(this.el).find('div');
      this.assertEqual(3, children.length);
      this.assertEqual('Tiddles', children.eq(0).text());
      this.assertEqual('Snuggles', children.eq(1).text());
      this.assertEqual('Minkey', children.eq(2).text());
    });
  });

});
