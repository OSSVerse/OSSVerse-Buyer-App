import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<OrderId>;

@Schema()
export class OrderId {
  @Prop()
  actualOrderId: string;

  @Prop()
 displayOrderId: string;
}

export const OrderIdSchema = SchemaFactory.createForClass(OrderId);