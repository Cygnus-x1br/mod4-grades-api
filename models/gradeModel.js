/**
 * !Preciso entender porque ele não está importando o mongoose como no exemplo da
 * !aula 2_4. Aqui ao invés de importar o mongoose exportamos o mongoose e fazemos o
 * !return do modelo no fim deste arquivo. Além disso importamos o gradeModel no
 * !arquivo index.js. Fizemos tambem a renomeação da const gradeModel para Grade
 */

//import mongoose from 'mongoose';

export default (mongoose) => {
  /**Podemos inserir diversos atributos ao schema além do tipo, do require e do validate,
   * como valor default, conversão dos cases, etc.
   * !Verificar na documentação do mongoose
   */
  const gradeSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0)
          throw new Error('Valor negativo não permitido para a nota');
      },
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });
  schema.method('toJSON', function () {
    const { __V, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  /*Define o modelo da coleção. O mongoose por padrão cria uma coleção com student
no plural. Para forçar a coleção student precisamos colocar o segundo student no model*/
  //const gradeModel = mongoose.model('grade', gradeSchema, 'grade');
  const Grade = mongoose.model('grade', gradeSchema, 'grade');
  return Grade;
};
//export { gradeModel };
