(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @styles/main.scss */ "./styles/main.scss");

var _app = __webpack_require__(/*! @main/app */ "./scripts/main/app.js");

__webpack_require__(/*! @main/components/form-field */ "./scripts/main/components/form-field/index.js");

__webpack_require__(/*! @main/components/form-field/input-clear */ "./scripts/main/components/form-field/input-clear.js");

__webpack_require__(/*! @main/components/form-field/dates-group */ "./scripts/main/components/form-field/dates-group.js");

__webpack_require__(/*! @main/components/dropdown/dropdown-field */ "./scripts/main/components/dropdown/dropdown-field.js");

__webpack_require__(/*! @main/components/dropdown/dropdown-select */ "./scripts/main/components/dropdown/dropdown-select.js");

__webpack_require__(/*! @main/components/dropdown/dropdown-checkbox */ "./scripts/main/components/dropdown/dropdown-checkbox.js");

__webpack_require__(/*! @main/components/dropdown/dropdown-dates */ "./scripts/main/components/dropdown/dropdown-dates.js");

__webpack_require__(/*! @main/components/dropdown/dropdown-search */ "./scripts/main/components/dropdown/dropdown-search.js");

__webpack_require__(/*! @main/components/tooltip */ "./scripts/main/components/tooltip.js");

__webpack_require__(/*! @main/components/tabs */ "./scripts/main/components/tabs.js");

__webpack_require__(/*! @main/components/placeholder */ "./scripts/main/components/placeholder.js");

__webpack_require__(/*! @main/components/toggle-menu */ "./scripts/main/components/toggle-menu.js");

__webpack_require__(/*! @main/components/show-more */ "./scripts/main/components/show-more.js");

__webpack_require__(/*! @main/components/elements-page-form/elements-form.js */ "./scripts/main/components/elements-page-form/elements-form.js");

__webpack_require__(/*! @main/components/authorization/ */ "./scripts/main/components/authorization/index.js");

__webpack_require__(/*! @main/components/notification */ "./scripts/main/components/notification.js");

__webpack_require__(/*! @main/components/private-office */ "./scripts/main/components/private-office/index.js");

__webpack_require__(/*! @main/components/buy-pack */ "./scripts/main/components/buy-pack.js");

__webpack_require__(/*! @main/components/modal */ "./scripts/main/components/modal.js");

__webpack_require__(/*! @main/components/masonry-grid */ "./scripts/main/components/masonry-grid.js");

__webpack_require__(/*! @main/components/filter/filter-params */ "./scripts/main/components/filter/filter-params.js");

__webpack_require__(/*! @main/components/filter/filter-hints */ "./scripts/main/components/filter/filter-hints.js");

__webpack_require__(/*! @main/components/filter/filter-select */ "./scripts/main/components/filter/filter-select.js");

__webpack_require__(/*! @main/components/filter/filter-form */ "./scripts/main/components/filter/filter-form.js");

__webpack_require__(/*! @main/components/filter/filter-form-ajax */ "./scripts/main/components/filter/filter-form-ajax.js");

__webpack_require__(/*! @main/components/button-link */ "./scripts/main/components/button-link.js");

__webpack_require__(/*! @main/components/link-select */ "./scripts/main/components/link-select.js");

__webpack_require__(/*! @main/components/img-loading */ "./scripts/main/components/img-loading.js");

__webpack_require__(/*! @main/components/expanded-text */ "./scripts/main/components/expanded-text.js");

__webpack_require__(/*! @main/components/buy */ "./scripts/main/components/buy.js");

__webpack_require__(/*! @main/components/fast-slider */ "./scripts/main/components/fast-slider.js");

__webpack_require__(/*! @main/components/big-image */ "./scripts/main/components/big-image.js");

__webpack_require__(/*! @main/components/copy-link */ "./scripts/main/components/copy-link.js");

__webpack_require__(/*! @main/components/rename-form */ "./scripts/main/components/rename-form.js");

__webpack_require__(/*! @main/components/delete-confirm-btn */ "./scripts/main/components/delete-confirm-btn.js");

__webpack_require__(/*! @main/components/add-to-collection */ "./scripts/main/components/add-to-collection.js");

__webpack_require__(/*! @main/components/scroll-with-blur */ "./scripts/main/components/scroll-with-blur.js");

__webpack_require__(/*! @main/components/buy-pack-authorized */ "./scripts/main/components/buy-pack-authorized.js");

__webpack_require__(/*! @main/components/download-link */ "./scripts/main/components/download-link.js");

window.app = new _app.App();
window.app.run();

/***/ }),

/***/ "./partials/add-to-collection/info.handlebars":
/*!****************************************************!*\
  !*** ./partials/add-to-collection/info.handlebars ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"add-to-collection__img\">\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":2,"column":25}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":2,"column":41}}}) : helper)))
    + "\">\n</div>\n<div class=\"add-to-collection__title\">\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":15}}}) : helper)))
    + "\n</div>\n<div class=\"add-to-collection__id\">\n    ID "
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":7},"end":{"line":8,"column":15}}}) : helper)))
    + "\n</div>\n";
},"useData":true});

/***/ }),

/***/ "./partials/add-to-collection/list.handlebars":
/*!****************************************************!*\
  !*** ./partials/add-to-collection/list.handlebars ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"add-to-collection__select-item js-add-to-collection-item\" data-collection-id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">\n        <div class=\"add-to-collection__select-item-title js-add-to-collection-item-title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"added") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":6,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"add-to-collection__select-item-status js-add-to-collection-item-status\">Добавлено</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"collections") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./partials/add-to-collection/status.handlebars":
/*!******************************************************!*\
  !*** ./partials/add-to-collection/status.handlebars ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"add-to-collection__select-item-status js-add-to-collection-item-status\">Добавлено</div>\n";
},"useData":true});

/***/ }),

/***/ "./partials/buy.handlebars":
/*!*********************************!*\
  !*** ./partials/buy.handlebars ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"hidden") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":25,"column":19}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"js-set-text\">\n                <input class=\"radio-button\"\n                       id=\"type_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\n                       value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\n                       name=\"priceId\"\n                       data-name=\"licence\"\n                       type=\"radio\"\n                       "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"checked") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":23},"end":{"line":20,"column":59}}})) != null ? stack1 : "")
    + ">\n                <label for=\"type_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"buy__options-item\">\n                    "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "\n                </label>\n            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " checked";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"hidden") : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":46,"column":23}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"buy__format-item "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"first") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":45},"end":{"line":33,"column":95}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"last") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":95},"end":{"line":33,"column":143}}})) != null ? stack1 : "")
    + " js-set-text "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"modal") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":156},"end":{"line":33,"column":196}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"modal") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":198},"end":{"line":33,"column":253}}})) != null ? stack1 : "")
    + ">\n                    <input class=\"radio-button\"\n                           id=\"format_"
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\n                           value=\""
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\n                           name=\"payment\"\n                           data-name=\"payment\"\n                           type=\"radio\"\n                           "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"checked") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":27},"end":{"line":40,"column":63}}})) != null ? stack1 : "")
    + ">\n                    <label for=\"format_"
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">\n                        <span class=\"buy__format-item-title\">"
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</span>\n                        <span class=\"buy__format-item-note\">"
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"noteFinal") : depth0), depth0))
    + "</span>\n                    </label>\n                </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " buy__format-item--first";
},"9":function(container,depth0,helpers,partials,data) {
    return " buy__format-item--last";
},"11":function(container,depth0,helpers,partials,data) {
    return " js-modal-open";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "data-modal=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"modal") : depth0), depth0))
    + "\"";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"buy__rest\">\n        <div class=\"buy__rest-title"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"exclusive") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":35},"end":{"line":69,"column":87}}})) != null ? stack1 : "")
    + "\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":70,"column":12},"end":{"line":70,"column":23}}}) : helper)))
    + " ₽\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"exclusive") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":73,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"buy__rest-note\">\n            НДС: "
    + alias4(((helper = (helper = lookupProperty(helpers,"vat") || (depth0 != null ? lookupProperty(depth0,"vat") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vat","hash":{},"data":data,"loc":{"start":{"line":76,"column":17},"end":{"line":76,"column":26}}}) : helper)))
    + " ₽<br>\n            с НДС: "
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":77,"column":19},"end":{"line":77,"column":30}}}) : helper)))
    + " ₽\n        </div>\n    </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return " buy__rest-title--exclusive";
},"18":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"buy__rest-exclusive\">эксклюзивная цена</span>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"buy__rest\">\n        <div class=\"buy__rest-title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"remainingAfter") || (depth0 != null ? lookupProperty(depth0,"remainingAfter") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"remainingAfter","hash":{},"data":data,"loc":{"start":{"line":82,"column":37},"end":{"line":82,"column":57}}}) : helper)))
    + " останется</div>\n        <div class=\"buy__rest-note\">фотографий в вашем пакете после покупи</div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"buy__info\">\n    <div class=\"buy__img\">\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":29}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":45}}}) : helper)))
    + "\">\n    </div>\n    <div class=\"buy__text\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":18}}}) : helper)))
    + "\n    </div>\n</div>\n<div class=\"buy__options js-btn-group\">\n    <div class=\"buy__options-title\">Тип лицензии</div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"licence") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":26,"column":13}}})) != null ? stack1 : "")
    + "</div>\n<div class=\"buy__format\">\n    <div class=\"buy__options-title\">формат покупки</div>\n    <div class=\"buy__format-items js-btn-group\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"payment") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":47,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n</div>\n<div class=\"buy__summary-title\">\n    итого\n</div>\n<ul class=\"image-detail__props\">\n    <li class=\"image-detail__props-item\">\n        <svg class=\"image-detail__props-icon\">\n            <use href=\"#copyright\"></use>\n        </svg>\n        <span class=\"image-detail__props-text js-set-text-place\" data-type=\"licence\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"licenceText") || (depth0 != null ? lookupProperty(depth0,"licenceText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"licenceText","hash":{},"data":data,"loc":{"start":{"line":58,"column":85},"end":{"line":58,"column":102}}}) : helper)))
    + "</span>\n    </li>\n    <li class=\"image-detail__props-item\">\n        <svg class=\"image-detail__props-icon\">\n            <use href=\"#single-photo\"></use>\n        </svg>\n        <span class=\"image-detail__props-text js-set-text-place\" data-type=\"payment\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"paymentText") || (depth0 != null ? lookupProperty(depth0,"paymentText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"paymentText","hash":{},"data":data,"loc":{"start":{"line":64,"column":85},"end":{"line":64,"column":102}}}) : helper)))
    + "</span>\n    </li>\n</ul>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showPrice") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":67,"column":0},"end":{"line":85,"column":7}}})) != null ? stack1 : "")
    + "<button type=\"submit\" class=\"buy__btn button button--regular button--blue js-buy-submit\">\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"btnText") || (depth0 != null ? lookupProperty(depth0,"btnText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnText","hash":{},"data":data,"loc":{"start":{"line":87,"column":4},"end":{"line":87,"column":17}}}) : helper)))
    + "\n</button>\n<button type=\"button\" class=\"buy__cancel js-buy-close\">отменить</button>\n";
},"useData":true});

/***/ }),

/***/ "./partials/callback/callback-error.handlebars":
/*!*****************************************************!*\
  !*** ./partials/callback/callback-error.handlebars ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal__icon modal__icon--failed-modal\">\n    <svg>\n        <use href=\"#failed-modal-icon\"></use>\n    </svg>\n</div>\n<div class=\"modal__title js-fail-modal-title\">Возникла ошибка</div>\n<p class=\"modal__caption js-fail-modal-text\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"message","hash":{},"data":data,"loc":{"start":{"line":7,"column":45},"end":{"line":7,"column":58}}}) : helper)))
    + "</p>\n<div class=\"modal__actions\">\n    <button type=\"button\" class=\"button button--red button--regular js-modal-close\">попробовать ещё раз</button>\n</div>\n";
},"useData":true});

/***/ }),

/***/ "./partials/fast-view.handlebars":
/*!***************************************!*\
  !*** ./partials/fast-view.handlebars ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"fast-slider__item swiper-slide js-fast-slider-item\" data-id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" data-url=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\">\n        <div class=\"image-detail\">\n            <div class=\"image-detail__image js-modal-open js-modal-open js-big-image-btn\" data-big-image=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"imageBig") : stack1), depth0))
    + "\" data-modal=\"image-modal\">\n                <button class=\"image-detail__image-icon button button--loupe button--grey-dark\" type=\"button\">\n                    <i class=\"button__icon\">\n                        <svg width=\"24\" height=\"24\">\n                            <use href=\"#loupe\"></use>\n                        </svg>\n                    </i>\n                </button>\n                <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"image") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"alt") : depth0), depth0))
    + "\">\n            </div>\n            <div class=\"image-detail__info\">\n                <h1 class=\"image-detail__title title--expanded js-expanded-text\" data-open-text=\"...&nbsp;ещё\" data-close-text=\" ↑свернуть\">\n                    <span class=\"title--expanded__inner js-expanded-text-inner\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</span>\n                </h1>\n                <div class=\"image-detail__text\">\n                    <div class=\"image-detail__text-inner\">\n                        "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "\n                    </div>\n                </div>\n                <div class=\"image-detail__btns\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"downloadAvailable") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":45,"column":27}}})) != null ? stack1 : "")
    + "                    <button class=\"gallery-item__button gallery-item__button-add button button--action button--white js-tooltip js-add-to-collection-btn\"\n                        data-theme=\"black\"\n                        data-image-id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\n                        data-title=\"Добавить в коллекцию\"\n                        data-text=\"\"\n                        data-placement=\"bottom\">\n                        <svg width=\"24\" height=\"24\">\n                            <use href=\"#plus\"></use>\n                        </svg>\n                    </button>\n                </div>\n                <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"author") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"user image-detail__author\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"author") : stack1)) != null ? lookupProperty(stack1,"image") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":20},"end":{"line":62,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"user__info\">\n                        <div class=\"user__name\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"author") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</div>\n                        <div class=\"user__role\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"author") : stack1)) != null ? lookupProperty(stack1,"role") : stack1), depth0))
    + " →</div>\n                    </div>\n                </a>\n                <ul class=\"image-detail__props\">\n                    <li class=\"image-detail__props-item color--blue\">\n                        <svg class=\"image-detail__props-icon image-detail__props-icon--blue\">\n                            <use href=\"#photo-cards\"></use>\n                        </svg>\n                        <a class=\"link link--blue image-detail__props-text\" href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"photoset") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">\n                            "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"photoset") : stack1)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + " →\n                        </a>\n                    </li>\n                    <li class=\"image-detail__props-item\">\n                        <svg class=\"image-detail__props-icon\">\n                            <use href=\"#photo-card\"></use>\n                        </svg>\n                        <span class=\"image-detail__props-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"orientation") : stack1), depth0))
    + "</span>\n                    </li>\n                    <li class=\"image-detail__props-item\">\n                        <svg class=\"image-detail__props-icon\">\n                            <use href=\"#user-small\"></use>\n                        </svg>\n                        <span class=\"image-detail__props-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"peopleType") : stack1), depth0))
    + "</span>\n                    </li>\n                    <li class=\"image-detail__props-item\">\n                        <svg class=\"image-detail__props-icon\">\n                            <use href=\"#calendar-simple\"></use>\n                        </svg>\n                        <span class=\"image-detail__props-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"date") : stack1), depth0))
    + "</span>\n                    </li>\n                    <li class=\"image-detail__props-item\">\n                        <svg class=\"image-detail__props-icon\">\n                            <use href=\"#copyright\"></use>\n                        </svg>\n                        <span class=\"image-detail__props-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"licence") : stack1), depth0))
    + "</span>\n                    </li>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"note") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":20},"end":{"line":108,"column":27}}})) != null ? stack1 : "")
    + "                </ul>\n                <div class=\"image-detail__bottom\">\n                    <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"urlSimilar") : depth0), depth0))
    + "\" class=\"button button--white button--medium\">\n                        Смотреть похожие\n                    </a>\n                    <div class=\"image-detail__id\">ID "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "</div>\n                </div>\n            </div>\n        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <button\n                            class=\"button button--download button--blue "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"downloadLink") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":26,"column":72},"end":{"line":26,"column":139}}})) != null ? stack1 : "")
    + "\"\n                            data-id=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\n                            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"downloadLink") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":28},"end":{"line":28,"column":95}}})) != null ? stack1 : "")
    + ">\n                            <span>скачать</span>\n                            <i class=\"button__icon\">\n                                <svg width=\"24\" height=\"24\">\n                                    <use href=\"#download-arrow\"></use>\n                                </svg>\n                            </i>\n                        </button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "js-download-link";
},"5":function(container,depth0,helpers,partials,data) {
    return "js-buy-btn";
},"7":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "data-url=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"downloadLink") : depth0), depth0))
    + "\"";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <button href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"download") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"button button--download button--blue js-modal-open\" data-modal=\"auth-and-download-modal\">\n                            <span>Войти и скачать</span>\n                            <i class=\"button__icon\">\n                                <svg width=\"24\" height=\"24\">\n                                    <use href=\"#download-arrow\"></use>\n                                </svg>\n                            </i>\n                        </button>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"user__icon user__icon--bordered\">\n                            <img src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"author") : stack1)) != null ? lookupProperty(stack1,"image") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"author") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" width=\"40\" height=\"40\">\n                        </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li class=\"image-detail__props-item\">\n                            <svg class=\"image-detail__props-icon\">\n                                <use href=\"#info\"></use>\n                            </svg>\n                            <span class=\"image-detail__props-text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"fastView") : depth0)) != null ? lookupProperty(stack1,"note") : stack1), depth0))
    + "</span>\n                        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":119,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./partials/gallery-item.handlebars":
/*!******************************************!*\
  !*** ./partials/gallery-item.handlebars ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" class=\"gallery-item js-auto-grid-item js-auto-grid-item-new\" data-id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">\n        <img class=\"gallery-item__image\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"alt") : depth0), depth0))
    + "\">\n        <div class=\"gallery-item__buttons\">\n            <div class=\"gallery-item__button button button--zoom js-modal-open js-fast-view-open js-tooltip\"\n                 data-id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\n                 data-theme=\"black\"\n                 data-title=\"Быстрый просмотр\"\n                 data-text=\"\"\n                 data-placement=\"bottom\"\n                 data-modal=\"fast-view-modal\">\n                <svg width=\"24\" height=\"30\">\n                    <use href=\"#loupe\"></use>\n                </svg>\n            </div>\n            <div class=\"gallery-item__button gallery-item__button-group button button--action button--grey js-tooltip js-button-link\" data-link=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"urlSimilar") : depth0), depth0))
    + "\"\n                 data-theme=\"black\"\n                 data-title=\"Похожие\"\n                 data-text=\"\"\n                 data-placement=\"bottom\">\n                <svg width=\"24\" height=\"24\">\n                    <use href=\"#image-group\"></use>\n                </svg>\n            </div>\n            <div class=\"gallery-item__button gallery-item__button-add button button--action button--grey js-tooltip js-add-to-collection-btn\"\n                 data-image-id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\n                 data-modal=\"add-to-collection-modal\"\n                 data-theme=\"black\"\n                 data-title=\"Добавить в коллекцию\"\n                 data-text=\"\"\n                 data-placement=\"bottom\" >\n                <svg width=\"24\" height=\"24\">\n                    <use href=\"#plus\"></use>\n                </svg>\n            </div>\n        </div>\n        <div class=\"gallery-item__description\">\n            <p class=\"gallery-item__text\">\n                "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "\n            </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"downloadAvailable") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":63,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"gallery-item__download button button--save js-tooltip "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"downloadLink") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":42,"column":82},"end":{"line":42,"column":149}}})) != null ? stack1 : "")
    + "\"\n                     data-id=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"\n                     "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"downloadLink") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":21},"end":{"line":44,"column":88}}})) != null ? stack1 : "")
    + "\n                     data-title=\"Скачать\"\n                     data-text=\"\"\n                     data-theme=\"black\"\n                     data-placement=\"top\">\n                    <svg width=\"24\" height=\"24\">\n                        <use href=\"#download-arrow\"></use>\n                    </svg>\n                </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "js-download-link";
},"5":function(container,depth0,helpers,partials,data) {
    return "js-buy-btn";
},"7":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "data-url=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"downloadLink") : depth0), depth0))
    + "\"";
},"9":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"gallery-item__download button button--save js-tooltip js-modal-open\"\n                     data-modal=\"auth-and-download-modal\"\n                     data-title=\"Войти и скачать\"\n                     data-text=\"\"\n                     data-placement=\"top\">\n                    <svg width=\"24\" height=\"24\">\n                        <use href=\"#download-arrow\"></use>\n                    </svg>\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":66,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./partials/pagenav.handlebars":
/*!*************************************!*\
  !*** ./partials/pagenav.handlebars ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"prev") || (depth0 != null ? lookupProperty(depth0,"prev") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"prev","hash":{},"data":data,"loc":{"start":{"line":2,"column":13},"end":{"line":2,"column":23}}}) : helper)))
    + "\" class=\"gallery-pagination__nav button--white gallery-pagination__nav--prev\">\n        <svg width=\"16\" height=\"16\">\n            <use href=\"#chevron-left\"></use>\n        </svg>\n        <span class=\"hidden-md\">Назад</span>\n    </a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"active") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":19,"column":15}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <span class=\"active button--white gallery-pagination__button gallery-pagination__button--page\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"num") : depth0), depth0))
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"separator") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"button--grey gallery-pagination__button gallery-pagination__button--page gallery-pagination__button--dots hidden-md\">...</span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" class=\"button--white gallery-pagination__button gallery-pagination__button--page"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"hiddenMd") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":121},"end":{"line":17,"column":160}}})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"num") : depth0), depth0))
    + "</a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " hidden-md";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"next") || (depth0 != null ? lookupProperty(depth0,"next") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"next","hash":{},"data":data,"loc":{"start":{"line":23,"column":13},"end":{"line":23,"column":23}}}) : helper)))
    + "\" class=\"gallery-pagination__nav button--white gallery-pagination__nav--next\">\n        <span class=\"hidden-md\">Вперед</span>\n        <svg width=\"16\" height=\"16\">\n            <use href=\"#chevron-right\"></use>\n        </svg>\n    </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"prev") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":7}}})) != null ? stack1 : "")
    + "<div class=\"gallery-pagination__pages\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":20,"column":13}}})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"next") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./partials/payment.handlebars":
/*!*************************************!*\
  !*** ./partials/payment.handlebars ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"payments-history__block js-payment-block\">\n        <div class=\"payments-history__item payments-history__item--date\">\n            <p class=\"payments-history__param-name\">Дата выставления</p>\n            <p class=\"payments-history__param-value\"> "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"date") : depth0), depth0))
    + " </p>\n        </div>\n        <div class=\"payments-history__item payments-history__item--sum\">\n            <p class=\"payments-history__param-name\">Сумма документа</p>\n            <p class=\"payments-history__param-value\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"amount") : depth0), depth0))
    + "</p>\n        </div>\n        <div class=\"payments-history__item payments-history__item--reason\">\n            <p class=\"payments-history__param-name\">Основание</p>\n            <p class=\"payments-history__param-value\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"basic") : depth0), depth0))
    + "</p>\n        </div>\n        <div class=\"payments-history__item payments-history__item--act\">\n            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"actUrl") : depth0), depth0))
    + "\" class=\"button button--blue button--medium payments-history__download-act\">Скачать акт</a>\n        </div>\n\n        <div class=\"payments-history__item payments-history__item--invoices\">\n            <div class=\"payments-history__item-wrapper\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"invoices") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":23,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" class=\"text-nowrap button button--white button--medium\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":27,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./partials/photo.handlebars":
/*!***********************************!*\
  !*** ./partials/photo.handlebars ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" class=\"photo__item js-img-loading\">\n        <img class=\"photo__item-img js-img-loading-img\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"alt") : depth0), depth0))
    + "\">\n        <div class=\"photo__item-count\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"count") : depth0), depth0))
    + " фото</div>\n        <div class=\"photo__item-description\">\n            <time class=\"photo__item-date\" datetime=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"datetime") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"date") : depth0), depth0))
    + "</time>\n            <h2 class=\"photo__item-title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h2>\n            <div class=\"photo__item-text\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"text") : depth0), depth0))
    + "</div>\n        </div>\n    </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./partials/tooltip.handlebars":
/*!*************************************!*\
  !*** ./partials/tooltip.handlebars ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <h5>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":17}}}) : helper)))
    + "</h5>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <p>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":5,"column":7},"end":{"line":5,"column":15}}}) : helper)))
    + "</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./scripts/main/app.js":
/*!*****************************!*\
  !*** ./scripts/main/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _app = __webpack_require__(/*! @std/app */ "./scripts/std/app.ts");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_StdApp) {
  _inherits(App, _StdApp);

  var _super = _createSuper(App);

  function App() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, App);

    return _super.call(this, config);
  }

  _createClass(App, [{
    key: "run",
    value: function run() {}
  }]);

  return App;
}(_app.App);

exports.App = App;

/***/ }),

/***/ "./scripts/main/axios/index.js":
/*!*************************************!*\
  !*** ./scripts/main/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _instance = _interopRequireDefault(__webpack_require__(/*! ./instance */ "./scripts/main/axios/instance.js"));

var _rewriteUrl = _interopRequireDefault(__webpack_require__(/*! ./middleware/rewrite-url */ "./scripts/main/axios/middleware/rewrite-url.js"));

