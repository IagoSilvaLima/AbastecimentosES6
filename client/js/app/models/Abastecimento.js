class Abastecimento{
    constructor(prefixo,data,combustivel){
        this._prefixo = prefixo;
        this._data = data;
        this._combustivel = Number(combustivel);
        Object.freeze(this);
    }

    get prefixo(){
        return this._prefixo;
    }

    get data(){
        return this._data;
    }

    get combustivel(){
        console.log(typeof this._combustivel);
        return this._combustivel;
    }
}