$(document).ready(function() {
    $("#searchBtn").click(function(){
        var city = $("#city").val();
        if(city == ""){
            alert("Please Enter City!");
            return;
        }
        alert("Successfull!");
    })
})