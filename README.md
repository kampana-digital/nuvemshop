# Funções úteis para facilitar a chamada de métodos de requisição HTTP para API da plataforma NuvemShop

Como usar ?

```shell
npm i nuvemshop
```

Setando os parâmetros de consulta a partir de um objeto.
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
- listCustomers(): 
    Essa função lista todos os clientes para uma determinada loja.

- getCustomer(id): 
    Essa função lista um cliente, passando-se o seu "id".


**Exemplos**:

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
    const listarClientes = await nuvemshop.listCustomers();
    console.log(listarClientes);
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
    const id = "12345678";
    const cliente = await nuvemshop.getCostumer(id);
    console.log(cliente);
}
//
app();
```
