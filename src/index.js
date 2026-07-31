import "dotenv/config";
import { Client, GatewayIntentBits, Collection } from "discord.js";

import loadCommands from "./handlers/commandHandler.js";
import loadEvents from "./handlers/eventHandler.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.commands = new Collection();

await loadCommands(client);
await loadEvents(client);

client.login(process.env.TOKEN);
