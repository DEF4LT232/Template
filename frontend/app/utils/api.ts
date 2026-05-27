// Este arquivo centraliza as chamadas ao backend (API).
// Aqui você cria funções que buscam dados do servidor Django.
// Exemplo de como criar uma nova função:
//
//   export async function getTodos() {
//       const res = await fetch("http://localhost:8000/todos/");
//       return res.json();
//   }

// Interface que define a "forma" dos dados que cada balde vai ter.
// No TypeScript, interfaces servem como um molde — se os dados vierem fora desse formato,
// o TypeScript avisa na hora de compilar (ajuda a evitar bugs).
interface balde {
    name: string,   // nome da pessoa
    balde: boolean  // true = é balde, false = não é balde
}

// URL base do nosso backend Django (rodando localmente na porta 8000)
const API = "http://localhost:8000"

// "async" = função assíncrona (pode usar "await" dentro dela).
// "Promise<balde[]>" = ela retorna uma promessa que vai se "resolver" com um array de baldes.
// Quem chamar essa função precisa usar "await" ou ".then()" para pegar o resultado.
//
// O fetch() faz uma requisição HTTP para o servidor e demora um pouco (é assíncrono).
// O "await" pausa a execução até o fetch terminar, e guarda a resposta em "res".
// .json() extrai o corpo da resposta como JSON (também é assíncrono).
// json.baldes acessa a chave "baldes" do objeto JSON que veio do Django.
export async function GetBaldes(): Promise<balde[]> {
    try {
        const res = await fetch(`${API}`)
        const json = await res.json()
        const baldes: balde[] = json.baldes
        return baldes
    }
    catch (error) {
        // Se o fetch falhar (ex: servidor offline), o catch captura o erro
        // e retorna um array vazio ( [] ) em vez de quebrar a página inteira.
        // Isso é uma forma simples de tratar erro — o componente que usar essa
        // função só vai ver uma lista vazia.
        console.log("liga o backend mn ._.")
        return []
    }
}