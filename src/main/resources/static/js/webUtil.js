"use strict"
const webUtil = {
    cookieBaker : {
        set: function(cname, cvalue, exdays){
            if (!exdays) { exdays = 1; }
            let d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            let expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + (cvalue || '') + ';' + expires + '; path='+ ctx+ ';';
            console.log(document.cookie);
        },
        get: function(cname){
            let name = cname + '=';
            let decodedCookie = document.cookie;
            let ca = decodedCookie.split(';');
            for (let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        },
        remove: function(cname){
            this.set(cname, '', -1);
        }
    },
    getParameter : function(url) {
        try {
            let paramObj = new Object(),
                uri = url || window.location.href,
                query = uri.split('?')[1];

            if (!query){
                paramObj = '';
            } else {
                let vars = query.split('&');
                for (let i = 0; i < vars.length; i++) {
                    let pair = vars[i].split('=');
                    paramObj[pair[0]] = decodeURI(pair[1]);
                }
            }
            return paramObj;
        } catch (e) {
            console.log(e, 'getParameter');
        }
    },
    setParameter: function(paramObj){
        try {
            var param = [];
            $.each(paramObj, function(key, value){
                param.push(key + '=' + value);
            })
            return param.join('&');
        } catch (e) {
            throw new JsExecutionErrror('utils - setParameter');
        }
    }
};
