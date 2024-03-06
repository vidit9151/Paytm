const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect(
  "mongodb+srv://vidit9151:ieYRyeTDYGe0E7xt@cluster0.i3etzei.mongodb.net/paytm"
);
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, //trim will remove whitespaces
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: { type: String, required: true, minLength: 6 },
  firstName: { type: String, required: true, trim: true, maxLength: 50 },
  lastName: { type: String, required: true, trim: true, maxLength: 50 },
});
const User = mongoose.model("User", UserSchema);

///here we created just the schema that is the type of mongoose.schema.types.objectID adn it references to User table or to say collection refence is not necessary bu tits make the DB more strict ,but its used in seracvhin gusers etc ...So in the user id we need to pass in the id where we want ot update data and if it dont exists monog wont let us
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model it makes sure taht only if the user id exists in user table then we be able to put balance there
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = {
  Account,
};
module.exports = { User };
