import dotenv from "dotenv";
import express, { type ErrorRequestHandler } from "express";
import bp from "body-parser";

import { router } from "./router";
import { httpLogger, logger } from "./logger";

dotenv.config();

const app = express();

app.use(httpLogger);

app.use(
    bp.urlencoded({
        extended: true,
    })
);
app.use(bp.json());
app.use(process.env.URL_PREFIX || "", router);
app.listen(process.env.PORT, () => {
    logger.info(`Server running on port: ${process.env.PORT}`);
});

const errHandler: ErrorRequestHandler = (err, req, res, _next) => {
    req.log.error(err);
    return res
        .status(500)
        .json({
            error: { name: err.name, message: err.message, stack: err.stack },
        })
        .end();
};

app.use(errHandler);
