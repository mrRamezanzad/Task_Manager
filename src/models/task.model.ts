import { Schema, model } from 'mongoose';
const taskSchema = new Schema({ content: { type: String } });
export default model('Task', taskSchema);
