function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function (a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function () {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function () {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function () {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function () {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

//shows subtotal for seller1
function badgerTotal() {
    var badger = 3.10;
    var ship = 2.99;
    //Ouput
    document.getElementById('seller1').innerHTML = badger + ship;
}
//shows subtotal for seller2
function bagOTotal() {
    var bag = 9.00;
    var ship = 4.99;
    //Ouput
    document.getElementById('seller2').innerHTML = bag + ship;
}
//shows order total after seller 1 is complete
function payTotal1() {
    var shipTotal = 2.99;
    var items = 12.10;
    //Ouput
    document.getElementById('totalShip').innerHTML = shipTotal;
    document.getElementById('totalPrice').innerHTML = items + shipTotal;
}

//shows order total after seller 2 is complete
function payTotal2() {
    var shipTotal = 7.98;
    var items = 12.10;
    //Ouput
    document.getElementById('totalShip').innerHTML = shipTotal;
    document.getElementById('totalPrice').innerHTML = items + shipTotal;
}

// When the user clicks on div, open the popup
function myPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("showPop");
  }
  