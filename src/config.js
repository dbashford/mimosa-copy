"use strict";

exports.defaults = function() {
  return {
    copy: {
      extensions: ["js","css","png","jpg","jpeg","gif","html","eot","svg","ttf","woff","woff2","otf","yaml","kml","ico","htc","htm","json","txt","xml","xsd","map","md","mp4","mp3","swf"],
      exclude: []
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  ###\n" +
         "  # the extensions of files to copy from sourceDir to compiledDir. vendor js/css, images, etc.\n" +
         "  ###\n" +
         "  copy:              # config settings for the coffeescript compiler module\n" +
         "    extensions: [\"js\",\"css\",\"png\",\"jpg\",\"jpeg\",\"gif\",\"html\",\"eot\",\"svg\",\"ttf\",\"woff\",\"woff2\",\"otf\",\"yaml\",\"kml\",\"ico\",\"htc\",\"htm\",\"json\",\"txt\",\"xml\",\"xsd\",\"map\",\"md\",\"mp4\",\"mp3\",\"swf\"]\n" +
         "    exclude: []      # List of regexes or strings to match files that should not be copied\n" +
         "                     # but that you might still want processed. String paths can be absolute\n" +
         "                     # or relative to the watch.sourceDir. Regexes are applied to the entire path.\n";
};

exports.validate = function(config, validators) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "copy config", config.copy) ) {
    validators.isArrayOfStrings( errors, "copy.extensions", config.copy.extensions );
    validators.ifExistsFileExcludeWithRegexAndString( errors, "copy.exclude", config.copy, config.watch.sourceDir );
  }

  return errors;
};
