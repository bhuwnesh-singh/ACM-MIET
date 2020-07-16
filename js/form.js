/*=======
    Script for accepting responses
=======*/
function postToGoogle() {
    var field1 = $("#name").val();
    var field2 = $("#email").val();
    var field3 = $("#branch").val();
    var field4 = $("#year").val();
    var field5 = $("#number").val();
    var field6 = $("#message").val();

    if(field1 == ""){
        alert('Please Fill Your Name');
        document.getElementById("name").focus();
        return false;
    }
    if(field2 == ""){
        alert('Please Fill Your Email');
        document.getElementById("email").focus();
        return false;
    }
    if(field3 == ""){
        alert('Please Fill Your Branch');
        document.getElementById("branch").focus();
        return false;
    }
    if(field4 == ""){
        alert('Please Fill Your Year');
        document.getElementById("year").focus();
        return false;
    }
    if(field5 == "" || field5.length > 10 || field5.length < 10){
        alert('Please Fill Your Mobile Number');
        document.getElementById("mobField").focus();
        return false;
    }




    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdbfzdWS0aCb6nE8yhpgizEi1ndtG8CesWPbO6EYC4GmvwTPg/formResponse?",
        data: {"entry.2005620554": field1, "entry.1045781291": field2, "entry.1065046570": field3, "entry.1593398483": field4, "entry.1166974658":field5, "entry.839337160":field6},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
        },
        error: function(x, y, z)
            {

                $('#success-msg').show();
                $('#form').hide();

            }
    });
    return false;
}