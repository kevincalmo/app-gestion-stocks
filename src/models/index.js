// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Order, Provider, Request, Agent, Category, Stock, Administrator } = initSchema(schema);

export {
  Product,
  Order,
  Provider,
  Request,
  Agent,
  Category,
  Stock,
  Administrator
};