$(function() {
    $( "#submit-button" ).click(function() {
      $( "#submit-button" ).addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#submit-button" ).removeClass( "onclic" );
        $( "#submit-button" ).addClass( "validate-animation", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#submit-button" ).removeClass( "validate-animation" );
        }, 1250 );
      }
    });



/*(function() {
    submitButton.click(function() {
        submitButton.addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        submitButton.removeClass( "onclic" );
        submitButton.addClass( "validate-animation", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
            submitButton.removeClass( "validate-animation" );
        }, 1250 );
      }
    });*/