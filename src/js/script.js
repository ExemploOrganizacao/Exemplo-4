function jogoQuiz(){
const perguntas =[
    {
        pergunta: "Pergunta 1:\n Opcao-(a) \n Opcao-(b) \n Opcao-(c)"
        resposta: "a"
    },
    {
        pergunta: "Pergunta 2:\n Opcao-(a) \n Opcao-(b) \n Opcao-(c)"
        resposta: "b"  
    },
    {
        pergunta: "Pergunta 3:\n Opcao-(a) \n Opcao-(b) \n Opcao-(c)"
        resposta: "c"
    }
]

let acertos = 0;
const totalPerguntas = perguntas.lenght;

alert(Seja bem-vindo ao Jogo de Perguntas);

for(let i=0; i<totalPerguntas; i++){
    let respostaUsuario;
    let valida = false;

    while(!valida){
        respostaUsuario =prompt(perguntas[i].pergunta).toLowerCase();
        if(respostaUsuario === 'a' || respostaUsuario === 'b' || respostaUsuario === 'c'){
            valida=true;
        }else{
            alert("Digite uma opção válida")
        }
    }
    if(respostaUsuario === perguntas[i].resposta){
        alert("Você acertou a pergunta")
    }else{
        alert(`Você errou. A resposta correta é: ${perguntas[i].resposta.toUpperCase()}`)
    }
}

document.getElementById("msg").innerHTML = `Você acertou ${acertos} de ${totalPerguntas}`
}

jogoQuiz()

/* Aprendemos
-Declaração
-Variaveis
-Tipos de dados (true,false)
-Array
-Objeto
-Metodos(toUpperCase, toLowerCase, alert, console, lenght)
-Propriedades (pergunta, resposta)
-Condicional com if/else
-Repetição com for, while
-Comparação ||, ===
-String literais ``
-Dom (Document Object Model)
-Função
*/