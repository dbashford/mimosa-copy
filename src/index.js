"use strict";

var logger = null
  , config = require( './config' )
  , getExtensions = function ( mimosaConfig ) {
    logger = mimosaConfig.log;
    return mimosaConfig.copy.extensions;
  };

var compile = function ( mimosaConfig, options, next ) {
  var hasFiles = options.files && options.files.length > 0;
  if (!hasFiles) {
    return next();
  }

  var c = mimosaConfig.copy;

  options.files.forEach( function ( file ) {
    if ( c && c.excludeRegex && file.inputFileName.match( c.excludeRegex ) ) {
      if ( logger.isDebug() ) {
        logger.debug( "skipping copy file [[ " + file.inputFileName + " ]], file is excluded via regex" );
      }
    } else {
      if ( c.exclude.indexOf(file.inputFileName) > -1 ) {
        if ( logger.isDebug() ) {
          logger.debug( "skipping copy file [[ " + file.inputFileName + " ]], file is excluded via string path" );
        }
      } else {
        file.outputFileText = file.inputFileText;
      }
    }
  });

  next();
};

module.exports = {
  name: "copy",
  compilerType: "copy",
  compile: compile,
  extensions: getExtensions,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};