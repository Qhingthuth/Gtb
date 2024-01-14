const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "test1",
    version: "1.0",
    role: 0,
    Author: "OtinXSandip",
    description: " logo",
    category: "logo",
  },
  
  onStart: async function ({ api, event, args, Users }) {
    let { senderID, threadID, messageID } = event;
    let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
    let text = args.join(" ");
    
    if (!text) {
      api.sendMessage(
        `Wrong format!!\nUse: ${global.config.PREFIX}${this.config.name} text`,
        event.threadID,
        event.messageID
      );
      return;
    }
    
    api.sendMessage("Wait a sec boss👿", event.threadID, event.messageID);

    try {
      const response = await axios.get(
        `https://faheem-vip-010.faheem001.repl.co/api/ephoto/dota?text=${text}`,
        {
          responseType: "arraybuffer",
        }
      );
      fs.writeFileSync(pathImg, Buffer.from(response.data, "utf-8"));
      
      api.sendMessage(
        {
          body: "Here is👾 your fire logo 🤭:",
          attachment: fs.createReadStream(pathImg),
        },
        threadID,
        () => fs.unlinkSync(pathImg),
        messageID
      );
    } catch (error) {
      console.error(error);
      api.sendMessage(
        "An error occurred while processing the command.",
        threadID,
        messageID
      );
    }
  },
};