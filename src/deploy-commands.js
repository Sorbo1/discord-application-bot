import "dotenv/config";

import { REST, Routes } from "discord.js";

import setup from "./commands/setup.js";

const commands=[

    setup.data.toJSON()

];

const rest=new REST({version:"10"}).setToken(process.env.TOKEN);

(async()=>{

    try{

        console.log("Registruji Slash Commands...");

        await rest.put(

            Routes.applicationGuildCommands(

                process.env.CLIENT_ID,

                process.env.GUILD_ID

            ),

            {body:commands}

        );

        console.log("Hotovo.");

    }catch(err){

        console.error(err);

    }

})();
