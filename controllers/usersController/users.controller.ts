import { NextFunction, Request, Response } from "express";

import { usersService } from "../../services";

class UsersController {
    public find(
        req: Request<{}, {}, {}, { email: string; number: string }>,
        res: Response,
        next: NextFunction
    ) {
        const data = req.query;

        const { email } = data;
        if (!email) {
            return next(new Error("Email was not provided"));
        }

        const findedUsers = usersService.find(data);

        res.send(findedUsers);
    }
}

export const usersController = new UsersController();
