/* creo le mie referenze */
var menu = $(".header-right")

/* effetto hover sul menu che scompare al passaggio del mouse */
menu.mouseenter(function(){
    menu.hide();
})

/* quando tolgo il mouse il menu deve ruiapparire */
menu.mouseleave(reset);



/* funzione che fa riapparire il menu quando tolgo il mouse */
function reset(){
    menu.show();
}