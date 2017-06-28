class ProxyFactory{
    static create(objeto, properties,acao){
        return new Proxy(objeto,{
            get(target,prop,receiver){
                if(properties.includes(prop) && ProxyFactory._ehFuncao(target[prop])){
                    return function(){
                        let retorno = Reflect.apply(target[prop],target,...arguments);
                        acao(target);
                        return retorno;
                    }
                }
                return target[prop0];
            },
            set(target,prop,value,receiver){
                let retorno = target[prop] = value;
                if (properties.includes(prop))
                    acao(target);
                return retorno;
            }   
        })
    }

    static _ehFuncao(func){
        return typeof(func) == typeof(Function);
    }
}

