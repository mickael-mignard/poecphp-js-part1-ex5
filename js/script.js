
function afficher(){
    var nombre1 = document.getElementById("nombre1").value;
    var nombre2 = document.getElementById("nombre2").value;
    
    nombre1 = Math.trunc(nombre1);
    var resultat = nombre1 * nombre2;

    alert(
        "Résultat : " + resultat
    )
    }