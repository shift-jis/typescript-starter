import * as yargs from "yargs"
import pino from "pino"

import "make-promises-safe"
import "dotenv/config"

export const logger = pino({
    transport: { target: "pino-pretty" },
    timestamp: pino.stdTimeFunctions.isoTime,
})

async function main(): Promise<void> {
    const args = yargs.options({ verbose: { type: "boolean", default: false } }).parseSync()
    logger.info(args)
}

main()
