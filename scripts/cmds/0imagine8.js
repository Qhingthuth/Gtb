const axios = require('axios');

module.exports = {
 config: {
 name: "imagine8",
 aliases: ["img8","imgne8"],
 version: "1.1",
 author: "Rishad",
 countDown: 10,
 role: 2,
 shortDescription: {
 en: 'Text to Image'
 },
 longDescription: {
 en: "Text to image"
 },
 category: "AI-IMAGE",
 guide: {
 en: '{pn} prompt | models there are 1 to 42 choose one'
 }
 },

 onStart: async function({ event, message, args, api }) {
 const badWords = ["sex","hentai","pussy","dick","xxx","porn","nude","sexy","🍑","🔞","👅","🫦","💋","🔥","🤒","🥵","🤭","puti","lado","ass","fuck","suck","puti","dickless","kera","banana","🍌","hot","yuri","🥒","🩸","🤤","cucumber","🖕"];
 const text = args.join(" ");
 
 for (const word of badWords) {
 if (text.includes(word)) {
 const id = event.senderID;
 const img = `https://nemobot.otinxshiva10.repl.co/pet?uid=${id}`;
 return message.reply({
 body: "Sorry, but you are not allowed to use that word.",
 attachment: await global.utils.getStreamFromURL(img)
 });
 }
 }
 
 if (!text) {
 return message.reply("Please provide a prompt.");
 }
 
 let prompt, model;
 
 if (text.includes("|")) {
 const [promptText, modelText] = text.split("|").map((str) => str.trim());
 prompt = promptText;
 model = modelText;
 } else {
 prompt = text;
 model = 32; // Set the default model number to 1
 }
 api.setMessageReaction("⏳", event.messageID, () => {}, true);
 message.reply("").then((info) => { id = info.messageID });
 
 try {
 const API = `https://rishadapi.rishad100.repl.co/generateArt?prompt=${encodeURIComponent(prompt)}&model=${model}`;
 const imageStream = await global.utils.getStreamFromURL(API);
 
api.setMessageReaction("✅", event.messageID, () => {}, true);
 return message.reply({
 attachment: imageStream
 });
 } catch (error) {
 console.log(error);
 message.reply("Failed to generate your imagination.").then(() => {
 message.delete(id);
 });
 }
 }
};