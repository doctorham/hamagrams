function hamagram(hamstring, order) {
    if (order !== undefined) {
        var hamArr = hamstring.split('');
        if (order === "random") {
            hamstring = hamArr.sort(function(){return 0.5-Math.random()}).join('');
        } else if (order === "alpha") {
            hamstring = hamArr.sort().join('');
        }
    }

    var html = "";
    var charCount = 0;
    var lineLength = 7;
    for(var i = 0; i < hamstring.length; i++) {
    var c = hamstring[i];
        if(c !== ' ') {
            html += '<span>' + c + '</span>';
            
            ++charCount;
            if(charCount >= lineLength) {
                 html += '<br>';
                 charCount = 0;
            }
        } else {
            html += '<br>';
            charCount = 0;
        }
    }

    document.body.innerHTML = html;
    $( "span" ).draggable({
        snap: true
    });
}
