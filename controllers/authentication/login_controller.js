const dao = require('../../util/dao')
const loginController = async (req, res) => {
    let data = [];
    try {
        data = await dao.get_data("select * from users");
    } catch (error) {
        res.status(500).send("internal server error")
    }
    res.json({
        data: data
    })
}

module.exports = loginController;