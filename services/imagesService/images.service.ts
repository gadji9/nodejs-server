import { readFile } from "fs";
import path from "path";

class ImagesService {
    public async getImage() {
        const promise = new Promise((res, rej) => {
            readFile(
                path.resolve(__dirname, "..", "..", "cat-bless-you-hello.gsif"),
                "binary",
                function (err, data) {
                    if (err) {
                        console.log();
                        rej("Could not find or open file");
                    } else {
                        res(data);
                    }
                }
            );
        });

        return await promise;
    }
}

export const imagesService = new ImagesService();
