select-file
===========

AngularJS directive for file selection.

Getting Started
---------------

The following attributes are available:

```html
<a select-file="files"
   select-file-accept="text/*"
   select-file-multiple>
    select files
</a>
```

`select-file-accept` and `select-file-multiple` are optionals.

The example above is equivalent to:

```html
<a>
    <input type="text" ng-model="files" accept="text/*" multiple ng-hide="true" />
    select files
</a>
```
