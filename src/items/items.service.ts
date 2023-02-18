import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/items.interface';
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.ItemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return await this.ItemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const createItem = new this.ItemModel(item);
    return createItem.save();
  }

  async update(id: string, item: Item): Promise<Item> {
    const updateItem = await this.ItemModel.findByIdAndUpdate(id, item, {
      new: true,
    });
    return updateItem.save();
  }
  async delete(id: string): Promise<Item> {
    return await this.ItemModel.findByIdAndRemove(id);
  }
}
