function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function minusValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;    
}


$('.minus').on('click', function () {
if($("#number").val() < 0){
    $("#number").val('0');
}
});

// function addTheValue(secondValue) {
//     var fValue = document.getElementById("number");
//     number.innerHTML = parseInt(fValue.innerHTML) +
//     parseInt(secondValue);
//  }

//  function addValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;    
// }


$( ".nextround" ).click(function() {
    var qtt = parseInt($('#number').val(), 10);
    $('#number').val(qtt+2);
  });


$('.resetear').on('click', function () {
    if($("#number").val() < 100 ){
        $("#number").val('3');
    }
    });


function roundincrementValue()
{
    var value = parseInt(document.getElementById('roundnumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('roundnumber').value = value; 
}

$('.resetear').on('click', function () {
    if($("#roundnumber").val() < 100 ){
        $("#roundnumber").val('1');
    }
    });