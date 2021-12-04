console.log(Math.ceil(6.1)) //ceil arredonda pra cima(teto) e floor arredondo pra baixa(chao)

const obj1 = {}
obj1.nome = 'Bola'
//obj.['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj3.nome)
console.log(obj3.nome)