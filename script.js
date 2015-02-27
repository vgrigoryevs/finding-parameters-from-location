var i = getParamsWithRe(),
    i = arrayToObjectWithSplit(i);
    decode(i);


function getParamString () {
    var paramString = window.location.search.toString();

    return paramString.slice(1);     
}

function getParamsWithSplit () {
    var paramString = getParamString(),
        found;
    
    found = paramString.split("&");

    return found;

}

function getParamsWithRe () {
    var paramString = getParamString(),
        re = /([\w%+-\/$^*]+=([\w%+-\/$^*]+)?)/gi,
        found;

    found = paramString.match(re);

    return found;

}

function arrayToObjectWithSplit (found) {
    var counter,
        currentString,
        result = {},
        max = found.length;

    for (counter = 0 ; counter<max; counter+=1) {
        currentString = found[counter];
        var curArr = [];
        curArr = currentString.split("=");
        
        if (curArr[1] === "") {
            curArr[1] = null;
        }

        result[curArr[0]] = curArr[1];

    }    

    return result;
}

function decode (obj) {
    for (key in obj) {
        if ( typeof obj[key] === "string") {
            obj[key] = obj[key].replace(/%26/gi, "&");
            obj[key] = obj[key].replace(/\+/gi, " ");
            obj[key] = obj[key].replace(/%2F/gi, "/");
        }
    }
    
    return obj;
}

function objFromRe () {
    var paramString = getParamString(),
        re = /([\w%+-\/$^*]+=([\w%+-\/$^*]+)?)/gi,
        result = {},
        found;

    while ((found = re.exec(paramString)) !== null) {
        var str = found[0],
            tempArr = str.split("=");
        
        result[tempArr[0]] = tempArr[1];
    }    

    return result;
}