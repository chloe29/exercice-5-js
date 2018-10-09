function valider() {
  // initialisation des variables auquelles on affecte la méthode getElementById
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  // initialisation d'une variable contenant le résultat de la multiplication des 2 précédentes variables
  var result = parseInt(firstNumber) * secondNumber;
  // si la variable firstNumber n'est pas un nombre j'affiche un message d'erreur
    if(isNaN(firstNumber) || isNaN(secondNumber)){
      alert('Veuillez entrez des nombres');
    }else{
      alert('Le résultat est : ' + result);
    }
}
