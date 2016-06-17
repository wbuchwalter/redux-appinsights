var assign = require('lodash.assign');
var foreach = require('lodash.foreach');

function monitor(params) {
  return function(store){
    return function(next) {
      return function(action) {
        next(action);
        if (shouldTrackAction(action)) {
          trackAction(action, params);
        }
      }
    }
  }
}

function shouldTrackAction(action) {
  return window.appInsights && action.meta && action.meta.appInsights;
}

function trackAction(action, params) {
    window.appInsights.trackEvent(action.type, buildProps(action, params));
}

function buildProps(action, params) {
  var copy = assign({}, action);

  if(action.meta.appInsights.trackPayload === false) {
    return assign({}, {type: action.type}, params.globals);
  }

  foreach(params.exclude, function(e) {
    delete copy[e];
  });

  return assign({}, copy, params.globals);
}

module.exports = {
  insightsMonitor: monitor
};
