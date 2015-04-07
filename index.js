var d;



$(document).ready(function() {
    d=new Date()
    $('#time').html(d.getHours() + ":" + d.getMinutes());
    setInterval( function(){
        //console.log("called");
        d=new Date();
        $('#time').html(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    }, 1000);
});
