function pegaNota(nota){

    if(nota < 60){
      console.log("F")
    }else if(nota >= 60 && nota <= 69){
      console.log("D")
    }else if (nota >= 70 && nota <= 79){
      console.log("C")
    }else if (nota >= 80 && nota <= 89){
      console.log("B")
    }else {
      console.log("A")
    }
  }
  
  pegaNota(85);