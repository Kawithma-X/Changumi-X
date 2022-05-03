/*Copyright (C) 2022 ChamodKeshan.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Amazone = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
let Work_Mode = Build.WORKTYPE == 'public' ? false : true


const Language = require('../language');
const Lang = Language.getString('system_stats');

var SYSDTXT = ''
if (Config.LANG == 'SI') SYSDTXT = '💖 හොද බොට්'
if (Config.LANG == 'EN') SYSDTXT = '💖 GOOD BOT'

var VER = ''
if (Config.LANG == 'SI') VER = '❤ මම කැමතියි'
if (Config.LANG == 'EN') VER = '❤ I LIKE'

var MSG = ''
if (Config.ALIVEMSG == 'default') MSG = '```\n\n*👩‍🦰Queen Alexa*\n*💫🧚‍♀️Hey There Im Alive Now*\n\n*◉Version :► 8.5.1 (Public Release)*\n*◉Branch  :► Awsh*\n*◉About :► Amazone Alexa Is a Powerfull Bot For Whatsapp.*\n*◯●Github Link :►https://tinyurl.com/yhq3c6ms-\n\n*💫©Join Our Group*\n*▷📑News & Update Report*\n_◈https://chat.whatsapp.com/JdNWV3viiGKGINYNrb5oy8*\n▷⚡Official Pluggins Group* \n ◈https://chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT\n*🛡️Support Community*\n https://t.me/Queen_Alexa_Neotrox_Support💞```'
else MSG = Config.ALIVEMSG


Amazone.addCommand({pattern: 'aliv', fromMe: Work_Mode, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {
    await message.client.sendMessage 
    var logo = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
        
    const buttons = [
        {buttonId: BUTTHANDLE + '.sysd', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + '.system', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'ǫᴜᴇᴇɴ Alexa © SUPER VERSION',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))

Amazone.addCommand({pattern: 'system', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

Amazone.addCommand({pattern: 'sysd', fromMe: Work_Mode, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
