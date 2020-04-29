(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr>\n    <td><a href='http://"
    + alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"localhostname") : depths[1]), depth0))
    + ":"
    + alias1(((helper = (helper = lookupProperty(helpers,"port") || (depth0 != null ? lookupProperty(depth0,"port") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"port","hash":{},"data":data,"loc":{"start":{"line":4,"column":45},"end":{"line":4,"column":53}}}) : helper)))
    + "'>"
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":55},"end":{"line":4,"column":63}}}) : helper)))
    + "</a></td>\n    <td>:"
    + alias1(((helper = (helper = lookupProperty(helpers,"port") || (depth0 != null ? lookupProperty(depth0,"port") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"port","hash":{},"data":data,"loc":{"start":{"line":5,"column":9},"end":{"line":5,"column":17}}}) : helper)))
    + "</td>\n    <td>\n        <label class=\"switch\">\n            <input type=\"checkbox\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias2,(depth0 != null ? lookupProperty(depth0,"state") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":35},"end":{"line":8,"column":62}}})) != null ? stack1 : "")
    + " onchange=\"set_app_state('"
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":88},"end":{"line":8,"column":96}}}) : helper)))
    + "', this.checked)\">\n            <span class=\"slider\"></span>\n        </label>\n    </td>\n</tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr>\n    <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (depth0 != null ? lookupProperty(depth0,"key") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":21,"column":15}}}) : helper)))
    + "</td>\n    <td><code>"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":22,"column":14},"end":{"line":22,"column":23}}}) : helper)))
    + "</code></td>\n</tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table style=\"width:100%;\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"apps") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":13,"column":10}}})) != null ? stack1 : "")
    + "</table>\n<hr>\n<h2>RPi4 controller</h2>\n<br>\n<table style=\"width:100%\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"other_data") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":24,"column":10}}})) != null ? stack1 : "")
    + "</table>";
},"useData":true,"useDepths":true});
templates['.ipynb_checkpoints/index-checkpoint'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr>\n    <td><a href='http://"
    + alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"localhostname") : depths[1]), depth0))
    + ":"
    + alias1(((helper = (helper = lookupProperty(helpers,"port") || (depth0 != null ? lookupProperty(depth0,"port") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"port","hash":{},"data":data,"loc":{"start":{"line":4,"column":45},"end":{"line":4,"column":53}}}) : helper)))
    + "'>"
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":55},"end":{"line":4,"column":63}}}) : helper)))
    + "</a></td>\n    <td>:"
    + alias1(((helper = (helper = lookupProperty(helpers,"port") || (depth0 != null ? lookupProperty(depth0,"port") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"port","hash":{},"data":data,"loc":{"start":{"line":5,"column":9},"end":{"line":5,"column":17}}}) : helper)))
    + "</td>\n    <td>\n        <label class=\"switch\">\n            <input type=\"checkbox\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias2,(depth0 != null ? lookupProperty(depth0,"state") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":35},"end":{"line":8,"column":62}}})) != null ? stack1 : "")
    + " onchange=\"set_app_state('"
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":88},"end":{"line":8,"column":96}}}) : helper)))
    + "', this.checked)\">\n            <span class=\"slider\"></span>\n        </label>\n    </td>\n</tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr>\n    <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (depth0 != null ? lookupProperty(depth0,"key") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":21,"column":15}}}) : helper)))
    + "</td>\n    <td><code>"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":22,"column":14},"end":{"line":22,"column":23}}}) : helper)))
    + "</code></td>\n</tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table style=\"width:100%;\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"apps") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":13,"column":10}}})) != null ? stack1 : "")
    + "</table>\n<hr>\n<h2>RPi4 controller</h2>\n<br>\n<table style=\"width:100%\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"other_data") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":24,"column":10}}})) != null ? stack1 : "")
    + "</table>";
},"useData":true,"useDepths":true});
})();