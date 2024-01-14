module.exports = {
  config: {
    name: "war",
    version: "1.0",
    author: "jun",
    role: "0",
    shortDescription: "",
    longDescription: "",
    category: "fun",
    guide: "{pn}",
    envConfig: {
      deltaNext: 5
    }
  },
  onStart: async function({ api, event, threadsData, args }) {
    const messages = [ 
      "You know what, Go and get a cloth i wont like your tears 😭 to stain the ground",
      "You little brats come out to listen to your father curse",
      "Your dog 🐶 (f*ther) you always show your private part at night",
      "All the bad boys wrinkling their noses up to wage war on your father?",
      "Show your dick/pussy to your father face",
      "Why do you guys like war so much?",
      "Damn you guys",
      "I'll give your father the range of war",
      "Hurry up and curse each other with me",
      "Feeling expert, expert fool is one name maybe you dont know",
      "Your father shot you to death by rapping",
      "So when you are in tears Dont take it to heart we re just kidding, leave it, I feel sorry for you, kid",
      "But i wont stop untill am done with you with your low brain capacitor HAHAHAHAHA",
      "Are you a male or a female?, Who knows, to be sincere you look like an ape 😖",
      "So disgusting, I fuck your mother",
      "So Delicious, then yawn your mother up",
      "Please dont eat me I only say the truth if you wanna eat human",
      "If it is delicious, then go and eat your dog 🐶 (dad)",
      "Before that please give me a break 🔔 for 2 secs",
      "...",
      "Please allow me to start ⏯️",
      "First of all, I would like to fuck you from top to bottom ⬆️⬇️",
      "I fuck from cunt hole to pussy cleavage",
      "The cunt is as big as a buffalo's cunt masturbating a sewer pipe",
      "I'm sure 4 guys like me aren't enough to fill your ass hole, piggybbe",
      "I'm tired and don't wanna curse anymore 😤",
      "Come on boss update the lyric, let's continue the war😋",
      "Thank you for reading how is it am sorry if it hurt just a cruise 🙏",
      "Goodbye and see you in the next program🥺",
      "Good bye 🥺",
    ];
    
    for (let i = 0; i < 30; i++) {
      await api.sendMessage(messages[i % messages.length], event.threadID);
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  },
  onEvent: async function({ api, event, threadsData }) {
    // No action needed for this command
  }
};