var _handleError = _interopRequireDefault(__webpack_require__(/*! ./middleware/handle-error */ "./scripts/main/axios/middleware/handle-error.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var axios = (0, _instance["default"])();
axios.interceptors.request.use(_rewriteUrl["default"], _handleError["default"]);
var _default = axios;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/axios/instance.js":
/*!****************************************!*\
  !*** ./scripts/main/axios/instance.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createInstance;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "../node_modules/axios/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createInstance() {
  return _axios["default"].create({
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Requested-With": "XMLHttpRequest",
      "Accept": "application/json"
    }
  });
}

module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/axios/middleware/handle-error.js":
/*!*******************************************************!*\
  !*** ./scripts/main/axios/middleware/handle-error.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleError;

function handleError(error) {
  return Promise.reject(error);
}

module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/axios/middleware/rewrite-url.js":
/*!******************************************************!*\
  !*** ./scripts/main/axios/middleware/rewrite-url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url */ "../node_modules/core-js/modules/web.url.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rewriteUrl;

function rewriteUrl(config) {
  var port = {"APP_ENV":"local","NODE_ENV":"production","DEV_SERVER_PORT":"9963","DEV_SERVER_PORT_HOST":"9963","MOCKER_PORT":"9963","MOCKER_HOST":"","MOCKER_PROTOCOL":"","CONTAINER_PREFIX":"app","COMPOSE_PROJECT_NAME":"","APP_ROOT":"/var/www/html"}.MOCKER_PORT;
  var host = {"APP_ENV":"local","NODE_ENV":"production","DEV_SERVER_PORT":"9963","DEV_SERVER_PORT_HOST":"9963","MOCKER_PORT":"9963","MOCKER_HOST":"","MOCKER_PROTOCOL":"","CONTAINER_PREFIX":"app","COMPOSE_PROJECT_NAME":"","APP_ROOT":"/var/www/html"}.MOCKER_HOST;

  if (!port && !host) {
    return config;
  }

  try {
    host = new URL(config.url).host;
  } catch (_unused) {
    if (!host) {
      host = window.location.hostname;
    }
  }

  var url;

  try {
    url = new URL(config.url).pathname;
  } catch (_unused2) {
    url = config.url;
  }

  var protocol = {"APP_ENV":"local","NODE_ENV":"production","DEV_SERVER_PORT":"9963","DEV_SERVER_PORT_HOST":"9963","MOCKER_PORT":"9963","MOCKER_HOST":"","MOCKER_PROTOCOL":"","CONTAINER_PREFIX":"app","COMPOSE_PROJECT_NAME":"","APP_ROOT":"/var/www/html"}.MOCKER_PROTOCOL;

  if (!protocol) {
    try {
      protocol = new URL(config.url).protocol;
    } catch (_unused3) {
      protocol = window.location.protocol;
    }
  }

  if (port !== "80" && port !== "443") {
    url = "".concat(protocol, "//").concat(host, ":").concat(port).concat(url);
  } else {
    url = "".concat(protocol, "//").concat(host).concat(url);
  }

  config.url = url;
  return config;
}

module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/add-to-collection.js":
/*!******************************************************!*\
  !*** ./scripts/main/components/add-to-collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "../node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.string.link */ "../node_modules/core-js/modules/es.string.link.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddToCollection = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _getBtnFromTarget = __webpack_require__(/*! @main/utils/get-btn-from-target */ "./scripts/main/utils/get-btn-from-target.js");

var _info = _interopRequireDefault(__webpack_require__(/*! @partials/add-to-collection/info.handlebars */ "./partials/add-to-collection/info.handlebars"));

var _list = _interopRequireDefault(__webpack_require__(/*! @partials/add-to-collection/list.handlebars */ "./partials/add-to-collection/list.handlebars"));

var _status = _interopRequireDefault(__webpack_require__(/*! @partials/add-to-collection/status.handlebars */ "./partials/add-to-collection/status.handlebars"));

var _callbackError = _interopRequireDefault(__webpack_require__(/*! @partials/callback/callback-error.handlebars */ "./partials/callback/callback-error.handlebars"));

var _makeUrl = __webpack_require__(/*! @main/utils/make-url */ "./scripts/main/utils/make-url.js");

var _modal = __webpack_require__(/*! @main/components/modal */ "./scripts/main/components/modal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Добавление в коллекцию. */
var AddToCollection = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLDivElement} el Блок управления добавлением в коллекцию.
   *
   */
  function AddToCollection(el) {
    var _this = this;

    _classCallCheck(this, AddToCollection);

    this.send = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, method, params, onRequestFinish) {
        var response, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.isWaiting) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _this.isWaiting = true;
                _context.next = 6;
                return (0, _axios["default"])({
                  url: url,
                  data: params,
                  method: method
                });

              case 6:
                response = _context.sent;
                _this.isWaiting = false;
                onRequestFinish(response);
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                  _this.showError(_context.t0.response.data.message);
                } else {
                  _this.showError(_messages.ERROR_DEFAULT);

                  console.log(_context.t0);
                }

                _this.isWaiting = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function (_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = el;
    this.info = this.el.querySelector(".js-add-to-collection-info");
    this.list = this.el.querySelector(".js-add-to-collection-list");
    this.listWrap = this.el.querySelector(".js-add-to-collection-wrap");
    this.empty = this.el.querySelector(".js-add-to-collection-empty");
    this.createInput = this.el.querySelector(".js-add-to-collection-create-input");
    this.createBtn = this.el.querySelector(".js-add-to-collection-create-btn");
    this.searchInput = this.el.querySelector(".js-add-to-collection-search-input");
    this.notification = document.querySelector(".js-add-notification");
    this.modal = document.querySelector(".js-modal[data-modal-name='add-to-collection-modal']");
    this.imageId = null;
    this.isWaiting = false;
    this.bindEventListeners();
    this.checkCreateValue();
  }
  /**
   * Инициализация ивентов клика.
   *
   * @returns {void}
   */


  _createClass(AddToCollection, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      document.addEventListener("click", function (e) {
        var addBtn = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-add-to-collection-btn");

        if (addBtn) {
          e.preventDefault();
          _this2.imageId = addBtn.dataset.imageId;
          var url = (0, _makeUrl.makeUrl)("/image/:image_id/", {
            ":image_id": _this2.imageId
          });

          _this2.send(url, "GET", {}, _this2.renderWindow.bind(_this2));
        } else {
          var item = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-add-to-collection-item");

          if (item) {
            _this2.toggleCollection(item);
          }
        }
      });
      this.createInput.addEventListener("input", function () {
        _this2.checkCreateValue();
      });
      this.createBtn.addEventListener("click", function (e) {
        e.preventDefault();

        _this2.send("/collection/", "POST", {
          images: [_this2.imageId],
          name: _this2.createInput.value
        }, _this2.renderItem.bind(_this2));
      });
      this.searchInput.addEventListener("input", function () {
        _this2.searchInList();
      });
    }
  }, {
    key: "toggleCollection",
    value: function toggleCollection(item) {
      var status = item.querySelector(".js-add-to-collection-item-status");
      var paramsUrl = {
        ":image_id": this.imageId,
        ":collection_id": item.dataset.collectionId
      };

      if (status) {
        var url = (0, _makeUrl.makeUrl)("/collection/:collection_id/image/:image_id/", paramsUrl);
        this.send(url, "DELETE", {}, this.showNotification.bind(this));
        status.remove();
      } else {
        var _url = (0, _makeUrl.makeUrl)("/collection/:collection_id/image/:image_id/", paramsUrl);

        this.send(_url, "POST", {}, this.showNotification.bind(this));
        item.insertAdjacentHTML("beforeend", (0, _status["default"])({}));
      }
    }
    /**
     * Отрисовать элементы окна по данным с сервера.
     *
     * @returns {void}
     */

  }, {
    key: "renderWindow",
    value: function renderWindow(response) {
      this.info.innerHTML = (0, _info["default"])(response.data);
      this.renderList(response);

      _modal.Modal.open(this.modal);

      this.list.dispatchEvent(new Event("updateBlurScroll"));
    }
    /**
     * Отрисовать список коллекций по данным с сервера.
     *
     * @returns {void}
     */

  }, {
    key: "renderList",
    value: function renderList(response) {
      this.clearInputs();

      if (response.data.collections) {
        this.listWrap.classList.remove("hidden");
        this.list.innerHTML = (0, _list["default"])(response.data);
      } else {
        this.listWrap.classList.add("hidden");
      }
    }
  }, {
    key: "clearInputs",
    value: function clearInputs() {
      this.empty.classList.add("hidden");
      this.searchInput.value = "";
      this.createInput.value = "";
      this.checkCreateValue();
      this.list.dispatchEvent(new Event("updateBlurScroll"));
    }
    /**
     * Отрисовать коллекцию по данным с сервера.
     *
     * @returns {void}
     */

  }, {
    key: "renderItem",
    value: function renderItem(response) {
      this.listWrap.classList.remove("hidden");
      response.data.collection.added = true;
      response.data.collection.title = this.createInput.value;
      this.list.insertAdjacentHTML("afterbegin", (0, _list["default"])({
        collections: [response.data.collection]
      }));
      this.clearInputs();
      this.searchInList();
      this.showNotification(response);
    }
    /**
     * Показать уведомление.
     *
     * @returns {void}
     */

  }, {
    key: "showNotification",
    value: function showNotification(response) {
      if (response.data.link) {
        this.notification.dispatchEvent(new CustomEvent("showNotification", {
          detail: {
            message: response.data.message,
            link: response.data.link
          }
        }));
      }
    }
    /**
     * Отрисовать список коллекций по данным с сервера.
     *
     * @returns {void}
     */

  }, {
    key: "collectionClick",
    value: function collectionClick(response) {
      this.searchInput.value = "";

      if (response.data.collections) {
        this.listWrap.classList.remove("hidden");
        this.list.innerHTML = (0, _list["default"])(response.data);
      } else {
        this.listWrap.classList.add("hidden");
      }
    }
    /**
     * Сделать недоступной кнопку если не введено название.
     *
     * @returns {void}
     */

  }, {
    key: "checkCreateValue",
    value: function checkCreateValue() {
      this.createBtn.disabled = !this.createInput.value;
    }
    /**
     * Поиск в списке коллекций.
     *
     * @returns {void}
     */

  }, {
    key: "searchInList",
    value: function searchInList() {
      var _this3 = this;

      if (this.searchInput.value) {
        var hiddenCount = 0;
        var items = this.list.querySelectorAll(".js-add-to-collection-item");
        items.forEach(function (item) {
          var title = item.querySelector(".js-add-to-collection-item-title");

          if (title.textContent.search(new RegExp(_this3.searchInput.value, "i")) !== -1) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
            hiddenCount += 1;
          }
        });

        if (hiddenCount === items.length) {
          this.empty.classList.remove("hidden");
        }
      } else {
        this.list.querySelectorAll(".hidden").forEach(function (item) {
          item.classList.remove("hidden");
        });
        this.empty.classList.add("hidden");
      }

      this.list.dispatchEvent(new Event("updateBlurScroll"));
    }
    /**
     * Отправить запрос для получения данных и обновить содержимое окна.
     *
     * @param {string} url УРЛ запроса.
     * @param {string} method Метод запроса.
     * @param {object} params Параметры запроса.
     * @param {function} onRequestFinish Действие по завершению запроса.
     *
     * @returns {void}
     */

  }, {
    key: "showError",

    /**
     * Вывести ошибку отправки запроса
     *
     * @returns {void}
     */
    value: function showError(error) {
      this.el.classList.add("error");
      this.el.innerHTML = (0, _callbackError["default"])({
        message: error
      });
    }
  }]);

  return AddToCollection;
}();

exports.AddToCollection = AddToCollection;
document.querySelectorAll(".js-add-to-collection").forEach(function (el) {
  return new AddToCollection(el);
});

/***/ }),

/***/ "./scripts/main/components/authorization/auth-form.js":
/*!************************************************************!*\
  !*** ./scripts/main/components/authorization/auth-form.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент формы авторизации
 */
var AuthForm = /*#__PURE__*/function () {
  /**
   * Создается компонент формы авторизации
   *
   * @param {Element} el Блок авторизации.
   */
  function AuthForm(el) {
    var _this = this;

    _classCallCheck(this, AuthForm);

    this.submitAuthForm = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var response, formErrorField, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (_this.form.isValid) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return _form.Form.fetchForm(_this.formElement, _this.form.url);

              case 6:
                response = _context.sent;

                if (_this.modal) {
                  _this.modal.classList.remove("visible");

                  document.body.classList.remove("prevent-scroll");
                  window.location.reload();
                } else {
                  if (response.redirectUrl) {
                    window.location.href = response.redirectUrl;
                  } else {
                    window.location.href = "/";
                  }
                }

                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                formErrorField = _this.formElement.querySelector(".js-form-error-field");
                formErrorField.innerHTML = "";

                if (_context.t0.response) {
                  if ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) {
                    formErrorField.innerHTML = _context.t0.response.data.message;
                  } else {
                    formErrorField.innerHTML = _messages.ERROR_DEFAULT;
                  }
                } else {
                  formErrorField.innerHTML = _messages.ERROR_DEFAULT;
                  console.log(_context.t0);
                }

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = el;
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(AuthForm, [{
    key: "findElements",
    value: function findElements() {
      this.formElement = this.el.querySelector(".js-auth-form");
      this.form = new _form.Form(this.formElement);
      this.buttonSubmit = this.el.querySelector(".js-auth-submit");
      this.modal = this.formElement.closest(".js-modal");
    }
    /**
     * Отслеживание событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.formElement.addEventListener("submit", this.submitAuthForm.bind(this));
      this.validationCheckInputs(this.formElement);
    }
    /**
     * Получение соседних элементов.
     *
     * @param {HTMLElement} element Элемент.
     * @returns {void}
     */

  }, {
    key: "getSiblings",
    value: function getSiblings(element) {
      var children = _toConsumableArray(element.parentElement.children);

      return children.filter(function (child) {
        return child !== element;
      });
    }
    /**
     * Проверка всех соседних полей на заполнение.
     *
     * @param {HTMLElement} field Элемент.
     * @returns {void}
     */

  }, {
    key: "checkSiblingsInputs",
    value: function checkSiblingsInputs(field) {
      var _this2 = this;

      var fieldSibling = this.getSiblings(field);
      fieldSibling.forEach(function (el) {
        if (el.classList.contains("js-form-field")) {
          var inputs = [el.querySelector(".js-form-field-input")];
          inputs.forEach(function (input) {
            if (input.value) {
              _this2.buttonSubmit.removeAttribute("disabled");
            } else {
              _this2.buttonSubmit.setAttribute("disabled", "disabled");
            }
          });
        }
      });
    }
    /**
     * Валидация полей.
     *
     * @param {HTMLElement} element Контент элемента формы
     * @returns {void}
     */

  }, {
    key: "validationCheckInputs",
    value: function validationCheckInputs(element) {
      var _this3 = this;

      var inputs = element.querySelectorAll("input");
      inputs.forEach(function (input) {
        var field = input.parentElement;

        _this3.checkSiblingsInputs(field);

        input.addEventListener("input", function () {
          _this3.checkSiblingsInputs(field);
        });
        input.addEventListener("paste", function () {
          _this3.checkSiblingsInputs(field);
        });
        input.addEventListener("change", function () {
          _this3.checkSiblingsInputs(field);
        });
      });
    }
    /**
     * Отправка формы авторизации пользователя.
     * Переход в личный кабинет при успешной оправке.
     * Вывод ошибок, если неверно указаны данные в форме.
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @returns {void}
     */

  }]);

  return AuthForm;
}();

document.querySelectorAll(".js-auth").forEach(function (el) {
  return new AuthForm(el);
});

/***/ }),

/***/ "./scripts/main/components/authorization/confirmation-code.js":
/*!********************************************************************!*\
  !*** ./scripts/main/components/authorization/confirmation-code.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.СonfirmationСode = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
  Компонент с кодом подтверждения.
 */
var СonfirmationСode = /*#__PURE__*/function () {
  /**
   * Создается компонент с кодом подтверждения.
   *
   * @param {HTMLElement} el Форма кода подтверждения.
   * @param {String} email адрес электронной почты по которому восстанавливается пароль
   */
  function СonfirmationСode(el, email) {
    var _this = this;

    _classCallCheck(this, СonfirmationСode);

    this.submitConfirmationCode = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var errorField, errorElement, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (_this.form.isValid) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.emailField.value = _this.emailValue;
                errorField = _this.el.querySelector(".js-confirmation-code-field");
                errorElement = _this.el.querySelector(".js-confirmation-code-error");
                _context.prev = 6;
                _context.next = 9;
                return _form.Form.fetchForm(_this.el, _this.form.url);

              case 9:
                _this.formElement.classList.add("hidden");

                if (_this.formElement.closest(".js-restore-password")) {
                  _this.el.nextElementSibling.classList.remove("hidden");
                }

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);

                if (_context.t0.response) {
                  if ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) {
                    errorField.classList.add("error");
                    errorElement.classList.remove("hidden");
                    errorElement.innerHTML = _context.t0.response.data.message;
                  }

                  errorField.classList.add("error");
                  errorElement.classList.remove("hidden");
                } else {
                  errorField.classList.add("error");
                  errorElement.classList.remove("hidden");
                  console.log(_context.t0);
                }

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = el;
    this.emailValue = email;
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(СonfirmationСode, [{
    key: "findElements",
    value: function findElements() {
      this.form = new _form.Form(this.el);
      this.formElement = this.el;
      this.wrapFields = this.el.querySelector(".js-confirmation-code-field");
      this.input = this.wrapFields.querySelector(".js-form-field-input");
      this.buttonSubmit = this.el.querySelector(".js-confirmation-code-submit");
      this.emailField = this.el.querySelector(".js-confirmation-email");
    }
    /**
     * Привязка обработчиков событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.el.addEventListener("submit", this.submitConfirmationCode.bind(this));
      this.input.addEventListener("input", function () {
        _this2.onInput(_this2.input);
      });
    }
    /**
     * Валидация полей при вводе.
     *
     * @param {HTMLInputElement} input Поле ввода кода.
     * @returns {void}
     */

  }, {
    key: "onInput",
    value: function onInput(input) {
      if (this.form.validateField(input)) {
        input.parentElement.classList.remove("error");
        this.buttonSubmit.removeAttribute("disabled");
      } else {
        input.parentElement.classList.add("error");
      }
    }
    /**
     * Переход к следующей секции после успешного подтверждения кода.
     * Вывод ошибки при неверном вводе кода.
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @returns {void}
     */

  }]);

  return СonfirmationСode;
}();

exports.СonfirmationСode = СonfirmationСode;
document.querySelectorAll(".js-confirmation-code-page").forEach(function (el, email) {
  return new СonfirmationСode(el, email);
});

/***/ }),

/***/ "./scripts/main/components/authorization/create-password.js":
/*!******************************************************************!*\
  !*** ./scripts/main/components/authorization/create-password.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент создания пароля.
 */
var Registration = /*#__PURE__*/function () {
  /**
   * Создается компонент создания пароля.
   *
   * @param {Element} el Блок создания пароля.
   */
  function Registration(el) {
    var _this = this;

    _classCallCheck(this, Registration);

    this.submitRegistrationData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, _e$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.form.isValid) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              if (!_this.sending) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              _this.sending = true;

              _this.error.classList.add("hidden");

              _context.prev = 8;
              _this.sending = false;
              _context.next = 12;
              return _form.Form.fetchForm(_this.formElement, _this.form.url);

            case 12:
              response = _context.sent;

              if (response && response.redirectUrl) {
                _this.successMessagge.classList.remove("hidden");

                _this.fieldsWrap.classList.add("hidden");

                setTimeout(function () {
                  window.location.href = response.redirectUrl;
                }, 5000);
              } else {
                _this.error.classList.remove("hidden");

                _this.error.innerHTML = "";
                _this.error.innerHTML = _messages.ERROR_DEFAULT;
              }

              _context.next = 21;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](8);

              _this.error.classList.remove("hidden");

              _this.error.innerHTML = "";

              if (_context.t0.response) {
                if ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) {
                  _this.error.innerHTML = _context.t0.response.data.message;
                } else {
                  _this.error.innerHTML = _messages.ERROR_DEFAULT;
                }
              } else {
                _this.error.innerHTML = _messages.ERROR_DEFAULT;
                console.log(_context.t0);
              }

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 16]]);
    }));
    this.el = el;
    this.sending = false;
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(Registration, [{
    key: "findElements",
    value: function findElements() {
      this.formElement = this.el.querySelector(".js-registration-form");
      this.form = new _form.Form(this.formElement);
      this.form.url = this.formElement.getAttribute("data-url");
      this.registrationStepTwo = this.el.querySelector(".js-registration-step-two");
      this.successMessagge = this.el.querySelector(".js-registration-success");
      this.fieldsWrap = this.el.querySelector(".js-registration-form-section");
      this.buttonFurther = this.registrationStepTwo.querySelector(".js-registration-further");
      this.error = this.registrationStepTwo.querySelector(".js-registration-form-error");
    }
    /**
     * Отслеживание событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.formElement.addEventListener("submit", function (e) {
        e.preventDefault();

        _this2.hidePassword();

        if (!_this2.form.isValid) {
          return;
        }

        _this2.submitRegistrationData();
      });
      this.validateInputs(this.registrationStepTwo);
    }
    /**
     * Проверяем валидность полей ввода на каждом шаге формы.
     *
     * @param {HTMLElement} section Отдельный блок формы.
     * @returns {void}
     */

  }, {
    key: "validateInputs",
    value: function validateInputs(section) {
      var _this3 = this;

      var inputs = section.querySelectorAll("input");

      var _iterator = _createForOfIteratorHelper(inputs),
          _step;

      try {
        var _loop = function _loop() {
          var input = _step.value;
          input.addEventListener("input", function () {
            var field = input.closest(".js-form-field");

            var children = _toConsumableArray(field.closest(".js-password-group").querySelectorAll(".js-form-field"));

            var siblings = children.filter(function (child) {
              return child !== field;
            });
            var haveError = false;
            siblings.forEach(function (el) {
              var array = [el.querySelector(".js-form-field-input")];
              array.forEach(function (i) {
                if (!(i.value && input.value && _this3.form.validateField(input) && _this3.form.validateField(i))) {
                  haveError = true;
                }
              });
            });

            if (haveError) {
              _this3.buttonFurther.setAttribute("disabled", "disabled");
            } else {
              _this3.buttonFurther.removeAttribute("disabled");
            }
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Скрыть пароль перед отправкой формы, если он видимый.
     *
     * @returns {void}
     */

  }, {
    key: "hidePassword",
    value: function hidePassword() {
      var passwordGroup = this.el.querySelector(".js-password-group");
      var inputs = passwordGroup.querySelectorAll("input");
      inputs.forEach(function (input) {
        if (input.type === "text") {
          input.type = "password";
        }
      });
    }
    /**
     * Показать блок с успешной установкой пароля
     *
     * Вывести ошибку, если пароль не прошел валидацию
     *
     * @returns {void}
     */

  }]);

  return Registration;
}();

document.querySelectorAll(".js-registration-create-password").forEach(function (el) {
  return new Registration(el);
});

/***/ }),

/***/ "./scripts/main/components/authorization/index.js":
/*!********************************************************!*\
  !*** ./scripts/main/components/authorization/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./auth-form */ "./scripts/main/components/authorization/auth-form.js");

__webpack_require__(/*! ./confirmation-code */ "./scripts/main/components/authorization/confirmation-code.js");

__webpack_require__(/*! ./registration */ "./scripts/main/components/authorization/registration.js");

__webpack_require__(/*! ./restore-password */ "./scripts/main/components/authorization/restore-password.js");

__webpack_require__(/*! ./set-password */ "./scripts/main/components/authorization/set-password.js");

__webpack_require__(/*! ./create-password */ "./scripts/main/components/authorization/create-password.js");

/***/ }),

/***/ "./scripts/main/components/authorization/registration.js":
/*!***************************************************************!*\
  !*** ./scripts/main/components/authorization/registration.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент регистрации.
 */
var Registration = /*#__PURE__*/function () {
  /**
   * Создается компонент регистрации.
   *
   * @param {HTMLDivElement} el Блок регистрации.
   */
  function Registration(el) {
    var _this = this;

    _classCallCheck(this, Registration);

    this.submitRegistrationData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _e$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.sending) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this.sending = true;

              _this.error.classList.add("hidden");

              _this.sending = false;
              _context.prev = 5;
              _context.next = 8;
              return _form.Form.fetchForm(_this.formElement, _this.formElement.dataset.url);

            case 8:
              _this.successMessagge.classList.remove("hidden");

              _this.fieldsWrap.classList.add("hidden");

              if (_this.removeClass) {
                _this.el.closest(".js-modal").classList.remove(_this.removeClass);
              }

              _context.next = 18;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);

              _this.error.classList.remove("hidden");

              _this.error.innerHTML = "";

              if (_context.t0.response) {
                if ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) {
                  _this.error.innerHTML = _context.t0.response.data.message;
                } else {
                  _this.error.innerHTML = _messages.ERROR_DEFAULT;
                }
              } else {
                _this.error.innerHTML = _messages.ERROR_DEFAULT;
                console.log(_context.t0);
              }

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 13]]);
    }));
    this.el = el;
    this.sending = false;
    this.removeClass = this.el.dataset.removeClass;
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(Registration, [{
    key: "findElements",
    value: function findElements() {
      this.formElement = this.el.querySelector(".js-registration-form");
      this.form = new _form.Form(this.formElement);
      this.registrationStepOne = this.el.querySelector(".js-registration-step-one");
      this.successMessagge = this.el.querySelector(".js-registration-success");
      this.fieldsWrap = this.el.querySelector(".js-registration-form-section");
      this.tabButtons = this.el.querySelectorAll(".js-tabs-button");
      this.buttonFurther = this.registrationStepOne.querySelector(".js-registration-further");
      this.error = this.registrationStepOne.querySelector(".js-registration-form-error");
      this.inputs = this.el.querySelectorAll("input");
    }
    /**
     * Отслеживание событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.formElement.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!_this2.form.isValid) {
          return;
        }

        _this2.submitRegistrationData();
      });
      this.validateInputs(this.registrationStepOne);
      this.tabButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          _this2.changeOnClickTab();
        });
      });
      this.formElement.addEventListener("clearRegisterForm", function () {
        _this2.clear();
      });
      this.changeOnClickTab();
    }
    /**
     * Очистка полей при переключении активного таба.
     *
     * @returns {void}
     */

  }, {
    key: "changeOnClickTab",
    value: function changeOnClickTab() {
      var tabsContent = this.el.querySelectorAll(".js-tabs-content");
      this.buttonFurther.setAttribute("disabled", "disabled");
      tabsContent.forEach(function (el) {
        if (!el.classList.contains("active")) {
          var inputs = el.querySelectorAll("input");
          inputs.forEach(function (input) {
            input.value = "";
            input.required = false;
            input.closest(".js-form-field").classList.remove("error");
          });
        } else {
          var _inputs = el.querySelectorAll("input");

          _inputs.forEach(function (input) {
            input.closest(".js-form-field").classList.remove("error");
            input.required = true;
          });
        }
      });
    }
    /**
     * Проверяем валидность полей ввода
     * 
     * @param {HTMLElement} section Отдельный блок формы.
     * @returns {void}
     */

  }, {
    key: "validateInputs",
    value: function validateInputs(section) {
      var _this3 = this;

      var inputs = section.querySelectorAll("input");

      var _iterator = _createForOfIteratorHelper(inputs),
          _step;

      try {
        var _loop = function _loop() {
          var input = _step.value;
          input.addEventListener("input", function () {
            var field = input.parentElement;

            var children = _toConsumableArray(field.closest(".fields").querySelectorAll(".js-form-field"));

            var siblings = children.filter(function (child) {
              return child !== field;
            });
            var haveError = false;
            siblings.forEach(function (el) {
              var array = [el.querySelector(".js-form-field-input")];
              var tabActive = true;
              array.forEach(function (i) {
                var parentTabsContent = i.closest(".js-tabs-content"); // проверяем, что i не находится в неактивном табе

                if (parentTabsContent) {
                  if (!parentTabsContent.classList.contains("active")) {
                    tabActive = false;
                  }
                } // если tabActive != true, то такое i не влияет на значение haveError


                if (!(i.value && input.value && _this3.form.validateField(input) && _this3.form.validateField(i)) && tabActive) {
                  haveError = true;
                }
              });
            });

            if (haveError) {
              _this3.buttonFurther.setAttribute("disabled", "disabled");
            } else {
              _this3.buttonFurther.removeAttribute("disabled");
            }
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Вывести ошибки, если пользователь с данным телефон или email уже зарегистрирован.
     *
     * @returns {void}
     */

  }, {
    key: "clear",

    /**
     * Очистить форму для возможности повторной отправки.
     *
     * @returns {void}
     */
    value: function clear() {
      this.form.clearForm();
      this.successMessagge.classList.add("hidden");
      this.fieldsWrap.classList.remove("hidden");

      if (this.removeClass) {
        this.el.closest(".js-modal").classList.add(this.removeClass);
      }
    }
  }]);

  return Registration;
}();

document.querySelectorAll(".js-registration").forEach(function (el) {
  return new Registration(el);
});

/***/ }),

/***/ "./scripts/main/components/authorization/restore-password.js":
/*!*******************************************************************!*\
  !*** ./scripts/main/components/authorization/restore-password.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

var _confirmationCode = __webpack_require__(/*! @main/components/authorization/confirmation-code */ "./scripts/main/components/authorization/confirmation-code.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент восстановления пароля.
 */
var RestorePassword = /*#__PURE__*/function () {
  /**
   * Создается компонент восстановления пароля.
   *
   * @param {Element} el Блок восстановления пароля.
   */
  function RestorePassword(el) {
    var _this = this;

    _classCallCheck(this, RestorePassword);

    this.submitRestorePasswordForm = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var field, fieldError, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                field = _this.formElement.querySelector(".js-form-field");
                fieldError = field.querySelector(".js-field-error");
                _this.emailValue = _this.emailInput.value;
                fieldError.classList.add("hidden");

                if (_this.form.isValid) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                _context.prev = 7;
                _context.next = 10;
                return _form.Form.fetchForm(_this.formElement, _this.form.url);

              case 10:
                if (!_this.confirmator && _this.emailValue) {
                  _this.confirmator = new _confirmationCode.СonfirmationСode(_this.confirmationCode, _this.emailValue);

                  _this.formElement.classList.add("hidden");

                  _this.confirmationCode.classList.remove("hidden");
                } else {
                  fieldError.classList.remove("hidden");
                  fieldError.innerHTML = _messages.ERROR_DEFAULT;
                }

                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](7);
                fieldError.classList.remove("hidden");

                if (_context.t0.response) {
                  if ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) {
                    fieldError.innerHTML = _context.t0.response.data.message;
                  } else {
                    fieldError.innerHTML = _messages.ERROR_DEFAULT;
                  }
                } else {
                  fieldError.innerHTML = _messages.ERROR_DEFAULT;
                  console.log(_context.t0);
                }

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = el;
    this.confirmator = null;
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(RestorePassword, [{
    key: "findElements",
    value: function findElements() {
      this.formElement = this.el.querySelector(".js-restore-password-form");
      this.form = new _form.Form(this.formElement);
      this.buttonSubmit = this.el.querySelector(".js-restore-password-submit");
      this.confirmationCode = this.formElement.parentElement.querySelector(".js-confirmation-code");
      this.emailInput = this.el.querySelector(".js-restore-by-email");
    }
    /**
     * Отслеживание событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.formElement.addEventListener("submit", this.submitRestorePasswordForm.bind(this));
      this.validateInputs(this.formElement);
    }
    /**
     * Проверяем валидность полей ввода
     *
     * @param {HTMLElement} section Отдельный блок формы.
     * @returns {void}
     */

  }, {
    key: "validateInputs",
    value: function validateInputs(section) {
      var _this2 = this;

      var input = section.querySelector(".js-form-field-input");
      input.addEventListener("input", function () {
        var haveError = false;

        if (!(input.value && _this2.form.validateField(input))) {
          haveError = true;
        }

        if (haveError) {
          _this2.buttonSubmit.setAttribute("disabled", "disabled");
        } else {
          _this2.buttonSubmit.removeAttribute("disabled");
        }
      });
    }
    /**
     * Запрос отправки данных формы восстановления пароля.
     * Открыть форму для ввода кода подтверждения при успешной отправке.
     * Вывести текст ошибки, в случае ошибки.
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @returns {void}
     */

  }]);

  return RestorePassword;
}();

document.querySelectorAll(".js-restore-password").forEach(function (el) {
  return new RestorePassword(el);
});

/***/ }),

