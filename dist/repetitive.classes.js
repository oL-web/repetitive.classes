(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.classes = factory());
}(this, (function () { 'use strict';

function classes(elems) {

    elems = elems.length ? [].slice.call(elems) : [elems];

    return {
        add: function add(string) {
            for (var i = 0; i < elems.length; i++) {
                elems[i].className += " " + string;
            }
            return this;
        },
        remove: function remove(string) {
            var rules = new RegExp("\\b(" + string.split(" ").join(")(\\s|$)|\\b(") + ")(\\s|$)", "g");

            for (var i = 0; i < elems.length; i++) {
                elems[i].className = elems[i].className.replace(rules, "");
            }
            return this;
        },
        contains: function contains(string) {
            var classesArr = string.split(" ");
            var matchesCount = 0;

            for (var i = 0; i < elems.length; i++) {
                for (var j = 0; j < classesArr.length; j++) {
                    var rule = new RegExp("\\b(" + classesArr[j] + ")(\\s|$)", "g");
                    if (rule.test(elems[i].className)) matchesCount++;
                }
            }

            if (matchesCount === elems.length * classesArr.length) return true;
            return false;
        },
        toggle: function toggle(string) {
            var classesArr = string.split(" ");

            for (var i = 0; i < elems.length; i++) {
                for (var j = 0; j < classesArr.length; j++) {
                    var rule = new RegExp("\\b(" + classesArr[j] + ")(\\s|$)", "g");

                    if (rule.test(elems[i].className)) {
                        elems[i].className = elems[i].className.replace(rule, "");
                    } else elems[i].className += " " + classesArr[j];
                }
            }
            return this;
        }
    };
}

return classes;

})));
