import mongoose, {Document, Schema} from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate?: Date;
  priority: |'low'|'medium'|'high';
  assignedTo?: mongoose.Types.ObjectId;
}

const taskSchema: Schema = new Schema({
  title: {type: String, required: true, trim: true},
  description: {type: String, trim: true},
  status: {type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending'},
  dueDate: {type: Date},
  priority: {type: String, enum: ['low', 'medium', 'high'], default: 'medium'},
  assignedTo: {type: mongoose.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

export default mongoose.model<ITask>("Task", taskSchema);