/***/ "./scripts/main/components/authorization/set-password.js":
/*!***************************************************************!*\
  !*** ./scripts/main/components/authorization/set-password.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @type {{Number}} Время, через которое пользователь будет перенаправлен
 * в личный кабинет после успешной отправки данных с формы установки нового пароля.
 */
var TIMEOUT_GO_TO_PAGE = 2000;
/**
 * Компонент установки нового пароля в процессе восстановления пароля.
 */

var SetPassword = /*#__PURE__*/function () {
  /**
   * Создается компонент установки нового пароля (при восстановлении пароля).
   *
   * @param {Element} el - элемент формы установки нового пароля.
   */
  function SetPassword(el) {
    var _this = this;

    _classCallCheck(this, SetPassword);

    this.submitSetPasswordForm = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var response, errorElement, errorField, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this.hidePassword();

                if (_this.form.isValid) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _this.email = _this.formContainer.querySelector(".js-confirmation-code .js-confirmation-email").value;
                _this.confirmationCode = _this.formContainer.querySelector(".js-confirmation-code-form-fields .js-confirmation-code-input").value;
                _this.emailField.value = _this.email;
                _this.confirmationCodeField.value = _this.confirmationCode;
                _context.prev = 8;
                _context.next = 11;
                return _form.Form.fetchForm(_this.el, _this.form.url);

              case 11:
                response = _context.sent;

                _this.el.querySelector(".js-set-password-block").classList.add("hidden");

                _this.el.querySelector(".js-set-password-success").classList.remove("hidden");

                if (response.redirectUrl) {
                  setTimeout(function () {
                    window.location.href = response.redirectUrl;
                  }, TIMEOUT_GO_TO_PAGE);
                }

                _context.next = 24;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](8);
                errorElement = _this.el.querySelector(".js-caption-error");
                errorField = errorElement.closest(".js-form-field");
                errorField.classList.add("error");
                errorElement.innerHTML = "";

                if (_context.t0.response) {
                  if ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) {
                    errorElement.innerHTML = _context.t0.response.data.message;
                  } else {
                    errorElement.innerHTML = _messages.ERROR_DEFAULT;
                  }
                } else {
                  errorElement.innerHTML = _messages.ERROR_DEFAULT;
                  console.log(_context.t0);
                }

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 17]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = el;
    this.form = new _form.Form(this.el);
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(SetPassword, [{
    key: "findElements",
    value: function findElements() {
      this.emailField = this.el.querySelector(".js-set-new-password-email");
      this.confirmationCodeField = this.el.querySelector(".js-set-new-password-confirmation-code");
      this.formContainer = this.el.closest(".js-restore-password");
    }
    /**
     * Отслеживание событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.el.addEventListener("submit", this.submitSetPasswordForm.bind(this));
    }
    /**
     * Установить новый пароль.
     * Показать сообщение об успешном восстановлении пароля и перенаправить пользователя в личный кабинет.
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @returns {void}
     */

  }, {
    key: "hidePassword",

    /**
     * Скрыть пароль перед отправкой формы, если он видимый.
     *
     * @returns {void}
     */
    value: function hidePassword() {
      var passwordGroup = this.el.querySelector(".js-password-group");
      var inputs = passwordGroup.querySelectorAll("input");
      inputs.forEach(function (input) {
        if (input.type === "text") {
          input.type = "password";
        }
      });
    }
  }]);

  return SetPassword;
}();

document.querySelectorAll(".js-set-new-password").forEach(function (el) {
  return new SetPassword(el);
});

/***/ }),

/***/ "./scripts/main/components/autocomplete.js":
/*!*************************************************!*\
  !*** ./scripts/main/components/autocomplete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Autocomplete = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _autocompleter = _interopRequireDefault(__webpack_require__(/*! autocompleter */ "../node_modules/autocompleter/autocomplete.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _consts = __webpack_require__(/*! @main/consts */ "./scripts/main/consts/index.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _modal = __webpack_require__(/*! @main/components/modal */ "./scripts/main/components/modal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Autocomplete = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   * @param {function} onValueSelectCustom функция при выборе значения.
   */
  function Autocomplete(el, onValueSelectCustom) {
    var _this = this;

    _classCallCheck(this, Autocomplete);

    this.getData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(text, update) {
        var params, response, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  text: text.toLowerCase()
                };
                _context.prev = 1;
                _context.next = 4;
                return (0, _axios["default"])({
                  url: _this.url,
                  params: params,
                  method: "get"
                });

              case 4:
                response = _context.sent;
                _this.abortByEnter = false;
                update(response.data);
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                if (!_this.abortByEnter) {
                  if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                    _this.showError(_context.t0.response.data.message);
                  } else {
                    _this.showError(_messages.ERROR_DEFAULT);
                  }
                }

                _this.abortByEnter = false;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = el;
    this.onValueSelectCustom = onValueSelectCustom;
    this.inputNode = this.el.querySelector(".js-autocomplete-field");
    this.errorNode = this.el.querySelector(".js-autocomplete-error");
    this.autocompleteInput = this.el.querySelector(".js-autocomplete-input");
    this.url = this.autocompleteInput.dataset.url;
    this.realInput = this.el.querySelector(".js-autocomplete-real-value");
    this.resultsContainer = this.el.querySelector(".js-autocomplete-results");
    this.modalError = document.querySelector(".js-modal[data-modal-name=\"failed-modal\"]");
    this.abortByEnter = false;
    this.bindEventListeners();
    this.initAutocomplete();
  }
  /**
   * По enter в поле и прерывании запроса не выводить ошибку.
   *
   * @returns {void}
   */


  _createClass(Autocomplete, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      window.addEventListener("beforeunload", function () {
        _this2.abortByEnter = true;
      });
    }
    /**
     * Инициализация поля с подсказками.
     *
     * @returns {void}
     */

  }, {
    key: "initAutocomplete",
    value: function initAutocomplete() {
      var _this3 = this;

      (0, _autocompleter["default"])({
        onSelect: function onSelect(item) {
          _this3.onValueSelect(item);
        },
        input: this.autocompleteInput,
        minLength: 2,
        emptyMsg: "Поиск не дал результатов",
        render: function render(item, currentValue) {
          var reg = new RegExp(currentValue, "gi");

          var replacer = function replacer(text) {
            return "<span class=\"autocomplete__highlight\">".concat(text, "</span>");
          };

          var highlightedText = item.label.replace(reg, replacer);
          var button = document.createElement("div");
          button.classList.add("autocomplete__item");
          button.setAttribute("data-id", item.id);
          button.innerHTML = highlightedText;
          return button;
        },
        className: "autocomplete__select",
        fetch: function fetch(text, update) {
          _this3.getData(text, update);
        },
        debounceWaitMs: _consts.DEBOUNCE_WAIT_MS,
        preventSubmit: false,
        disableAutoSelect: true,
        customize: function customize(input, inputRect, container) {
          _this3.resultsContainer.appendChild(container);

          container.style.position = "static";
        }
      });
    }
    /**
     * При выборе значения из списка найденного
     *
     * @returns {void}
     */

  }, {
    key: "onValueSelect",
    value: function onValueSelect(item) {
      if (this.realInput) {
        this.realInput.value = item.id || item.label;
      }

      this.autocompleteInput.value = item.label;

      if (this.onValueSelectCustom) {
        this.onValueSelectCustom(item);
      }
    }
    /**
     * Получение результатов поиска.
     *
     * @returns {void}
     */

  }, {
    key: "showError",
    value: function showError(message) {
      if (this.modalError) {
        this.modalError.querySelector(".js-fail-modal-title").innerHTML = "Ошибка поиска";
        this.modalError.querySelector(".js-fail-modal-text").innerHTML = message;

        _modal.Modal.open(this.modalError);
      } else if (this.inputNode && this.errorNode) {
        this.inputNode.classList.add("error");
        this.errorNode.innerHTML = message;
      } else {
        alert(message);
      }
    }
  }]);

  return Autocomplete;
}();

exports.Autocomplete = Autocomplete;

/***/ }),

/***/ "./scripts/main/components/big-image.js":
/*!**********************************************!*\
  !*** ./scripts/main/components/big-image.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigImage = void 0;

var _getBtnFromTarget = __webpack_require__(/*! @main/utils/get-btn-from-target */ "./scripts/main/utils/get-btn-from-target.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Модал с увеличенным изображением по клику на кнопку. */
var BigImage = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   *
   */
  function BigImage(el) {
    _classCallCheck(this, BigImage);

    this.el = el;
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов клика.
   *
   * @returns {void}
   */


  _createClass(BigImage, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      document.addEventListener("click", function (e) {
        var openBtn = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-big-image-btn");

        if (openBtn) {
          _this.el.src = openBtn.dataset.bigImage;
        }
      });
    }
  }]);

  return BigImage;
}();

exports.BigImage = BigImage;
document.querySelectorAll(".js-big-image").forEach(function (el) {
  return new BigImage(el);
});

/***/ }),

/***/ "./scripts/main/components/button-link.js":
/*!************************************************!*\
  !*** ./scripts/main/components/button-link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.string.link */ "../node_modules/core-js/modules/es.string.link.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLink = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Кнопка, работающая как ссылка. */
var ButtonLink = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   */
  function ButtonLink() {
    _classCallCheck(this, ButtonLink);

    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов перерисовки сетки.
   *
   * @returns {void}
   */


  _createClass(ButtonLink, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("js-button-link")) {
          e.preventDefault();
          window.location.href = e.target.dataset.link;
        }

        var parent = e.target.closest(".js-button-link");

        if (parent) {
          e.preventDefault();
          window.location.href = parent.dataset.link;
        }
      });
    }
  }]);

  return ButtonLink;
}();

exports.ButtonLink = ButtonLink;
new ButtonLink();

/***/ }),

/***/ "./scripts/main/components/buy-pack-authorized.js":
/*!********************************************************!*\
  !*** ./scripts/main/components/buy-pack-authorized.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _modal = __webpack_require__(/*! @main/components/modal */ "./scripts/main/components/modal.js");

var _makeUrl = __webpack_require__(/*! @main/utils/make-url */ "./scripts/main/utils/make-url.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Отправка заявки на приобретение пакета загрузок
 */
var BuyPackAuthorized = /*#__PURE__*/function () {
  /**
   *
   * @param {HTMLButtonElement} el - кнопка приобретения пакета
   */
  function BuyPackAuthorized(el) {
    var _this = this;

    _classCallCheck(this, BuyPackAuthorized);

    this.sendOrder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _e$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.slider.classList.contains("waiting")) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this.slider.classList.add("waiting");

              _this.el.classList.add("waiting");

              _context.prev = 4;
              _context.prev = 5;
              _context.next = 8;
              return _axios["default"].post((0, _makeUrl.makeUrl)("/package/:package_id/request/", {
                ":package_id": _this["package"]
              }));

            case 8:
              _modal.Modal.open(_this.successModal);

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](5);

              if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                _this.showError(_context.t0.response.data.message);
              } else {
                _this.showError(_messages.ERROR_DEFAULT);
              }

            case 14:
              _context.prev = 14;

              _this.slider.classList.remove("waiting");

              _this.el.classList.remove("waiting");

              return _context.finish(14);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4,, 14, 18], [5, 11]]);
    }));
    this.el = el;
    this["package"] = this.el.dataset["package"];
    this.errorModal = document.querySelector(".js-modal[data-modal-name=\"failed-modal\"]");
    this.successModal = document.querySelector(".js-modal[data-modal-name=\"buy-pack-modal\"]");
    this.slider = this.el.closest(".js-packages-slider");
    this.bindEventListeners();
  }
  /**
   * Отслеживание событий.
   *
   * @returns {void}
   */


  _createClass(BuyPackAuthorized, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.el.addEventListener("click", function () {
        _this2.sendOrder();
      });
    }
    /**
     * Отправка запроса на покупку пакета загрузок.
     *
     * @returns {void}
     */

  }, {
    key: "showError",
    value: function showError(message) {
      if (this.errorModal) {
        this.errorModal.querySelector(".js-fail-modal-text").innerHTML = message || _messages.ERROR_DEFAULT;

        _modal.Modal.open(this.errorModal);
      } else {
        alert(message);
      }
    }
  }]);

  return BuyPackAuthorized;
}();

document.querySelectorAll(".js-buy-pack-authorized").forEach(function (el) {
  return new BuyPackAuthorized(el);
});

/***/ }),

/***/ "./scripts/main/components/buy-pack.js":
/*!*********************************************!*\
  !*** ./scripts/main/components/buy-pack.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuyPack = void 0;

var _makeUrl = __webpack_require__(/*! @main/utils/make-url */ "./scripts/main/utils/make-url.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Компонент покупки пакета. */
var BuyPack = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   *
   */
  function BuyPack(el) {
    _classCallCheck(this, BuyPack);

    this.el = el;
    this.input = this.el.querySelector(".js-buy-pack-input");
    this.namePlaces = this.el.querySelectorAll(".js-buy-pack-name");
    this.btns = document.querySelectorAll(".js-buy-pack-btn");
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов выбора значения.
   *
   * @returns {void}
   */


  _createClass(BuyPack, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.btns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          _this.namePlaces.forEach(function (item) {
            item.textContent = btn.dataset.title;
          });

          if (_this.input) {
            _this.input.value = btn.dataset["package"];
            _this.el.dataset.url = (0, _makeUrl.makeUrl)(btn.dataset.url, {
              ":package_id": btn.dataset["package"]
            });
          }

          _this.el.dispatchEvent(new Event("clearRegisterForm"));
        });
      });
    }
  }]);

  return BuyPack;
}();

exports.BuyPack = BuyPack;
document.querySelectorAll(".js-buy-pack").forEach(function (el) {
  return new BuyPack(el);
});

/***/ }),

/***/ "./scripts/main/components/buy.js":
/*!****************************************!*\
  !*** ./scripts/main/components/buy.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.link */ "../node_modules/core-js/modules/es.string.link.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url */ "../node_modules/core-js/modules/web.url.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Buy = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _buy = _interopRequireDefault(__webpack_require__(/*! @partials/buy.handlebars */ "./partials/buy.handlebars"));

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _getBtnFromTarget = __webpack_require__(/*! @main/utils/get-btn-from-target */ "./scripts/main/utils/get-btn-from-target.js");

var _makeUrl = __webpack_require__(/*! @main/utils/make-url */ "./scripts/main/utils/make-url.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Buy = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   *
   */
  function Buy(el) {
    var _this = this;

    _classCallCheck(this, Buy);

    this.getBuyData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, _e$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.el.classList.contains("waiting")) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this.el.classList.add("waiting");

              _context.prev = 3;
              _context.prev = 4;
              _context.next = 7;
              return _axios["default"].get((0, _makeUrl.makeUrl)("/buy/get/:productId/", {
                ":productId": _this.id
              }));

            case 7:
              response = _context.sent;
              _this.data = _this.prepareBuyData(response.data);

              _this.setRestCounters(response.data);

              _this.form.innerHTML = (0, _buy["default"])(_this.data);
              _this.submitBtn = _this.el.querySelector(".js-buy-submit");
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](4);

              if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                _this.showError(_context.t0.response.data.message);
              } else {
                _this.showError(_messages.ERROR_DEFAULT);

                console.log(_context.t0);
              }

            case 17:
              _context.prev = 17;

              _this.el.classList.remove("waiting");

              return _context.finish(17);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3,, 17, 20], [4, 14]]);
    }));
    this.sendData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var params, response, _e$response$data2;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this.el.classList.contains("waiting")) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _this.el.classList.add("waiting");

              _this.submitBtn.classList.add("waiting");

              params = new FormData(_this.form);
              params.set("productId", _this.id);
              _context2.prev = 6;
              _context2.prev = 7;
              _context2.next = 10;
              return (0, _axios["default"])({
                url: (0, _makeUrl.makeUrl)(_this.action, {
                  ":productId": _this.id
                }),
                data: params,
                method: _this.method
              });

            case 10:
              response = _context2.sent;
              _context2.next = 13;
              return Buy.download(response.data.link, response.data.filename);

            case 13:
              _this.setRestCounters(response.data);

              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](7);

              if (_context2.t0.response && ((_e$response$data2 = _context2.t0.response.data) === null || _e$response$data2 === void 0 ? void 0 : _e$response$data2.message)) {
                _this.showError(_context2.t0.response.data.message);
              } else {
                _this.showError(_messages.ERROR_DEFAULT);

                console.log(_context2.t0);
              }

            case 19:
              _context2.prev = 19;

              _this.el.classList.remove("waiting");

              _this.submitBtn.classList.remove("waiting");

              return _context2.finish(19);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6,, 19, 23], [7, 16]]);
    }));
    this.el = el;
    this.form = this.el.querySelector(".js-buy-form");
    this.restCounters = document.querySelectorAll(".js-rest-num");
    this.method = this.form.method;
    this.action = this.form.getAttribute("action");
    this.data = null;
    this.id = null;
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов клика и отправки формы.
   *
   * @returns {void}
   */


  _createClass(Buy, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      document.addEventListener("click", function (e) {
        var closeModal = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-keep-buy-opened");

        if (!closeModal) {
          var openBtn = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-buy-btn");

          if (openBtn) {
            e.preventDefault();

            _this2.openBuyImage(openBtn);
          } else {
            var closeBtn = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-buy-close");

            if (closeBtn || !(0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-buy-inner")) {
              _this2.close();
            } else {
              var selectBtn = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-set-text");

              if (selectBtn) {
                _this2.selectByUser(selectBtn);
              }
            }
          }
        }
      });
      this.form.addEventListener("submit", function (e) {
        e.preventDefault();

        _this2.sendData();
      });
    }
    /**
     * Открыть окно и получить для него данные.
     *
     * @param {HTMLElement} btn кнопка, вызвавшее открытие окна.
     * @returns {void}
     */

  }, {
    key: "openBuyImage",
    value: function openBuyImage(btn) {
      this.el.classList.add("opened");
      document.body.classList.add("prevent-scroll");
      this.id = btn.dataset.id;
      this.getBuyData();
    }
    /**
     * Закрыть окно.
     *
     * @returns {void}
     */

  }, {
    key: "close",
    value: function close() {
      if (this.el.classList.contains("opened")) {
        this.el.classList.remove("opened");
        document.body.classList.remove("prevent-scroll");
      }
    }
    /**
     * Изменить параметры окна по выбору пользователя.
     *
     * @param {HTMLElement} btn кнопка, вызвавшее изменение.
     *
     * @returns {void}
     */

  }, {
    key: "selectByUser",
    value: function selectByUser(btn) {
      if (btn.classList.contains("js-modal-open")) {
        this.selectOtherBtn(btn);
      } else {
        var input = btn.querySelector("input");
        input.checked = true;
        this.setCheckedByUser(input.dataset.name, input.value);
        var buyData = this.prepareBuyData(this.data);
        this.form.innerHTML = (0, _buy["default"])(buyData);
      }
    }
    /**
     * Выбрать другую опцию, если текущая не доступкна.
     *
     * @param {HTMLElement} btn кнопка, которую нельзя нажимать.
     *
     * @returns {void}
     */

  }, {
    key: "selectOtherBtn",
    value: function selectOtherBtn(btn) {
      var group = btn.closest(".js-btn-group");
      var other = Array.from(group.querySelectorAll(".js-set-text")).filter(function (other) {
        return other !== btn && !other.classList.contains("js-modal-open");
      })[0];
      this.selectByUser(other);
    }
    /**
     * Установить флаг выбора в данных по названию и значению.
     *
     * @param {string} paramName Имя параметра.
     * @param {string} value Значение параметра.
     *
     * @returns {void}
     */

  }, {
    key: "setCheckedByUser",
    value: function setCheckedByUser(paramName, value) {
      var _this3 = this;

      this.data[paramName].forEach(function (item, index) {
        if (item.id === value) {
          _this3.data[paramName][index].checked = true;
        } else {
          _this3.data[paramName][index].checked = false;
        }
      });
    }
    /**
     * Отправить запрос для получения данных для покупки и обновить содержимое окна
     *
     * @returns {void}
     */

  }, {
    key: "prepareBuyData",

    /**
     * Модифицировать данные с сервера под нужны шаблона окна.
     *
     * @param {object} data Данные с сервера.
     *
     * @returns {object} data Модифицированные данные
     */
    value: function prepareBuyData(data) {
      data.remaining = Number(data.remaining);

      if (data.remaining > 0) {
        data.remainingAfter = data.remaining - 1;
      } else {
        data.remainingAfter = data.remaining;
      }

      data.licence.forEach(function (item) {
        if (item.checked) {
          data.licenceText = item.text;
          data.price = item.price;
          data.vat = item.vat;
        }
      });
      data.payment.forEach(function (item, index) {
        if (item.checked) {
          data.paymentText = item.text;
          data.btnText = item.btnText;
          data.showPrice = item.showPrice;
        }

        data.payment[index].noteFinal = item.note.replace("#REST#", data.remaining).replace("#PRICE#", data.price);
        data.payment[index].first = index === 0;
        data.payment[index].last = index === data.payment.length - 1;
      });
      return data;
    }
    /**
     * Вывести ошибку отправки запроса
     *
     * @returns {void}
     */

  }, {
    key: "showError",
    value: function showError(error) {
      this.form.innerHTML = "<div class=\"photo__list-error\">" + error + "</div>";
    }
    /**
     * Отправка данных с формы для полученя ссылки на скачивание.
     *
     * @returns {void}
     */

  }, {
    key: "setRestCounters",

    /**
     * Обновить счетчики доступных для скачивания изображений.
     *
     * @param {object} data Данные с сервера.
     * @returns {void}
     */
    value: function setRestCounters(data) {
      if (this.restCounters.length && typeof data.remaining !== "undefined") {
        this.restCounters.forEach(function (item) {
          item.innerText = data.remaining;
        });
      }
    }
    /**
     * Отправка бинарных данных файла на скачивание.
     *
     * @param {string} link Ссылка на изображение.
     * @param {string} filename Имя файла
     * @returns {void}
     */

  }]);

  return Buy;
}();

exports.Buy = Buy;

Buy.download = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(link, filename) {
    var image, imageBlog, imageURL, anchor;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch(link);

          case 2:
            image = _context3.sent;
            _context3.next = 5;
            return image.blob();

          case 5:
            imageBlog = _context3.sent;
            imageURL = URL.createObjectURL(imageBlog);
            anchor = document.createElement("a");
            anchor.href = imageURL;
            anchor.download = filename;
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
            URL.revokeObjectURL(imageURL);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

document.querySelectorAll(".js-buy").forEach(function (el) {
  return new Buy(el);
});

/***/ }),

/***/ "./scripts/main/components/cols-items.js":
/*!***********************************************!*\
  !*** ./scripts/main/components/cols-items.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _galleryItem = _interopRequireDefault(__webpack_require__(/*! @partials/gallery-item.handlebars */ "./partials/gallery-item.handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс для распределения массива фотографий по колонкам. */
var ColsItems = /*#__PURE__*/function () {
  /**
   * Создает компонент.
   *
   * @param {Element} list - DOM элемент списка.
   */
  function ColsItems(list, colsItems) {
    _classCallCheck(this, ColsItems);

    this.list = list;
    this.colsItems = colsItems;
    this.cols = list.querySelectorAll(".js-auto-grid-col");
  }
  /**
   * Очистка списка и создание колонок.
   *
   * @returns {void}
   */


  _createClass(ColsItems, [{
    key: "clear",
    value: function clear() {
      this.list.innerHTML = "";
      this.cols = [];
    }
    /**
     * Распределить по колонкам.
     *
     * @returns {void}
     */

  }, {
    key: "spreadItems",
    value: function spreadItems() {
      var _this = this;

      this.createCols();
      this.colsItems.forEach(function (items, index) {
        _this.cols[index].insertAdjacentHTML("beforeend", (0, _galleryItem["default"])({
          items: items
        }));
      });
    }
    /**
     * Cоздание колонок.
     *
     * @returns {void}
     */

  }, {
    key: "createCols",
    value: function createCols() {
      if (!this.cols.length) {
        for (var i = 1; i <= this.colsItems.length; i++) {
          var div = document.createElement("div");
          div.classList.add("js-auto-grid-col");
          this.list.appendChild(div);
        }

        this.cols = this.list.querySelectorAll(".js-auto-grid-col");
      }
    }
  }]);

  return ColsItems;
}();

