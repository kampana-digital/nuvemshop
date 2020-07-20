# Funções úteis para facilitar a chamada de métodos de requisição HTTP para API da plataforma NuvemShop

Como usar ?

```shell
npm i nuvemshop
```

Setando um cliente a partir de um objeto.
```js
const nuvemshop = require("nuvemshop");
//
nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
```

### Funções:
- getStore():
    Essa função retorna um vetor(array) com todas as informações cadastrais referentes a loja/empresa.

- listCustomers(): 
    Essa função retorna um vetor(array) com todos os clientes para uma determinada loja.

- getCustomer(customer_id): 
    Essa função retorna um único objeto de um cliente contendo todas as sus informações cadastrais, passando-se o seu "id".

- listCategories():
    Essa função retorna um vetor(array) com todas as categorias cadastradas na loja.

- getCategory(category_id):
    Essa função retorna um único objeto de uma categoria contendo sus informações cadastrais, passando-se o seu "id".

- listProducts():
    Essa função retorna um vetor(array) com todos os produtos cadastrados na loja.

- getProduct(product_id):
    Essa função retorna um único objeto de um produto cadastrado na loja, passando-se o seu "id".

- getProductVariants(product_id):
    Essa função retorna um vetor(array) de todas as variantes de um determinado produto, por meio do "id" do produto.

- getProductVariantsById(product_id, variant_id):
    Essa função seleciona uma única variação para um determinado produto.

- getProductImages(product_id):
    Essa função retorna um vetor(array) com todas as imagens correspondentes a um determinado produto.

- listOrders: 
    Essa função retorna um vetor(array) com todas as ordens de pedidos realizados para uma determinada loja.

- getOrder:
    Essa função retorna um único objeto de uma order contendo sus informações cadastrais, passando-se o seu "id".

### Filtros:

Lista com parâmetros de filtro para as funções de listagem de entidade: 

## listStore

| Parâmetro      | Explicação                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| fields         | Lista de campos separados por vírgula a serem incluídos na resposta                              |

## listCustomers

| Parâmetro      | Explicação                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| since_id       | Restringir resultados para após o ID especificado                                         |
| created_at_min | Mostrar clientes criados após a data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))       |
| created_at_max | Mostrar clientes criados antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))      |
| updated_at_min | Mostrar a última atualização dos clientes após a data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))  |
| updated_at_max | Mostrar a última atualização dos clientes antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| page           | Página a mostrar                                                                                     |
| per_page       | Quantidade de resultados                                                                                |
| fields         | Lista de campos separados por vírgula a serem incluídos na resposta                                       |
| q              | Pesquisar clientes que contenham o texto fornecido em seu nome, email ou identificação               |

## listCategories

| Parâmetro      | Explicação                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| since_id       | Restringir resultados para após o ID especificado                                         |
| language       | Especifique o idioma de pesquisa                                                                     |
| handle         | Mostrar categorias com um determinado URL                                                                  |
| parent_id      | Mostrar categorias com uma determinada categoria pai                                                   |
| created_at_min | Mostrar categorias criados após a data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))       |
| created_at_max | Mostrar categorias criados antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))      |
| updated_at_min | Mostrar a última atualização das categorias após a data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))  |
| updated_at_max | Mostrar a última atualização das categorias antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| page           | Página a mostrar                                                                                     |
| per_page       | Quantidade de resultados                                                                                |
| fields         | Lista de campos separados por vírgula a serem incluídos na resposta                                       |

## listProducts

| Parâmetro      | Explicação                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| since_id       | Restringir resultados para após o ID especificado                                                       |
| language       | Especifique o idioma de pesquisa                                                                         |
| q              | Pesquisar produtos que contenham o texto fornecido em seu nome, descrição ou SKU                    |
| handle         | Mostrar produtos com um determinado URL                                                                   |
| category_id    | Mostrar produtos com uma determinada categoria                                                             |
| published      | Mostrar produtos por status publicado. Os valores válidos são "true" ou "false"                |
| free_shipping  | Mostrar produtos pelo status free_shipping. Os valores válidos são "true" ou "false"          |
| created_at_min | Mostrar produtos criados após a data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))      |
| created_at_max | Mostrar produtos criados antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))     |
| updated_at_min | Mostrar produtos atualizados pela última vez após a data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated_at_max | Mostrar produtos atualizados pela última vez antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))|
| sort_by        | Classificar produtos por um critério específico (I.E.: sort_by=created-at-ascending)              |
| page           | Página a mostrar                                                                                      |
| per_page       | Quantidade de resultados                                                                                 |
| fields         | Lista de campos separados por vírgula a serem incluídos na resposta                                      |

## 

| Critérios de ordenação            | Explicação                                                                       |
| ----------------------------------| -------------------------------------------------------------------------------- |
| user                              | Classificação definida manualmente pelo usuário                                  |
| price-ascending, cost-ascending   | Classificar por preço ascendente                                                 |
| price-descending, cost-descending | Classificar por preço decrescente                                                |
| alpha-ascending, name-ascending   | Classificar por Nome do produto ascendente                                       |
| alpha-descending, name-descending | Classificar por nome do produto decrescente                                      |
| created-at-ascending              | Classificar por data de criação crescente                                        |
| created-at-descending             | Classificar por data de criação decrescente                                      |
| best-selling                      | Classificar por número de produtos vendidos descendente                          |

