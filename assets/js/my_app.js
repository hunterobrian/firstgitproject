$( document ).ready(function() {

    $( "button.toggle-visibility" ).on( "click", function() {
        $(".teammate").toggleClass("hidden");
        var is_button_hidden = $(".teammate").hasClass("hidden");
        if (is_button_hidden) {
            $(this).html("Show details");
        }
        else {
            $(this).html("Hide details");
        }


    });

    $( "button.toggle-teammate-meta" ).on( "click", function() {
        console.log("Fetching teammate data");
        var data_that_was_fetched = fetch_teammates_details();
        $.when( data_that_was_fetched ).then(function( our_promised_data ) {
            console.log("data_that_was_fetched from details:", our_promised_data);
        });
    });

    var fetch_teammates_details = function() {
        console.log("Inside of the fetch_teammates_details function");
        var our_promised_data = $.getJSON( "backend/return_json.php", function() {
          console.log( "success" );
        })
        .done(function( data, textStatus, jqXHR ) {
            console.log( "second success", data );
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            console.log( "error" );
        })
        .always(function( data, textStatus, errorThrown ) {
            console.log( "complete" );
        });

        return our_promised_data;

    };

});
