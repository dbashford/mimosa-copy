mimosa-copy
===========

This is Mimosa's file copying "compiler".  It is a Mimosa dependency and a default module as of Mimosa version `2.0.0`.

For more information regarding Mimosa, see http://mimosa.io.

For more information about this module, see [the copy section of the Mimosa configuration docs](http://mimosa.io/configuration.html#copy).

## Overview

Some files, for instance CoffeeScript, have specific compilers that are responsible for transforming input text (the `watch.sourceDir` in `mimosa-config`) to output text (the `watch.compiledDir` in `mimosa-config`).

This is a generic file copier for the Mimosa build tool serves as the "compiler" for files that do not need transformation.  This simple module makes the output text for a file the same as the input text.
