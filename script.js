function adicionar() {
    let input = document.getElementById("tarefa");
    let texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let lista = document.getElementById("lista");

    let li = document.createElement("li");
    li.innerText = texto;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    }

    let botao = document.createElement("button");
    botao.innerText = "X";

    botao.onclick = function() {
        lista.removeChild(li);
    }

    li.appendChild(botao);
    lista.appendChild(li);

    input.value = "";
}