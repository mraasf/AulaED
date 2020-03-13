import List from '../Lista';

class Questao9 {
    constructor() {
        this.lista1 = new List();
        this.nome;
        this.idade;
    }

    sortByName() {
        return this.sort(0)
    }
    sortByAge(){
        return this.sort(1)
    }
    sort(by) {
        let newPessoa = new Questao9();
        let size = this.lista1.size();
        let aux = this.lista1;
        let arr = [];

        while(!aux.isEmpty()) {
            arr.push(aux.removeEnd());
        }
       
        if(by == 1){
            arr.forEach((el,temp) => {
                temp = el[0];
                el[0] = el[1];
                el[1] = temp;
            });
        }

        arr.sort();
        
        for(let i =0; i < size; i++) {
            newPessoa.addPessoa(arr[i][0], arr[i][1]);
        }

        return newPessoa;
    }

    addPessoa(val1, val2) {
        if(isNaN(val1)) {
            this.nome = val1;
            this.idade = val2;
        } else {
            this.nome = val2;
            this.idade = val1;
        }

        this.lista1.append([this.nome, this.idade]);
    }

    toString(id = -1) {
        let result = "";
        if(id == -1){
            for(let i = 0; i < this.lista1.size(); i++) {
                let aux = this.lista1.getAt(i);
                result += aux[0] +":"+aux[1]+" ";
            }
        } else {
            let aux = this.lista1.getAt(id);
            return aux[0]+":"+aux[1]
        }

        return result;
    }
}

export default Questao9;