const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}
const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}
function criarGrafico(data, layout){
 const grafico = document.createElement('div')
     grafico.className = 'grafico'
     document.getElementByd('graficos-container')
    .appendchild(grafico)
    Plontly.newPlot(grafico,data, layout)
    }
    function incluirTexto (texto){
        const container = document.createElement('p')
        ('graficos-container');
        paragrafo.classlist.add('graficos-container__texto')
        paragrafo.innerHTML = texto
        container.appendChild(paragrafo)
    }
    
export {getCSS, tickConfig,criarGrafico,incluirTexto}