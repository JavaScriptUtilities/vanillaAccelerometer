/*
 * Plugin Name: Vanilla-JS Accelerometer
 * Version: 0.1.0
 * Plugin URL: https://github.com/Darklg/JavaScriptUtilities
 * Vanilla-JS Accelerometer may be freely distributed under the MIT license.
 */

function vanillaAccelerometer($item, settings) {
    'use strict';

    /* Launch only once */
    if ($item.getAttribute('data-vanillajsaccelerometer')) {
        return;
    }
    $item.setAttribute('data-vanillajsaccelerometer', '1');

    /* User settings */
    settings = settings || {};
    settings.offset = settings.offset || 1;

    /* Inner values */
    var _values = {};
    set_values();

    function set_values() {
        _values.winHeight = window.innerHeight;
        _values.winWidth = window.innerWidth;
    }

    function set_item_pos(clientX, clientY) {
        var moveY = (clientY / _values.winHeight - 0.5) * settings.offset * 100;
        var moveX = (clientX / _values.winWidth - 0.5) * settings.offset * 100;
        var t = 'translate3d(' + moveX + '%, ' + moveY + '%,0)';
        $item.style.WebkitTransform = t;
        $item.style.MozTransform = t;
        $item.style.transform = t;
    }

    document.addEventListener('mousemove', function(e) {
        set_item_pos(e.clientX, e.clientY);
    }, 1);
}
