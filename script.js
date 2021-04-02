$(document).ready(function(){
    $('#date').datepicker({
      format: 'mm/dd/yyyy',
      startDate: '-3d'
    });

    $("#phone").change(function(){
        var number = $("#phone").val();
        //Check if the number is numeric using the isNaN which returns true if the value is Not a Number
        if (isNaN(number)){
          //Display the invalid feedback class.
          $("#phone-invalid").show();
          //Hide valid feedback
          $("#phone-valid").hide();
          //Remove the "is-valid class from the #number element"
          $("#phone").removeClass("is-valid");
          //Add the is-invalid class to the #number field
          $("#phone").addClass("is-invalid");
          //Set the aria tag for the number class so the right feedback describes it.
          $("#phone").setAttribute('aria-describedby', "phone-invalid");
        }
        else{
          $("#phone-valid").show();
          $("#phone-invalid").hide();
          $("#phone").removeClass("is-invalid");
          $("#phone").addClass("is-valid");
          $("#phone").setAttribute('aria-describedby', "phone-valid");
        }
       
    });

    $("#submitbutton").click(function(){
        //Toggles the visibility for the card with the form in it.
        $("#ordersuccessful").show();
      });

  });