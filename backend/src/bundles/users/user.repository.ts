import { UserEntity } from '~/bundles/users/user.entity.js';
import { type UserModel } from '~/bundles/users/user.model.js';
import { type IRepository } from '~/common/interfaces/interfaces.js';

class UserRepository implements IRepository {
    private userModel: typeof UserModel;

    public constructor(userModel: typeof UserModel) {
        this.userModel = userModel;
    }

    public async find(email: string): Promise<UserEntity | undefined> {
        const user = await this.userModel
            .query()
            .select()
            .where({ email })
            .first();
        if (!user) {
            return undefined;
        }
        return UserEntity.initialize(user);
    }

    public async findAll(): Promise<UserEntity[]> {
        const users = await this.userModel.query().execute();

        return users.map((it) => UserEntity.initialize(it));
    }

    public async create(entity: UserEntity): Promise<UserEntity> {
        const { email, passwordSalt, passwordHash } = entity.toNewObject();

        const item = await this.userModel
            .query()
            .insert({
                email,
                passwordSalt,
                passwordHash,
            })
            .returning('*')
            .execute();

        return UserEntity.initialize(item);
    }

    public update(): ReturnType<IRepository['update']> {
        return Promise.resolve(null);
    }

    public delete(): ReturnType<IRepository['delete']> {
        return Promise.resolve(true);
    }
}

export { UserRepository };
