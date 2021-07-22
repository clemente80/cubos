export const toFixedReplaces = ((num:any) =>{
    let aux = '$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return aux.replace(/[,]/g, 'X').replace(".", ",").replace(/[X]/g, ".")
})