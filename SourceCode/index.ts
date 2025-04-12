import "make-promises-safe"
import "dotenv/config"
import pino from "pino"

export const logger = pino({
    transport: { target: "pino-pretty" },
    timestamp: pino.stdTimeFunctions.isoTime,
})

async function main(): Promise<void> {
    logger.info("Hello World")
}

main()
