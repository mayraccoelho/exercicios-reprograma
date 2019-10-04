// Agora, a Lumelância quer dar descontos para produtos que estão proximos da validade.
// Quando os funcionários estiverem reorganizando as prateleiras, eles deverão verificar se o produto esta próximo do vencimento informando quantos dias faltam para o vencimento.

// - O array de objetos produtos devem conter os dados
//     - nome: string
//     - tempoDeValidade: number
//     - congelado: boolean

// - Exemplo:
//     var produtos = [{
//         nome: 'Nescau',
//         tempoDeValidade: 200, //indicando que a validade dele é de 200 dias
//         congelado : false
//     }];
    
// - O funcionário deverá:
//     - Escolher (digitar) um produto do array de objetos: "Escolha um produto entre 0 e x: "
//     - Digitar quantos dias faltam para o produto vencer: "Digite quantos dias faltam para vencer: "

// - Calcular a porcentagem:
//     porcentagem = (diasParaOVencimentoDoProduto * 100) / tempoDeValidadeDoProduto;

// - Você deverá:
//     - Printar a mensagem "Descartar produto, muito proximo de vencer" caso produto esteja com 2% ou menos de dias para vencer;

//     - Printar a mensagem "Desconto!  Produto não congelado e próximo da validade." caso produto não seja congelado e esteja com 10% ou menos de dias para vencer;

//     - Printar a mensagem "Desconto! Produto congelado e próximo da validade." caso produto seja congelado e com 5% ou menos de dias para vencer;

//     - Printar a mensagem "Produto longe do vencimento." caso não contemple as outras condições.