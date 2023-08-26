// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);

// mongoose.connect('mongodb+srv://admin:PBBacRHPwPm6KeYm@cluster0.mvwesdt.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   connectTimeoutMS: 30000 // Увеличьте значение до 30000 (30 секунд)
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// const userSchema = new mongoose.Schema({
//   username: String,
//   chatId: Number
// });

// const userDataSchema = new mongoose.Schema({
//   userId: Number,
//   userText: String,
//   sceneName: String,
//   completedPhrases: Number, // Добавленное поле для отслеживания количества пройденных фраз
// });

// const User = mongoose.model('User', userSchema);

// const UserData = mongoose.model('UserData', userDataSchema);

// const buttonDataSchema = new mongoose.Schema({
//   buttonName: String,
//   buttonPressedBy: Number,
//   sceneName: String,
//   text: String
// });



// async function saveUserData(userId, sceneName, completedPhrases) {
//   await UserData.findOneAndUpdate(
//       { userId },
//       {
//           userId,
//           sceneName,
//           completedPhrases: completedPhrases || 0, // Устанавливаем начальное значение 0, если completedPhrases не определено
//       },
//       { upsert: true }
//   );
// }

// const ButtonData = mongoose.model('ButtonData', buttonDataSchema);

// module.exports = { User, ButtonData, UserData, saveUserData };
