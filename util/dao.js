
const pool = require('./db');


const get_data = async (query) => {

    const client = pool;
    try {
        const data = await client.query(query);
        return data.rows;
    } catch (error) {
        console.log("error fetching data")
    }
}

module.exports = { get_data }