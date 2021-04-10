$(document).ready( function () {
    $("input").change(updateOrder);
});

//Create function that will add the two totals together to create the grand total
function updateOrder(){
    let velascaTotal = 0;
    let accademiaTotal = 0;
    let grandTotal = velascaTotal + accademiaTotal;

    let quantities = $("input[name=machineQty]");

    quantities.each(function() {
        if ($(this).attr("id") == "velascaQty") {
            velascaTotal = $(this).val() * $(this).data("price");
        } else if ($(this).attr("id") == "accademiaQty") {
            accademiaTotal = $(this).val() * $(this).data("price");
        } else {
            console.error("invalid input");
        }
    });

    $("#velascaTotal").text("$" + velascaTotal.toFixed(2));
    $("#accademiaTotal").text("$" + accademiaTotal.toFixed(2));

    grandTotal = velascaTotal + accademiaTotal;

    $("#grandTotal").text("$" + grandTotal.toFixed(2));
}

