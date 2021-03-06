if (typeof window.console == "undefined") {
    var f = function() {};
    window.console = {
        log: f,
        debug: f,
        info: f,
        warn: f,
        error: f,
        assert: f,
        dir: f,
        dirxml: f,
        group: f,
        groupEnd: f,
        time: f,
        timeEnd: f,
        count: f,
        trace: f,
        profile: f,
        profileEnd: f
    }
}
if (typeof Array.indexOf == "undefined") {
    Array.prototype.indexOf = function(e) {
        for (var t = 0; t < this.length; t++) {
            if (this[t] == e) {
                return t
            }
        }
        return -1
    }
}
var FsApps = FsApps || {};
FsApps.LoadFunctions = function() {
    function onLoadComplete() {
        if (!mAlreadyRun) {
            for (var e = 0, t = mQueue.length; e < t; e++) {
                runFunction(mQueue[e])
            }
        }
        mAlreadyRun = true
    }
    function runFunction(code) {
        try {
            if (typeof code == "function") {
                code()
            }
            else {
                eval(code)
            }
        }
        catch (e) {
            console.warn("LoadFunctions error: " + e)
        }
    }
    var mQueue = [];
    var mAlreadyRun = false;
    var mBridgeWarningShown = false;
    this.showBridgeWarning = function() {
        if (!mBridgeWarningShown) {
            window.console.warn("fsAWLLoadFunction(options) was called at least once, please update to FsApps.LoadFunctions.add(options)");
            mBridgeWarningShown = true
        }
    };
    this.add = function(e) {
        e = e || {};
        if (typeof e.func === "undefined" || e.func === "") {
            return
        }
        if (mAlreadyRun) {
            runFunction(e.func)
        }
        else {
            mQueue.push(e.func)
        }
    };
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", onLoadComplete, false)
    }
    else if (window.addEventListener) {
        window.addEventListener("load", onLoadComplete, false)
    }
    else if (window.attachEvent) {
        window.attachEvent("onload", onLoadComplete)
    }
    else if (document.getElementById) {
        window.onload = onLoadComplete()
    }
};
var scriptTag = document.getElementsByTagName("script")[0];
FsApps.loadScriptFile = function(options) {
    var doc = window.document;
    var url = options.url || "",
        callback = options.callback ? options.callback : false,
        async = options.async || false,
        defer = options.defer || false,
        lazyLoad = options.lazyLoad || false;
    var script = doc.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = async;
    script.defer = defer;
    script.onload = script.onreadystatechange = function() {
        var rs = this.readyState;
        if (rs && rs != "complete" && rs != "loaded") return;
        try {
            if (typeof callback !== "undefined") {
                if (typeof callback === "function") {
                    if (!lazyLoad) {
                        callback()
                    }
                    else {
                        FsApps.LoadFunctions.add({
                            func: callback + "()"
                        })
                    }
                }
                else {
                    if (!lazyLoad) {
                        eval(callback())
                    }
                    else {
                        FsApps.LoadFunctions.add({
                            func: callback + "()"
                        })
                    }
                }
            }
        }
        catch (e) {}
    };
    scriptTag.parentNode.insertBefore(script, scriptTag)
}