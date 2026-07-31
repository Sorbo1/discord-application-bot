import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function loadCommands(client){

    const commandsPath = path.join(__dirname,"../commands");

    const files = fs.readdirSync(commandsPath).filter(file=>file.endsWith(".js"));

    for(const file of files){

        const command = await import(`../commands/${file}`);

        client.commands.set(command.default.data.name,command.default);

        console.log(`✔ Command loaded: ${command.default.data.name}`);

    }

}
