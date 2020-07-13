# Funções úteis para facilitar a chamada de métodos de requisição HTTP para API da plataforma NuvemShop

Como usar ?

```shell
npm i nuvemshop
```

Setando os parâmetros de consulta a partir de um objeto.
```js
const { listCustomers, getCustomer } = require("nuvemshop");
//
const config = {
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    };
```

Funções:
- listCustomers(config): 
    Essa função lista todos os clientes para uma determinada loja.

- getCustomer(config, id): 
    Essa função lista um cliente, passando-se o seu "id".


**Exemplos**:

# listCustomers
```js
const { listCustomers } = require("nuvemshop");
//
const app = async () => {
    const config = {
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    };
    const listarClientes = await listCustomers(config);
    console.log(listarClientes);
}
//
app();
```
# getCustomer
```js
const { getCostumer } = require("nuvemshop");
//
const app = async () => {
    const config = {
        store_id: "Id da loja",
        access_token: "Token de acesso",
        user_agent: "Usuário de acesso"
    };
    const id = "12345678";
    const cliente = await getCostumer(config, id);
    console.log(cliente);
}
//
app();
```
