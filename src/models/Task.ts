import { Schema, model, Document } from "mongoose";

interface TaskDocument extends Document {
  title: string;
  description: string;
  done: boolean;
}

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, default: false },
}, {
    timestamps: true
});

export default model<TaskDocument>("Task", taskSchema);
