export default {

    name:"ready",

    once:true,

    execute(client){

        console.log("");

        console.log("==========================");

        console.log(`🤖 ${client.user.tag}`);

        console.log("Bot je online.");

        console.log("==========================");

    }

}
