var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16000/contratos")
  .then(resp =>{
      contratos = resp.data
      res.status(200).render("ContratosListPage", {"lComp": contratos, "date": d})
  })
  .catch(erro => {
      res.status(502).render("error", {"error": erro})
  })
});

module.exports = router;
