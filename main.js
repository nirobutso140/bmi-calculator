
function bmi(){
    
    var weight = document.getElementById('Weight').value;
    var height = document.getElementById('Height').value;
    // height = height * 12;
    height = height * 0.025;

    var newbmi = weight / (height * height)

     newbmi = newbmi.toFixed(1)

    document.getElementById('bmiValue').value = newbmi;
}
