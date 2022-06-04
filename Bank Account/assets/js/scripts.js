class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(saldo){
        this._saldo = saldo;
    }

    sacar(valor){
        if (valor>this._saldo){return "Operação negada! Saldo insuficiente!"}
        this._saldo -= valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo += valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero,cartaoCredito=0){
        super(agencia, numero, 'corrente');
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(cartaoCredito){
        this._cartaoCredito = cartaoCredito;;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero, 'poupança');
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero, 'universitária');
    }

    sacar(valor){
        return valor<=500 ? super.sacar(valor) : 'valor inválido! Limite de saque de 500 reais';
    }
}
