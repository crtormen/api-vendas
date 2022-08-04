import { DataSource } from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';
import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import Order from '@modules/orders/infra/typeorm/entities/Order';

import { CreateProducts1658680082829 } from './migrations/1658680082829-CreateProducts';
import { CreateUsers1658827928966 } from './migrations/1658827928966-CreateUsers';
import { CreateUserTokens1659031515143 } from './migrations/1659031515143-CreateUserTokens';
import { CreateCustomers1659088874421 } from './migrations/1659088874421-CreateCustomers';
import { CreateOrders1659276158911 } from './migrations/1659276158911-CreateOrders';
import { AddCustomerIdToOrders1659278015186 } from './migrations/1659278015186-AddCustomerIdToOrders';
import { CreateOrdersProducts1659278564862 } from './migrations/1659278564862-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1659278734148 } from './migrations/1659278734148-AddOrderIdToOrdersProducts';
import { AddProductIdToOrdersProducts1659279035783 } from './migrations/1659279035783-AddProductIdToOrdersProducts';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'apivendas',
    entities: [Product, User, UserToken, Customer, Order, OrdersProducts],
    migrations: [
        CreateProducts1658680082829,
        CreateUsers1658827928966,
        CreateUserTokens1659031515143,
        CreateCustomers1659088874421,
        CreateOrders1659276158911,
        AddCustomerIdToOrders1659278015186,
        CreateOrdersProducts1659278564862,
        AddOrderIdToOrdersProducts1659278734148,
        AddProductIdToOrdersProducts1659279035783,
    ],
});
