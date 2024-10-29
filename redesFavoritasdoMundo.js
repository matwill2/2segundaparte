const layout = {
    plot_bgcolor: getCSS ( '--bg-color'),
    paper_bgcolor: ('--bg-color'),
    height: 700,
    title: {
    
    }
} 
 const grafico = document.createElement('div')
     grafico.className = 'grafico'
     document.getElementByd('graficos-container')
    .appendchild(grafico)
     Plontly.newPlot(grafico,data, layout)