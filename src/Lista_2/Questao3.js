class Questao3 {
    constructor(){
        this.lista = [];
    }
    add(el){

        // unshift
        let aux = [el]

        for(let i = 0; i < this.lista.length; i++) {
            aux[i+1] = this.lista[i];
        }
        this.lista = aux;

        
        //this.lista.unshift(dado);
    }
    append(el){
        //push 
        this.lista[this.lista.length] = el;
        //this.lista.push(dado);
    }
    removeBeggining(){
        //shift:
        let el = this.lista[0];

        for(let i = 0; i < this.lista.length-1; i++){
            this.lista[i] = this.lista[i+1];
        }
        return el;
        //return this.lista.shift();
    }
    removeLast(){
        // pop
        let aux = [];
        let el;

        for(let i = 0; i < this.lista.length-1; i++){
            aux[i] = this.lista[i];
            el = aux[i];
        }
        this.lista = aux;
        return el;


        //return this.lista.pop();
    }
    size(){
        return this.lista.length;
    }
    addAt(posicao, dado){
        if(posicao >= this.lista.length){
            this.lista.append(dado);
        }else if(posicao == 0){
            this.lista.add(dado);
        }else{
            let aux = [];
            for(let i=0; i<=posicao;i++){
                if(i==posicao){
                    aux.unshift(dado);
                    break;
                }
                aux.unshift(this.lista.pop());
            }
            //console.log(aux)
            this.lista = this.lista.concat(aux);           
        }
        
    }

}

export default Questao3;