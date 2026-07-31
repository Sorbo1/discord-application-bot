import { SlashCommandBuilder } from "discord.js";

export default{

    data:new SlashCommandBuilder()

        .setName("setup")

        .setDescription("Vytvoří panel žádostí"),

    async execute(interaction){

        await interaction.reply({

            content:"Setup zatím není hotový.",

            ephemeral:true

        });

    }

}
