import * as mongoose from "mongoose";
import { Hobby } from "interfaces/hobbies.interface";

const hobbySchema = new mongoose.Schema({
  name: String,
  year: Number,
  passionLevel: {
    type: String,
    enum: ["BEGINNER", "INTERMEDIATE", "PROFESSIONAL"],
    default: "BEGINNER",
  },
});

const hobbyModel = mongoose.model<Hobby & mongoose.Document>(
  "Hobbies",
  hobbySchema
);

export default hobbyModel;
