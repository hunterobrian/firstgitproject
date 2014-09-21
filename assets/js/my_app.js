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
        
    });

    var fetch_teammates_details = function() {

        var jqxhr = $.getJSON( "backend/return_json.php", function() {
          console.log( "success" );
        })
        .done(function( data, textStatus, jqXHR ) {
            console.log( "second success" );
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            console.log( "error" );
        })
        .always(function( data, textStatus, errorThrown ) {
            console.log( "complete" );
        });

    };

});
