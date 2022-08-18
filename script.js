function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function calcular() {
    resetar();

    const parcelas = document.getElementById("parcelas").value;
    let valor = document.getElementById("valor-pedido").value;
    let data = document.getElementById("data-pedido").value;

    const vtotal1 = document.getElementById("boleto1-valor");
    const dfinal1 = document.getElementById("boleto1-vencimento");

    const vtotal2 = document.getElementById("boleto2-valor");
    const dfinal2 = document.getElementById("boleto2-vencimento");

    const vtotal3 = document.getElementById("boleto3-valor");
    const dfinal3 = document.getElementById("boleto3-vencimento");

    const vtotal4 = document.getElementById("boleto4-valor");
    const dfinal4 = document.getElementById("boleto4-vencimento");

    if (valor == '') {
        Swal.fire({
            icon: 'error',
            text: 'Favor preencher o valor do pedido'
        })
    } else if (data == '') {
        Swal.fire({
            icon: 'error',
            text: 'Favor preencher a data do pedido'
        })
    } else if (parcelas == 1) {
        vtotal1.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal1.innerHTML = addDays(data, 28).toLocaleDateString()
    } else if (parcelas == 2) {
        valor = (valor / 2).toFixed(2)

        vtotal1.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal1.innerHTML = addDays(data, 28).toLocaleDateString()

        vtotal2.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal2.innerHTML = addDays(data, 35).toLocaleDateString()
    } else if (parcelas == 3) {
        valor = (valor / 3).toFixed(2)

        vtotal1.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal1.innerHTML = addDays(data, 28).toLocaleDateString()

        vtotal2.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal2.innerHTML = addDays(data, 35).toLocaleDateString()

        vtotal3.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal3.innerHTML = addDays(data, 42).toLocaleDateString()
    } else if (parcelas == 4) {
        valor = (valor / 4).toFixed(2)

        vtotal1.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal1.innerHTML = addDays(data, 28).toLocaleDateString()

        vtotal2.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal2.innerHTML = addDays(data, 35).toLocaleDateString()

        vtotal3.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal3.innerHTML = addDays(data, 42).toLocaleDateString()

        vtotal4.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal4.innerHTML = addDays(data, 56).toLocaleDateString()
    } else {
        Swal.fire({
            icon: 'error',
            text: 'Favor selecionar quantidade de parcelas.'
        })
    }

}

function resetar() {
    const vtotal1 = document.getElementById("boleto1-valor");
    const dfinal1 = document.getElementById("boleto1-vencimento");

    const vtotal2 = document.getElementById("boleto2-valor");
    const dfinal2 = document.getElementById("boleto2-vencimento");

    const vtotal3 = document.getElementById("boleto3-valor");
    const dfinal3 = document.getElementById("boleto3-vencimento");

    const vtotal4 = document.getElementById("boleto4-valor");
    const dfinal4 = document.getElementById("boleto4-vencimento");

    vtotal1.innerHTML = '00,00';
    dfinal1.innerHTML = '00/00/0000';

    vtotal2.innerHTML = '00,00';
    dfinal2.innerHTML = '00/00/0000';

    vtotal3.innerHTML = '00,00';
    dfinal3.innerHTML = '00/00/0000';

    vtotal4.innerHTML = '00,00';
    dfinal4.innerHTML = '00/00/0000';
}