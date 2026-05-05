function adicionar() {
    let input = document.getElementById("tarefa");
    let texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let lista = document.getElementById("lista");

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = texto;

    let botaoCheck = document.createElement("button");
    botaoCheck.innerText = "Feito !";

    botaoCheck.onclick = function() {
        span.classList.toggle("concluida");
    };

    let botaoRemover = document.createElement("button");
    botaoRemover.innerText = "X";

    botaoRemover.onclick = function() {
        lista.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(botaoCheck);
    li.appendChild(botaoRemover);

    lista.appendChild(li);

    input.value = "";
}
