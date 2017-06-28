class AbastecimentoController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputPrefixo = $('#prefixo');
        this._inputData = $('#data');
        this._inputCombustivel = $('#combustivel');

        this._ordemAtual = '';

        this._listaAbastecimentos = new Bind(new ListaAbastecimentos(),
            new AbastecimentosView($('#abastecimentosView')),
            'adiciona','esvazia','ordena','inverteOrdem');
    }

    

    adiciona(event){
        console.log(event);
        event.preventDefault();
        this._listaAbastecimentos.adiciona(this._criaAbastecimento());
        this._limpaFormulario();
    }

    ordena(coluna){
        if(this._ordemAtual == coluna)
            this._listaAbastecimentos.inverteOrdem();
         else
            this._listaAbastecimentos.ordena((a,b) => a[coluna] - b[coluna]);   

        this._ordemAtual = coluna;
    }

    apaga(){
        this._listaAbastecimentos.esvazia();
    }

    _criaAbastecimento(){
        return new Abastecimento(this._inputPrefixo.value,
            this._inputData.value, this._inputCombustivel.value);
    }

    _limpaFormulario(){
        this._inputPrefixo.value = '';
        this._inputData.value = '';
        this._inputCombustivel.value = 0;

        this._inputPrefixo.focus();
    }


}