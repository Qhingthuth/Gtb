module.exports = {
 config: {
 name: "support",
 aliases: ['walexgc', 'wgc3', "supportgc3"],
 version: "1.0",
 author: "sammmy",
 countDown: 5,
 role: 0,
 shortDescription: {
 en: "Add user to support group",
 },
 longDescription: {
 en: "This command adds the user to the admin support group.",
 },
 category: "support",
 guide: {
 en: "To use this command, simply type !Alessgc.",
 },
 },

 // onStart is a function that will be executed when the command is executed
 onStart: async function ({ api, args, message, event }) {
 const supportGroupId = "7045002595544750"; // ID of the support group

	 const threadID = event.threadID;
 const userID = event.senderID;

 // Check if the user is already in the support group
	const threadInfo = await api.getThreadInfo(supportGroupId);
 const participantIDs = threadInfo.participantIDs;
 if (participantIDs.includes(userID)) {
 api.sendMessage(
 "You are already in the support group. If you didn't find it, please check your message requests or spam box.",
 threadID
 );
 } else {
 // Add user to the support group
 api.addUserToGroup(userID, supportGroupId, (err) => {
 if (err) {
 console.error("Failed to add user to support group:", err);
 api.sendMessage("I can't add you because your id is not allowed message request or your account is private. please add me then try again...", threadID);
 } else {
 api.sendMessage(
 "You have been added to the admin support group. If you didn't find the box in your inbox, please check your message requests or spam box.",
 threadID
 );
 }
 });
 }
 },
};