exports["default"] = ColsItems;
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/copy-link.js":
/*!**********************************************!*\
  !*** ./scripts/main/components/copy-link.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.string.link */ "../node_modules/core-js/modules/es.string.link.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyLink = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Скопировать ссылку. */
var CopyLink = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLInputElement} input Поле ввода для ссылки.
   *
   */
  function CopyLink(input) {
    _classCallCheck(this, CopyLink);

    this.input = input;
    this.btnCopyInBuffer = document.querySelector(".js-copy-link-buffer");
    this.copyText = this.btnCopyInBuffer.dataset.copyText || "Скопировано";
    this.btnCopy = document.querySelectorAll(".js-copy-link-btn");
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов копирования ссылки.
   *
   * @returns {void}
   */


  _createClass(CopyLink, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.btnCopy.forEach(function (btn) {
        btn.addEventListener("click", function () {
          _this.input.value = btn.dataset.link;
        });
      });
      this.btnCopyInBuffer.addEventListener("click", function () {
        _this.input.select();

        document.execCommand("copy");
        _this.btnCopyInBuffer.textContent = _this.copyText;

        _this.btnCopyInBuffer.classList.remove("button--black");

        _this.btnCopyInBuffer.classList.add("button--blue");
      });
    }
  }]);

  return CopyLink;
}();

exports.CopyLink = CopyLink;
document.querySelectorAll(".js-copy-link-input").forEach(function (el) {
  return new CopyLink(el);
});

/***/ }),

/***/ "./scripts/main/components/delete-confirm-btn.js":
/*!*******************************************************!*\
  !*** ./scripts/main/components/delete-confirm-btn.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteConfirmBtn = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _callbackError = _interopRequireDefault(__webpack_require__(/*! @partials/callback/callback-error.handlebars */ "./partials/callback/callback-error.handlebars"));

var _makeUrl = __webpack_require__(/*! @main/utils/make-url */ "./scripts/main/utils/make-url.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Удаление с подтверждением. */
var DeleteConfirmBtn = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLButtonElement} btn Кнопка подтверждения удаления.
   *
   */
  function DeleteConfirmBtn(btn) {
    var _this = this;

    _classCallCheck(this, DeleteConfirmBtn);

    this.sendDelete = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var response, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (!_this.btn.classList.contains("waiting")) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.btn.classList.add("waiting");

                _context.prev = 4;
                _context.prev = 5;
                _context.next = 8;
                return _axios["default"]["delete"](_this.url);

              case 8:
                response = _context.sent;
                window.location.href = response.data.redirectUrl;
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);

                if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                  _this.showError(_context.t0.response.data.message);
                } else {
                  _this.showError(_messages.ERROR_DEFAULT);

                  console.log(_context.t0);
                }

              case 15:
                _context.prev = 15;

                _this.btn.classList.remove("waiting");

                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4,, 15, 18], [5, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.btn = btn;
    this.deleteBtns = document.querySelectorAll(".js-delete-btn");
    this.modalTitle = document.querySelector(".js-delete-modal-title");
    this.error = this.btn.closest(".js-modal-content");
    this.url = null;
    this.bindEventListeners();
  }
  /**
   * Инициализация ивентов клика для вызова подтверждения и сбора данных и клика отправки данных после подтверждения.
   *
   * @returns {void}
   */


  _createClass(DeleteConfirmBtn, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.deleteBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();

          _this2.collectData(btn);
        });
      });
      this.btn.addEventListener("click", this.sendDelete.bind(this));
    }
    /**
     * Сбор данных с кнопки.
     *
     * @returns {void}
     */

  }, {
    key: "collectData",
    value: function collectData(btn) {
      if (btn.dataset.imageId && btn.dataset.collectionId) {
        this.url = (0, _makeUrl.makeUrl)("/collection/:collection_id/image/:image_id/", {
          ":image_id": btn.dataset.imageId || "",
          ":collection_id": btn.dataset.collectionId || ""
        });
      } else {
        this.url = (0, _makeUrl.makeUrl)("/collection/:collection_id/", {
          ":collection_id": btn.dataset.collectionId || ""
        });
      }

      this.modalTitle.textContent = btn.dataset.modalTitle;
    }
    /**
     * Отправка формы с новым имененем. В случае успеха - перезагрузить страницу
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @returns {void}
     */

  }, {
    key: "showError",

    /**
     * Вывести ошибку отправки запроса
     *
     * @returns {void}
     */
    value: function showError(error) {
      this.error.innerHTML = (0, _callbackError["default"])({
        message: error
      });
    }
  }]);

  return DeleteConfirmBtn;
}();

exports.DeleteConfirmBtn = DeleteConfirmBtn;
document.querySelectorAll(".js-delete-confirm-btn").forEach(function (el) {
  return new DeleteConfirmBtn(el);
});

/***/ }),

/***/ "./scripts/main/components/download-link.js":
/*!**************************************************!*\
  !*** ./scripts/main/components/download-link.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.string.link */ "../node_modules/core-js/modules/es.string.link.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadLink = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _makeUrl = __webpack_require__(/*! @main/utils/make-url */ "./scripts/main/utils/make-url.js");

var _buy = __webpack_require__(/*! @main/components/buy */ "./scripts/main/components/buy.js");

var _modal = __webpack_require__(/*! @main/components/modal */ "./scripts/main/components/modal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DownloadLink = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   *
   */
  function DownloadLink(el) {
    var _this = this;

    _classCallCheck(this, DownloadLink);

    this.sendData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, _e$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.el.classList.contains("waiting")) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this.el.classList.add("waiting");

              _context.prev = 3;
              _context.prev = 4;
              _context.next = 7;
              return _axios["default"].post(_this.url);

            case 7:
              response = _context.sent;
              _context.next = 10;
              return _buy.Buy.download(response.data.link, response.data.filename);

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);

              if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                _this.showError(_context.t0.response.data.message);
              } else {
                _this.showError(_messages.ERROR_DEFAULT);

                console.log(_context.t0);
              }

            case 15:
              _context.prev = 15;

              _this.el.classList.remove("waiting");

              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3,, 15, 18], [4, 12]]);
    }));
    this.el = el;
    this.url = (0, _makeUrl.makeUrl)(this.el.dataset.url, {
      ":productId": this.el.dataset.id
    });
    this.modalError = document.querySelector(".js-modal[data-modal-name=\"failed-modal\"]");
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов клика и отправки запроса на скачивание.
   *
   * @returns {void}
   */


  _createClass(DownloadLink, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.el.addEventListener("click", function (e) {
        e.preventDefault();

        _this2.sendData();
      });
    }
    /**
     * Отправка данных для полученя ссылки на скачивание.
     *
     * @returns {void}
     */

  }, {
    key: "showError",

    /**
     * Вывести ошибку отправки запроса
     * @param {string} message
     * @returns {void}
     */
    value: function showError(message) {
      if (this.modalError) {
        this.modalError.querySelector(".js-fail-modal-title").innerHTML = "Ошибка скачивания";
        this.modalError.querySelector(".js-fail-modal-text").innerHTML = message;

        _modal.Modal.open(this.modalError);
      } else {
        alert(message);
      }
    }
  }]);

  return DownloadLink;
}();

exports.DownloadLink = DownloadLink;
document.querySelectorAll(".js-download-link").forEach(function (el) {
  return new DownloadLink(el);
});

/***/ }),

/***/ "./scripts/main/components/dropdown/dropdown-checkbox.js":
/*!***************************************************************!*\
  !*** ./scripts/main/components/dropdown/dropdown-checkbox.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "../node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdownField = _interopRequireDefault(__webpack_require__(/*! @main/components/dropdown/dropdown-field */ "./scripts/main/components/dropdown/dropdown-field.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DropdownCheckbox = /*#__PURE__*/function (_DropdownField) {
  _inherits(DropdownCheckbox, _DropdownField);

  var _super = _createSuper(DropdownCheckbox);

  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function DropdownCheckbox(el) {
    var _this;

    _classCallCheck(this, DropdownCheckbox);

    _this = _super.call(this, el);
    _this.buttonGroup = _this.el.querySelector(".js-dropdown-select-button-group");
    _this.buttonUnGroup = _this.el.querySelector(".js-dropdown-select-button-ungroup");
    _this.radio = Array.from(_this.el.querySelectorAll(".js-radio"));
    _this.checkbox = Array.from(_this.el.querySelectorAll(".js-checkbox"));

    _this.bindEventListeners();

    return _this;
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(DropdownCheckbox, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(DropdownCheckbox.prototype), "bindEventListeners", this).call(this);

      this.buttonUnGroup.addEventListener("click", function () {
        _this2.clearCheckboxes();

        _this2.selectOption(_this2.buttonUnGroup);

        _this2.closeList();

        _this2.onValueChange();

        _this2.setTextUngroup();
      });
      this.buttonGroup.addEventListener("click", function () {
        _this2.selectCheckboxes();

        _this2.selectOption(_this2.buttonGroup);

        _this2.closeList();

        _this2.onValueChange();

        _this2.setTextFromCheckboxes();
      });
      this.checkbox.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
          if (_this2.checkbox.filter(function (check) {
            return check.checked;
          }).length) {
            _this2.selectOption(_this2.buttonGroup);

            _this2.setTextFromCheckboxes();
          } else {
            _this2.selectOption(_this2.buttonUnGroup);

            _this2.setTextUngroup();
          }

          _this2.onValueChange();
        });
      });
    }
    /**
     * Выбор опции селектбокса.
     *
     * @param {HTMLElement} button Текущая опция селекбокса.
     * @returns {void}
     */

  }, {
    key: "selectOption",
    value: function selectOption(button) {
      this.el.classList.add("selected");
      document.querySelector("#" + button.getAttribute("for")).checked = true;
    }
    /**
     * Закрыть выпадающий списко.
     *
     * @returns {void}
     */

  }, {
    key: "closeList",
    value: function closeList() {
      this.el.classList.remove("open");
    }
    /**
     * При изменении значения отправить аякс формы и проверить заполненность фильтра
     *
     * @returns {void}
     */

  }, {
    key: "onValueChange",
    value: function onValueChange() {
      this.form.dispatchEvent(new Event("submitAjax"));
      this.checkFilterIsCLear();
    }
    /**
     * Проверить заполненность поля
     *
     * @returns {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.radio.filter(function (radio) {
        return radio.checked;
      }).length || this.checkbox.filter(function (check) {
        return check.checked;
      }).length > 0;
    }
    /**
     * Очистить значение
     *
     * @param {boolean} submitForm Флаг отправить данные формы или нет.
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear(submitForm) {
      _get(_getPrototypeOf(DropdownCheckbox.prototype), "clear", this).call(this, submitForm);

      this.radio.forEach(function (radio) {
        radio.checked = false;
      });
      this.clearCheckboxes();

      if (submitForm) {
        this.form.dispatchEvent(new Event("submitAjax"));
      }
    }
    /**
     * Снять отметку с чекбоксов
     *
     * @returns {void}
     */

  }, {
    key: "clearCheckboxes",
    value: function clearCheckboxes() {
      this.checkbox.forEach(function (checkbox) {
        checkbox.checked = false;
      });
    }
    /**
     * Выбрать все чекбоксы
     *
     * @returns {void}
     */

  }, {
    key: "selectCheckboxes",
    value: function selectCheckboxes() {
      this.checkbox.forEach(function (checkbox) {
        checkbox.checked = true;
      });
    }
    /**
     * Установить текстовое отображение если группа не выбрана.
     *
     * @returns {void}
     */

  }, {
    key: "setTextUngroup",
    value: function setTextUngroup() {
      this.text.innerText = this.buttonUnGroup.innerText;
    }
    /**
     * Установить текстовое отображение выбранных значений.
     *
     * @returns {void}
     */

  }, {
    key: "setTextFromCheckboxes",
    value: function setTextFromCheckboxes() {
      this.text.innerText = this.buttonGroup.innerText + ": " + this.checkbox.filter(function (check) {
        return check.checked;
      }).map(function (check) {
        return check.dataset.text;
      }).join(", ");
    }
  }]);

  return DropdownCheckbox;
}(_dropdownField["default"]);

exports["default"] = DropdownCheckbox;
document.querySelectorAll(".js-dropdown-checkbox").forEach(function (elem) {
  return new DropdownCheckbox(elem);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/dropdown/dropdown-dates.js":
/*!************************************************************!*\
  !*** ./scripts/main/components/dropdown/dropdown-dates.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdownField = _interopRequireDefault(__webpack_require__(/*! @main/components/dropdown/dropdown-field */ "./scripts/main/components/dropdown/dropdown-field.js"));

var _dateInputMask = __webpack_require__(/*! @main/utils/date-input-mask */ "./scripts/main/utils/date-input-mask.js");

var _consts = __webpack_require__(/*! @main/consts */ "./scripts/main/consts/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DropdownDates = /*#__PURE__*/function (_DropdownField) {
  _inherits(DropdownDates, _DropdownField);

  var _super = _createSuper(DropdownDates);

  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function DropdownDates(el) {
    var _this;

    _classCallCheck(this, DropdownDates);

    _this = _super.call(this, el);
    _this.inputs = Array.from(_this.el.querySelectorAll(".js-date-input"));

    _this.bindEventListeners();

    return _this;
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(DropdownDates, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(DropdownDates.prototype), "bindEventListeners", this).call(this);

      this.el.addEventListener("setDropdownText", function () {
        _this2.setText();
      });
      this.inputs.forEach(function (input) {
        (0, _dateInputMask.dateInputMask)(input);
        input.addEventListener("change", function () {
          if (input.value) {
            _this2.setText();
          } else {
            _this2.clear();
          }
        });
      });
    }
    /**
     * Проверить заполненность поля
     *
     * @returns {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.inputs.filter(function (input) {
        return !!DropdownDates.getRealValue(input);
      }).length > 0;
    }
    /**
     * Очистить значение
     *
     * @param {boolean} submitForm Флаг отправить данные формы или нет.
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear(submitForm) {
      _get(_getPrototypeOf(DropdownDates.prototype), "clear", this).call(this, submitForm);

      this.inputs.forEach(function (input) {
        input.value = "";
      });

      if (submitForm) {
        this.form.dispatchEvent(new Event("submitAjax"));
      }
    }
    /**
     * Установить текстовое значение поля выбора
     *
     * @returns {void}
     */

  }, {
    key: "setText",
    value: function setText() {
      var from = DropdownDates.getRealValue(this.inputs[0]);
      var to = DropdownDates.getRealValue(this.inputs[1]);

      if (from || to) {
        this.el.classList.add("selected");

        if (from && to) {
          this.text.innerHTML = from + " — " + to;
        } else {
          if (from) {
            this.text.innerHTML = this.inputs[0].value;
          }

          if (to) {
            this.text.innerHTML = this.inputs[1].value;
          }
        }
      } else {
        this.el.classList.remove("selected");
        this.text.innerHTML = this.text.dataset.text;
      }

      this.form.dispatchEvent(new Event("submitAjax"));
      this.checkFilterIsCLear();
    }
    /**
     * Вернуть дату без префикса
     *
     * @param {HTMLInputElement} input Поле ввода даты.
     * @returns {string}
     */

  }], [{
    key: "getRealValue",
    value: function getRealValue(input) {
      var prefix = input.dataset.prefix || "";
      var value = input.value.replace(prefix, "");

      if (value.length < _consts.MAX_DATE_LENGHT) {
        input.value = "";
        return "";
      }

      return value;
    }
  }]);

  return DropdownDates;
}(_dropdownField["default"]);

exports["default"] = DropdownDates;
document.querySelectorAll(".js-dropdown-dates").forEach(function (elem) {
  return new DropdownDates(elem);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/dropdown/dropdown-field.js":
/*!************************************************************!*\
  !*** ./scripts/main/components/dropdown/dropdown-field.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _consts = __webpack_require__(/*! @main/consts */ "./scripts/main/consts/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DropdownField = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function DropdownField(el) {
    _classCallCheck(this, DropdownField);

    this.el = el;
    this.btn = this.el.querySelector(".js-dropdown-field-btn");
    this.text = this.el.querySelector(".js-dropdown-field-text");
    this.textDefault = this.text.dataset.text;
    this.clearBtn = this.el.querySelector(".js-dropdown-field-clear");
    this.filter = this.el.closest(".js-filter-params");
    this.dropdown = this.el.querySelector(".js-dropdown-block");
    this.form = this.el.closest(".js-filter-form");
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(DropdownField, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.btn.addEventListener("click", function (e) {
        if (e.target.classList.contains(".js-dropdown-field-clear") || e.target.closest(".js-dropdown-field-clear")) {
          _this.clear(true);
        } else {
          _this.toggleDropdown();
        }
      });
      this.clearBtn.addEventListener("click", function () {
        _this.clear(true);
      });
      document.addEventListener("mouseup", function (e) {
        if (!e.target.classList.contains(".js-dropdown-field") && !e.target.closest(".js-dropdown-field") && !e.target.closest(".air-datepicker")) {
          _this.close();
        }
      });
      this.el.addEventListener("closeDropdownField", function () {
        _this.close();
      });
      this.el.addEventListener("clearDropdownField", function () {
        _this.clear(false);
      });
    }
    /**
     * Переключение выпадающего списка.
     *
     * @returns {void}
     */

  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      var isOpen = this.el.classList.contains("open");

      if (isOpen) {
        this.close();
      } else {
        document.querySelectorAll(".js-dropdown-field").forEach(function (item) {
          return item.dispatchEvent(new Event("closeDropdownField"));
        });
        this.checkPosition();
        this.el.classList.add("open");
      }
    }
    /**
     * Закрыть выпадающее поле, проверить заполненность и добавить класс заполненности
     *
     * @returns {void}
     */

  }, {
    key: "close",
    value: function close() {
      this.el.classList.remove("open");

      if (this.isSelected()) {
        this.el.classList.add("selected");
      }

      this.checkFilterIsCLear();
    }
    /**
     * Проверить заполненность поля
     *
     * @returns {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {}
    /**
     * Очистить значение
     *
     * @param {boolean} submitForm Флаг отправить данные формы или нет.
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear(submitForm) {
      this.text.innerHTML = this.textDefault;
      this.el.classList.remove("selected");
      this.el.classList.remove("open");

      if (submitForm) {
        this.checkFilterIsCLear();
      }
    }
  }, {
    key: "checkFilterIsCLear",
    value: function checkFilterIsCLear() {
      if (this.filter) {
        this.filter.dispatchEvent(new Event("checkFilterIsCLear"));
      }
    }
    /**
     * Проверить позицию выпадающего элемента и переместить его направо, если не влазит в экран.
     *
     * @returns {void}
     */

  }, {
    key: "checkPosition",
    value: function checkPosition() {
      var rectMenu = this.dropdown.getBoundingClientRect();
      var rectEl = this.el.getBoundingClientRect();
      var leftMinPosition = rectEl.x - rectMenu.width;
      var rightMaxPosition = rectEl.x + rectMenu.width;

      if (leftMinPosition < 0 && rightMaxPosition > window.innerWidth) {
        this.dropdown.classList.remove("right");
        this.dropdown.style.left = -1 * rectEl.x + _consts.CONTAINER_PADDING + "px";
      } else if (rightMaxPosition > window.innerWidth) {
        this.dropdown.classList.add("right");
        this.dropdown.removeAttribute("style");
      } else {
        this.dropdown.classList.remove("right");
        this.dropdown.removeAttribute("style");
      }
    }
  }]);

  return DropdownField;
}();

exports["default"] = DropdownField;
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/dropdown/dropdown-search.js":
/*!*************************************************************!*\
  !*** ./scripts/main/components/dropdown/dropdown-search.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdownField = _interopRequireDefault(__webpack_require__(/*! @main/components/dropdown/dropdown-field */ "./scripts/main/components/dropdown/dropdown-field.js"));

var _autocomplete = __webpack_require__(/*! @main/components/autocomplete */ "./scripts/main/components/autocomplete.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DropdownSearch = /*#__PURE__*/function (_DropdownField) {
  _inherits(DropdownSearch, _DropdownField);

  var _super = _createSuper(DropdownSearch);

  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function DropdownSearch(el) {
    var _this;

    _classCallCheck(this, DropdownSearch);

    _this = _super.call(this, el);
    _this.url = _this.el.dataset.url;
    _this.prefix = _this.text.dataset.prefix;
    _this.autocompleteInput = _this.el.querySelector(".js-autocomplete-input");
    _this.realInput = _this.el.querySelector(".js-autocomplete-real-value");

    _this.initAutocomplete();

    _this.bindEventListeners();

    return _this;
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(DropdownSearch, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      _get(_getPrototypeOf(DropdownSearch.prototype), "bindEventListeners", this).call(this);
    }
    /**
     * Инициализация поля с подсказками.
     *
     * @returns {void}
     */

  }, {
    key: "initAutocomplete",
    value: function initAutocomplete() {
      new _autocomplete.Autocomplete(this.el, this.onValueSelect.bind(this));
    }
    /**
     * При выборе значения из списка найденного отправить форму.
     *
     * @returns {void}
     */

  }, {
    key: "onValueSelect",
    value: function onValueSelect(item) {
      this.text.innerHTML = this.prefix + item.label;
      this.el.classList.add("selected");
      this.el.classList.remove("open");
      this.form.dispatchEvent(new Event("submitAjax"));
      this.checkFilterIsCLear();
    }
    /**
     * Проверить заполненность поля
     *
     * @returns {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return !!this.realInput.value;
    }
    /**
     * Очистить значение
     *
     * @param {boolean} submitForm Флаг отправить данные формы или нет.
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear(submitForm) {
      _get(_getPrototypeOf(DropdownSearch.prototype), "clear", this).call(this, submitForm);

      this.autocompleteInput.value = "";
      this.realInput.value = "";

      if (submitForm) {
        this.form.dispatchEvent(new Event("submitAjax"));
      }
    }
  }]);

  return DropdownSearch;
}(_dropdownField["default"]);

exports["default"] = DropdownSearch;
document.querySelectorAll(".js-dropdown-search").forEach(function (elem) {
  return new DropdownSearch(elem);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/dropdown/dropdown-select.js":
/*!*************************************************************!*\
  !*** ./scripts/main/components/dropdown/dropdown-select.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdownField = _interopRequireDefault(__webpack_require__(/*! @main/components/dropdown/dropdown-field */ "./scripts/main/components/dropdown/dropdown-field.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DropdownSelect = /*#__PURE__*/function (_DropdownField) {
  _inherits(DropdownSelect, _DropdownField);

  var _super = _createSuper(DropdownSelect);

  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function DropdownSelect(el) {
    var _this;

    _classCallCheck(this, DropdownSelect);

    _this = _super.call(this, el);
    _this.buttons = Array.from(_this.el.querySelectorAll(".js-dropdown-select-button"));
    _this.radio = Array.from(_this.el.querySelectorAll(".js-radio"));

    _this.bindEventListeners();

    return _this;
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(DropdownSelect, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(DropdownSelect.prototype), "bindEventListeners", this).call(this);

      this.buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          _this2.selectOption(button);
        });
      });
    }
    /**
     * Выбор опции селектбокса.
     *
     * @param {HTMLElement} button Текущая опция селекбокса.
     * @returns {void}
     */

  }, {
    key: "selectOption",
    value: function selectOption(button) {
      var text = button.dataset.text || button.innerText;
      this.el.classList.remove("open");
      this.el.classList.add("selected");
      this.text.innerText = text;
      document.querySelector("#" + button.getAttribute("for")).checked = true;
      this.form.dispatchEvent(new Event("submitAjax"));
      this.checkFilterIsCLear();
    }
    /**
     * Проверить заполненность поля
     *
     * @returns {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.radio.filter(function (radio) {
        return radio.checked;
      }).length > 0;
    }
    /**
     * Очистить значение
     *
     * @param {boolean} submitForm Флаг отправить данные формы или нет.
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear(submitForm) {
      _get(_getPrototypeOf(DropdownSelect.prototype), "clear", this).call(this, submitForm);

      this.radio.forEach(function (radio) {
        radio.checked = false;
        radio.removeAttribute("checked");
      });

      if (submitForm) {
        this.form.dispatchEvent(new Event("submitAjax"));
      }
    }
  }]);

  return DropdownSelect;
}(_dropdownField["default"]);

exports["default"] = DropdownSelect;
document.querySelectorAll(".js-dropdown-select").forEach(function (elem) {
  return new DropdownSelect(elem);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/elements-page-form/elements-form.js":
/*!*********************************************************************!*\
  !*** ./scripts/main/components/elements-page-form/elements-form.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Создается компонент стандартной формы.
 *
 * @param {object} props - Объект всех свойств конструктора.
 */
var ElementsPageForm = /*#__PURE__*/function () {
  function ElementsPageForm(el) {
    _classCallCheck(this, ElementsPageForm);

    this.el = el;
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(ElementsPageForm, [{
    key: "findElements",
    value: function findElements() {
      this.formElement = this.el.querySelector(".js-elements-page-form");
      this.form = new _form.Form(this.formElement);
      this.modal = document.querySelector(".js-modal[data-modal-name='success-modal']");
    }
    /**
     * Привязка обработчиков событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("submit", function (e) {
        _this.form.submitFormWithModal(e, _this.modal);
      });
    }
  }]);

  return ElementsPageForm;
}();

document.querySelectorAll(".js-element-form").forEach(function (el) {
  return new ElementsPageForm(el);
});

/***/ }),

/***/ "./scripts/main/components/expanded-text.js":
/*!**************************************************!*\
  !*** ./scripts/main/components/expanded-text.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "../node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.last-index-of */ "../node_modules/core-js/modules/es.array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "../node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "../node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedText = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Разворачивающийся текст. */
var ExpandedText = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   *
   */
  function ExpandedText(el) {
    _classCallCheck(this, ExpandedText);

    this.el = el;
    this.openText = this.el.dataset.openText;
    this.closeText = this.el.dataset.closeText;
    this.inner = this.el.querySelector(".js-expanded-text-inner");
    this.textReal = this.inner.innerHTML;
    this.timer = null;
    this.duration = parseFloat(getComputedStyle(this.el)["transitionDuration"]) * 1000;
    this.bindEventListeners();

    if (!this.el.closest(".js-modal")) {
      this.hide();
    }
  }
  /**
   * Инициализация эвентов разворачивания/сворачивания, ресайза.
   *
   * @returns {void}
   */


  _createClass(ExpandedText, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("click", function () {
        clearTimeout(_this.timer);

        if (_this.el.classList.contains("opened")) {
          _this.el.classList.remove("opened");

          _this.el.removeAttribute("style");

          _this.timer = setTimeout(function () {
            _this.hide();
          }, _this.duration);
        } else if (_this.hasHiddenText()) {
          _this.inner.innerHTML = _this.textReal;

          _this.el.classList.add("opened");

          _this.setHeight();
        }
      });
      window.addEventListener("resize", function () {
        if (_this.el.classList.contains("opened")) {
          _this.setHeight();
        } else {
          _this.hide();
        }
      }, true);
      this.el.addEventListener("hideExpandedText", function () {
        if (!_this.el.classList.contains("opened")) {
          _this.hide();
        }
      });
    }
    /**
     * Проверить, что виден полностью.
     *
     * @returns {void}
     */

  }, {
    key: "hide",
    value: function hide() {
      this.inner.innerHTML = this.textReal;
      var containerHeight = this.el.clientHeight;
      var haveMore = this.inner.clientHeight > containerHeight;

      while (this.inner.clientHeight > containerHeight) {
        var words = this.inner.innerText.split(" ");
        words.pop();
        this.inner.innerText = words.join(" ") + this.openText;
      }

      if (haveMore && this.openText) {
        var lastMore = this.inner.innerText.lastIndexOf(this.openText);
        this.inner.innerHTML = this.inner.innerText.substring(0, lastMore) + this.openText.replace("...", "...<span class='expanded-link js-expanded-link'>") + "</span>";
        this.el.classList.add("active");
      } else {
        this.el.classList.remove("active");
      }
    }
    /**
     * Проверяет весь ли текст влазит в блок.
     *
     * @returns {boolean}
     */

  }, {
    key: "hasHiddenText",
    value: function hasHiddenText() {
      var containerHeight = this.el.clientHeight;
      this.inner.innerHTML = this.textReal;
      return this.inner.clientHeight > containerHeight;
    }
    /**
     * Устанавливает максимальную высоту, чтобы текст был виден польностью,
     * отображает исходный текст + ссылку свернуть.
     *
     * @returns {boolean}
     */

  }, {
    key: "setHeight",
    value: function setHeight() {
      this.inner.innerHTML = this.textReal + "<span class='expanded-link'>" + this.closeText + "</span>";
      this.el.style.maxHeight = this.inner.offsetHeight + "px";
    }
  }]);

  return ExpandedText;
}();

