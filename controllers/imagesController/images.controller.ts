import { Request, Response } from "express";

import { imagesService } from "../../services";

class ImagesController {
    async getImage(_: Request, res: Response) {
        try {
            const image = await imagesService.getImage();
            res.writeHead(200, { "Content-Type": "image/gif" });
            res.end(image, "binary");
        } catch (error: unknown) {
            res.status(401).send(error);
        }
    }
}

export const imagesController = new ImagesController();
