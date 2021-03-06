$(document).ready(function(){
    $('#date').datepicker({
      format: 'mm/dd/yyyy',
      startDate: '-3d'
  });

   $("#cat-button").click(function(){
        //Execute the API call.
        var cat = $.get("https://api.thecatapi.com/v1/images/search");
        console.log(cat);
        //Function that runs when the API runs successfully
        cat.done(function(response){
            
          //Because the API returns an array, get the first element.
          var catData = response[0];
          //Show the cat block
          $("#cat").show();
          //Set the SRC of the image to the 
          $("#cat-img").attr("src", catData.url);
        });
      
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
  });