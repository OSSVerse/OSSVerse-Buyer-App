import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  userId: string;

  @Prop()
  parentOrderId: string;

  @Prop({type: Object})
  orders: any;
}

export const OrderSchema = SchemaFactory.createForClass(Order);