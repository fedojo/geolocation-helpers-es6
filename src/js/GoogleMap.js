'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GoogleMap = (function (_Map) {
  function GoogleMap() {
    _classCallCheck(this, GoogleMap);

    _get(Object.getPrototypeOf(GoogleMap.prototype), 'constructor', this).call(this);
    console.log('GoogleMaps');
  }

  _inherits(GoogleMap, _Map);

  _createClass(GoogleMap, [{
    key: 'initialize',
    value: function initialize() {
      var mapOptions = {
        center: {
          lat: this.params.lat,
          lng: this.params.lng
        },
        zoom: this.params.zoom
      },
          map = new google.maps.Map(this.renderElement, mapOptions);
    }
  }, {
    key: 'drawRoute',
    value: function drawRoute(route) {
      this.routeArray = _currentRouteArray;

      var finalRouteArray = [],
          centerPoint = this.getCenterPoint();
      mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(centerPoint.latitude, centerPoint.longitude)
      }, map = new google.maps.Map(settings.$element, mapOptions);

      this.routeArray.forEach(function (el) {
        finalRouteArray.push(new google.maps.LatLng(el.latitude, el.longitude));

        var myLatlng = new google.maps.LatLng(el.latitude, el.longitude);
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Hello World!'
        });
      });

      var finalRoute = new google.maps.Polyline({
        path: finalRouteArray,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1,
        strokeWeight: 2
      });

      finalRoute.setMap(map);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      google.maps.event.addDomListener(window, 'load', function () {
        return _this2.initialize();
      });
    }
  }]);

  return GoogleMap;
})(Map);
//# sourceMappingURL=GoogleMap.js.map