exports.ExpandedText = ExpandedText;
document.querySelectorAll(".js-expanded-text").forEach(function (el) {
  return new ExpandedText(el);
});

/***/ }),

/***/ "./scripts/main/components/fast-slider.js":
/*!************************************************!*\
  !*** ./scripts/main/components/fast-slider.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "../node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "../node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "../node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FastSlider = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _swiper = _interopRequireWildcard(__webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js"));

var _fastView = _interopRequireDefault(__webpack_require__(/*! @partials/fast-view.handlebars */ "./partials/fast-view.handlebars"));

var _cookie = __webpack_require__(/*! @main/utils/cookie */ "./scripts/main/utils/cookie.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _makeUrl = __webpack_require__(/*! @main/utils/make-url */ "./scripts/main/utils/make-url.js");

var _delay = __webpack_require__(/*! @main/consts/delay */ "./scripts/main/consts/delay.js");

var _expandedText = __webpack_require__(/*! @main/components/expanded-text */ "./scripts/main/components/expanded-text.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FastSlider = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLDivElement} el Элемент.
   *
   */
  function FastSlider(el) {
    _classCallCheck(this, FastSlider);

    this.sendTrack = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var paramsUrl, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                paramsUrl = {
                  ":image_id": id
                };
                url = (0, _makeUrl.makeUrl)("/product/:image_id/track/", paramsUrl);
                _context.next = 5;
                return _axios["default"].post(url);

              case 5:
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = el;
    this.swiperElement = this.el.querySelector(".js-fast-slider-swiper");
    this.btnPrev = this.el.querySelector(".js-fast-slider-prev");
    this.btnNext = this.el.querySelector(".js-fast-slider-next");
    this.list = this.el.querySelector(".js-fast-slider-swiper-wrap");
    this.detailBtn = this.el.querySelector(".js-fast-slider-detail-btn");
    this.cookieName = "viewed";
    this.initialization();
    this.bindEventListeners();
  }
  /**
   * Инициализация слайдера.
   *
   * @returns {void}
   */


  _createClass(FastSlider, [{
    key: "initialization",
    value: function initialization() {
      var _this = this;

      _swiper["default"].use([_swiper.Navigation]);

      this.swiper = new _swiper["default"](this.swiperElement, {
        initialSlide: 0,
        slidesPerView: 1,
        loop: false,
        speed: 600,
        spaceBetween: 0,
        watchActiveIndex: true,
        preventClicks: false,
        preventClicksPropagation: false,
        navigation: {
          prevEl: this.btnPrev,
          nextEl: this.btnNext
        },
        on: {
          init: function init(swiper) {
            _this.setUrlFromCurrentSlide(swiper);
          },
          slideChange: function slideChange(swiper) {
            _this.setUrlFromCurrentSlide(swiper);

            _this.trackView(swiper.slides[swiper.realIndex].dataset.id);
          }
        }
      });
    }
    /**
     * Установить урл на кнопку "открыть отдельно" урл из текущего слайда.
     *
     * @returns {void}
     */

  }, {
    key: "setUrlFromCurrentSlide",
    value: function setUrlFromCurrentSlide(swiper) {
      if (swiper.slides && swiper.slides.length) {
        var currentSlide = swiper.slides[swiper.realIndex];
        this.detailBtn.href = currentSlide.dataset.url;
      }
    }
    /**
     * Вешает колбек скролла к нужному слайду и обновления слайдера.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      document.addEventListener("click", function (e) {
        var btn;

        if (e.target.classList.contains("js-fast-view-open")) {
          btn = e.target;
        } else {
          btn = e.target.closest(".js-fast-view-open");
        }

        if (btn) {
          e.preventDefault();
          var id = btn.dataset.id;

          _this2.scrollToSlide(id);

          _this2.trackView(id);
        }
      });
      this.el.addEventListener("updateSlider", function (event) {
        _this2.swiper.destroy();

        _this2.buildSlider(event.detail);

        _this2.initialization();
      });
    }
    /**
     * Прокрутить к элементу слайдера при нажатии кнопки быстрого просмотра.
     *
     * @param {string} id ID изображения, у которого нажата кнопка.
     *
     * @returns {void}
     */

  }, {
    key: "scrollToSlide",
    value: function scrollToSlide(id) {
      var item = this.el.querySelector(".js-fast-slider-item[data-id='" + id + "']");
      var items = Array.from(this.el.querySelectorAll(".js-fast-slider-item"));

      if (item) {
        this.swiper.slideTo(items.indexOf(item), 0);
        setTimeout(function () {
          item.querySelectorAll(".js-expanded-text").forEach(function (text) {
            return text.dispatchEvent(new Event("hideExpandedText"));
          });
        }, _delay.MODAL_WAIT_TIMEOUT);
      }
    }
    /**
     * Построить слайдер.
     *
     * @param {object[]} colsItems Массив изображений с сервера.
     * @returns {void}
     */

  }, {
    key: "buildSlider",
    value: function buildSlider(colsItems) {
      var _this3 = this;

      this.el.querySelectorAll(".js-fast-slider-item").forEach(function (item) {
        return item.remove();
      });
      colsItems.forEach(function (items) {
        _this3.list.insertAdjacentHTML("beforeend", (0, _fastView["default"])({
          items: items
        }));
      });
      this.list.querySelectorAll(".js-expanded-text").forEach(function (el) {
        return new _expandedText.ExpandedText(el);
      });
    }
    /**
     * Зафиксировать просмотр изображения.
     *
     * @param {string} id ID изображения, у которого фиксируем просмотр.
     * @returns {void}
     */

  }, {
    key: "trackView",
    value: function trackView(id) {
      var viewed = ((0, _cookie.getCookie)(this.cookieName) || "").split("|");

      if (id && viewed.indexOf(id) === -1) {
        viewed.push(id);
        (0, _cookie.setCookie)(this.cookieName, viewed.join("|"));
        this.sendTrack(id);
      }
    }
    /**
     * Отправить запрос для фиксации просмотра.
     *
     * @param {string} id ID изображения
     *
     * @returns {void}
     */

  }]);

  return FastSlider;
}();

exports.FastSlider = FastSlider;
window.addEventListener("load", function () {
  document.querySelectorAll(".js-fast-slider").forEach(function (elem) {
    return new FastSlider(elem);
  });
}, false);

/***/ }),

/***/ "./scripts/main/components/filter/filter-form-ajax.js":
/*!************************************************************!*\
  !*** ./scripts/main/components/filter/filter-form-ajax.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url */ "../node_modules/core-js/modules/web.url.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _pageNav = __webpack_require__(/*! @main/components/page-nav */ "./scripts/main/components/page-nav.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _tooltip = __webpack_require__(/*! @main/components/tooltip */ "./scripts/main/components/tooltip.js");

var _dropdownDates = _interopRequireDefault(__webpack_require__(/*! @main/components/dropdown/dropdown-dates */ "./scripts/main/components/dropdown/dropdown-dates.js"));

var _colsItems = _interopRequireDefault(__webpack_require__(/*! @main/components/cols-items */ "./scripts/main/components/cols-items.js"));

var _downloadLink = __webpack_require__(/*! @main/components/download-link */ "./scripts/main/components/download-link.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс формы с фильтром и отправкой аякс. */
var FilterFormAjax = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLFormElement} el Элемент.
   */
  function FilterFormAjax(el) {
    var _this = this;

    _classCallCheck(this, FilterFormAjax);

    this.sendData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var frmData, urlParams, queryString, response, _e$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.el.classList.contains("waiting")) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this.el.classList.add("waiting");

              frmData = new FormData(_this.el);
              urlParams = new URLSearchParams(_this.removePrefixFromDates(frmData));
              queryString = urlParams.toString();
              _context.prev = 6;
              _context.prev = 7;
              _context.next = 10;
              return _axios["default"].get(_this.url + "?" + queryString);

            case 10:
              response = _context.sent;
              window.history.pushState(null, null, window.location.pathname + "?" + queryString);

              _this.showResult(response.data, urlParams);

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](7);

              if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                _this.showError(_context.t0.response.data.message);
              } else {
                _this.showError(_messages.ERROR_DEFAULT);

                console.log(_context.t0);
              }

            case 18:
              _context.prev = 18;

              _this.el.classList.remove("waiting");

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6,, 18, 21], [7, 15]]);
    }));
    this.el = el;
    this.url = this.el.dataset.url;
    this.results = document.querySelector(".js-search-results");
    this.list = this.results.querySelector(".js-search-results-list");
    this.nav = this.results.querySelector(".js-search-results-nav");
    this.error = this.results.querySelector(".js-search-results-error");
    this.strict = this.results.querySelector(".js-strict-search");
    this.slider = document.querySelector(".js-fast-slider");
    this.dates = this.el.querySelectorAll(".js-date-input");
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(FilterFormAjax, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.el.addEventListener("submitAjax", function () {
        _this2.sendData();
      });
      this.strict.addEventListener("change", function () {
        _this2.sendData();
      });
    }
    /**
     * Отправка данных на сервер.
     *
     * @returns {void}
     */

  }, {
    key: "removePrefixFromDates",

    /**
     * Удалить префиксы "с" и "по" из значений дат.
     *
     * @param {FormData} frmData Данные формы.
     *
     * @returns {FormData}
     */
    value: function removePrefixFromDates(frmData) {
      this.dates.forEach(function (input) {
        var realValue = _dropdownDates["default"].getRealValue(input);

        frmData.set(input.name, realValue);
      });
      return frmData;
    }
    /**
     * Вывести список и пагинацию.
     *
     * @param {object} data Данные ответа сервера.
     * @param {URLSearchParams} urlParams Параметры запроса из данных формы.
     *
     * @returns {void}
     */

  }, {
    key: "showResult",
    value: function showResult(data, urlParams) {
      this.list.removeAttribute("style");

      if (!data.items || !data.items.length) {
        this.results.classList.add("empty");
        return;
      }

      this.results.classList.remove("empty");
      this.printList(data.items);
      var settings = {
        urlParams: urlParams,
        baseUrl: window.location.pathname,
        pages: data.pages,
        page: data.page
      };
      new _pageNav.PageNav(this.nav, settings);
    }
    /**
     * Вывести список, вызвать ивент, чтобы перестроить сетку.
     *
     * @param {Array} items Массив элементов-картинок.
     * @returns {void}
     */

  }, {
    key: "printList",
    value: function printList(items) {
      var objColsItems = new _colsItems["default"](this.list, items);
      objColsItems.clear();
      objColsItems.spreadItems();

      if (this.slider) {
        this.slider.dispatchEvent(new CustomEvent("updateSlider", {
          detail: items
        }));
      }

      this.list.querySelectorAll(".js-tooltip").forEach(function (el) {
        return new _tooltip.Tooltip(el);
      });
      this.list.querySelectorAll(".js-download-link").forEach(function (el) {
        return new _downloadLink.DownloadLink(el);
      });
    }
    /**
     * Вывести ошибку.
     *
     * @param {string} error Текст ошибки.
     * @returns {void}
     */

  }, {
    key: "showError",
    value: function showError(error) {
      this.error.innerHTML = error;
      this.list.removeAttribute("style");
      this.results.classList.add("empty");
    }
  }]);

  return FilterFormAjax;
}();

exports["default"] = FilterFormAjax;
document.querySelectorAll(".js-filter-form-ajax").forEach(function (el) {
  return new FilterFormAjax(el);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/filter/filter-form.js":
/*!*******************************************************!*\
  !*** ./scripts/main/components/filter/filter-form.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdownDates = _interopRequireDefault(__webpack_require__(/*! @main/components/dropdown/dropdown-dates */ "./scripts/main/components/dropdown/dropdown-dates.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс формы с фильтром. */
var FilterForm = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLFormElement} el Элемент.
   */
  function FilterForm(el) {
    _classCallCheck(this, FilterForm);

    this.el = el;
    this.dates = this.el.querySelectorAll(".js-date-input");
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(FilterForm, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("submit", function () {
        _this.removePrefixFromDates();
      });
    }
    /**
     * Удалить префиксы "с" и "по" из значений дат.
     *
     * @returns {void}
     */

  }, {
    key: "removePrefixFromDates",
    value: function removePrefixFromDates() {
      this.dates.forEach(function (input) {
        input.value = _dropdownDates["default"].getRealValue(input);
      });
    }
  }]);

  return FilterForm;
}();

exports["default"] = FilterForm;
document.querySelectorAll(".js-filter-form").forEach(function (el) {
  if (!el.classList.contains("js-filter-form-ajax")) {
    new FilterForm(el);
  }
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/filter/filter-hints.js":
/*!********************************************************!*\
  !*** ./scripts/main/components/filter/filter-hints.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _autocomplete = __webpack_require__(/*! @main/components/autocomplete */ "./scripts/main/components/autocomplete.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FilterHints = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function FilterHints(el) {
    _classCallCheck(this, FilterHints);

    this.el = el;
    this.form = this.el.closest("form");
    this.input = this.el.querySelector(".js-autocomplete-input");
    this.action = this.form.dataset.action;
    this.initAutocomplete();
  }
  /**
   * Инициализация поля с подсказками.
   *
   * @returns {void}
   */


  _createClass(FilterHints, [{
    key: "initAutocomplete",
    value: function initAutocomplete() {
      new _autocomplete.Autocomplete(this.el, this.onValueSelect.bind(this));
    }
    /**
     * При выборе значения из списка найденного
     *
     * @returns {void}
     */

  }, {
    key: "onValueSelect",
    value: function onValueSelect() {}
  }]);

  return FilterHints;
}();

exports["default"] = FilterHints;
document.querySelectorAll(".js-filter-hints").forEach(function (elem) {
  return new FilterHints(elem);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/filter/filter-params.js":
/*!*********************************************************!*\
  !*** ./scripts/main/components/filter/filter-params.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс фильтра. */
var FilterParams = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function FilterParams(el) {
    _classCallCheck(this, FilterParams);

    this.el = el;
    this.form = this.el.closest(".js-filter-form");
    this.fields = Array.from(this.el.querySelectorAll(".js-dropdown-field"));
    this.clearBtn = this.el.querySelector(".js-clear-all");
    this.counter = document.querySelector(".js-filter-count");
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(FilterParams, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.clearBtn.addEventListener("click", function (e) {
        e.preventDefault();

        _this.fields.forEach(function (item) {
          return item.dispatchEvent(new Event("clearDropdownField"));
        });

        _this.clearBtn.classList.add("hidden");

        _this.checkFilterIsCLear();

        _this.form.dispatchEvent(new Event("submitAjax"));
      });
      this.el.addEventListener("checkFilterIsCLear", function () {
        _this.checkFilterIsCLear();
      });
    }
    /**
     * Проверить, пустой ли фильтр, чтобы скрыть кнопку очистки.
     *
     * @returns {void}
     */

  }, {
    key: "checkFilterIsCLear",
    value: function checkFilterIsCLear() {
      var count = this.fields.filter(function (item) {
        return item.classList.contains("selected");
      }).length;

      if (count) {
        this.clearBtn.classList.remove("hidden");
      } else {
        this.clearBtn.classList.add("hidden");
      }

      if (this.counter) {
        this.counter.innerHTML = count;
      }
    }
  }]);

  return FilterParams;
}();

exports["default"] = FilterParams;
document.querySelectorAll(".js-filter-params").forEach(function (el) {
  return new FilterParams(el);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/filter/filter-select.js":
/*!*********************************************************!*\
  !*** ./scripts/main/components/filter/filter-select.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Сортировка для списка с фильтром. */
var FilterSelect = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function FilterSelect(el) {
    _classCallCheck(this, FilterSelect);

    this.el = el;
    this.type = this.el.dataset.type;
    this.form = document.querySelector(".js-filter-form");
    this.inputReal = this.form.querySelector(".js-select-real-input[data-type='" + this.type + "']");
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(FilterSelect, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("change", function () {
        _this.inputReal.value = _this.el.value;

        _this.form.dispatchEvent(new Event("submitAjax"));
      });
    }
  }]);

  return FilterSelect;
}();

exports["default"] = FilterSelect;
document.querySelectorAll(".js-filter-select").forEach(function (elem) {
  return new FilterSelect(elem);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/form-field/datepicker.js":
/*!**********************************************************!*\
  !*** ./scripts/main/components/form-field/datepicker.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties */ "../node_modules/core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "../node_modules/core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Datepicker = void 0;

var _airDatepicker = _interopRequireDefault(__webpack_require__(/*! air-datepicker */ "../node_modules/air-datepicker/index.es.js"));

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _media = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js");

var _consts = __webpack_require__(/*! @main/consts */ "./scripts/main/consts/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** 
 * Компонент выбора даты.
 */
var Datepicker = /*#__PURE__*/function (_Input) {
  _inherits(Datepicker, _Input);

  var _super = _createSuper(Datepicker);

  /**
   * @type {AirDatepicker<HTMLInputElement>} инстанс AirDatepicker
   * @private
   */

  /**
   * Создает компонент выбора даты.
   *
   * @param {object} props - Параметры компонента.
   * @param {HTMLElement} props.container - Родительский элемент.
   * @param {HTMLInputElement} props.input - Элемент ввода.
   * @param {object | undefined} props.options - Конфиг для инициализации AirDatepicker.
   */
  function Datepicker(_ref) {
    var _this;

    var container = _ref.container,
        input = _ref.input,
        options = _ref.options;

    _classCallCheck(this, Datepicker);

    _this = _super.call(this, {
      container: container,
      input: input
    });
    _this.datepicker = void 0;
    _this.datepicker = Datepicker.initAirDatepicker(input, options);
    return _this;
  }
  /**
   * Инициализирует календарь.
   *
   * @param {HTMLInputElement} input - Элемент ввода.
   * @param {object | undefined} options - Конфиг для инициализации AirDatepicker.
   */


  _createClass(Datepicker, null, [{
    key: "initAirDatepicker",
    value: function initAirDatepicker(input, options) {
      var _input$getAttribute, _input$getAttribute2;

      var container = input.closest(".js-calendar-container");

      if (window.innerWidth < _media.md) {
        if (!options) {
          options = {};
        }

        options.position = function (_ref2) {
          var $datepicker = _ref2.$datepicker,
              $target = _ref2.$target;
          var dpWidth = $datepicker.clientWidth;
          var rectTarget = $target.getBoundingClientRect();
          var rectContainer = container.getBoundingClientRect();
          var rightMaxPosition = rectTarget.x + dpWidth;

          if (rightMaxPosition > window.innerWidth) {
            $datepicker.classList.add("-bottom-right-");
            $datepicker.classList.remove("-bottom-left-");
            $datepicker.style.left = -1 * rectTarget.x + _consts.CONTAINER_PADDING + "px";
          } else {
            $datepicker.style.left = "0";
            $datepicker.classList.add("-bottom-left-");
            $datepicker.classList.remove("-bottom-right-");
          }

          var top = rectTarget.y - rectContainer.y + rectTarget.height;
          $datepicker.classList.add("-from-bottom-");
          $datepicker.style.top = "".concat(top, "px");
        };
      }

      var picker = new _airDatepicker["default"](input, _objectSpread({
        dateFormat: "dd.MM.yyyy",
        autoClose: true,
        prevHtml: "<svg \n                            class=\"air-datepicker-nav__action air-datepicker-nav__action--prev\" />\n            ",
        nextHtml: "<svg \n                            class=\"air-datepicker-nav__action air-datepicker-nav__action--next\" />\n            ",
        minDate: (_input$getAttribute = input.getAttribute("data-min-date")) !== null && _input$getAttribute !== void 0 ? _input$getAttribute : undefined,
        maxDate: (_input$getAttribute2 = input.getAttribute("data-max-date")) !== null && _input$getAttribute2 !== void 0 ? _input$getAttribute2 : undefined,
        container: container
      }, options));
      return picker;
    }
  }]);

  return Datepicker;
}(_input.Input);

exports.Datepicker = Datepicker;

/***/ }),

/***/ "./scripts/main/components/form-field/dates-group.js":
/*!***********************************************************!*\
  !*** ./scripts/main/components/form-field/dates-group.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatesGroup = void 0;

var _datepicker = __webpack_require__(/*! @main/components/form-field/datepicker */ "./scripts/main/components/form-field/datepicker.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент выбора диапазона дат.
 */
var DatesGroup = /*#__PURE__*/function () {
  /**
   * @type {AirDatepicker<HTMLInputElement>} инстанс AirDatepicker
   * @private
   */

  /**
   * Создает компонент выбора диапазона дат.
   *
   * @param {HTMLElement} container - Родительский элемент группы.
   * @returns {void}
   */
  function DatesGroup(container) {
    _classCallCheck(this, DatesGroup);

    this.datepicker = void 0;
    this.el = container;
    this.minInput = this.el.querySelector(".js-date-min");
    this.maxInput = this.el.querySelector(".js-date-max");
    this.btn = this.el.querySelector(".js-dropdown-btn");
    this.initMin();
    this.initMax();
  }
  /**
   * Инициация календаря для поля начала интервала дат, задает зависимость дат друг от друга.
   *
   * @returns {void}
   */


  _createClass(DatesGroup, [{
    key: "initMin",
    value: function initMin() {
      var _this = this;

      this.minInput.addEventListener("click", function (e) {
        e.preventDefault();
      });
      var options = {
        onSelect: function onSelect(_ref) {
          var date = _ref.date;

          _this.datepickerMax.update({
            minDate: date
          });

          _this.setDateText();
        },
        dateFormat: "с dd.MM.yyyy"
      };
      this.datepickerMin = _datepicker.Datepicker.initAirDatepicker(this.minInput, options);
    }
    /**
     * Инициация календаря для поля конца интервала дат, задает зависимость дат друг от друга.
     *
     * @returns {void}
     */

  }, {
    key: "initMax",
    value: function initMax() {
      var _this2 = this;

      this.maxInput.addEventListener("click", function (e) {
        e.preventDefault();
      });
      var options = {
        onSelect: function onSelect(_ref2) {
          var date = _ref2.date;

          _this2.datepickerMin.update({
            maxDate: date
          });

          _this2.setDateText();
        },
        dateFormat: "по dd.MM.yyyy"
      };
      this.datepickerMax = _datepicker.Datepicker.initAirDatepicker(this.maxInput, options);
    }
    /**
     * Установить текстовое представление выбранного значения.
     *
     * @returns {void}
     */

  }, {
    key: "setDateText",
    value: function setDateText() {
      if (this.el.classList.contains("js-dropdown-dates")) {
        this.el.dispatchEvent(new Event("setDropdownText"));
      }
    }
  }]);

  return DatesGroup;
}();

exports.DatesGroup = DatesGroup;
document.querySelectorAll(".js-dates-group").forEach(function (elem) {
  return new DatesGroup(elem);
});

/***/ }),

/***/ "./scripts/main/components/form-field/file-input.js":
/*!**********************************************************!*\
  !*** ./scripts/main/components/form-field/file-input.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileInput = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _fileSizeFormat = __webpack_require__(/*! @main/utils/file-size-format */ "./scripts/main/utils/file-size-format.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Компонент выбора файла. */
var FileInput = /*#__PURE__*/function (_Input) {
  _inherits(FileInput, _Input);

  var _super = _createSuper(FileInput);

  /**
   * Создает компонент выбора файла.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function FileInput(props) {
    var _this;

    _classCallCheck(this, FileInput);

    _this = _super.call(this, props);

    _this.findElements();

    return _this;
  }
  /**
   * Ищет элементы.
   *
   * @returns {void}
   */


  _createClass(FileInput, [{
    key: "findElements",
    value: function findElements() {
      this.fileNameCaptionNode = this.el.querySelector(".js-form-field-file-caption");
    }
    /**
     * Инициализация евентов.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      _get(_getPrototypeOf(FileInput.prototype), "bindEventListeners", this).call(this);

      this.input.addEventListener("change", this.onChange.bind(this));
    }
    /**
     * Коллбек, который обрабатывает выбор файла.
     *
     * @returns {void}
     */

  }, {
    key: "onChange",
    value: function onChange() {
      var _this$input$files = _slicedToArray(this.input.files, 1),
          file = _this$input$files[0];

      this.fileNameCaptionNode.innerText = file ? "".concat(file.name, ", ").concat((0, _fileSizeFormat.getFormattedFileSize)(file.size)) : "";
    }
    /**
     * Получить значение файла.
     *
     * @returns {File} Файл.
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.input.files[0];
    }
  }]);

  return FileInput;
}(_input.Input);

exports.FileInput = FileInput;

/***/ }),

/***/ "./scripts/main/components/form-field/index.js":
/*!*****************************************************!*\
  !*** ./scripts/main/components/form-field/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFormFields = void 0;

var _datepicker = __webpack_require__(/*! @main/components/form-field/datepicker */ "./scripts/main/components/form-field/datepicker.js");

var _fileInput = __webpack_require__(/*! @main/components/form-field/file-input */ "./scripts/main/components/form-field/file-input.js");

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _phoneInput = __webpack_require__(/*! @main/components/form-field/phone-input */ "./scripts/main/components/form-field/phone-input.js");

var _select = __webpack_require__(/*! @main/components/form-field/select */ "./scripts/main/components/form-field/select.js");

var _passwordInput = __webpack_require__(/*! @main/components/form-field/password-input */ "./scripts/main/components/form-field/password-input.js");

var _numberInput = __webpack_require__(/*! @main/components/form-field/number-input */ "./scripts/main/components/form-field/number-input.js");

var _dateInputMask = __webpack_require__(/*! @main/utils/date-input-mask */ "./scripts/main/utils/date-input-mask.js");

/**
 * Инициализируются компоненты ввода.
 *
 * @param {Element} element HTML элемент для поиска.
 * @returns {void}
 */
var initFormFields = function initFormFields(element) {
  element.querySelectorAll(".js-form-field").forEach(function (el) {
    var input = el.querySelector(".js-form-field-input");

    switch (input.type) {
      case "file":
        return new _fileInput.FileInput({
          container: el,
          input: input
        });

      case "select-multiple":
      case "select-one":
        return new _select.Select({
          container: el,
          input: input
        });

      case "date":
        // to prevent appearance of default popup-calendar  in Firefox
        input.addEventListener("click", function (e) {
          e.preventDefault();
        });
        return new _datepicker.Datepicker({
          container: el,
          input: input
        });

      case "tel":
        return new _phoneInput.PhoneInput({
          container: el,
          input: input
        });

      case "password":
        return new _passwordInput.PasswordInput({
          container: el,
          input: input
        });

      default:
        if (input.classList.contains("js-form-field-input-number")) {
          return new _numberInput.NumberInput({
            container: el,
            input: input
          });
        } else if (input.classList.contains("js-form-field-input-date")) {
          (0, _dateInputMask.dateInputMask)(input);
          return new _datepicker.Datepicker({
            container: el,
            input: input
          });
        } else {
          return new _input.Input({
            container: el,
            input: input
          });
        }

    }
  });
};

exports.initFormFields = initFormFields;
initFormFields(document);

/***/ }),

