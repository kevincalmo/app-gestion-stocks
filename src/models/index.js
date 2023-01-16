// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, Product, Stock, Administrator, Provider, Request, Agent, Category } = initSchema(schema);

export {
  Order,
  Product,
  Stock,
  Administrator,
  Provider,
  Request,
  Agent,
  Category
};