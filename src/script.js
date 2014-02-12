require.config({
  baseUrl: 'src/',
  paths: {
    'jquery': '../lib/jquery-1.10.2',
    'leaflet': '../lib/leaflet/leaflet',
    'handlebars': '../lib/handlebars',
    'lodash': '../lib/lodash.min',
    'flight': '../lib/flight.min'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    },
    'underscore': {
      exports: '_'
    },
    'flight': {
      deps: ['../lib/es5-shim.min', '../lib/es5-sham.min'],
      exports: 'flight'
    }
  }
});

define(
  ['data/loader', 'ui/map', 'ui/search', 'ui/info'],
  function(Loader, Map, Search, Info) {
    'use strict';
    // attach components to the DOM
    Map.attachTo('#map');
    Search.attachTo('#search', {mapSelector: '#map'});
    Info.attachTo('#info');
    Loader.attachTo(document);
  });
