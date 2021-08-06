import * as mongoose from 'mongoose';
import { User } from '../interfaces/users.interface';

const userSchema = new mongoose.Schema({
  name: String,
  hobbies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hobbies' }]
});

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);

export default userModel;
