let listadiscos = [];
let indiceLista = -1;

function limpaCampos() {
  document.getElementById("album").value = "";
  document.getElementById("banda").value = "";
  document.getElementById("valor").value = "";
}

function salvar() {
  let banda = document.getElementById("banda").value;
  let album = document.getElementById("album").value;
  let valor = document.getElementById("valor").value;

  if (indiceLista >= 0) {
    let obj = listadiscos[indiceLista];
    obj.banda = banda;
    obj.album = album;
    obj.valor = valor;
  } else {
    listadiscos.push({ banda: banda, album: album, valor: valor });
  }
  limpaCampos();
  atualizarTabela();

  indiceLista = -1;
}

function editarItem(indice) {
  indiceLista = indice;
  console.log("editarItem", indice);

  let obj = listadiscos[indice];

  document.getElementById("banda").value = obj.banda;
  document.getElementById("valor").value = obj.valor;
}

function excluirItem(indice) {
  if (
    confirm(`confirmar remoçao de item do catalogo. ${listadiscos[indice]} ? `)
  ) {
    listadiscos.splice(indice, 1);
    atualizarTabela();
  }
  indice = -1;
}

function atualizarTabela() {
  let tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  listadiscos.forEach((i, indice) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
    <td> ${i.banda} </td>
    <td> ${i.album} </td>
    <td>R$ ${i.valor} </td>
    <td>
        <button
            type = "button"
            onclick = "editarItem(${indice})"
            class="material-symbols-outlined btn-icone">edit   
        </button>

        <button
            type = "button"
            onclick = "excluirItem(${indice})"
            class="material-symbols-outlined btn-icone">sell
        </button>

    </td>
    `;

    tableBody.append(tr);
  });
}
