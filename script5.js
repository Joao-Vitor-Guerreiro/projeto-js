let gastos = {
    receitas:[2000, 500, 400, 100],
    despesas:[1200, 200, 300, 500],
  }
  
  function calcularSaldo(gastos) {
    let totalReceitas = 0;
    let totalDespesas = 0;
  
    for (let valor = 0; valor < gastos.receitas.length; valor++) {
      totalReceitas += gastos.receitas[valor];
    }
  
    for (let valor = 0; valor < gastos.despesas.length; valor++) {
      totalDespesas += gastos.despesas[valor];
    }
  
    let saldo = totalReceitas - totalDespesas;
  
    if (saldo >= 0) {
      console.log("A família está com saldo positivo de R$ " + saldo);
    } else {
      console.log("A família está com saldo negativo de R$ " + saldo);
    }
  }
  
  calcularSaldo(gastos);
