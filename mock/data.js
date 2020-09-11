const Mock = require("mockjs")

module.exports = Mock.mock({
    "list|10-20": [{
        "title": "@ctitle(20)",
        "id": "@id",
        "url": "@image(150x200,@color)",
        "price|100-999": 1
    }]
})