## getProductVariants

| Parâmetro      | Explicação                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| since_id       | Restringir resultados para após o ID especificado                                                        |
| created_at_min | Mostrar variantes do produto criadas após a data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))       |
| created_at_max | Mostrar variantes de produto criadas antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))      |
| updated_at_min | Mostrar variantes do produto atualizadas após a data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))  |
| updated_at_max | Mostrar variantes do produto atualizadas pela última vez antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| page           | Página a mostrar                                                                               |
| per_page       | Quantidade de resultados                                                                           |
| fields         | Lista de campos separados por vírgula a serem incluídos na respost                                       |

## getProductImages

| Parâmetro      | Explicação                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| since_id       | Restringir resultados para após o ID especificado                                                |
| src            | Mostrar imagens do produto com um determinado URL                                                |
| position       | Mostrar imagens do produto em uma determinada posição                                            |
| page           | Página a mostrar                                                                                 |
| per_page       | Quantidade de resultados                                                                         |
| fields         | Lista de campos separados por vírgula a serem incluídos na resposta                              |

## listOrders

| Parâmetro      | Explicação                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| since_id       | Restringir resultados para após o ID especificado                                                                 |
| status         | Mostrar pedidos com um determinado estado. "any" é o padrão                                                        |
| channels       | Restrinja os resultados ao canal de vendas especificado. "any" é o padrão (significa pedidos de pos, api, loja etc.) |
| payment_status | Mostrar pedidos com um determinado estado de pagamento. "any" é o padrão (significa pedidos autorizados, pendentes e pagos) |
| shipping_status| Mostrar pedidos com um determinado estado de entrega. "any" é o padrão                                            |
| created_at_min | Mostrar pedidos criados após a data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))                   |
| created_at_max | Mostrar pedidos criados antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))                  |
| updated_at_min | Última atualização dos pedidos após a data do pedido ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))              |
| updated_at_max | Última atualização dos pedidos antes da data ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))             |
| total_min      | Mostrar pedidos com valor total maior ou igual ao valor especificado                                     |
| total_max      | Mostrar pedidos com valor total menor ou igual ao valor especificado                                      |
| customer_ids   | Restrinja os resultados aos IDs de clientes especificados (separados por vírgula)                                          |
| page           | Página a mostrar                                                                                               |
| per_page       | Quantidade de resultados                                                                                           |
| fields         | Lista de campos separados por vírgula a serem incluídos na resposta                                                   |
| q              | Pesquisar pedidos pelo número especificado; ou contendo o texto fornecido no nome ou no email do cliente              |
| app_id         | Mostrar pedidos criados por um determinado aplicativo                                                                        |

### Exemplos:

# getStore
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const loja = await nuvemshop.getStore();
    //Example passing filter on parameter
    const loja = await nuvemshop.getStore("fields=id,name");
    console.log(loja);
}
//
app();
```
# listCustomers
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const clientes = await nuvemshop.listCustomers();
    //Example passing filter on parameter
    const clientes = await nuvemshop.listCustomers("since_id=1000&fields=id,name");
    console.log(clientes);
}
//
app();
```
# getCustomer
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const id = "xxxxx";
    const cliente = await nuvemshop.getCostumer(id);
    console.log(cliente);
}
//
app();
```
# listCategories
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const categorias = await nuvemshop.listCategories();
    //Example passing filter on parameter
    const categorias = await nuvemshop.listCategories("since_id=1000&fields=id,name");
    console.log(categorias);
}
//
app();
```
# getCategory
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const id = "xxxxx";
    const categoria = await nuvemshop.getCategory(id);
    console.log(categoria);
}
//
app();
```
# listProducts
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const produtos = await nuvemshop.listProducts();
    //Example passing filter on parameter
    const produtos = await nuvemshop.listProducts("since_id=1000&fields=id,name");
    console.log(produtos);
}
//
app();
```
# getProduct
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const id = "xxxxx";
    const produto = await nuvemshop.getProduct(id);
    console.log(produto);
}
//
app();
```
# getProductVariants
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const id = "xxxxx";
    const variantes_produto = await nuvemshop.getProductVariants(id);
    //Example passing filter on parameter
    const variantes_produto = await nuvemshop.getProductVariants(id, "since_id=1000&fields=id,name");
    console.log(variantes_produto);
}
//
app();
```
# getProductVariantsById
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const produto_id = "xxxxx";
    const variante_id = "xxxxx";
    const variante_produto = await nuvemshop.getProductVariantsById(produto_id, variante_id);
    console.log(variante_produto);
}
//
app();
```
# getProductImages
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const id = "xxxxx";
    const produto_imagens = await nuvemshop.getProductImages(id);
    //Example passing filter on parameter
    const produto_imagens = await nuvemshop.getProductImages(id, "since_id=1000&fields=id,name");
    console.log(produto_imagens);
}
//
app();
```
# listOrders
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const pedidos = await nuvemshop.listOrders();
    //Example passing filter on parameter
    const pedidos = await nuvemshop.listOrders("since_id=1000&fields=id,name");
    console.log(pedidos);
}
//
app();
```
# getOrder
```js
const nuvemshop = require("nuvemshop");
//
const app = async () => {
    nuvemshop.config({
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    });
    //
    const id = "xxxxx";
    const pedido = await nuvemshop.getOrder(id);
    console.log(pedido);
}
//
app();
```