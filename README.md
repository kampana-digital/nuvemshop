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

Funções:
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

= getOrder:
    Essa função retorna um único objeto de uma order contendo sus informações cadastrais, passando-se o seu "id".

**Exemplos**:

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