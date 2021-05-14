import { Injectable } from '@nestjs/common';
import model from '../models/task.model';

@Injectable()
export class AppService {
  async create(content: string) {
    const newTask = await new model({ content }).save();
    return newTask;
  }

  async read() {
    const documents = await model.find();
    return documents;
  }

  async update(match, body) {
    const document = await model.findOneAndUpdate(match, body, { new: true });
    return document;
  }
  async delete(id: string) {
    const isDeleted = await model.findByIdAndDelete(id);
    return isDeleted ? true : false;
  }
}
