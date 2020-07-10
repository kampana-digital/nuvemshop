const axios = require('axios');

const listCustomers = async (config) => {
    const auth = {
        store_id: config.store_id,
        access_token: config.access_token,
        user_agent: config.user_agent
    };
    console.log(config);
    try {
        const api = `https://api.nuvemshop.com.br/v1/${auth.store_id}`;
        const customers = (await axios.get(api + '/customers', {
            headers: {
                'Authentication': auth.access_token,
                'User-Agent': auth.user_agent
            }
        })).data;
        return customers;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const getCustomer = async (config, customer_id) => {
    const auth = {
        store_id: config.store_id,
        access_token: config.access_token,
        user_agent: config.user_agent
    };
    console.log(config);
    try {
        const api = `https://api.nuvemshop.com.br/v1/${auth.store_id}`;
        const customer = (await axios.get(api + `/customers/${customer_id}`, {
            headers: {
                'Authentication': auth.access_token,
                'User-Agent': auth.user_agent
            }
        })).data;
        return customer;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
module.exports = {
    listCustomers,
    getCustomer
};

