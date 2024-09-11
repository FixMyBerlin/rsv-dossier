"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.processMeta = exports.processGeometries = exports.applyNested = exports.name2id2 = exports.calcMissingLength = void 0;
// This file is a collection of helper functions for manually fixing our data e.g. add missing values or renaming keys
var fs_1 = require("fs");
var turf_1 = require("@turf/turf");
// calculate the length (m) for all geometries with unknown length
var calcMissingLength = function (fc) {
    fc.features.map(function (ml) {
        if (!ml.properties.length) {
            return __assign(__assign({}, ml), { length: (0, turf_1.length)(ml) * 1000 });
        }
        return ml;
    });
    return fc;
};
exports.calcMissingLength = calcMissingLength;
// rename `name` to `id`
var name2id2 = function (fc) {
    var name = fc.name, copy = __rest(fc, ["name"]);
    return __assign({ id: name }, copy);
};
exports.name2id2 = name2id2;
// apply `f` on nested property defined through `path`
var applyNested = function (obj, path, f) {
    var attr = obj;
    for (var i = 0; i < path.length - 1; i += 1) {
        attr = attr[path[i]];
    }
    var leafKey = path[path.length - 1];
    attr[leafKey] = f(attr[leafKey]);
    return obj;
};
exports.applyNested = applyNested;
// apply `f` to all geometries
var processGeometries = function (f) {
    (0, fs_1.readdirSync)('src/radschnellwege/geometry/').forEach(function (filePath) {
        var data = JSON.parse((0, fs_1.readFileSync)(filePath).toString());
        (0, fs_1.writeFileSync)(filePath, JSON.stringify(f(data)));
    });
};
exports.processGeometries = processGeometries;
// apply `f` to all meta data
var processMeta = function (f) {
    var filePath = 'src/radschnellwege/meta/meta.json';
    var data = JSON.parse((0, fs_1.readFileSync)(filePath).toString());
    (0, fs_1.writeFileSync)(filePath, JSON.stringify(data.map(f)));
};
exports.processMeta = processMeta;
