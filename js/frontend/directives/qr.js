'use strict';

define(['./module', 'qrcodejs'], function (directives, QRCode) {
  directives.directive('qr', function() {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        var qrcode = new QRCode(element[0], {
          width : attrs.width,
          height : attrs.height,
          correctLevel : QRCode.CorrectLevel.H,
          useSVG: false
        });
        qrcode.makeCode(attrs.data);
      }
    };
  });
});
