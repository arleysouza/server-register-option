const router = require("express").Router();
const {RegisterController} = require("../controllers");
const {create, list, remove, count} = new RegisterController();

router.post("/create", create);
router.delete("/remove", remove);
router.get("/list", list);
router.get("/count", count);

router.use( (_, res) => {
	res.status(200).json({error:"Operação desconhecida com o registro"});
});

module.exports = router;

