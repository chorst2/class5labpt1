$(document).ready(
    function () {
        //add all event listener (clicks, etc.)
        $("form").submit(welcomeRank);


        //any other functions (calculate trip, roll die, etc.)
        function welcomeRank(event)
        {
            //create variable for the rank output
            var rank = "";

            //prevent form info from disappearing
            event.preventDefault();

            //get the first name they entered
            var firstName = $("#firstName").val();

            //get the last name they entered
            var lastName = $("#lastName").val();

            //get which radio button they selected for rank
            var selectedButton = $("input[name=rank]:checked");

            selectedButton.each(function () {
                rank = $(this).val();
            });
            $("#displayFirstName").text(firstName);
            $("#displayLastName").text(lastName);
            $("#rank").text(rank);
            $(".output").show();
            $(".output").css("color","blue");
        }

    }
);