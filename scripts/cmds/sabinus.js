module.exports = {
 config: {
 name: "sabinus",
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
 if (event.body && event.body.toLowerCase() === "sabinus") {
 return message.reply({
 body: "mumu man 😅😂",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/z65wwWB/image.jpg")
 });
 }
 }
}