/* Write JavaScript here */
if (typeof Array.prototype.indexOf !== "function") {
    Array.prototype.indexOf = function(item) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === item) {
                return i;
            }
        }
        return -1;
    };
}
window.brill = (function() {
    function brill(els) {
        for (var i = 0; i < els.length; i++) {
            this[i] = els[i];
        }
        this.length = els.length;
    }
    brill.prototype.map = function(callback) {
        var results = [],
            i = 0;
        for (; i < this.length; i++) {
            results.push(callback.call(this, this[i], i));
        }
        return results;
    };
    brill.prototype.forEach = function(callback) {
        this.map(callback);
        return this;
    };
    brill.prototype.mapOne = function(callback) {
        var m = this.map(callback);
        return m.length > 1 ? m : m[0];
    };
    brill.prototype.text = function(text) {
        if (typeof text !== "undefined") {
            return this.forEach(function(el) {
                el.innerText = text;
            });
        } else {
            return this.mapOne(function(el) {
                return el.innerText;
            });
        }
    };
    brill.prototype.html = function(html) {
        if (typeof html !== "undefined") {
            this.forEach(function(el) {
                el.innerHTML = html;
            });
            return this;
        } else {
            return this.mapOne(function(el) {
                return el.innerHTML;
            });
        }
    };
    brill.prototype.addClass = function(classes) {
        var className = "";
        if (typeof classes !== "string") {
            for (var i = 0; i < classes.length; i++) {
                className += " " + classes[i];
            }
        } else {
            className = " " + classes;
        }
        return this.forEach(function(el) {
            el.className += className;
        });
    };
    brill.prototype.removeClass = function(clazz) {
        return this.forEach(function(el) {
            var cs = el.className.split(" "),
                i;

            while ((i = cs.indexOf(clazz)) > -1) {
                cs = cs.slice(0, i).concat(cs.slice(++i));
            }
            el.className = cs.join(" ");
        });
    };
    if (typeof Array.prototype.indexOf !== "function") {
        Array.prototype.indexOf = function(item) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === item) {
                    return i;
                }
            }
            return -1;
        };
    }
    brill.prototype.attr = function(attr, val) {
        if (typeof val !== "undefined") {
            return this.forEach(function(el) {
                el.setAttribute(attr, val);
            });
        } else {
            return this.mapOne(function(el) {
                return el.getAttribute(attr);
            });
        }
    };
    brill.prototype.append = function(els) {
        return this.forEach(function(parEl, i) {
            els.forEach(function(childEl) {
                if (i > 0) {
                    childEl = childEl.cloneNode(true);
                }
                parEl.appendChild(childEl);
            });
        });
    };
    brill.prototype.prepend = function(els) {
        return this.forEach(function(parEl, i) {
            for (var j = els.length - 1; j > -1; j--) {
                childEl = (i > 0) ? els[j].cloneNode(true) : els[j];
                parEl.insertBefore(childEl, parEl.firstChild);
            }
        });
    };
    brill.prototype.remove = function() {
        return this.forEach(function(el) {
            return el.parentNode.removeChild(el);
        });
    };
    brill.prototype.on = (function() {
        if (document.addEventListener) {
            return function(evt, fn) {
                return this.forEach(function(el) {
                    el.addEventListener(evt, fn, false);
                });
            };
        } else if (document.attachEvent) {
            return function(evt, fn) {
                return this.forEach(function(el) {
                    el.attachEvent("on" + evt, fn);
                });
            };
        } else {
            return function(evt, fn) {
                return this.forEach(function(el) {
                    el["on" + evt] = fn;
                });
            };
        }
    }());
    brill.prototype.off = (function() {
        if (document.removeEventListener) {
            return function(evt, fn) {
                return this.forEach(function(el) {
                    el.removeEventListener(evt, fn, false);
                });
            };
        } else if (document.detachEvent) {
            return function(evt, fn) {
                return this.forEach(function(el) {
                    el.detachEvent("on" + evt, fn);
                });
            };
        } else {
            return function(evt, fn) {
                return this.forEach(function(el) {
                    el["on" + evt] = null;
                });
            };
        }
    }());

    var DOM = {
        getElement: function(selector) {
            var els;
            if (typeof selector === "string") {
                els = document.querySelectorAll(selector);
            } else if (selector.length) {
                els = selector;
            } else {
                els = [selector];
            }
            return new brill(els);
        },
        createElement: function(tagName, attrs) {
            var el = new brill([document.createElement(tagName)]);
            if (attrs) {
                if (attrs.className) {
                    el.addClass(attrs.className);
                    delete attrs.className;
                }
                if (attrs.text) {
                    el.text(attrs.text);
                    delete attrs.text;
                }
                for (var key in attrs) {
                    if (attrs.hasOwnProperty(key)) {
                        el.attr(key, attrs[key]);
                    }
                }
            }
            return el;
        }
    };

    return brill;
}());
var write = function(text) {
    document.write(text);
};
var random = function(num1,num2){
    Math.floor((Math.random()*num2)+num1);
};
var Test = function() {
    this.assert = function(expression, message) {
        if (expression) {
            console.log("Test passed.");
        } else {
            console.log("Test failed./n");
            console.log(message);
        }
    };
    this.assert_not_null = function(content, meassge) {
        if (content !== null) {
            console.log("Test passed");
        } else {
            console.log("Test failed");
            console.log(message);
        }
    };

};
var JBrillTest = function() {
    this.describe = function(example, description) {

    };
    this.it = function(example, description) {
        console.log(example + description);
    };
    this.should$$ = function(actual) {
        if (this === actual) {
            return true;
        } else {
            return false;
        }

    };

};


var performance = {
  
};
performance.time = function(code) {
    var start = !new Date();
    code.call();
    var totalTime = !new Date() - start;
    console.log("Your code took " + totalTime + " milliseconds");
};
var get = function(endpoint, callback) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", endpoint, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
    callback.call();
};
var post = function(endpoint, callback) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", endpoint, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
    callback.call();
};
var deleterequest = function(endpoint, callback) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("DELETE", endpoint, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
    callback.call();
};
var put = function(endpoint, callback) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PUT", endpoint, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
    callback.call();
};
var Model = function(validations) {
    this.validatePresencceOf = function(validated) {
        if (validated === null || undefined) {
            throw validated + " is not defined.";
        }
    };
};
var Controller = function(model, view) {
    this.model = model;
    require(model);
    this.view = view;
    require(view);
};
