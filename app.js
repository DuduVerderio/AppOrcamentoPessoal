class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == "" || this[i] == null){
                return false
            }
        }
        return true
    }
}

class Bd{
    constructor(){
        let id = localStorage.getItem("id")

        if(id === null){
            localStorage.setItem("id", 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem("id")
        return parseInt(proximoId) + 1
    }
    
    gravar(d){
        let id = this.getProximoId()
        
        localStorage.setItem(id, JSON.stringify(d))
        
        localStorage.setItem("id", id)
    }
}

let bd = new Bd()

function cadastrarDespesa(){
    let ano = document.getElementById("ano").value
    let mes = document.getElementById("mes").value
    let dia = document.getElementById("dia").value
    let tipo = document.getElementById("tipo").value
    let descricao = document.getElementById("descricao").value
    let valor = document.getElementById("valor").value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
    
    if(despesa.validarDados()){
        bd.gravar(despesa)
        $("#sucessoGravacao").modal("show")
    }
    else{
        $("#erroGravacao").modal("show")
    }
}

