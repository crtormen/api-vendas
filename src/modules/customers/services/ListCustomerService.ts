import { inject, injectable } from 'tsyringe';
import {
    ICustomersRepository,
    SearchParams,
} from '../domain/repositories/ICustomersRepository';
import { ICustomer } from '../domain/models/ICustomer';
// import { ICustomerPaginate } from '../domain/models/ICustomerPaginate';

@injectable()
class ListCustomerService {
    constructor(
        @inject('CustomersRepository')
        private customersRepository: ICustomersRepository,
    ) {}

    public async execute(): Promise<ICustomer[]> {
        // const take = limit;
        // const skip = (Number(page) - 1) * take;
        const customers = await this.customersRepository.findAll();
        //     {
        //     page,
        //     skip,
        //     take,
        // });

        return customers;
    }
}

export default ListCustomerService;
