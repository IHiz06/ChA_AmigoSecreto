let amigos = [];

function agregarAmigo() {
  const input = document.getElementById( "amigo" );
  const nombre = input.value.trim();

  if ( nombre === "" ) {
    alert( "Por favor, ingrese un nombre válido." );
    return;
  }

  if ( amigos.includes( nombre ) ) {
    alert( "Este nombre ya está en la lista." );
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  input.value = "";
}

function actualizarLista() {
  const lista = document.getElementById( "listaAmigos" );
  lista.innerHTML = "";
  amigos.forEach( amigo => {
    const li = document.createElement( "li" );
    li.textContent = amigo;
    lista.appendChild( li );
  } );
}

function sortearAmigo() {
  if ( amigos.length < 2 ) {
    alert( "Debe haber al menos dos amigos para realizar el sorteo." );
    return;
  }

  const indice = Math.floor( Math.random() * amigos.length );
  const amigoSecreto = amigos[ indice ];

  const resultado = document.getElementById( "resultado" );
  resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
}
