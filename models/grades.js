import mongoose from 'mongoose';

/**Podemos inserir diversos atributos ao schema além do tipo, do require e do validate,
 * como valor default, conversão dos cases, etc.
 * !Verificar na documentação do mongoose
 */
const gradesSchema = mongoose.Schema({
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

/*Define o modelo da coleção. O mongoose por padrão cria uma coleção com student
no plural. Para forçar a coleção student precisamos colocar o segundo student no model*/
const gradesModel = mongoose.model('grades', gradesSchema, 'grades');

export { gradesModel };
