'use strict';

var runtimeMock = function() {
  var args = createArgs(arguments);

  function getArgs(argKey) {
    return ((argKey in args) ? args[argKey] : null);
  }

  function createArgs(methodArgs) {
    var args = {};
    if (methodArgs.length) {
      _.each(methodArgs, function(newObject) {
        _.each(newObject, function(value, key) {
          args[key] = value;
        });
      });
    }
    return args;
  }

  return {
    'sprites' : [ 
      new spriteMock()
    ],
    'spriteNamed' : function(){ return getArgs('spriteName') || new spriteMock();},
    'stage': new stageMock()
  }
};
