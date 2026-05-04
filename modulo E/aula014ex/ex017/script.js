function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Digite um valor!')
    } else {
        tab.innerHTML = ''

        for (var c = 1; c <= 10; c++) {

            var n = Number(num.value)
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
           
        }
    }
}