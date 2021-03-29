const jwt = require("jsonwebtoken");
const config = require("../config/secret");

//verifikasi role
function verifikasi() {
  return function (req, rest, next) {
    let role = req.body.role;
    //cek authorization
    let tokenWithBearer = req.headers.authorization;
    if (tokenWithBearer) {
      let token = tokenWithBearer.split(" ")[1];
      //verifikasi
      jwt.verify(token, config.secret, function (error, decoded) {
        if (error) {
          return rest
            .status(401)
            .send({ auth: false, message: "token tidak terdaftar" });
        } else {
          if (role == 2) {
            req.auth = decoded;
            next();
          } else {
            return rest.status(401).send({
              auth: false,
              message: "gagal mengotorization role anda",
            });
          }
        }
      });
    } else {
      return rest
        .status(401)
        .send({ auth: false, message: "token tidak tersedia" });
    }
  };
}
module.exports = verifikasi;
