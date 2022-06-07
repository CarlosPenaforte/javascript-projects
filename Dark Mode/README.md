# Dark Mode
Esse projeto contém um código que altera as cores dos elementos de uma página para um tema mais escuro, 'Dark Mode', através da manipulação do *DOM*.
## Funcionamento
 - ***changeMode()***: No *event* de *click* no botão, a função *changeMode()* é chamada e, após, também chama as funções *changeClasses()* e *changeText*.
 - ***changeClasses()***: Em todos os elementos do arquivo HTML acessados, é feito um *toggle* da classe 'dark-mode'.
 - ***changeText()***: Os textos no botão e no título da página são alterados conforme o modo atual da página.

## Recursos Implementados
 - DOM;
 - addEventListener;
 - getElementById;
 - getElementsByTagName;
 - classList
 - classList.toggle

### Créditos
Código criado por **Carlos Daniel Penaforte de Souza**.