/***/ "./scripts/main/components/form-field/input-clear.js":
/*!***********************************************************!*\
  !*** ./scripts/main/components/form-field/input-clear.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputClear = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс поля ввода с возможностью удаления содержимого по клику на крестик. */
var InputClear = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {Element} props.el Элемент ввода.
   */
  function InputClear(el) {
    _classCallCheck(this, InputClear);

    this.el = el;
    this.input = this.el.querySelector(".js-form-field-input");
    this.icon = this.el.querySelector(".js-clear-icon");
    this.bindEventListeners();
  }
  /**
   * Прослушиваем клик на иконке в инпуте.
   *
   * @returns {void}
   */


  _createClass(InputClear, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("click", function (e) {
        if (e.target.classList.contains("js-clear-icon")) {
          _this.clearInput();
        }
      });
      this.input.addEventListener("input", this.checkIsFilled.bind(this));
    }
    /**
     * Удаление введенного в инпут текста, удаление класса заполненного поля.
     *
     * @returns {void}
     */

  }, {
    key: "clearInput",
    value: function clearInput() {
      this.input.value = "";
      this.el.classList.remove("filled");
    }
    /**
     * Проверка, заполнено ли поле, чтобы добавить класс показа кнопки удаления.
     *
     * @returns {void}
     */

  }, {
    key: "checkIsFilled",
    value: function checkIsFilled() {
      if (this.input.value) {
        this.el.classList.add("filled");
      } else {
        this.el.classList.remove("filled");
      }
    }
  }]);

  return InputClear;
}();

exports.InputClear = InputClear;
document.querySelectorAll(".js-form-field-clear").forEach(function (el) {
  return new InputClear(el);
});

/***/ }),

/***/ "./scripts/main/components/form-field/input.js":
/*!*****************************************************!*\
  !*** ./scripts/main/components/form-field/input.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "../node_modules/core-js/modules/es.string.match.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Базовый класс поля ввода. */
var Input = /*#__PURE__*/function () {
  /**
   * Создает компонент ввода текста.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function Input(_ref) {
    var container = _ref.container,
        input = _ref.input;

    _classCallCheck(this, Input);

    this.el = container;
    this.input = input;
    this.updateIsFilledStatus();
    this.bindEventListeners();
  }
  /**
   * Вешает коллбеки событий на элементы компонента.
   *
   * @returns {void}
   */


  _createClass(Input, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.input.addEventListener("input", this.onInput.bind(this));
      this.input.addEventListener("beforeinput", this.onBeforeInput.bind(this));
    }
    /**
     * Получает введенное значение.
     *
     * @returns {string} Введеное значение.
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.input.value;
    }
    /**
     * Проверяет наличие лейбла.
     *
     * @returns {HTMLElement} Лейбл поля ввода.
     */

  }, {
    key: "hasLabel",
    value: function hasLabel() {
      return this.el.querySelector(".form-field__label");
    }
    /**
     * Обновляет состояние ввода, которое говорит, введено ли значение в поле, или нет.
     *
     * @returns {void}
     */

  }, {
    key: "updateIsFilledStatus",
    value: function updateIsFilledStatus() {
      if (this.getValue() && this.hasLabel()) {
        this.el.classList.add("filled");
      } else {
        this.el.classList.remove("filled");
      }
    }
    /**
     * Колбэк обработки события 'input'.
     *
     * @returns {void}
     */

  }, {
    key: "onInput",
    value: function onInput() {
      this.updateIsFilledStatus();

      if (this.input.maxLength > 0 && this.input.maxLength < this.input.value.length) {
        this.input.value = this.input.value.slice(0, this.input.maxLength);
      }
    }
    /**
     * Колбэк обработки события перед вводом - удаление символов, не удовлетворяющих паттерну.
     *
     * @param {Event} event Событие, происходящее при вводе в инпуте.
     * @returns {void}
     */

  }, {
    key: "onBeforeInput",
    value: function onBeforeInput(event) {
      if (this.input.pattern && event.data) {
        var pattern = new RegExp(this.input.pattern);

        if (!pattern.test(event.data)) {
          event.preventDefault();
        }
      }
    }
    /**
     * Удаляет лишние символы из строки по паттерну.
     *
     * @param {string} str Строка для форматирования.
     * @returns {string} Результат.
     */

  }, {
    key: "replaceBadCharacters",
    value: function replaceBadCharacters(str) {
      var last = "";
      var match = str.match(this.input.pattern);

      if (match || str === "") {
        last = match ? match[0] : "";
      }

      return last;
    }
  }]);

  return Input;
}();

exports.Input = Input;

/***/ }),

/***/ "./scripts/main/components/form-field/number-input.js":
/*!************************************************************!*\
  !*** ./scripts/main/components/form-field/number-input.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _numberFormat = __webpack_require__(/*! @main/utils/numberFormat */ "./scripts/main/utils/numberFormat.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Класс для поля ввода числа. */
var NumberInput = /*#__PURE__*/function (_Input) {
  _inherits(NumberInput, _Input);

  var _super = _createSuper(NumberInput);

  /**
   * Конструктор класса.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function NumberInput(props) {
    _classCallCheck(this, NumberInput);

    return _super.call(this, props);
  }
  /**
   * Прослушиваем события в инпуте с телефоном.
   *
   * @returns {void}
   */


  _createClass(NumberInput, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      _get(_getPrototypeOf(NumberInput.prototype), "bindEventListeners", this).call(this);

      this.el.addEventListener("paste", this.onPaste.bind(this));
    }
    /**
     * Применение маски к числу при вводе.
     *
     * @param {Event} e Событие, происходящее при вводе в инпуте.
     * @returns {void}
     */

  }, {
    key: "onInput",
    value: function onInput(e) {
      _get(_getPrototypeOf(NumberInput.prototype), "onInput", this).call(this);

      var input = e.target;
      this.replaceBadCharacters(input);
    }
    /**
     * Удалить все, что не число и не точка, запятую заменить на точку.
     *
     * @param {HTMLInputElement} input Поле ввода.
     * @returns {void}
     */

  }, {
    key: "replaceBadCharacters",
    value: function replaceBadCharacters(input) {
      input.value = (0, _numberFormat.replaceBadInNumber)(input.value);
    }
    /**
     * Применение маски к числу при вставке скопированного номера.
     *
     * @param {Event} e Событие, происходящее при вставке скопированного номера.
     * @returns {void}
     */

  }, {
    key: "onPaste",
    value: function onPaste(e) {
      var input = e.target;
      this.replaceBadCharacters(input);
    }
  }]);

  return NumberInput;
}(_input.Input);

exports.NumberInput = NumberInput;

/***/ }),

/***/ "./scripts/main/components/form-field/password-input.js":
/*!**************************************************************!*\
  !*** ./scripts/main/components/form-field/password-input.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Класс поля пароля. */
var PasswordInput = /*#__PURE__*/function (_Input) {
  _inherits(PasswordInput, _Input);

  var _super = _createSuper(PasswordInput);

  /**
   * Конструктор класса.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function PasswordInput(props) {
    _classCallCheck(this, PasswordInput);

    return _super.call(this, props);
  }
  /**
   * Прослушиваем события в инпуте с телефоном.
   *
   * @returns {void}
   */


  _createClass(PasswordInput, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      _get(_getPrototypeOf(PasswordInput.prototype), "bindEventListeners", this).call(this);

      this.el.addEventListener("input", this.onInput.bind(this));
    }
    /**
     * Действия при вводе пароля.
     *
     * @param {Event} e Событие, происходящее при вводе в инпуте.
     * @returns {void}
     */

  }, {
    key: "onInput",
    value: function onInput(e) {
      _get(_getPrototypeOf(PasswordInput.prototype), "onInput", this).call(this);

      var input = e.target;
      this.toggleDisabledSubmitButton(input);
    }
    /**
     * Менять disabled у кнопки отправки формы, в зависимости от того, пустые поля или нет.
     *
     * @param {HTMLInputElement} input Поле пароля.
     * @returns {void}
     */

  }, {
    key: "toggleDisabledSubmitButton",
    value: function toggleDisabledSubmitButton(input) {
      var passwordGroup = input.closest(".js-password-group");

      if (!passwordGroup) {
        return;
      }

      var inputs = passwordGroup.querySelectorAll("input");
      var btnSubmit = passwordGroup.closest(".js-form-wrapper").querySelector("button[type='submit']");

      if (inputs[0].value && inputs[1].value) {
        btnSubmit.removeAttribute("disabled");
      } else {
        btnSubmit.setAttribute("disabled", "disabled");
      }
    }
  }]);

  return PasswordInput;
}(_input.Input);

exports.PasswordInput = PasswordInput;

/***/ }),

/***/ "./scripts/main/components/form-field/phone-input.js":
/*!***********************************************************!*\
  !*** ./scripts/main/components/form-field/phone-input.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneInput = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _regex = __webpack_require__(/*! @main/consts/regex */ "./scripts/main/consts/regex.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Класс маски для телефона. */
var PhoneInput = /*#__PURE__*/function (_Input) {
  _inherits(PhoneInput, _Input);

  var _super = _createSuper(PhoneInput);

  /**
   * Конструктор класса.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function PhoneInput(props) {
    _classCallCheck(this, PhoneInput);

    return _super.call(this, props);
  }
  /**
   * Фильтрует в строке числа.
   *
   * @returns {void}
   */


  _createClass(PhoneInput, [{
    key: "getInputNumberValues",
    value: function getInputNumberValues() {
      return this.input.value.replace(_regex.WITHOUT_DIGITS_REGEX, "");
    }
    /**
     * Прослушиваем события в инпуте с телефоном.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      _get(_getPrototypeOf(PhoneInput.prototype), "bindEventListeners", this).call(this);

      this.el.addEventListener("keydown", this.onKeyDown.bind(this));
      this.el.addEventListener("paste", this.onPaste.bind(this));
    }
    /**
     * Применение маски к телефону при вводе.
     *
     * @param {Event} e Событие, происходящее при вводе в инпуте.
     * @returns {void}
     */

  }, {
    key: "onInput",
    value: function onInput(e) {
      _get(_getPrototypeOf(PhoneInput.prototype), "onInput", this).call(this);

      var input = e.target;
      var inputNumbersValue = this.getInputNumberValues();
      var formattedInputValue = "";
      var selectionStart = input.selectionStart;

      if (!inputNumbersValue) {
        input.value = "";
        return;
      }

      if (input.value.length !== selectionStart) {
        if (e.data && _regex.WITHOUT_DIGITS_REGEX.test(e.data)) {
          input.value = inputNumbersValue;
        }

        return;
      }

      if (inputNumbersValue[0] === "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }

      formattedInputValue = "+7 ";

      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(".concat(inputNumbersValue.substring(1, 4));
      }

      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") ".concat(inputNumbersValue.substring(4, 7));
      }

      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-".concat(inputNumbersValue.substring(7, 9));
      }

      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-".concat(inputNumbersValue.substring(9, 11));
      }

      input.value = formattedInputValue;
    }
    /**
     * Применение маски к телефону при каждом нажатии на клавиатуре.
     *
     * @param {Event} e Событие, происходящее при каждом нажатии клавиши.
     * @returns {void}
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var input = e.target;

      if (e.keyCode === 8 && this.getInputNumberValues().length === 1) {
        input.value = "";
      }
    }
    /**
     * Применение маски к телефону при вставке скопированного номера.
     *
     * @param {Event} e Событие, происходящее при вставке скопированного номера.
     * @returns {void}
     */

  }, {
    key: "onPaste",
    value: function onPaste(e) {
      var pasted = e.clipboardData || window.clipboardData;
      var input = e.target;
      var inputNumbersValue = this.getInputNumberValues();

      if (pasted) {
        var pastedText = pasted.getData("Text");

        if (_regex.WITHOUT_DIGITS_REGEX.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    }
  }]);

  return PhoneInput;
}(_input.Input);

exports.PhoneInput = PhoneInput;

/***/ }),

/***/ "./scripts/main/components/form-field/select.js":
/*!******************************************************!*\
  !*** ./scripts/main/components/form-field/select.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _tomSelect = _interopRequireDefault(__webpack_require__(/*! tom-select */ "../node_modules/tom-select/dist/js/tom-select.complete.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Компонент селекта.
 */
var Select = /*#__PURE__*/function (_Input) {
  _inherits(Select, _Input);

  var _super = _createSuper(Select);

  /**
   * Инстанс компонента TomSelect.
   *
   * @type {TomSelect}
   * @private
   */

  /**
   * Создает компонент выбора файла.
   *
   * @param {object} props - Параметры компонента.
   * @param {HTMLElement} props.container - Родительский элемент.
   * @param {HTMLInputElement} props.input - Элемент ввода.
   */
  function Select(_ref) {
    var _this;

    var container = _ref.container,
        input = _ref.input;

    _classCallCheck(this, Select);

    _this = _super.call(this, {
      container: container,
      input: input
    });
    _this.tomSelect = void 0;
    _this.tomSelect = new _tomSelect["default"](_this.input, {
      hideSelected: false,
      controlClass: "form-field__input ts-control",
      dropdownClass: "ts-dropdown js-form-field-scroll",
      render: {
        no_results: function no_results() {
          return "<div class=\"option\">Ничего не найдено</div>";
        }
      },
      onType: function onType(str) {
        if (str) {
          _this.el.classList.add("filled");
        } else {
          _this.updateIsFilledStatus();
        }
      }
    });

    _this.input.classList.remove("form-field__select");

    return _this;
  }

  return Select;
}(_input.Input);

exports.Select = Select;

/***/ }),

/***/ "./scripts/main/components/form.js":
/*!*****************************************!*\
  !*** ./scripts/main/components/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _regex = __webpack_require__(/*! @main/consts/regex */ "./scripts/main/consts/regex.js");

var _modal = __webpack_require__(/*! @main/components/modal */ "./scripts/main/components/modal.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Компонент для работы с формой (отправка, валидация). */
var Form = /*#__PURE__*/function () {
  /**
   * @type {{Boolean}} результат валидации инпута.
   * @private
   */

  /**
   * Создает компонент выбора файла.
   *
   * @param {HTMLFormElement} form Элемент формы.
   */
  function Form(form) {
    var _this = this;

    _classCallCheck(this, Form);

    this.result = void 0;

    this.submitFormWithModal = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, modal) {
        var modalResult, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (_this.isValid) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return Form.fetchForm(_this.el, _this.url);

              case 6:
                modalResult = _this.successModal;

                _this.clearForm();

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                modalResult = _this.errorModal;

                if (_context.t0.response) {
                  if ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) {
                    _this.errorModalText.innerHTML = _context.t0.response.data.message;
                  } else {
                    _this.errorModalText.innerHTML = _messages.ERROR_DEFAULT;
                  }
                } else {
                  _this.errorModalText.innerHTML = _messages.ERROR_DEFAULT;
                  console.log(_context.t0);
                }

              case 14:
                _modal.Modal.close(modal);

                _modal.Modal.open(modalResult);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = form;
    this.url = this.el.dataset.url;
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(Form, [{
    key: "findElements",
    value: function findElements() {
      this.fields = _toConsumableArray(this.el.querySelectorAll(".js-form-field")).map(function (field) {
        return {
          node: field,
          input: field.querySelector(".js-form-field-input")
        };
      });
      this.errorModal = document.querySelector(".js-modal[data-modal-name='failed-modal']");
      this.errorModalText = this.errorModal.querySelector(".js-fail-modal-text");
      this.successModal = document.querySelector(".js-modal[data-modal-name='success-modal']");
    }
    /**
     * Скрывает сообщение об ошибке.
     *
     * @param {HTMLDivElement} field Контейнер поля вода.
     * @returns {void}
     */

  }, {
    key: "hideFieldError",
    value: function hideFieldError(field) {
      field.classList.remove("error");
    }
    /**
     * Привязка обработчиков событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.el.addEventListener("submit", function (e) {
        return e.preventDefault();
      });
      this.bindInputListeners();
    }
    /**
     * Привязка обработчиков событий ввода в поля.
     *
     * @returns {void}
     */

  }, {
    key: "bindInputListeners",
    value: function bindInputListeners() {
      var _this2 = this;

      this.fields.forEach(function (field) {
        field.input.addEventListener("input", function () {
          return _this2.hideFieldError(field.node);
        });
        field.input.addEventListener("blur", function () {
          return _this2.checkInput(field);
        });
        field.input.addEventListener("paste", function () {
          return _this2.hideFieldError(field.node);
        });
      });
    }
    /**
     * Обрабатывает submit формы и показывает нужный modal.
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @param {HTMLElement} modal Модальное окно.
     * @returns {void}
     */

  }, {
    key: "clearForm",

    /**
     * Очистить поля формы.
     *
     * @returns {void}
     */
    value: function clearForm() {
      this.fields.forEach(function (field) {
        field.input.value = "";
        field.node.classList.remove("filled");
        field.node.classList.remove("error");
      });
    }
    /**
     * Определяет валидность ввода в форме.
     *
     * @returns {boolean} Флаг валидности введенной формы.
     */

  }, {
    key: "checkInput",

    /**
     * Определяет валидность ввода в форме.
     *
     * @param {object} field Объект поля ввода.
     * @returns {void}
     */
    value: function checkInput(field) {
      if (!this.validateField(field.input)) {
        field.node.classList.add("error");
      } else {
        field.node.classList.remove("error");
      }
    }
    /**
     * Проверка заполнения обязательного поля ввода.
     *
     * @param {HTMLInputElement} input Инпут компонента формы.
     * @returns {boolean} Флаг заполнения поля.
     */

  }, {
    key: "isFilled",
    value: function isFilled(input) {
      if (input.required && !input.value) {
        return false;
      }

      return true;
    }
    /**
     * Проверка валидации поля ввода.
     *
     * @param {HTMLInputElement} input Инпут компонента формы.
     * @returns {boolean} Флаг валидности заполнения поля.
     */

  }, {
    key: "validateField",
    value: function validateField(input) {
      // сначала проверяем обязательность поля, в нем наличие паттерна и соответсвие ему введенного значения.
      // В случае отсутствия паттерна у обязательного поля - заполнено ли оно.
      // Если поле не обязательно - this.result = true
      // после чего производим другие валидации и приводим к флагу this.result
      if (input.required) {
        if (input.pattern) {
          this.result = Form.isValidPattern(input) && Form.isValidLength(input);
        } else {
          // возвращает true в случае, если input не пустой и далее переходит к проверкам по типу input-а
          this.result = !!input.value;
        }
      } else if (!input.required) {
        this.result = true;
      }

      switch (input.type) {
        case "file":
          this.result = this.result && Form.isValidFile(input);
          break;

        case "tel":
          this.result = this.result && Form.isValidPhone(input);
          break;

        case "email":
          this.result = this.result && Form.isValidMail(input);
          break;

        case "number":
          this.result = this.result && Form.isValidNumber(input);
          break;

        case "password":
          this.result = this.result && Form.isValidPasswords(input) && Form.isValidPasswordByLetter(input) && Form.isValidPasswordByCapital(input);
          break;

        case "hidden":
          this.result = true;
          break;

        default:
          this.result = true;
          break;
      }

      return this.result;
    }
    /**
     * Отправка формы.
     *
     * @param {HTMLFormElement} formNode DOM узел формы.
     * @param {string} url Url отправки формы.
     * @param {number} id Идентификатор.
     * @returns {object} Ответ сервера в формате, согласному std.
     */

  }, {
    key: "isValid",
    get: function get() {
      var _this3 = this;

      var isValid = true;
      this.fields.forEach(function (field) {
        if (field.node.classList.contains("error")) {
          field.node.classList.remove("error");
        }

        if (!_this3.validateField(field.input)) {
          isValid = false;
          field.node.classList.add("error");
        }
      });
      return isValid;
    }
  }], [{
    key: "fetchForm",
    value: function () {
      var _fetchForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(formNode, url) {
        var id,
            data,
            _yield$axios$post,
            response,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : undefined;
                data = new FormData(formNode);
                _context2.next = 4;
                return _axios["default"].post(url, data, {
                  params: {
                    id: id
                  }
                });

              case 4:
                _yield$axios$post = _context2.sent;
                response = _yield$axios$post.data;
                return _context2.abrupt("return", response);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fetchForm(_x3, _x4) {
        return _fetchForm.apply(this, arguments);
      }

      return fetchForm;
    }()
    /**
     * Проверка валидности элемента по его паттерну.
     *
     * @param {HTMLInputElement} input Инпут с паттерном.
     * @returns {boolean} Валидность элемента по паттерну.
     */

  }, {
    key: "isValidPattern",
    value: function isValidPattern(input) {
      var regex = new RegExp(input.pattern);
      return regex.test(input.value);
    }
    /**
     * Проверка валидности номера телефона.
     *
     * @param {HTMLInputElement} phoneInput Инпут телефона.
     * @returns {boolean} Ввод телефона валидный.
     */

  }, {
    key: "isValidPhone",
    value: function isValidPhone(phoneInput) {
      return phoneInput.value.length === Form.MAX_PHONE_LENGTH;
    }
    /**
     * Проверка валидности электронной почты.
     *
     * @param {HTMLInputElement} mailInput Инпут почты.
     * @returns {boolean} Валидность ввода почты.
     */

  }, {
    key: "isValidMail",
    value: function isValidMail(mailInput) {
      return _regex.EMAIL_REGEX.test(mailInput.value);
    }
    /**
     * Проверка валидности поля с числом.
     *
     * @param {HTMLInputElement} numberInput Инпут с номером.
     * @returns {boolean} Валидность ввода почты.
     */

  }, {
    key: "isValidNumber",
    value: function isValidNumber(numberInput) {
      if (numberInput.min && numberInput.max) {
        var min = +numberInput.min;
        var max = +numberInput.max;
        if (+numberInput.value < min || +numberInput.value > max) return;
      }

      return _regex.NUMBER_REGEX.test(numberInput.value);
    }
    /**
     * Проверка валидности выбора файлов.
     *
     * @param {HTMLInputElement} fileInput Инпут файла.
     * @returns {boolean} Валидность выбора файла.
     */

  }, {
    key: "isValidFile",
    value: function isValidFile(fileInput) {
      return !!fileInput.files.length;
    }
    /**
     * Проверка валидности длины строки.
     *
     * @param {HTMLInputElement} input Инпут.
     * @returns {boolean} Валидность длины строки.
     */

  }, {
    key: "isValidLength",
    value: function isValidLength(input) {
      if (input.maxLength && input.maxLength > 0) {
        if (input.value.length > input.maxLength) {
          return false;
        }
      }

      if (input.minLength && input.minLength > 0) {
        if (input.value.length < input.minLength) {
          return false;
        }
      }

      return true;
    }
    /**
     * Проверка введенного пароля на наличие хотя бы одной буквы.
     *
     * @param {HTMLInputElement} passwordInput Инпут пароля.
     * @returns {boolean} Валидность введенного пароля по наличию буквы.
     */

  }, {
    key: "isValidPasswordByLetter",
    value: function isValidPasswordByLetter(passwordInput) {
      if (!passwordInput.classList.contains("js-current-password")) {
        var password = passwordInput.value;
        var errorField = passwordInput.closest(".js-form-field").querySelector(".js-validation-error");

        if (_regex.PASSWORD_REGEX.test(password) && _regex.PASSWORD_REGEX_UPPER.test(password) && (!passwordInput.minLength || password.length >= passwordInput.minLength) && (!passwordInput.maxLength || password.length < passwordInput.maxLength)) {
          errorField.innerHTML = "";
        } else {
          errorField.innerHTML = "Пароль должен содержать не менее 8 знаков и иметь заглавную букву";
        }

        return _regex.PASSWORD_REGEX.test(password);
      } else {
        return true;
      }
    }
    /**
     * Проверка наличия в пароле заглавных символов
     *
     * @param {HTMLInputElement} passwordInput Инпут пароля.
     * @returns {boolean} Валидность введенного пароля по наличию заглавных символов
     */

  }, {
    key: "isValidPasswordByCapital",
    value: function isValidPasswordByCapital(passwordInput) {
      if (!passwordInput.classList.contains("js-current-password")) {
        var errorField = passwordInput.closest(".js-form-field").querySelector(".js-validation-error");
        var password = passwordInput.value;

        if (!(password === password.toLowerCase())) {
          errorField.innerHTML = "";
        } else {
          errorField.innerHTML = "Пароль должен содержать не менее 8 знаков и иметь заглавную букву";
        }

        return !(password === password.toLowerCase());
      } else {
        return true;
      }
    }
    /**
     * Проверка введенных паролей на идентичность.
     *
     * @param {HTMLInputElement} passwordInput Инпут пароля.
     * @returns {boolean} Валидность введенных паролей.
     */

  }, {
    key: "isValidPasswords",
    value: function isValidPasswords(passwordInput) {
      var passwordGroup = passwordInput.closest(".js-password-group");

      if (!passwordGroup) {
        return !!passwordInput.value;
      } else {
        var inputs = passwordGroup.querySelectorAll("input"); // сравниваем значения инпутов только если оба сравниваемых поля заполнены

        if (inputs[0].value && inputs[1].value) {
          var passwordGroupError = passwordInput.closest(".js-password-group").querySelector(".js-caption-error");

          if (!(inputs[0].value === inputs[1].value) && passwordGroupError) {
            passwordGroupError.innerHTML = "Пароли не совпадают";
          } else {
            passwordGroupError.innerHTML = "";
          }

          return inputs[0].value === inputs[1].value;
        } else {
          return true;
        }
      }
    }
  }]);

  return Form;
}();

exports.Form = Form;
Form.MAX_PHONE_LENGTH = 18;

/***/ }),

/***/ "./scripts/main/components/img-loading.js":
/*!************************************************!*\
  !*** ./scripts/main/components/img-loading.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgLoading = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Добавить класс к блоку, когда картинка загрузится. */
