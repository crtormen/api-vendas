import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSessionService from '@modules/users/services/CreateSessionService';
import { instanceToInstance } from 'class-transformer';

export default class SessionController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email, password } = request.body;

        const createSession = container.resolve(CreateSessionService);

        const user = await createSession.execute({
            email,
            password,
        });

        return response.json(instanceToInstance(user));
    }
}
