import { users } from "../../db";

type Data = { email: string; number: string };

class UsersService {
    public find(data: Data) {
        const { email, number } = data;

        const findedUsers = users.filter((user) => {
            if (email && number) {
                return (
                    user.email.startsWith(email) &&
                    user.number.startsWith(number)
                );
            }

            if (email) {
                return user.email.startsWith(email);
            }

            if (number) {
                return user.number.startsWith(number);
            }
        });

        return findedUsers;
    }
}

export const usersService = new UsersService();
