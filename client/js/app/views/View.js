class View{
    constructor(elemento){
        this._elemento = elemento;
    }

    template(model){
        throw new Error('Este método precisa ser implementado');
    }

    render(model){
        this._elemento.innerHTML = this.template(model);
    }
}