import { inject, injectable } from 'tsyringe';
import { IOrdersRepository } from '../domain/repositories/IOrdersRepository';
import { IOrderPaginate } from '../domain/models/IOrderPaginate';
import { IOrder } from '../domain/models/IOrder';

interface SearchParams {
    page: number;
    limit: number;
}

@injectable()
class ListOrderService {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository,
    ) {}

    public async execute(): Promise<IOrder[]> {
        // const take = limit;
        // const skip = (Number(page) - 1) * take;
        // const orders = await this.ordersRepository.findAll({
        //     page,
        //     skip,
        //     take,
        // });
        const orders = await this.ordersRepository.findAll();

        return orders;
    }
}

export default ListOrderService;
