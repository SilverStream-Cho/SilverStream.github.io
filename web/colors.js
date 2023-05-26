var Links = {
    setColor: function (color){
    // var alist = document.querySelectorAll('a');
    //                var i = 0;
    //                while(i < alist.length){
    //                    alist[i].style.color = 'powderblue';
    //                    i = i + 1;
    //                  }
                     $('a').css('color', color);
                    }
}
var Body = {
    setColor: function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgraounColor: function (color) {
    //    document.querySelector('body').style.backgroundcolor = color;
        $('body').css('backgroundColor', color);
    }
}  