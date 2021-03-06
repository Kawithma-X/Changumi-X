/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/
//===================©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//===================©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//===================©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X
//===================©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X©️TEENU-X

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('DEVELOPER_OPTION_DONT_EDITE_THIS_RESPECT_TO_OWNER.env')) require('dotenv').DEVELOPER_OPTION_DONT_EDITE_THIS_RESPECT_TO_OWNER({ path: './DEVELOPER_OPTION_DONT_EDITE_THIS_RESPECT_TO_OWNER.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './Amazone.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'v8.1.0 Global Stable',
    BRANCH: 'main',
    DEVELOPE_ERROR: process.env.DEVELOPE_ERROR === undefined ? '' : process.env.DEVELOPE_ERROR,
    DEVELOPER_TAG: process.env.DEVELOPE_TAG === undefined ? '👩‍🦰Amazone' : process.env.DEVELOPE_TAG,
    DEVELOPER_STATUS : process.env.DEVELOPER_STATUS === undefined ? '👩‍🦰ᴾᴼᵂᴱᴿᴱᴰ ᴮʸ ᴬᴹᴬᶻᴼᴺᴱ' : process.env.DEVELOPER_STATUS,
    DEVELOPE_ERROR: process.env.DEVELOPE_ERROR === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU, 
WA_CONNECTION: process.env.WA_CONNECTION === undefined ? '94786825798,0' : process.env.WA_CONNECTION,
A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,      
        A_TEENU: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './Amazone.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUPPORT3: "905511384572-1621015274"
};
