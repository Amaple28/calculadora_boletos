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
    let firstDays = document.getElementById("radio21").checked ? 21 : 28;

    const vtotal1 = document.getElementById("boleto1-valor");
    const dfinal1 = document.getElementById("boleto1-vencimento");

    const vtotal2 = document.getElementById("boleto2-valor");
    const dfinal2 = document.getElementById("boleto2-vencimento");

    const vtotal3 = document.getElementById("boleto3-valor");
    const dfinal3 = document.getElementById("boleto3-vencimento");

    const vtotal4 = document.getElementById("boleto4-valor");
    const dfinal4 = document.getElementById("boleto4-vencimento");

    const vtotal5 = document.getElementById("boleto5-valor");
    const dfinal5 = document.getElementById("boleto5-vencimento");

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
    }else if(!document.getElementById("radio21").checked && !document.getElementById("radio28").checked){
        Swal.fire({
            icon: 'error',
            text: 'Favor selecionar os dias iniciais'
        })
    }else if (parcelas == 1) {
        vtotal1.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal1.innerHTML = addDays(data, firstDays).toLocaleDateString()
    } else if (parcelas == 2) {
        valor = (valor / 2).toFixed(2)

        vtotal1.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal1.innerHTML = addDays(data, firstDays).toLocaleDateString()

        vtotal2.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal2.innerHTML = addDays(data, firstDays+7).toLocaleDateString()
    } else if (parcelas == 3) {
        valor = (valor / 3).toFixed(2)

        vtotal1.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal1.innerHTML = addDays(data, firstDays).toLocaleDateString()

        vtotal2.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal2.innerHTML = addDays(data, firstDays+7).toLocaleDateString()

        vtotal3.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal3.innerHTML = addDays(data, firstDays+14).toLocaleDateString()
    } else if (parcelas == 4) {
        valor = (valor / 4).toFixed(2)

        vtotal1.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal1.innerHTML = addDays(data, firstDays).toLocaleDateString()

        vtotal2.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal2.innerHTML = addDays(data, firstDays+7).toLocaleDateString()

        vtotal3.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal3.innerHTML = addDays(data, firstDays+14).toLocaleDateString()

        vtotal4.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal4.innerHTML = addDays(data, firstDays+21).toLocaleDateString()
    } else if (parcelas == 5) {
        valor = (valor / 5).toFixed(2)

        vtotal1.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal1.innerHTML = addDays(data, firstDays).toLocaleDateString()

        vtotal2.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal2.innerHTML = addDays(data, firstDays+7).toLocaleDateString()

        vtotal3.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal3.innerHTML = addDays(data, firstDays+14).toLocaleDateString()

        vtotal4.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal4.innerHTML = addDays(data, firstDays+21).toLocaleDateString()

        vtotal5.innerHTML = `R$ ${parseFloat(valor)}`
        dfinal5.innerHTML = addDays(data, firstDays+28).toLocaleDateString()
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

    const vtotal5 = document.getElementById("boleto5-valor");
    const dfinal5 = document.getElementById("boleto5-vencimento");

    vtotal1.innerHTML = '';
    dfinal1.innerHTML = '';

    vtotal2.innerHTML = '';
    dfinal2.innerHTML = '';

    vtotal3.innerHTML = '';
    dfinal3.innerHTML = '';

    vtotal4.innerHTML = '';
    dfinal4.innerHTML = '';

    vtotal5.innerHTML = '';
    dfinal5.innerHTML = '';
}