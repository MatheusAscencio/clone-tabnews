import database from "infra/database.js";

function status(req, res) {
  res.status(200).send({ text: 'Alunos do curso.dev são pessoas fora do normal, acima da média.'});
}

export default status;
