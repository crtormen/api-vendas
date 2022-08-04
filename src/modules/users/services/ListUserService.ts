import { inject, injectable } from 'tsyringe';
// import { IPaginateUser } from '../domain/models/IPaginateUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { IUser } from '../domain/models/IUser';
// interface SearchParams {
//     page: number;
//     limit: number;
// }

@injectable()
class ListUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(): Promise<IUser[]> {
        const users = await this.usersRepository.findAll();

        return users;
    }
    // public async execute({
    //     page,
    //     limit,
    // }: SearchParams): Promise<IPaginateUser> {
    //     const take = limit;
    //     const skip = (Number(page) - 1) * take;
    //     const users = await this.usersRepository.findAll({
    //         page,
    //         skip,
    //         take,
    //     });

    //     return users;
    // }
}

export default ListUserService;