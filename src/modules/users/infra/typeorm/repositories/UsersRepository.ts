import { Repository } from 'typeorm';
import { ICreateUser } from '@modules/users/domain/models/ICreateUser';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { AppDataSource } from '@shared/infra/typeorm';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(User);
    }

    public async create({ name, email, password }: ICreateUser): Promise<User> {
        const user = this.ormRepository.create({ name, email, password });

        await this.ormRepository.save(user);

        return user;
    }

    public async save(user: User): Promise<User> {
        await this.ormRepository.save(user);

        return user;
    }

    public async remove(user: User): Promise<void> {
        await this.ormRepository.delete(user);
    }

    public async findAll(): Promise<User[]> {
        const users = await this.ormRepository.find();

        return users;
    }

    public async findByName(name: string): Promise<User | null> {
        const user = this.ormRepository.findOneBy({ name });

        return user;
    }

    public async findById(id: string): Promise<User | null> {
        const user = this.ormRepository.findOneBy({ id });

        return user;
    }

    public async findByEmail(email: string): Promise<User | null> {
        const user = await this.ormRepository.findOneBy({
            email,
        });

        return user;
    }
}

export default UsersRepository;
