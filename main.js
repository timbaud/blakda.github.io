var monImage = document.querySelector('img');

monImage.onclick = function() {
    var monSrc = monImage.getAttribute('src');
    if(monSrc === 'masc.png'){
        monImage.setAttribute ('src','masc2.png');
    } else {
        monImage.setAttribute ('src','masc.png');
    }
        
}

var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
    var monNom = prompt('veuillez,saisir votre nom');
    localStorage.setItem('nom', monNom);
    monTitre.textContent = 'Allez les bleues, ' + monNom;
}
monBouton.onclick = function () {
    définirNomUtilisateur ();
} 