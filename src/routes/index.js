const router = require("express").Router();
const registerRoute = require("./register");

router.use("/register", registerRoute);

router.use( (_, res) => {
	res.status(200).json({error:"Operação desconhecida"});
});

module.exports = router;
