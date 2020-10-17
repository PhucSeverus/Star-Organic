//================
// load data ...
//================
$(document).ready(function ($) {
    $.getJSON("js/test.json")
        //load data success
        .done(function (result) {
            database = result;
            items = database;
            let s = [];
            console.log(database)
            // up items on screen
            $.each(items, function (i, row) {
                s.push("<div class='col-sm-12 col-sm-6 col-md-4 item'>");
                s.push(`<a href='#'><img src='images/${row.image}' class='data-product' data-id='${row.id}'/> </a>`);
                s.push("<br> <b>$" + row.price + " </b> <br>");
                s.push("<input type='button' value='Add To Cart' onclick='addCart(" + row.id + ")' class='btn btn-success'> <br><br>");
                s.push("<b>" + row.name.toUpperCase().substring(0, 110) + "</b>");
                s.push("<br>" + row.description.replaceAll('<br>', ' ').substring(0, 59) + "...");
                s.push("<br>");
                s.push("</div>");
            });
            s.push("</div> </div>");
            $("#items-show").html(s.join(" "));
        })
        //load data fail
        .fail(function () {
            alert("Fail to load data!");
        });
});