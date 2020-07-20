const axios = require('axios');
//
let obj = {};
//
const config = (newConfig) => obj = newConfig;
//
const listCustomers = async (filter) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        if(filter){
            const customers = (await axios.get(api + `/customers?${filter}`, {
                headers: {
                    'Authentication': obj.access_token,
                    'User-Agent': obj.user_agent
                }
            })).data;
            return customers;
        }
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
const getStore = async (filter) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        if(filter){
            const store = (await axios.get(api + `/store?${filter}`, {
                headers: {
                    'Authentication': obj.access_token,
                    'User-Agent': obj.user_agent
                }
            })).data;
            return store;
        }
        const store = (await axios.get(api + '/store', {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return store;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const listProducts = async (filter) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        if(filter){
            const products = (await axios.get(api + `/products?${filter}`, {
                headers: {
                    'Authentication': obj.access_token,
                    'User-Agent': obj.user_agent
                }
            })).data;
            return products;
        }
        const products = (await axios.get(api + '/products', {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agent
            }
        })).data;
        return products;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const getProduct = async (product_id) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        const product = (await axios.get(api + `/products/${product_id}`, {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return product;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const getProductVariants = async (product_id, filter) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        if(filter){
            const variants = (await axios.get(api + `/products/${product_id}/variants?${filter}`, {
                headers: {
                    'Authentication': obj.access_token,
                    'User-Agent': obj.user_agent
                }
            })).data;
            return variants;
        }
        const variants = (await axios.get(api + `/products/${product_id}/variants`, {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return variants;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
const getProductVariantsById = async (product_id, variant_id) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        const variants = (await axios.get(api + `/products/${product_id}/variants/${variant_id}`, {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return variants;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const getProductImages = async (product_id, filter) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        if(filter){
            const images = (await axios.get(api + `/products/${product_id}/images?${filter}`, {
                headers: {
                    'Authentication': obj.access_token,
                    'User-Agent': obj.user_agent
                }
            })).data;
            return images;
        }
        const images = (await axios.get(api + `/products/${product_id}/images`, {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return images;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const listCategories = async (filter) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        if(filter){
            const categories = (await axios.get(api + `/categories?${filter}`, {
                headers: {
                    'Authentication': obj.access_token,
                    'User-Agent': obj.user_agent
                }
            })).data;
            return categories;
        }
        const categories = (await axios.get(api + '/categories', {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return categories;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const getCategory = async (category_id) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        const categories = (await axios.get(api + `/categories/${category_id}`, {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return categories;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const listOrders = async (filter) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        if(filter){
            const orders = (await axios.get(api + `/orders?${filter}`, {
                headers: {
                    'Authentication': obj.access_token,
                    'User-Agent': obj.user_agent
                }
            })).data;
            return orders;
        }
        const orders = (await axios.get(api + '/orders', {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return orders;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
const getOrder = async (order_id) => {
    try {
        const api = `https://api.nuvemshop.com.br/v1/${obj.store_id}`;
        const order = (await axios.get(api + `/orders/${order_id}`, {
            headers: {
                'Authentication': obj.access_token,
                'User-Agent': obj.user_agents
            }
        })).data;
        return order;
    } catch(e) {
        console.log(e.response.statusText);
    }
}
//
module.exports = {
    config,
    listCustomers,
    getCustomer,
    getStore,
    listProducts,
    getProduct,
    getProductVariants,
    getProductVariantsById,
    getProductImages,
    listCategories,
    getCategory,
    listOrders,
    getOrder,
};