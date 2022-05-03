/* Copyright (C) 2022 ChamodKeshan.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

QueenAlexa - ChamodKeshan
*/ 

const Amazon = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require("got");
const fs = require('fs');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {
Amazon.addCommand({pattern: 'alive', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

	await message.client.sendMessage(message.jid, fs.readFileSync('./Folder/VoiceClip/bot name.mp3'), MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
}));
}

else if (Config.WORKTYPE == 'public') {
Amazon.addCommand({pattern: 'alive', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
	
    await message.client.sendMessage(message.jid, fs.readFileSync('./Folder/VoiceClip/bot name.mp3'), MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
}));

}