var ImgLoading = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function ImgLoading(el) {
    _classCallCheck(this, ImgLoading);

    this.el = el;
    this.img = this.el.querySelector(".js-img-loading-img");
    this.bindEventListeners();
  }
  /**
   * Инициализация эвента загрузки изображения.
   *
   * @returns {void}
   */


  _createClass(ImgLoading, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      if (this.img.complete) {
        this.setLoadedClass();
      } else {
        this.img.addEventListener("load", this.setLoadedClass.bind(this));
      }
    }
    /**
     * Установить класс, что изображение загружено.
     *
     * @returns {void}
     */

  }, {
    key: "setLoadedClass",
    value: function setLoadedClass() {
      this.el.classList.add("loaded");
      this.el.classList.remove("js-img-loading");
    }
  }]);

  return ImgLoading;
}();

exports.ImgLoading = ImgLoading;
document.querySelectorAll(".js-img-loading").forEach(function (el) {
  return new ImgLoading(el);
});

/***/ }),

/***/ "./scripts/main/components/link-select.js":
/*!************************************************!*\
  !*** ./scripts/main/components/link-select.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkSelect = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Список выбора с загрузкой страницы при выборе варианта. */
var LinkSelect = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   *
   */
  function LinkSelect(el) {
    _classCallCheck(this, LinkSelect);

    this.el = el;
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов выбора значения.
   *
   * @returns {void}
   */


  _createClass(LinkSelect, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("change", function () {
        window.location.href = _this.el.value;
      });
    }
  }]);

  return LinkSelect;
}();

exports.LinkSelect = LinkSelect;
document.querySelectorAll(".js-link-select").forEach(function (el) {
  return new LinkSelect(el);
});

/***/ }),

/***/ "./scripts/main/components/masonry-grid.js":
/*!*************************************************!*\
  !*** ./scripts/main/components/masonry-grid.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _masonryLayout = _interopRequireDefault(__webpack_require__(/*! masonry-layout */ "../node_modules/masonry-layout/masonry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс подключения плагина для сетки фотографий https://masonry.desandro.com/extras.html. */
var MasonryGrid = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLFormElement} el Элемент.
   */
  function MasonryGrid(el) {
    _classCallCheck(this, MasonryGrid);

    this.el = el;
    this.prevScroll = null;
    this.initGrid();
    this.bindEventListeners();
  }
  /**
   * Инициализация грида с равномерным распределением картинок.
   * Ожидает загрузки всех картинок, иначе криво распределяет.
   *
   * @returns {void}
   */


  _createClass(MasonryGrid, [{
    key: "initGrid",
    value: function initGrid() {
      var _this = this;

      Promise.all(Array.from(this.el.querySelectorAll("img")).filter(function (img) {
        return !img.complete;
      }).map(function (img) {
        return new Promise(function (resolve) {
          img.onload = img.onerror = resolve;
        });
      })).then(function () {
        _this.masonryObj = new _masonryLayout["default"](_this.el, {
          itemSelector: ".js-masonry-grid-item",
          // use a separate class for itemSelector, other than .col-
          columnWidth: ".js-masonry-grid-sizer",
          percentPosition: true
        });

        if (_this.prevScroll) {
          document.documentElement.scrollTop = document.body.scrollTop = _this.prevScroll;
        }
      });
    }
    /**
     * Инициализация эвентов перерисовки сетки.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.el.addEventListener("masonryLayout", function () {
        _this2.prevScroll = document.documentElement.scrollTop || document.body.scrollTop;

        _this2.masonryObj.destroy();

        _this2.initGrid();
      });
    }
  }]);

  return MasonryGrid;
}();

exports["default"] = MasonryGrid;
window.addEventListener("load", function () {
  document.querySelectorAll(".js-masonry-grid").forEach(function (el) {
    return new MasonryGrid(el);
  });
}, false);
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/modal.js":
/*!******************************************!*\
  !*** ./scripts/main/components/modal.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _delay = __webpack_require__(/*! @main/consts/delay */ "./scripts/main/consts/delay.js");

var _getBtnFromTarget = __webpack_require__(/*! @main/utils/get-btn-from-target */ "./scripts/main/utils/get-btn-from-target.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Компонент модала. */
var Modal = /*#__PURE__*/function () {
  /**
   * Создаёт компонент модала.
   *
   * @param {HTMLElement} el Родительский элемент модала (элемент заднего фона).
   */
  function Modal(el) {
    _classCallCheck(this, Modal);

    this.el = el;
    this.name = this.el.dataset.modalName;
    this.bindEventListeners();

    if (this.el.classList.contains("js-modal-opened")) {
      Modal.open(this.el);
    }
  }
  /**
   * Вешает колбеки закрытия модала.
   *
   * @returns {void}
   */


  _createClass(Modal, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("click", function (e) {
        if (!e.target.closest(".js-modal-dialog") && !(0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-expanded-text") && !e.target.classList.contains("js-expanded-link")) {
          Modal.close(_this.el);
        }
      });
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("js-modal-close")) {
          var curModal = e.target.closest(".js-modal");

          if (curModal) {
            Modal.close(curModal);
          } else {
            Modal.close(_this.el);
          }
        } else {
          var btn = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-modal-open");

          if (btn && btn.dataset.modal === _this.name) {
            e.preventDefault();

            if (btn.classList.contains("js-close-other")) {
              document.querySelectorAll(".js-modal.visible").forEach(function (el) {
                return el.classList.remove("visible");
              });
            }

            Modal.open(_this.el);
          }
        }
      });
    }
    /**
     * Закрывает модал.
     *
     * @param {HTMLElement} modal Главный элемент модала.
     * @returns {void}
     */

  }], [{
    key: "close",
    value: function close(modal) {
      modal.classList.remove("visible");
      document.body.classList.remove("prevent-scroll");
    }
    /**
     * Открывает модал.
     *
     * @param {Element} modal Главный элемент модала.
     * @returns {void}
     */

  }, {
    key: "open",
    value: function open(modal) {
      modal.classList.add("visible");
      document.body.classList.add("prevent-scroll");
      var input = modal.querySelector("input");

      if (input) {
        input.focus();
      }

      if (modal.classList.contains("js-modal-autoclose")) {
        Modal.autoclose(modal);
      }
    }
    /**
     * Закрыть модал по таймауту.
     *
     * @param {Element} modal Главный элемент модала.
     * @returns {void}
     */

  }, {
    key: "autoclose",
    value: function autoclose(modal) {
      setTimeout(function () {
        Modal.close(modal);
      }, _delay.NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE);
    }
  }]);

  return Modal;
}();

exports.Modal = Modal;
document.querySelectorAll(".js-modal").forEach(function (el) {
  return new Modal(el);
});

/***/ }),

/***/ "./scripts/main/components/notification.js":
/*!*************************************************!*\
  !*** ./scripts/main/components/notification.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.string.link */ "../node_modules/core-js/modules/es.string.link.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = void 0;

var _delay = __webpack_require__(/*! @main/consts/delay */ "./scripts/main/consts/delay.js");

var _cookie = __webpack_require__(/*! @main/utils/cookie */ "./scripts/main/utils/cookie.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Всплывающее уведомление.
 */
var Notification = /*#__PURE__*/function () {
  /**
   * Создает компонент.
   *
   * @param {HTMLElement} el Элемент-уведомление.
   */
  function Notification(el) {
    _classCallCheck(this, Notification);

    this.el = el;
    this.type = this.el.dataset.type;
    this.cookieName = this.el.dataset.cookie;
    this.btnCookie = this.el.querySelector(".js-button-cookies");
    this.btnClose = this.el.querySelector(".js-notification-close");
    this.message = this.el.querySelector(".js-notification-message");
    this.link = this.el.querySelector(".js-notification-link");
    this.openBtn = document.querySelectorAll(".js-notification-button[data-type='" + this.type + "']");
    this.timer = null;
    this.bindEventListeners();
    this.autoShow();
    this.showByCookie();
  }
  /**
   * Показать плашку с уведомлением. Закртыть по таймауту, если нужно.
   *
   * @returns {void}
   */


  _createClass(Notification, [{
    key: "show",
    value: function show() {
      var _this = this;

      this.el.classList.add("visible");

      if (this.el.classList.contains("js-auto-close")) {
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          _this.close();
        }, _delay.NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE);
      }
    }
    /**
     * Показать плашку с уведомлением автоматически при загрузке страницы
     *
     * @returns {void}
     */

  }, {
    key: "autoShow",
    value: function autoShow() {
      if (this.el.classList.contains("js-auto-notification")) {
        this.show();
      }
    }
    /**
     * Показать плашку с уведомлением в зависимости от куки.
     *
     * @returns {void}
     */

  }, {
    key: "showByCookie",
    value: function showByCookie() {
      if (this.el.classList.contains("js-cookies-notification")) {
        if ((0, _cookie.getCookie)(this.cookieName) !== "accept") {
          this.show();
        }
      }
    }
    /**
     * Закрыть плашку с уведомлением.
     *
     * @returns {void}
     */

  }, {
    key: "close",
    value: function close() {
      this.el.classList.remove("visible");
    }
    /**
     * Обрабатываем клик. В случае если кликнули вне уведомления -
     * закрываем его. Если кликнули по кнопке - открываем
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      if (this.btnCookie) {
        this.btnCookie.addEventListener("click", function () {
          (0, _cookie.setCookie)(_this2.cookieName, "accept");

          _this2.close();
        });
      }

      if (this.btnClose) {
        this.btnClose.addEventListener("click", function () {
          _this2.close();
        });
      }

      if (this.openBtn.length) {
        this.openBtn.forEach(function (button) {
          button.addEventListener("click", function () {
            _this2.show();
          });
        });
      }

      document.addEventListener("click", function (e) {
        if (!e.target.classList.contains("js-notification-button") && !e.target.classList.contains("js-notification") && !e.target.closest(".js-notification") && !_this2.el.classList.contains("js-cookies-notification")) {
          _this2.close();
        }
      });
      this.el.addEventListener("showNotification", function (event) {
        _this2.message.textContent = event.detail.message;
        _this2.link.textContent = event.detail.link.title;
        _this2.link.href = event.detail.link.url;

        _this2.show();
      });
    }
  }]);

  return Notification;
}();

exports.Notification = Notification;
document.querySelectorAll(".js-notification").forEach(function (el) {
  return new Notification(el);
});

/***/ }),

/***/ "./scripts/main/components/page-nav.js":
/*!*********************************************!*\
  !*** ./scripts/main/components/page-nav.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageNav = void 0;

var _pagenav = _interopRequireDefault(__webpack_require__(/*! @partials/pagenav.handlebars */ "./partials/pagenav.handlebars"));

var _consts = __webpack_require__(/*! @main/consts */ "./scripts/main/consts/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PageNav = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLFormElement} el Элемент.
   * @param {settings} settings Параметры компонента.
   * @param {URLSearchParams} settings.urlParams Get-параметры запроса.
   * @param {string} settings.baseUrl Базовый урл.
   * @param {int} settings.pages Количество страниц.
   * @param {int} settings.page Текущая страница.
   *
   */
  function PageNav(el, settings) {
    _classCallCheck(this, PageNav);

    this.el = el;
    this.settings = settings;
    this.pageInput = document.querySelector(".js-filter-page");
    this.objResult = {
      prev: null,
      items: [],
      next: null
    };
    this.shiftStart = 0;
    this.shiftEnd = 0;
    this.printNav();
  }
  /**
   * Вывести пагинацию.
   *
   * @returns {void}
   */


  _createClass(PageNav, [{
    key: "printNav",
    value: function printNav() {
      this.settings.pages = Number(this.settings.pages);

      if (this.settings.pages > 1) {
        this.checkPage();
        this.makePrev();
        this.makeNext();
        this.makeOtherPages();
        this.el.innerHTML = (0, _pagenav["default"])(this.objResult);
        this.pageInput.value = this.settings.page;
      } else {
        this.el.innerHTML = "";
        this.pageInput.value = 1;
      }
    }
    /**
     * Проверить текущую страницу на доступность.
     *
     * @returns {void}
     */

  }, {
    key: "checkPage",
    value: function checkPage() {
      this.settings.page = Number(this.settings.page) || 0;

      if (this.settings.page < 1) {
        this.settings.page = 1;
      }

      if (this.settings.page > this.settings.pages) {
        this.settings.page = 1;
      }
    }
    /**
     * Задать урл кнопки предыдущая страница, если не первая странца текущая.
     *
     * @returns {void}
     */

  }, {
    key: "makePrev",
    value: function makePrev() {
      if (this.settings.page > 1) {
        this.objResult.prev = this.getLinkUrl(this.settings.page - 1);
      }
    }
    /**
     * Задать урл кнопки следующая страница, если не последняя страница текущая.
     *
     * @returns {void}
     */

  }, {
    key: "makeNext",
    value: function makeNext() {
      if (this.settings.page < this.settings.pages) {
        this.objResult.next = this.getLinkUrl(this.settings.page + 1);
      }
    }
    /**
     * Получить ссылку на страницу с параметрами.
     *
     * @param {int} pageNum Номер страницы.
     * @returns {string}
     */

  }, {
    key: "getLinkUrl",
    value: function getLinkUrl(pageNum) {
      this.settings.urlParams.set("page", pageNum);
      return this.settings.baseUrl + "?" + this.settings.urlParams.toString();
    }
    /**
     * Сформировать массив кнопок на остальные страницы.
     *
     * @returns {void}
     */

  }, {
    key: "makeOtherPages",
    value: function makeOtherPages() {
      this.calcCentralRange();
      this.objResult.items.push({
        url: this.getLinkUrl(1),
        active: 1 === this.settings.page,
        hiddenMd: this.settings.page > 2,
        separator: false,
        num: 1
      });

      if (this.shiftStart === 3) {
        this.objResult.items.push({
          url: this.getLinkUrl(2),
          active: 2 === this.settings.page,
          hiddenMd: this.settings.page > 3,
          separator: false,
          num: 2
        });
      } else if (this.shiftStart > 3) {
        this.objResult.items.push({
          url: "",
          active: false,
          hiddenMd: true,
          separator: true,
          num: ""
        });
      }

      for (var i = this.shiftStart; i <= this.shiftEnd; i++) {
        this.objResult.items.push({
          url: this.getLinkUrl(i),
          active: i === this.settings.page,
          separator: false,
          num: i
        });
      }

      var last_page = this.settings.pages - 1;

      if (this.shiftEnd === last_page - 1) {
        this.objResult.items.push({
          url: this.getLinkUrl(last_page),
          active: last_page === this.settings.page,
          hiddenMd: this.settings.page < last_page - 1,
          separator: false,
          num: last_page
        });
      } else if (this.shiftEnd < last_page) {
        this.objResult.items.push({
          url: "",
          active: false,
          hiddenMd: true,
          separator: true,
          num: ""
        });
      }

      this.objResult.items.push({
        url: this.getLinkUrl(this.settings.pages),
        active: this.settings.pages === this.settings.page,
        hiddenMd: this.settings.page < last_page,
        num: this.settings.pages,
        separator: false
      });
    }
    /**
     * Сколько показывать кнопок страниц до и после актуальной
     * Пример:
     * SPRED_PAGES = 2
     * Всего 9 страниц навигации и сейчас просматривают 5ю
     * 3 4 5 6 7
     * shiftStart = начало средней части (3 в этом примере)
     * shiftEnd = конец средней части (7 в этом примере)
     *
     *
     * @returns {void}
     *
     */

  }, {
    key: "calcCentralRange",
    value: function calcCentralRange() {
      this.shiftStart = Math.max(this.settings.page - _consts.SPRED_PAGES, 2);
      this.shiftEnd = Math.min(this.settings.page + _consts.SPRED_PAGES, this.settings.pages - 1);

      if (this.shiftEnd < _consts.SPRED_PAGES * 2) {
        this.shiftEnd = Math.min(_consts.SPRED_PAGES * 2, this.settings.pages - 1);
      }

      if (this.shiftEnd === this.settings.pages - 1 && this.shiftStart > 3) {
        this.shiftStart = Math.max(3, Math.min(this.settings.pages - _consts.SPRED_PAGES * 2 + 1, this.shiftStart));
      }
    }
  }]);

  return PageNav;
}();

exports.PageNav = PageNav;

/***/ }),

/***/ "./scripts/main/components/placeholder.js":
/*!************************************************!*\
  !*** ./scripts/main/components/placeholder.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент меняет placeholder у input по разрешению.
 */
var _require = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js"),
    md = _require.md;

var Placeholder = /*#__PURE__*/function () {
  /**
   * Создает компонент смены placeholder по разрешению.
   *
   * @param {HTMLElement} el - DOM элемент.
   */
  function Placeholder(el) {
    _classCallCheck(this, Placeholder);

    this.el = el;
    this.placeholder = this.el.getAttribute("placeholder");
    this.setPlaceholder();
    this.bindEventlisteners();
  }
  /**
   * Проверить разрешение и Установить placeholder
   *
   * @returns {void}
   */


  _createClass(Placeholder, [{
    key: "setPlaceholder",
    value: function setPlaceholder() {
      var newPlaceholder;

      if (window.innerWidth < md) {
        newPlaceholder = this.el.dataset.smallPlaceholder;
      } else {
        newPlaceholder = this.el.dataset.bigPlaceholder;
      }

      if (newPlaceholder !== this.placeholder && newPlaceholder) {
        this.el.setAttribute("placeholder", newPlaceholder);
        this.placeholder = newPlaceholder;
      }
    }
    /**
     * Событие изменения ширины окна
     *
     * @returns {void}
     */

  }, {
    key: "bindEventlisteners",
    value: function bindEventlisteners() {
      var _this = this;

      window.addEventListener("resize", function () {
        _this.setPlaceholder();
      });
    }
  }]);

  return Placeholder;
}();

document.querySelectorAll(".js-placeholder").forEach(function (el) {
  return new Placeholder(el);
});

/***/ }),

/***/ "./scripts/main/components/private-office/change-edo-status.js":
/*!*********************************************************************!*\
  !*** ./scripts/main/components/private-office/change-edo-status.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент выбора оператора ЭДО.
 */
var ChangeEdoStatusForm = /*#__PURE__*/function () {
  /**
   * Создается компонент формы выбора оператора ЭДО.
   *
   * @param {Element} el Форма.
   */
  function ChangeEdoStatusForm(el) {
    _classCallCheck(this, ChangeEdoStatusForm);

    this.el = el;
    this.formElement = this.el;
    this.form = new _form.Form(this.el);
    this.modal = this.el.closest(".js-modal");
    this.bindEventListeners();
  }
  /**
   * Отслеживание событий.
   *
   * @returns {void}
   */


  _createClass(ChangeEdoStatusForm, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("submit", function (e) {
        _this.form.submitFormWithModal(e, _this.modal);
      });
    }
  }]);

  return ChangeEdoStatusForm;
}();

document.querySelectorAll(".js-edo-status-form").forEach(function (el) {
  return new ChangeEdoStatusForm(el);
});

/***/ }),

/***/ "./scripts/main/components/private-office/change-email.js":
/*!****************************************************************!*\
  !*** ./scripts/main/components/private-office/change-email.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент изменения email в ЛК.
 */
var ChangeEmail = /*#__PURE__*/function () {
  /**
   * Создается компонент изменения email.
   *
   * @param {Element} el форма изменения email в ЛК.
   */
  function ChangeEmail(el) {
    var _this = this;

    _classCallCheck(this, ChangeEmail);

    this.submitChangeEmailForm = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (_this.form.isValid) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.form.submitFormWithModal(e, _this.modal);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = el;
    this.modal = this.el.closest(".js-modal");
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(ChangeEmail, [{
    key: "findElements",
    value: function findElements() {
      this.formElement = this.el;
      this.form = new _form.Form(this.formElement);
      this.buttonSubmit = this.el.querySelector(".js-change-email-submit");
    }
    /**
     * Отслеживание событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.formElement.addEventListener("submit", this.submitChangeEmailForm.bind(this));
      this.validateInputs(this.el);
    }
    /**
     * Проверяем валидность полей ввода
     *
     * @param {HTMLElement} form форма.
     * @returns {void}
     */

  }, {
    key: "validateInputs",
    value: function validateInputs(form) {
      var _this2 = this;

      var input = form.querySelector(".js-form-field-input");
      input.addEventListener("input", function () {
        var haveError = false;

        if (!(input.value && _this2.form.validateField(input))) {
          haveError = true;
        }

        if (haveError) {
          _this2.buttonSubmit.setAttribute("disabled", "disabled");
        } else {
          _this2.buttonSubmit.removeAttribute("disabled");
        }
      });
    }
    /**
     * Отправка формы изменения email.
     * Открыть модал при успешной отправке.
     * В случае ошибки открыть модал и вывести в него текст ошибки.
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @returns {void}
     */

  }]);

  return ChangeEmail;
}();

document.querySelectorAll(".js-change-email-form").forEach(function (el) {
  return new ChangeEmail(el);
});

/***/ }),

/***/ "./scripts/main/components/private-office/change-password.js":
/*!*******************************************************************!*\
  !*** ./scripts/main/components/private-office/change-password.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент установки нового пароля в личном кабинете.
 */
var ChangePassword = /*#__PURE__*/function () {
  /**
   * Создается компонент смены пароля в личном кабинете.
   *
   * @param {Element} el - элемент формы смены пароля.
   */
  function ChangePassword(el) {
    _classCallCheck(this, ChangePassword);

    this.el = el;
    this.formElement = this.el;
    this.form = new _form.Form(this.el);
    this.modal = this.el.closest(".js-modal");
    this.buttonSubmit = this.el.querySelector(".js-change-password-submit");
    this.bindEventListeners();
  }
  /**
   * Отслеживание событий.
   *
   * @returns {void}
   */


  _createClass(ChangePassword, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.formElement.addEventListener("submit", function (e) {
        _this.form.submitFormWithModal(e, _this.modal);
      });
    }
  }]);

  return ChangePassword;
}();

document.querySelectorAll(".js-change-password-form").forEach(function (el) {
  return new ChangePassword(el);
});

/***/ }),

/***/ "./scripts/main/components/private-office/index.js":
/*!*********************************************************!*\
  !*** ./scripts/main/components/private-office/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./change-edo-status */ "./scripts/main/components/private-office/change-edo-status.js");

__webpack_require__(/*! ./change-email */ "./scripts/main/components/private-office/change-email.js");

__webpack_require__(/*! ./change-password */ "./scripts/main/components/private-office/change-password.js");

/***/ }),

/***/ "./scripts/main/components/rename-form.js":
/*!************************************************!*\
  !*** ./scripts/main/components/rename-form.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenameForm = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _makeUrl = __webpack_require__(/*! @main/utils/make-url */ "./scripts/main/utils/make-url.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Форма для переименования коллекции. */
var RenameForm = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLFormElement} form Форма для смены имени.
   *
   */
  function RenameForm(form) {
    var _this = this;

    _classCallCheck(this, RenameForm);

    this.submitForm = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (_this.form.isValid) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return _axios["default"].patch(_this.url, {
                  name: _this.inputName.value
                });

              case 6:
                window.location.reload();
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);

                if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                  _this.error.innerHTML = _context.t0.response.data.message;
                } else {
                  _this.error.innerHTML = _messages.ERROR_DEFAULT;
                  console.log(_context.t0);
                }

              case 12:
                return _context.abrupt("return", false);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.formElement = form;
    this.form = new _form.Form(this.formElement);
    this.inputName = this.formElement.querySelector(".js-rename-name-input");
    this.inputId = this.formElement.querySelector(".js-rename-id-input");
    this.btnRenameOpen = document.querySelectorAll(".js-rename-btn");
    this.error = this.formElement.querySelector(".js-form-error-field");
    this.url = null;
    this.bindEventListeners();
  }
  /**
   * Инициализация открытия окна переименования и отправки формы.
   *
   * @returns {void}
   */


  _createClass(RenameForm, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.btnRenameOpen.forEach(function (btn) {
        btn.addEventListener("click", function () {
          _this2.inputName.value = btn.dataset.name;
          _this2.url = (0, _makeUrl.makeUrl)("/collection/:collection_id/", {
            ":collection_id": btn.dataset.id
          });
        });
      });
      this.formElement.addEventListener("submit", this.submitForm.bind(this));
    }
    /**
     * Отправка формы с новым имененем. В случае успеха - перезагрузить страницу
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @returns {void}
     */

  }]);

  return RenameForm;
}();

exports.RenameForm = RenameForm;
document.querySelectorAll(".js-rename-form").forEach(function (el) {
  return new RenameForm(el);
});

/***/ }),

/***/ "./scripts/main/components/scroll-with-blur.js":
/*!*****************************************************!*\
  !*** ./scripts/main/components/scroll-with-blur.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollWithBlur = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** При горизонтальном скролле содержимого элемента до конца
 *  убираем полупрозрачный псевдоэлемент,
 * заблюривающий его край.
 * */
var ScrollWithBlur = /*#__PURE__*/function () {
  // скрытие блюра происходит на 5px раньше, чем содержимое элемента доскролено до конца

  /**
   * Конструктор класса.
   *
   * @param {HTMLDivElement} el элемент с горизонтальным скроллом содержимого.
   */
  function ScrollWithBlur(el) {
    _classCallCheck(this, ScrollWithBlur);

    this.el = el;
    this.blurContainer = this.el.closest(".js-scroll-and-blur-container");
    this.bindEventListeners();
    this.addAndRemoveBlur();
  }
  /**
   * Отслеживание событий.
   *
   * @returns {void}
   */


  _createClass(ScrollWithBlur, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("scroll", function () {
        _this.addAndRemoveBlur();
      });
      this.el.addEventListener("updateBlurScroll", function () {
        _this.addAndRemoveBlur();
      });
    }
    /**
     * Убираем/добавляем блюр в конце элемента.
     *
     * @returns {void}
     */

  }, {
    key: "addAndRemoveBlur",
    value: function addAndRemoveBlur() {
      if (this.isEndOfElement()) {
        this.blurContainer.classList.add("blur-hidden");
      } else {
        this.blurContainer.classList.remove("blur-hidden");
      }
    }
    /**
     * Проверяем, достигли ли мы конца элемента.
     *
     * @returns {boolean}
     */

  }, {
    key: "isEndOfElement",
    value: function isEndOfElement() {
      if (this.el.scrollWidth > this.el.clientWidth) {
        return this.el.scrollWidth <= this.el.scrollLeft + this.el.clientWidth + ScrollWithBlur.SCROLL_WIDTH_ADDITION;
      }

      if (this.el.scrollHeight > this.el.clientHeight) {
        return this.el.scrollHeight <= this.el.scrollTop + this.el.clientHeight + ScrollWithBlur.SCROLL_WIDTH_ADDITION;
      }

      return true;
    }
  }]);

  return ScrollWithBlur;
}();

exports.ScrollWithBlur = ScrollWithBlur;
ScrollWithBlur.SCROLL_WIDTH_ADDITION = 5;
document.querySelectorAll(".js-scroll-and-blur").forEach(function (el) {
  return new ScrollWithBlur(el);
});

/***/ }),

/***/ "./scripts/main/components/show-more.js":
/*!**********************************************!*\
  !*** ./scripts/main/components/show-more.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _photo = _interopRequireDefault(__webpack_require__(/*! @partials/photo.handlebars */ "./partials/photo.handlebars"));

