import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  game: {
    type: String,
    required: true,
    enum: [
      "Star Wars Jedi: Fallen Order",
      "God of War",
      "Mad Max",
      "Sleeping Dogs",
      "Ghost of Tsushima",
      "Batman: Arkham Series",
      "Sekiro:Shadows Die Twice",
      "Street Fighter 6",
      "Lies of P"
    ]
  }
});

const form = mongoose.model("form", formSchema);

export default form;
