
var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato');

// GET /contratos/freguesias
router.get('/contratos/freguesias', function(req, res, next) {
  Contrato.getFreguesias()
    .then(freguesias => {
      res.jsonp(freguesias)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de freguesias."})
    })
});

// GET /contratos/especies
router.get('/contratos/especies', function(req, res, next) {  
  Contrato.getEspecies()
    .then(especies => {
      res.jsonp(especies)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de especies."})
    })
});

/* GET /contratos?especie=EEEE | GET /contratos?implant=AAA */
router.get('/contratos', function(req, res) {
  if (req.query.especie || req.query.implant) {
    if (req.query.especie) {
      Contrato.getcontratos_Especie(req.query.especie)
        .then(dados => {
          res.status(200).json(dados)
        })
        .catch(erro => {
          res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de especies"})
      })
    } else if (req.query.implant) {
      Contrato.getcontratos_Implant(req.query.implant)
        .then(dados => {
          res.status(200).json(dados)
        })
        .catch(erro => {
          res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de implantações"})
      })
    } else {
      res.status(520).json({mensagem: "Query inválida."})
    }
  } else {
    
    Contrato.list()
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de Contratos."})
      })
  }
});


// GET /contratos
router.get('/contratos', function(req, res, next) {
  Contrato.list()
    .then(contratos => {
      res.jsonp(contratos)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de Contratos."})
    })
});

// GET /contratos/:id
router.get('/contratos/:id', function(req, res, next) {
  Contrato.getPlanta(req.params.id)
    .then(contrato => {
      res.jsonp(contrato);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do Contrato"})
    })
});

// POST /contratos
router.post('/contratos',(req,res) => {
  Contrato.addPlanta(req.body)
    .then(dados => {
      res.status(201).json(dados)
    })
    .catch(erro => {
      res.status(603).json({erro:erro,message: "Erro a adicionar um Contrato."})
    })

})

// DELETE /contratos/:id
router.delete('/contratos/:id',(req,res) => {
  Contrato.deleteContrato(req.params.id)
    .then(dados => {
      res.json(dados)
    })
    .catch(erro => {
      res.status(605).json({erro:erro,message: "Erro a apagar o Contrato."})
    })

})



module.exports = router;
