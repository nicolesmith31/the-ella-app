function calcTdee(){
  var weight =
  document.getElementById('weight_{:step=>1.0}').value;
  
  var height =
  document.getElementById('height_{:step=>1.0}').value;
  
  var gender =
  document.getElementById('gender').value;
  
  var age =
  document.getElementById('age_{:step=>1.0}').value;
  
  var level =
  document.getElementById('activityLevel').value;
  
  var bmr = ''
  if (gender == 1) {
  bmr = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age)
  } else {
  bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
  }
  
  document.getElementById('bmr').innerHTML = bmr;
  var tdee = ''

  if (level == "1"){
    tdee = bmr * 1.25
  } else if (level == "2") {
    tdee = bmr * 1.50
  } else if (level == "3") {
    tdee = bmr * 1.75
  } else if (level == "4") {
    tdee = bmr * 2.0
  } else {
    tdee = bmr * 2.25
  }
  
  var elmnt = document.getElementById('tdee');
  elmnt.scrollIntoView();
  elmnt.innerHTML = tdee

}