// funcao multiplicacao
function multiplicacao(x: number, y: number) : number{
    return x * y;
  }
  
  // funcao saudacao 
  function saudacao(nome: string) : string{
    return " Hey" + nome;
  }
  
  // exemplos de uso
  
  const resultadoMultiplicacao = multiplicacao(2, 3);
  console.log("Resultado da multiplicacao");
  resultadoMultiplicacao;
  
  const mensagemSaudacao = saudacao ("Saulo");
  console.log(mensagemSaudacao);