import { hideBin } from "yargs/helpers"
import yargs from "yargs"
import pino from "pino"

import "make-promises-safe"
import "dotenv/config"

export const logger = pino({ transport: { target: "pino-pretty" }, timestamp: pino.stdTimeFunctions.isoTime })
export const cliArgs = yargs(hideBin(process.argv)).options("verbose", { type: "boolean", default: false }).parseSync()

async function main(): Promise<void> {
    logger.info(cliArgs)
}

main()
