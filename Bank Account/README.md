# Bank Account
Esse projeto contém um código **OOJS** de controle de contas bancárias, armazenando dados e realizando operações bancárias. A interação com o código se dá através do console.
## Funcionamento
 - **ContaBancaria**: Classe mãe, que recebe os parâmetros de 'agencia', 'numero' e 'tipo' através de seu *constructor*. Além disso, possui métodos de *get* e *set* da propriedade 'saldo', possui métodos de *sacar()* e *depositar()* na conta.
 - ***sacar()***: Método que retira dinheiro da conta bancaria. Possui um teto de saque igual o valor atual contido na conta bancária.
 - **ContaCorrente**: Classe filha, que recebe os parâmetros de 'agencia', 'numero' e 'cartaoCredito' através de seu *constructor* e chama o *constructor* da classe mãe para armazenar a 'agencia' e 'numero'. Além disso, a o parâmetro 'cartaoCredito' é armazenado e pode ser manipulado com métodos *set* e *get*.
 - **ContaPoupança**: Classe filha, que recebe os parâmetros de 'agencia' e 'numero' através de seu *constructor* e chama o *constructor* da classe mãe para armazená-los.
  - **ContaUniversitaria**: Classe filha, que recebe os parâmetros de 'agencia' e 'numero' através de seu *constructor* e chama o *constructor* da classe mãe para armazená-los. Possui um limite de saque de 500 reais por operação.

## Recursos Implementados
 - OOJS;
 - Constructor;
 - Setter;
 - Getter;
 - Métodos;
 - Herança;

### Créditos
Código criado por **Carlos Daniel Penaforte de Souza**.