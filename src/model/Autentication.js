import jwt from "jsonwebtoken";

class Autentication {
  getToken(idUser) {
    const token = jwt.sign({ id: idUser }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return token;
  }

  verifyToken(req, res, next) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      
      if (err) {
        return res.status(401).send({ error: "Token inválido" });
      }

      req.userId = decoded.id;
      console.log("Chamada: ", req.userId);
      next();
    });
  }

  logout(req, res) {
  }
}

module.exports = Autentication;
