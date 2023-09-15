//constantes
const lis = document.querySelectorAll(".list-group-item")
const buscador = document.querySelector("#buscador")

//variables


//funciones
function filtrar(substring, elements){
    cumplen = []
    for (i of elements){
        if (i.innerText.toLowerCase().includes(substring.toLowerCase())){
            cumplen.push(i)
        }
    }
    return cumplen
}



//ejecuciones
for (i=0;i<lis.length;i+=2){
    lis[i].classList.add("list-group-item-secondary")
}


buscador.addEventListener("input", ()=>{
    if (buscador.value == ""){
        for (i of lis){
            i.classList.remove("d-none")
        }
    }else{
        filtrados = filtrar(buscador.value, lis)
        for (i of lis){
            i.classList.add("d-none")
        }
        for (i of filtrados){
            i.classList.remove("d-none")
        }
    }
})