# Contador
Esse projeto contém um site básico de interação com o usuário através de um contador.
## Funcionamento
 - **Botão Adicionar**: o *Event* de *click* no botão **Adicionar** é recebido pela função *load()*, que, por sua vez, chama a função *increment()* para realizar a adição de uma unidade ao contador.
 - **Botão Subtrair**: o *Event* de *click* no botão **Subtrair** é recebido pela função *load()*, que, por sua vez, chama a função *decrement()* para realizar a subtração de uma unidade ao contador.
 - **Função *increment***: Essa função reliza o acréscimo de uma unidade ao contador, estabelecendo um limite ao contador de*1000 unidades. Essa função também troca a cor do contador para verde sempre que o número contido nele for positivo.
 - **Função *decrement***: Essa função reliza o decréscimo de uma unidade ao contador, estabelecendo um limite ao contador de -1000 unidades. Essa função também troca a cor do contador para vermelho sempre que o número contido nele for negativo.
 - **Função *load***: Responsável por tratar o *Event* de *click* nos botões, através de um *addEventListener* e direcionar para a função correspondente.
## Recursos Implementados
 - Tratamento de Eventos
 - Estrutura condicional
 - Interação com HTML
 - DOM
 - Troca de estilos
 - Functions
 - Variáveis
 - Código estruturado

## Créditos
Código criado por Carlos Daniel Penaforte de Souza.