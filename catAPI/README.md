# catAPI
Esse projeto contém um código de interação com a API **The Cat API**, recendo imagens através de arquivos *JSON* e adicionando ao arquivo HTML.
## Funcionamento
 - **Botão Change cat**: o *Event* de *click* no botão **Change cat** é recebido pela função *GET_CATS()*, que inicializa uma fetch utilizando a url do Servidor do **The Cat API**.
 - ***fetch***: É então tratado o arquivo *JSON* recebido, extraindo a url da imagem aleatória gerada e a adicionando ao arquivo *HTML*.

## Recursos Implementados
 - Promises;
 - Fetch;
 - JSON;
 - API;
 - Funções assíncronas;
 - Tratamento de erro;

### Créditos
Código criado por **Carlos Daniel Penaforte de Souza**.
API utilizada: **The Cat API**.