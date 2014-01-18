mimosa-copy
===========

This is Mimosa's file copying "compiler".  It is a Mimosa dependency and a default module as of Mimosa version `2.0.0`.

For more information regarding Mimosa, see http://mimosa.io.

For more information about this module, see [the copy section of the Mimosa configuration docs](http://mimosa.io/configuration.html#copy).

## Overview

Some files, for instance CoffeeScript, have specific compilers that are responsible for transforming input text (the `watch.sourceDir` in `mimosa-config`) to output text (the `watch.compiledDir` in `mimosa-config`).

This is a generic file copier for the Mimosa build tool serves as the "compiler" for files that do not need transformation.  This simple module makes the output text for a file the same as the input text.

## Default Config

```coffeescript
copy
  extensions: ["js","css","png","jpg","jpeg","gif","html","eot","svg","ttf","woff","otf","yaml","kml","ico","htc","htm","json","txt","xml","xsd","map","md","mp4"]
  exclude:[]
````

* `extensions`: the extensions of files to copy from `sourceDir` to `compiledDir`. js/css, images, etc.
* `exclude`: List of regexes or strings to match files that should not be copied but that you might still want processed. String paths can be absolute or relative to the `watch.sourceDir`. Regexes are applied to the entire path.