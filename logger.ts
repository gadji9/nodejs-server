import pino from "pino";
import pinoHttp from "pino-http";

const logger = pino({
    depthLimit: 2,
    level: "error",
    transport: {
        targets: [
            {
                target: "pino/file",
                options: { destination: `${__dirname}/app.log` },
            },
            {
                target: "pino-pretty",
                options: {
                    colorize: true,
                    singleLine: true,
                },
            },
        ],
    },
});

const httpLogger = pinoHttp({ logger });

export { httpLogger, logger };
