import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../domain/repositories/IProductsRepository';
import { IProductPaginate } from '../domain/models/IProductPaginate';
import redisCache from '@shared/cache/RedisCache';

interface SearchParams {
    page: number;
    limit: number;
}

@injectable()
class ListProductService {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository,
    ) {}

    public async execute({
        page,
        limit,
    }: SearchParams): Promise<IProductPaginate> {
        const take = limit;
        const skip = (Number(page) - 1) * take;

        const products = await this.productsRepository.findAll({
            page,
            skip,
            take,
        });
        // let products = await redisCache.recover<Product[]>(
        //     'api-vendas-PRODUCT_LIST',
        // );

        // if (!products) {
        //     products = await this.productsRepository.findAll({
        //         page,
        //         skip,
        //         take,
        //     });

        //     await redisCache.save('api-vendas-PRODUCT_LIST', products);
        // }

        return products;
    }
}

export default ListProductService;
