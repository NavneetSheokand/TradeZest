const { Signup,Login } = require("../Controllers/AuthController");
const router = require("express").Router();
const{userVerification} = require("../Middlewares/AuthMiddleware");
const jwt = require("jsonwebtoken");


router.post("/signup", Signup);
router.post('/login', Login);
router.post('/',userVerification)
router.get("/validateToken", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ valid: false });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    res.status(200).json({ valid: true, userId: decoded.id });
  } catch (err) {
    res.status(401).json({ valid: false });
  }
});

module.exports = router;