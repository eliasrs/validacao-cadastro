
/* Arquivo para criação da funcionalidade de friltragem de nomes na tabela de usuarios
	- Filtrar conforme o usuário vai digitando o nome, ou seja, dinâmico
----- no final, tem um exemplo comentado de como criar um contador de campo text aréa pra limite de caracteres
*/


// 1° Cria no Html o imput acima da tabela

// 2° Pega o elemento de input
var campoFiltro = document.querySelector("#filtrar-tabela");

//3° Escutar cada caracter digitado no campo filtro 
campoFiltro.addEventListener("input", function(){   //Evento de INPUT de dados, escuta a cada caracter digitado
	//console.log(this.value);

	//4° Conforme digita, compara o nome com todos usuarios da tabela e mostra somente os iguais
	var usuarios = document.querySelectorAll(".usuario");// pega todos os usuarios (tr com suas Tds)
	
	//5° Verifica se tem algo digitado, se tem, então implementa lógica de ocultar o que for diferente do digitado
	if( this.value.length > 0){  // verifica se tem algo digitado no input, se tem, então tem quer ficar invisel enquanto o nome for diferente do que estiver digitado
		for( var i = 0; i < usuarios.length ; i++){  // percorrer todo o array de usuario
		//6° pega o nome de cada usuario	
			var usuario = usuarios[i]; // usuario no indice i
			
			// pega o nome do usuário em cada linha para depois comparar com a expressão digitada
			var tdNome = usuario.querySelector(".info-nome"); //pega a td nome do usuario no indíce i
			var nome = tdNome.textContent;
			
			// pega o cpf do usuário em cada linha para depois comparar com a expressão digitada
			var tdCpf = usuario.querySelector(".info-cpf"); //pega a td nome do usuario no indíce i
			var cpf = tdCpf.textContent;
			
			// pega o email do usuário em cada linha para depois comparar com a expressão digitada
			var tdEmail = usuario.querySelector(".info-email"); //pega a td nome do usuario no indíce i
			var email = tdEmail.textContent;
			
			// pega o PJ do usuário em cada linha para depois comparar com a expressão digitada
			var tdPj = usuario.querySelector(".info-pj"); //pega a td nome do usuario no indíce i
			var pj = tdPj.textContent;
			
			
			
			// função e expressão regular, vai buscar o texto que digita que é o .this
			var expressao = new RegExp(this.value,"i"); // 1º parametro é o valor digitado (campoFiltro), 
														//o 2° = "i" refere a INsensitive , case insensitive, não diferencia mais e minusculo.

		// 7° Agora que já tem o conteudo do input e do usuario, so esconder os nomes (tr) que não for igual ao digitado(input)
			//Se for diferente cria uma classe pra esconder
			if( (!expressao.test(nome)) && (!expressao.test(cpf)) && (!expressao.test(email)) && (!expressao.test(pj))){ // se a expressão (escutada/digitada) for DIFERENTE do nome e do cpf e do email e da pj, então torna invisíel, mas se for igual a algum desse campos, continua visível. Usa a função .teste() que testa o que colocar como parametro, ex: "test(nome)"
				usuario.classList.add("invisivel"); //quando começa digitar tudo fica com a classe invisivel
			} else{
				usuario.classList.remove("invisivel"); // quando o digitado fica igual a um nome da tab, então exclui o invisivel
			}
		}
	}else{    // se não tem algo digitado então nada fica invisivel 
		for( var i = 0; i < usuarios.length; i++) {  // percorrer todo o array de usuario
			var usuario = usuarios[i]; // usuario no indice i
			usuario.classList.remove("invisivel");
		}
	}
})


// Modal para detalhar um PRE-CADASTRO

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

// alternar exibição entre pendentes e de validados
	// pega os elementos de menu
var menu1 = $("#menu1");
var menu2 = $("#menu2");

	// escuta o evento de click do menu 1 e torna invisível a tab do menu 2
menu1.click(function(event){
	event.preventDefault();
	var validados = $("#cad2");
	var pendentes = $("#cad1");
	pendentes.removeClass("invisivel");
	validados.addClass("invisivel");
	
});

// escuta o evento de click do menu 2 e torna invisível a tab do menu 1
menu2.click(function(event){
	event.preventDefault();
	var pendentes = $("#cad1");
	var validados = $("#cad2");
	validados.removeClass("invisivel");
	pendentes.addClass("invisivel");
});

	


/* Verificando o tamanho da postagem: conta a qtd de caractesres digitado. 
	Exemplo o campo só pode ter 500 caracteres
	
	$(document).ready(function(){
    	$('.modal').modal();
  	});
	
	
		-------html ----
			<body>
			    <textarea id="corpo-postagem" cols="40" rows="5"></textarea>
			    <p>Caracteres: <span id="numero-caracteres">0</span> caracteres.</p>
			    <script src="contador.js"></script>
			</body>
		----------------
		--------JS-----
			// contador.js
			var campoPostagem = document.querySelector("#corpo-postagem");
			campoPostagem.addEventListener("input", atualizaCaracteres);
			function atualizaCaracteres() {
			    var postagem = document.querySelector("#corpo-postagem").value;
			    var caracteres = postagem.value.length;
			    var contador = document.querySelector("#numero-caracteres");
			    contador.innerHTML = caracteres;
			}
*/