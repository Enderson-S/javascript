function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img"); //Para criar elemento de imagem
    img.setAttribute("id", "foto"); // Para colocar um id no elemento
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Crianca
        img.setAttribute('src', 'fot-bebe-m.png') //Para atribuir a imagem ao elemento
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'foto-jovem-m.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'foto-adulto-m.png')
      } else {
        //Idoso
        img.setAttribute('src', 'foto-idoso-m.png')
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Crianca
        img.setAttribute('src', 'fot-bebe-f.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'foto-jovem-f.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'foto-adulto-f.png')
      } else {
        //Idoso
        img.setAttribute('src', 'foto-idoso-f.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img)
  }
}
