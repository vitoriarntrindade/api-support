const { Router } = require("express");
const router = Router();

// GET /atendimentos - Listar todos os atendimentos
router.get("/atendimentos", (req, res) => {
  res.send("Listar todos os atendimentos");
});

// POST /atendimentos - Criar um novo atendimento
router.post("/atendimentos", (req, res) => {
  res.send("Novo atendimento criado");
});

// PUT /atendimento/:id - Atualizar um atendimento existente
router.put("/atendimento/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Atendimento com id ${id} atualizado`);
});

// DELETE /atendimento/:id - Excluir um atendimento existente
router.delete("/atendimento/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Atendimento com id ${id} excluído`);
});

module.exports = router;
