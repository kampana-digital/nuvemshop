const axios = require('axios');
//
let obj = {};
//
const config = (newConfig) => obj = newConfig;
//
const listCustomers = async () => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        const customers = (await axios.get(api + '/customers', {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agent
            }
        })).data;
        return customers;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const getCustomer = async (customer_id) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        const customer = (await axios.get(api + `/customers/${customer_id}`, {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return customer;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
module.exports = {
    config,
    listCustomers,
    getCustomer
}