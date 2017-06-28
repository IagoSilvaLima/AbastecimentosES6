class ListaAbastecimentos{
    constructor(){
        this._abastecimentos = [];
    }

    inverteOrdem(){
        this._abastecimentos.reverse();
    }

    ordena(criterio){
        this._abastecimentos.sort(criterio);
    }

    adiciona(abastecimento){
        console.log('chamou');
        this._abastecimentos.push(abastecimento);
    }

    esvazia(){
        this._abastecimentos = [];
    }

    

    get abastecimentos(){
        return this._abastecimentos.slice(0);
    }

    get combustivelTotal(){
       return this._abastecimentos.reduce((total,abastecimento) => total + abastecimento.combustivel,0); 
    }
}