// Filters --------------------------------------------------------------------

angular.module('myApp.filters', [])
  .filter('uriEncode',
    function () {
      return function (text) {
        return encodeURIComponent(text);
      };
    })
  .filter('markdown', ['showdown', '$sce',
    function (showdown, $sce) {
      return function (text) {
        var converter = new showdown.converter();
        return $sce.trustAsHtml(converter.makeHtml(text || ''));
      };
    }
  ])
  .filter('interpolate', ['version',
    function (version) {
      return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      };
    }
  ]);
