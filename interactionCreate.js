export default {

    name:"interactionCreate",

    once:false,

    async execute(interaction,client){

        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if(!command) return;

        try{

            await command.execute(interaction,client);

        }catch(error){

            console.error(error);

            if(interaction.replied){

                interaction.followUp({
                    content:"Došlo k chybě.",
                    ephemeral:true
                });

            }else{

                interaction.reply({
                    content:"Došlo k chybě.",
                    ephemeral:true
                });

            }

        }

    }

}
