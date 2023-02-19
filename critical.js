//<![CDATA[
    var e, s = "https://www.techandfunzone.in";
    function o() {
        window.alert("Invalid License Key"), document.body.innerHTML = "", window.location.href = s
    }
    try {
        e = atob(licensekey)
    } catch (e) {
        try {
            o()
        } catch (e) {
            window.location.href = s
        }
    }
    var n = e.split("-"),
        l = n[0];
    if (void 0 === (n = n[1])) try {
        o()
    } catch (e) {
        window.location.href = s
    }
    str = [n], getAJ({
        url: "https://script.google.com/macros/s/AKfycbwmQOHBtwpZzzIN8oxYsA2pXCH7eo6RTzVw0O-EJsu4s5OW3884hc3Rl7AslTx6a75PgQ/exec",
        async: !0,
        success: function (e) {
            var n = JSON.parse(e).user[str];
            if (void 0 === n) try {
                o()
            } catch (e) {
                window.location.href = s
            }
            var u = n.id,
                d = n.code,
                a = n.url;
            try {
                if (blogID + l === u + d && 0 != function (e) {
                        if (-1 == window.location.pathname.indexOf("/b/preview") && -1 == window.location.pathname.indexOf("/b/blog-preview")) return e == window.location.hostname
                    }(a)) return void console.log('Licensed to: ' + n.name + ', Licensed for: ' + n.url);
                try {
                    o()
                } catch (e) {
                    window.location.href = s
                }
            } catch (e) {
                try {
                    o()
                } catch (e) {
                    window.location.href = s
                }
            }
        }
    })
    function getAJ(e) {
        var r = new XMLHttpRequest;
        try {
            r = new XMLHttpRequest
        } catch (t) {
            try {
                r = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (t) {
                try {
                    r = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {
                    return console.warn("Something went wrong!"), !1
                }
            }
        }
        r.onreadystatechange = function () {
            var n;
            4 == r.readyState && (200 == r.status ? (n = r.responseText, e.success(n)) : "function" == typeof e.error && e.error(r))
        }, r.open("GET", e.url, e.async), r.send()
    }
//]]>
