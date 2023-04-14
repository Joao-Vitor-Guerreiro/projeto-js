// function temperatura(valor, sigla) {

//   if (sigla === "C") {
//     console.log(valor * 9/5 + 32 + "°F");
//   } else if (sigla === "F") {
//     console.log((valor - 32) * 5/9 + "°C");
//   } else {
//     console.log("Inválido");
//   }
// }

// temperatura(40,"S");

function pegaTemperatura(graus){
  const celsiusExiste = graus.toUpperCase().includes("C")
  const fahrenheintExiste = graus.toUpperCase().includes("F")
  const filtro = graus.toUpperCase().replace(/[A-Z]/g,"")
  console.log(filtro);
  console.log(celsiusExiste,fahrenheintExiste)

  if(!celsiusExiste && !fahrenheintExiste){
    throw new Error("Aqui errou");
 // console.log(celsiusExiste)
}

  let updateGraus = Number(filtro)
  let formula = fahrenheint => (fahrenheint - 32) * 5/9
  let grauSinal = 'C'


  return formula(updateGraus) + grauSinal
}

try {
  //pegaTemperatura("20C");
  console.log(pegaTemperatura("20fdkk90kkkk"));
} catch (error){
  console.log(error)
}