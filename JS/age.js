var dateNaissance = new Date(1135854000000);
var dateActuelle = new Date();
var age = dateActuelle.getFullYear() - dateNaissance.getFullYear();
var m = dateActuelle.getMonth() - dateNaissance.getMonth();
if (m < 0 || (m === 0 && dateActuelle.getDate() < dateNaissance.getDate())) {
    age--;
}
div = document.getElementById('resume')
div.innerHTML = `Je m'appelle Nathan Domenichini, j'ai ${age} ans. ` + div.innerHTML;