var _imgLoading = __webpack_require__(/*! @main/components/img-loading */ "./scripts/main/components/img-loading.js");

var _tooltip = __webpack_require__(/*! @main/components/tooltip */ "./scripts/main/components/tooltip.js");

var _payment = _interopRequireDefault(__webpack_require__(/*! @partials/payment.handlebars */ "./partials/payment.handlebars"));

var _colsItems = _interopRequireDefault(__webpack_require__(/*! @main/components/cols-items */ "./scripts/main/components/cols-items.js"));

var _downloadLink = __webpack_require__(/*! @main/components/download-link */ "./scripts/main/components/download-link.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShowMore = /*#__PURE__*/function () {
  /**
   * Создает компонент кнопки показать еще.
   *
   * @param {HTMLElement} el - DOM элемент.
   */
  function ShowMore(el) {
    var _this = this;

    _classCallCheck(this, ShowMore);

    this.sendData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var params, response, _e$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.el.classList.contains("waiting")) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this.el.classList.add("waiting");

              params = {
                page: _this.page + 1
              };
              _context.prev = 4;
              _context.prev = 5;
              _context.next = 8;
              return (0, _axios["default"])({
                url: _this.url,
                params: params,
                method: "get"
              });

            case 8:
              response = _context.sent;

              _this.showResult(response.data);

              _this.checkLastPage(response.data);

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);

              if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                _this.showError(_context.t0.response.data.message);
              } else {
                _this.showError(_messages.ERROR_DEFAULT);

                console.log(_context.t0);
              }

            case 16:
              _context.prev = 16;

              _this.el.classList.remove("waiting");

              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4,, 16, 19], [5, 13]]);
    }));
    this.el = el;
    this.type = el.dataset.type;
    this.url = el.dataset.url;
    this.scroll = el.dataset.scroll;
    this.page = Number(el.dataset.page);
    this.list = document.querySelector(".js-show-more-list[data-type='" + this.type + "']");
    this.error = document.querySelector(".js-show-more-error[data-type='" + this.type + "']");
    this.slider = document.querySelector(".js-fast-slider");
    this.bindEventlisteners();
    this.autoloadFirstPage();
  }
  /**
   * По клику на кнопку отправлять запрос.
   *
   * @returns {void}
   */


  _createClass(ShowMore, [{
    key: "bindEventlisteners",
    value: function bindEventlisteners() {
      var _this2 = this;

      this.el.addEventListener("click", function (e) {
        e.preventDefault();

        _this2.sendData();
      });
    }
    /**
     * Подгружаем первую страницу аяксом по классу js-show-more-autoload.
     *
     * @returns {void}
     */

  }, {
    key: "autoloadFirstPage",
    value: function autoloadFirstPage() {
      if (this.el.classList.contains("js-show-more-autoload")) {
        this.el.click();
      }
    }
    /**
     * Отправить запрос для получения следующей страницы
     *
     * @returns {void}
     */

  }, {
    key: "showResult",

    /**
     * Добавить новые элементы в список по шаблону в зависимости от типа
     *
     * @param {object} data - Данные с сервера.
     * @returns {void}
     */
    value: function showResult(data) {
      switch (this.type) {
        case "photo":
          this.showPhotoSets(data);
          break;

        case "payments":
          this.list.insertAdjacentHTML("beforeend", (0, _payment["default"])({
            items: data.items
          }));
          break;

        case "gallery-item":
          this.showGalleryItems(data);
          break;
      }
    }
    /**
     * Добавить новые элементы в список съемок.
     *
     * @param {object} data - Данные с сервера.
     * @returns {void}
     */

  }, {
    key: "showPhotoSets",
    value: function showPhotoSets(data) {
      this.list.insertAdjacentHTML("beforeend", (0, _photo["default"])({
        items: data.items
      }));
      this.list.querySelectorAll(".js-img-loading").forEach(function (el) {
        return new _imgLoading.ImgLoading(el);
      });
    }
    /**
     * Добавить новые элементы в список фотографий
     *
     * @param {object} data - Данные с сервера.
     * @returns {void}
     */

  }, {
    key: "showGalleryItems",
    value: function showGalleryItems(data) {
      var objColsItems = new _colsItems["default"](this.list, data.items);
      objColsItems.spreadItems();

      if (this.slider) {
        this.slider.dispatchEvent(new CustomEvent("updateSlider", {
          detail: data.items
        }));
      }

      this.list.querySelectorAll(".js-tooltip").forEach(function (el) {
        return new _tooltip.Tooltip(el);
      });
      this.list.querySelectorAll(".js-download-link").forEach(function (el) {
        return new _downloadLink.DownloadLink(el);
      });
    }
    /**
     * Удалить кнопку если страниц больше нет
     *
     * @returns {void}
     */

  }, {
    key: "checkLastPage",
    value: function checkLastPage(data) {
      this.page++;

      if (Number(data.pages) <= this.page) {
        this.el.remove();
      }
    }
    /**
     * Вывести ошибку отправки запроса
     *
     * @returns {void}
     */

  }, {
    key: "showError",
    value: function showError(error) {
      if (this.error) {
        this.error.innerHTML = error;
      } else {
        alert(error);
      }
    }
  }]);

  return ShowMore;
}();

document.querySelectorAll(".js-show-more").forEach(function (el) {
  return new ShowMore(el);
});

/***/ }),

/***/ "./scripts/main/components/tabs.js":
/*!*****************************************!*\
  !*** ./scripts/main/components/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "../node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.reduce */ "../node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties */ "../node_modules/core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "../node_modules/core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент переключения вкладок.
 */
var Tabs = /*#__PURE__*/function () {
  /**
   * Вкладки компонента.
   *
   * @type {{String : {button: HTMLButtonElement, content: HTMLElement}}} объект с существующими вкладками,
   *  группирует кнопку переключения и сам контент этой вкладки
   * @private
   */

  /**
   * @type {{button: HTMLButtonElement, content: HTMLElement}} элементы активной вкладки
   * @private
   */

  /**
   * Создает компонент переключения вкладок.
   *
   * @param {HTMLElement} el - Родительский элемент кнопок вкладок.
   */
  function Tabs(el) {
    _classCallCheck(this, Tabs);

    this.tabs = void 0;
    this.active = void 0;
    this.el = el;
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск вкладок, соответствующих кнопкам и сохранение в объекте.
   *
   * @returns {void}
   */


  _createClass(Tabs, [{
    key: "findElements",
    value: function findElements() {
      var tabContentGroup = document.querySelector(".js-tabs-group[data-tab-group=\"".concat(this.el.getAttribute("data-group-target"), "\"]"));
      var tabContentList = Array.from(tabContentGroup.querySelectorAll(".js-tabs-content"));
      var tabButtons = Array.from(this.el.querySelectorAll(".js-tabs-button"));
      this.tabs = tabButtons.reduce(function (acc, tabButton) {
        var key = tabButton.dataset.entityType;
        var linkedTabContent = tabContentList.find(function (tabContent) {
          return tabContent.dataset.entityType === key;
        });
        var tabRadio = tabButton.querySelector(".js-tab-radio");

        if (linkedTabContent) {
          return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, {
            button: tabButton,
            content: linkedTabContent,
            radio: tabRadio
          }));
        }

        return acc;
      }, {});
      this.active = {
        button: this.el.querySelector(".js-tabs-button.active"),
        content: tabContentGroup.querySelector(".js-tabs-content.active"),
        radio: this.el.querySelector(".js-tabs-button.active .js-tab-radio")
      };
    }
    /**
     * Вешает коллбэк нажатия на кнопки вкладок.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      Object.keys(this.tabs).forEach(function (key) {
        var _this$tabs$key;

        return (_this$tabs$key = _this.tabs[key]) === null || _this$tabs$key === void 0 ? void 0 : _this$tabs$key.button.addEventListener("click", function () {
          var _this$active$button, _this$active$content, _this$active$button2, _this$active$content2;

          (_this$active$button = _this.active.button) === null || _this$active$button === void 0 ? void 0 : _this$active$button.classList.remove("active");
          (_this$active$content = _this.active.content) === null || _this$active$content === void 0 ? void 0 : _this$active$content.classList.remove("active");

          var radioButtons = _this.el.querySelectorAll(".js-tab-radio");

          if (radioButtons.length) {
            radioButtons.forEach(function (radio) {
              radio.checked = false;
            });
          }

          _this.active = _this.tabs[key];
          (_this$active$button2 = _this.active.button) === null || _this$active$button2 === void 0 ? void 0 : _this$active$button2.classList.add("active");
          (_this$active$content2 = _this.active.content) === null || _this$active$content2 === void 0 ? void 0 : _this$active$content2.classList.add("active");

          if (_this.active.radio) {
            _this.active.radio.checked = true;
          }
        });
      });
    }
  }]);

  return Tabs;
}();

document.querySelectorAll(".js-tabs").forEach(function (el) {
  return new Tabs(el);
});

/***/ }),

/***/ "./scripts/main/components/toggle-menu.js":
/*!************************************************!*\
  !*** ./scripts/main/components/toggle-menu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

var _media = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js");

var _getBtnFromTarget = __webpack_require__(/*! @main/utils/get-btn-from-target */ "./scripts/main/utils/get-btn-from-target.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToggleMenu = /*#__PURE__*/function () {
  /**
   * Создает компонент, который открывает/закрывает меню.
   *
   */
  function ToggleMenu() {
    _classCallCheck(this, ToggleMenu);

    this.bindEventlisteners();
  }
  /**
   * Событие клика на документ
   *
   * @returns {void}
   */


  _createClass(ToggleMenu, [{
    key: "bindEventlisteners",
    value: function bindEventlisteners() {
      var _this = this;

      document.addEventListener("click", function (e) {
        var btn = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-toggle-menu");

        if (btn) {
          e.preventDefault();

          if (document.body.classList.contains("menu-opened")) {
            _this.closeMenu();
          } else {
            _this.openMenu(btn);
          }
        } else if (!(0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-menu")) {
          _this.closeMenu();
        }
      });
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      if (window.innerWidth < _media.md) {
        document.body.classList.remove("prevent-scroll");
      }

      document.body.classList.remove("menu-opened");
      document.querySelectorAll(".js-menu").forEach(function (menu) {
        return menu.classList.remove("opened");
      });
    }
  }, {
    key: "openMenu",
    value: function openMenu(btn) {
      var type = btn.dataset.type;
      var menus = document.querySelectorAll(".js-menu[data-type='" + type + "']");

      if (window.innerWidth < _media.md) {
        document.body.classList.add("prevent-scroll");
      }

      document.body.classList.add("menu-opened");
      menus.forEach(function (menu) {
        return menu.classList.add("opened");
      });
    }
  }]);

  return ToggleMenu;
}();

new ToggleMenu();

/***/ }),

/***/ "./scripts/main/components/tooltip.js":
/*!********************************************!*\
  !*** ./scripts/main/components/tooltip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

var _tippy = _interopRequireDefault(__webpack_require__(/*! tippy.js */ "../node_modules/tippy.js/dist/tippy.esm.js"));

var _tooltip = _interopRequireDefault(__webpack_require__(/*! @partials/tooltip.handlebars */ "./partials/tooltip.handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** 
 * Компонент тултип.
 */
var Tooltip = /*#__PURE__*/function () {
  /**
   * Создает компонент тултипа.
   *
   * @param {HTMLElement} el - DOM элемент.
   */
  function Tooltip(el) {
    var _this$el$querySelecto;

    _classCallCheck(this, Tooltip);

    this.el = el;
    var contentHtml = (_this$el$querySelecto = this.el.querySelector(".js-tooltip-content")) === null || _this$el$querySelecto === void 0 ? void 0 : _this$el$querySelecto.innerHTML;
    var content = (0, _tooltip["default"])({
      title: this.el.dataset.title,
      text: this.el.dataset.text
    });

    if (contentHtml) {
      content = contentHtml;
    }

    this.tippy = (0, _tippy["default"])(this.el, {
      theme: this.el.dataset.theme,
      content: content,
      allowHTML: true,
      maxWidth: 385,
      placement: this.el.dataset.placement || "top",
      popperOptions: {
        strategy: "fixed",
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: ["top", "right", "left"]
          }
        }, {
          name: "preventOverflow",
          options: {
            altAxis: true,
            tether: false
          }
        }]
      },
      onCreate: function onCreate(instance) {
        if (!instance.reference.classList.contains("js-subscriptions-form")) {
          return;
        }

        instance.setProps({
          showOnCreate: true,
          trigger: "manual",
          placement: "bottom-start",
          hideOnClick: false,
          appendTo: instance.reference
        });

        if (window.innerWidth >= 768) {
          instance.setProps({
            placement: "right-start"
          });
        }

        instance.show();
      }
    });
    this.bindEventListeners();
  }
  /**
   * Отслеживание событий.
   *
   * @returns {void}
   */


  _createClass(Tooltip, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      document.querySelector("body").addEventListener("scroll", function () {
        _this.hideTooltipOnScroll();
      });
    }
    /**
     * Скрываем тултип при прокрутке.
     *
     * @returns {void}
     */

  }, {
    key: "hideTooltipOnScroll",
    value: function hideTooltipOnScroll() {
      this.tippy.hide();
    }
  }]);

  return Tooltip;
}();

exports.Tooltip = Tooltip;
document.querySelectorAll(".js-tooltip").forEach(function (el) {
  return new Tooltip(el);
});

/***/ }),

/***/ "./scripts/main/consts/delay.js":
/*!**************************************!*\
  !*** ./scripts/main/consts/delay.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODAL_WAIT_TIMEOUT = exports.WINDOW_RESIZE_TIMEOUT = exports.NOTIFICATION_TIMEOUT_SHOW_INFO_MESSAGE = exports.NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE = void 0;

/**
 * @type {{Number}} Время, через которое будет скрыта плашка с уведомлением
 */
var NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE = 5000;
/**
 * @type {{Number}} Время, через которое будет автоматически показана плашка с уведомлением
 */

exports.NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE = NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE;
var NOTIFICATION_TIMEOUT_SHOW_INFO_MESSAGE = 3000;
/**
 * @type {{Number}} Время таймаута на ресайз окна
 */

exports.NOTIFICATION_TIMEOUT_SHOW_INFO_MESSAGE = NOTIFICATION_TIMEOUT_SHOW_INFO_MESSAGE;
var WINDOW_RESIZE_TIMEOUT = 100;
/**
 * @type {{Number}} Время таймаута для прорисовки модала
 */

exports.WINDOW_RESIZE_TIMEOUT = WINDOW_RESIZE_TIMEOUT;
var MODAL_WAIT_TIMEOUT = 201;
exports.MODAL_WAIT_TIMEOUT = MODAL_WAIT_TIMEOUT;

/***/ }),

/***/ "./scripts/main/consts/index.js":
/*!**************************************!*\
  !*** ./scripts/main/consts/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEBOUNCE_WAIT_MS = exports.SPRED_PAGES = exports.CONTAINER_PADDING = exports.MAX_DATE_LENGHT = void 0;
var MAX_DATE_LENGHT = 10;
exports.MAX_DATE_LENGHT = MAX_DATE_LENGHT;
var CONTAINER_PADDING = 16;
/**
 * Сколько показывать кнопок страниц в постраничной навигации до и после актуальной
 * Пример:
 * SPRED_PAGES = 2
 * Всего 9 страниц навигации и сейчас просматривают 5ю
 * 1 ... 3 4 5 6 7 ... 9
 * */

exports.CONTAINER_PADDING = CONTAINER_PADDING;
var SPRED_PAGES = 2; //autocomplete

exports.SPRED_PAGES = SPRED_PAGES;
var DEBOUNCE_WAIT_MS = 1000;
exports.DEBOUNCE_WAIT_MS = DEBOUNCE_WAIT_MS;

/***/ }),

/***/ "./scripts/main/consts/media.js":
/*!**************************************!*\
  !*** ./scripts/main/consts/media.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.md = void 0;
var md = 1080;
exports.md = md;

/***/ }),

/***/ "./scripts/main/consts/messages.js":
/*!*****************************************!*\
  !*** ./scripts/main/consts/messages.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_DEFAULT = void 0;
var ERROR_DEFAULT = "\n\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A...\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.\n";
exports.ERROR_DEFAULT = ERROR_DEFAULT;

/***/ }),

/***/ "./scripts/main/consts/regex.js":
/*!**************************************!*\
  !*** ./scripts/main/consts/regex.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PASSWORD_REGEX_UPPER = exports.PASSWORD_REGEX = exports.FORMAT_DATE_REGEX = exports.FORMAT_NUMBER_REGEX = exports.NUMBER_REGEX = exports.EMAIL_REGEX = exports.DIGITS_WITH_POINT_REGEX = exports.WITHOUT_DIGITS_REGEX = void 0;
var WITHOUT_DIGITS_REGEX = /\D/g;
exports.WITHOUT_DIGITS_REGEX = WITHOUT_DIGITS_REGEX;
var DIGITS_WITH_POINT_REGEX = /\d*\.?\d*/;
exports.DIGITS_WITH_POINT_REGEX = DIGITS_WITH_POINT_REGEX;
var EMAIL_REGEX = /^((([0-9A-Za-z]{1})|([0-9A-Za-z]{1}[\x2D\.0-9A-z]+[0-9A-Za-z]{1})|([0-9\u0410-\u044F]{1})|([0-9\u0410-\u044F]{1}[\x2D\.0-9\u0410-\u044F]+[0-9\u0410-\u044F]{1}))@([\x2DA-Za-z]+\.){1,2}[\x2DA-Za-z]{2,})$/;
exports.EMAIL_REGEX = EMAIL_REGEX;
var NUMBER_REGEX = /^\d+$/;
exports.NUMBER_REGEX = NUMBER_REGEX;
var FORMAT_NUMBER_REGEX = /\B(?=(\d{3})+(?!\d))/g;
exports.FORMAT_NUMBER_REGEX = FORMAT_NUMBER_REGEX;
var FORMAT_DATE_REGEX = /[^0-9.]+/g;
exports.FORMAT_DATE_REGEX = FORMAT_DATE_REGEX;
var PASSWORD_REGEX = /[a-zA-Zа-яА-я]/;
exports.PASSWORD_REGEX = PASSWORD_REGEX;
var PASSWORD_REGEX_UPPER = /[A-ZА-Я]/;
exports.PASSWORD_REGEX_UPPER = PASSWORD_REGEX_UPPER;

/***/ }),

/***/ "./scripts/main/utils/cookie.js":
/*!**************************************!*\
  !*** ./scripts/main/utils/cookie.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "../node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = exports.getCookie = void 0;

var getCookie = function getCookie(name) {
  /* eslint-disable */
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
  /* eslint-enable */
};

exports.getCookie = getCookie;

var setCookie = function setCookie(name, value) {
  value = encodeURIComponent(value);
  document.cookie = name + "=" + value + ";path=/";
};

exports.setCookie = setCookie;

/***/ }),

/***/ "./scripts/main/utils/date-input-mask.js":
/*!***********************************************!*\
  !*** ./scripts/main/utils/date-input-mask.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateInputMask = void 0;

var _regex = __webpack_require__(/*! @main/consts/regex */ "./scripts/main/consts/regex.js");

/**
 * Маска ввода даты.
 *
 * @param {HTMLInputElement} input - Элемент ввода.
 */
var dateInputMask = function dateInputMask(input) {
  input.addEventListener("input", function () {
    var prefix = input.dataset.prefix || "";
    input.value = input.value.replace(prefix, "").replace(_regex.WITHOUT_DIGITS_REGEX, "");
    var len = input.value.length;

    if (len >= 2) {
      var day = input.value.slice(0, 2);
      var month = input.value.slice(2, 4);
      var year = input.value.slice(4, 8);

      if (Number(day) > 31) {
        day = 31;
      }

      if (Number(month) > 12) {
        month = 12;
      }

      input.value = day;

      if (month) {
        input.value = day + "." + month;
      }

      if (year) {
        input.value = day + "." + month + "." + year;
      }
    }

    input.value = prefix + input.value;
  });
};

exports.dateInputMask = dateInputMask;

/***/ }),

/***/ "./scripts/main/utils/file-size-format.js":
/*!************************************************!*\
  !*** ./scripts/main/utils/file-size-format.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormattedFileSize = exports.getSizeInMB = exports.getSizeInKB = void 0;

/**
 * Преобразует байты в килобайты.
 *
 * @param {number} bytes Размер файла в байтах.
 * @returns {number} Размер файла в килобайтах.
 */
var getSizeInKB = function getSizeInKB(bytes) {
  return Math.round(bytes * 100 / 1024) / 100;
};
/**
 * Преобразует байты в мегабайты.
 *
 * @param {number} bytes Размер файла в байтах.
 * @returns {number} Размер файла в мегабайтах.
 */


exports.getSizeInKB = getSizeInKB;

var getSizeInMB = function getSizeInMB(bytes) {
  return Math.round(getSizeInKB(bytes) * 100 / 1024) / 100;
};
/**
 * Преобразует байты в человекопонятный вид.
 *
 * @param {number} bytes Размер файла в байтах.
 * @returns {string} Размер файла в мегабайтах.
 */


exports.getSizeInMB = getSizeInMB;

var getFormattedFileSize = function getFormattedFileSize(bytes) {
  var sizeInKB = getSizeInKB(bytes);

  if (sizeInKB < 500) {
    return "".concat(sizeInKB, " \u041A\u0411");
  } else {
    return "".concat(getSizeInMB(bytes), " \u041C\u0411");
  }
};

exports.getFormattedFileSize = getFormattedFileSize;

/***/ }),

/***/ "./scripts/main/utils/get-btn-from-target.js":
/*!***************************************************!*\
  !*** ./scripts/main/utils/get-btn-from-target.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBtnFromTarget = void 0;

/**
 * Проверить таргет клика на нужный класс.
 *
 * @param {EventTarget} target Элемент, по которому кликнули.
 * @param {string} className Имя класса для проверки.
 *
 * @returns {HTMLElement || null} btn Вернуть кнопку или ничего, если цель не та.
 */
var getBtnFromTarget = function getBtnFromTarget(target, className) {
  var btn = null;

  if (target.classList.contains(className)) {
    btn = target;
  } else {
    btn = target.closest("." + className);
  }

  return btn;
};

exports.getBtnFromTarget = getBtnFromTarget;

/***/ }),

/***/ "./scripts/main/utils/make-url.js":
/*!****************************************!*\
  !*** ./scripts/main/utils/make-url.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.join */ "../node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUrl = void 0;

/**
 * Заменить параметры в URL на ID
 *
 * @param {string} url - URL-шаблон.
 * @param {object} mapObj - Объект параметров для замены mapObj = {":collection_id":"1234",":image_id":"12345"};.
 *
 * @returns {string} Результат подстаноки.
 */
var makeUrl = function makeUrl(url, mapObj) {
  var regExpression = new RegExp(Object.keys(mapObj).join("|"), "gi");
  return url.replace(regExpression, function (matched) {
    return mapObj[matched];
  });
};

exports.makeUrl = makeUrl;

/***/ }),

/***/ "./scripts/main/utils/numberFormat.js":
/*!********************************************!*\
  !*** ./scripts/main/utils/numberFormat.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed */ "../node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "../node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFixAfterPoint = exports.getRealNumber = exports.priceFormat = exports.numberFormat = exports.replaceBadInNumber = void 0;

var _regex = __webpack_require__(/*! @main/consts/regex */ "./scripts/main/consts/regex.js");

/**
 * Удаляет лишние символы из числа.
 *
 * @param {string} str Строка для форматирования.
 * @returns {string} Число.
 */
var replaceBadInNumber = function replaceBadInNumber(str) {
  var last = "";
  var match = str.replace(",", ".").replace(" ", "").match(_regex.DIGITS_WITH_POINT_REGEX);

  if (match || str === "") {
    last = match ? match[0] : "";
  }

  return last;
};
/**
 * Преобразует 10000 -> 10 000.
 *
 * @param {string} str Строка для форматирования.
 * @returns {string} 10000 -> 10 000.
 */


exports.replaceBadInNumber = replaceBadInNumber;

var numberFormat = function numberFormat(str) {
  return replaceBadInNumber(str).replace(_regex.FORMAT_NUMBER_REGEX, " ");
};
/**
 * Преобразует 10000 -> 10 000 ₽.
 *
 * @param {string} price Строка для форматирования.
 * @returns {string} 10000 -> 10 000 ₽.
 */


exports.numberFormat = numberFormat;

var priceFormat = function priceFormat(price) {
  var formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
  });
  return formatter.format(Number(price));
};
/**
 * Преобразует 10 000 -> 10000.
 *
 * @param {string} str Строка для форматирования.
 * @returns {number} 10 000 -> 10000.
 */


exports.priceFormat = priceFormat;

var getRealNumber = function getRealNumber(str) {
  return Number(replaceBadInNumber(str));
};
/**
 * Преобразует 24.7799999 -> 24.78 && 24.00 -> 24.
 *
 * @param {number} number Число для форматирования.
 * @returns {string} 24.7799999 -> 24.78.
 */


exports.getRealNumber = getRealNumber;

var toFixAfterPoint = function toFixAfterPoint(number) {
  return number.toFixed(2).replace(".00", "");
};

exports.toFixAfterPoint = toFixAfterPoint;

/***/ }),

/***/ "./scripts/std/app.ts":
/*!****************************!*\
  !*** ./scripts/std/app.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "../node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "../node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _urijs = _interopRequireDefault(__webpack_require__(/*! urijs */ "../node_modules/urijs/src/URI.js"));

var _guards = __webpack_require__(/*! @std/guards */ "./scripts/std/guards.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, App);

    this.config = {};
    this.loadConfig(config);
  }

  _createClass(App, [{
    key: "loadConfig",
    value: function loadConfig(config) {
      this.config = config;
    }
  }, {
    key: "getOption",
    value: function getOption(optionName, defaultValue) {
      var optionPath = optionName.split(".");
      var option = this.config;

      var _iterator = _createForOfIteratorHelper(optionPath),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          if ((0, _guards.isJsonMap)(option)) {
            option = option[key];
          } else if (defaultValue) {
            return defaultValue;
          } else {
            throw new Error("\u041E\u043F\u0446\u0438\u044F ".concat(optionName, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430."));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return option;
    }
    /**
     * @param {string} url
     * @param {string} lang
     * @return {string}
     */

  }, {
    key: "getUrl",
    value: function getUrl(url) {
      var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BX.message("LANGUAGE_ID");
      var uri = (0, _urijs["default"])(url);
      var segments = uri.segment();
      var languages = this.getOption("loc.languages");

      if (!languages || _typeof(languages) !== "object") {
        throw new Error("Не определены поддерживаемые сайтом языки.");
      }

      var languageCodes = Object.keys(languages);

      if (segments && ~languageCodes.indexOf(segments[0])) {
        segments.shift();
      }

      if (lang !== this.getOption("loc.default_language")) {
        segments.unshift(lang);
      }

      uri.segment(segments);
      return uri.toString();
    }
  }]);

  return App;
}();

exports.App = App;

/***/ }),

/***/ "./scripts/std/guards.ts":
/*!*******************************!*\
  !*** ./scripts/std/guards.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isJsonMap = isJsonMap;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isJsonMap(object) {
  return object && _typeof(object) === "object" && !Array.isArray(object);
}

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./main.js */"./main.js");


/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=main.js.map