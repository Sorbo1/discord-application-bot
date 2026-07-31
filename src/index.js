import 'dotenv/config';

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {

    console.log(`✅ ${client.user.tag} spuštěn`);

});

client.login(process.env.TOKEN);
