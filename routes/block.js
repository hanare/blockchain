var express = require('express');
var router = express.Router();
const Block = require('../helper/Block.js');
var blockChain = require('../helper/BlockChain');
var BlockChain = new blockChain.Blockchain();

/* GET home page. */
router.get('/:id', function (req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    const id = req.params.id;
    if (id < 0)
        return res.send(JSON.stringify({ err: "Invalid data" }));

    BlockChain.getBlock(id).then(block => { res.send(JSON.stringify(block)); }).catch(err => { res.send(JSON.stringify({ error: " Block not found" })); });


});
router.post("/", function (req, res, next) {


    res.setHeader('Content-Type', 'application/json');
    let data = req.body.body;
    console.log(data);
    console.log(data.length);
    if (!(data && data.length > 0)) {
        res.send(JSON.stringify({ err: "Invalid data" }));
    }


    const newBlock = new Block.Block(data);
    BlockChain.addBlock(newBlock).then(r => {
        res.send(JSON.stringify({ message: "Block Added successfully" }));
    }).catch(err => {
        res.send(JSON.stringify({ error: "Sorry! Error while adding the block " }));
    });




});

module.exports = router;
