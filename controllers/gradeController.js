//import { db } from '../models/index.js';
import { logger } from '../config/logger.js';
import { gradeModel } from '../models/grade.js';
//import { app } from '../routes/gradeRouter.js';

/**
 * *Post create funcionando
 */
const create = async (req, res) => {
  try {
    const grade = new gradeModel(req.body);
    await grade.save();
    res.send();
    logger.info(`POST /grade - ${JSON.stringify()}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    logger.error(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

/**
 * *Get findAll funcionando
 * !Incluido condition no find. Precisa refazer todos os pushs e testar.
 */
const findAll = async (req, res) => {
  const name = req.query.name;

  //condicao para o filtro no findAll
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: 'i' } }
    : {};

  try {
    const grade = await gradeModel.find({});
    res.send(grade);
    logger.info(`GET /grade`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};
/**
 * *Get findOne funcionando
 */

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const grade = await gradeModel.findOne({ _id: req.params.id });
    res.send(grade);

    logger.info(`GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Grade id: ' + id });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

/**
 * *Put update funcionando
 */
const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }

  const id = req.params.id;

  try {
    const grade = await gradeModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send({ message: 'Grade atualizado com sucesso' });

    logger.info(`PUT /grade - ${id} - ${JSON.stringify(req.body)}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a Grade id: ' + id });
    logger.error(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};
/**
 * *Delete remove funcionando
 */

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const grade = await gradeModel.findByIdAndDelete({ _id: req.params.id });
    if (!grade) {
      res.status(404).send('Documento não encontrado na seleção.');
    }
    res.send({ message: 'Grade excluido com sucesso' });

    logger.info(`DELETE /grade - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o Grade id: ' + id });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

/**
 * *Delete remove funcionando
 */
const removeAll = async (req, res) => {
  const id = req.params.id;

  try {
    const grade = await gradeModel.remove({});

    res.send({
      message: `Grades excluidos`,
    });
    logger.info(`DELETE /grade`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todos as Grades' });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

export default { create, findAll, findOne, update, remove, removeAll };
