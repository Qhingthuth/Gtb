module.exports = {
 config: {
 name: "precious",
 version: "1.0",
 author: "AceGun",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "precious") {
 return message.reply({
 body: "cute sis mhi 💕",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/SttgBbb/image.jpg")
 });
 }
 }
}