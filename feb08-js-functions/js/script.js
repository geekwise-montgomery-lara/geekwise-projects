(function(){ //IIFE - Imemediately Invoked Function Excecutable


  // var userName = prompt("Wat yo name?");
  // var num1 = parseInt(prompt('Pick a number'));
  // var num2 = parseInt(prompt('Pick another number'));
  // //Function Declaration
  // function funcDec(a, b, c){
  //     alert(a + '    ' + (b + c));
  // };
  // funcDec(userName, num1, num2);


  var car = {
      make: 'Truck',
      model: 'Ranger XLT',
      year: 1999
  };
  function myModel(a){
        //alert(a.model);
  };
  // parameter 'a' is SCOPED to function myModel
  myModel(car);

  // // Function Excecutable
  // var funcEx = function(){
  //     alert(arguments[0]);
  // }('Monty', 4);
  // arguments create a collection of items

 // ----------Random Cereal/Name combo--------------
  var firstNames = ['Monty', 'Cobi', 'Kevin', 'Gus', 'Josh'].sort();
  var cereals = ['Frosted Flakes', 'Cheerios', 'Life', 'Wheat Thins', 'Chex'].sort();

  // firstNames.sort();
  console.log(firstNames);
  // cereals.sort();
  console.log(cereals);

  var name = firstNames.shift();
  var lastCereal = cereals.pop();
  console.log(name, lastCereal);

  // var first = firstNames.splice(0, 1);
  // var last = cereals.splice(4, 1);
  // console.log(first, lastCereal);

  var funcEx = function(){
      var numNames = firstNames.length;
      var ranNames = Math.ceil(Math.random() * numNames) - 1;

      var numCereal = cereals.length;
      var ranCereal = Math.ceil(Math.random() * numCereal) - 1;
      alert(firstNames[ranNames] + ' ' + cereals[ranCereal]);
  }(firstNames, cereals);
  // --------------------end-------------------------

})();


var what_is_the_meaning_of_life = 42;
