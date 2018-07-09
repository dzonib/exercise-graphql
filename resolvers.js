const ExerciseMongo = require('./models/exercise')

module.exports = {
  Query: {
    test: () => 'testing.... success',
    exercises: () => ExerciseMongo.find()
  },

  Mutation: {
    addExercise: (_, args) => {
      const exercise = new ExerciseMongo({
        muscle: args.muscle,
        title: args.title,
        description: args.description
      });

      return exercise.save()
    },
    removeExercise: async (_, args) => {
      let feedback = '';
      await ExerciseMongo.findById(args.id).remove()
        .then(() => feedback = 'exercise deleted!')
        .catch(e => {
          feedback = `Error! --> ${e}`;
          console.log(`Error! --> ${e}`)
        })
        
      return feedback;
      
    }
  }
}