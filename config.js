const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348034258959";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_42_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3LFxuICAgICAgICA1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwLFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZTZ3Qi9tYk9WWk1nbkRFZU5kL1RvZVNOUHRKVS9ML3psWW52ZXU3YnpJdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDM0MjU4OTU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQ0ZDQjlCN0VBODQwQUJGMTA1NEVBMkFCMzlGRkU3NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNzEzNjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDM0MjU4OTU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNTg2OTQ5NDQwRDM0MUM5QjBFQURFRUJFMjk4OEIxN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNzEzNjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieTV1TjFnYWJTQ1cxSUxsOEFZb2xjUVwiLFxuICBcInBob25lSWRcIjogXCI5Y2U5NzM4Yy04Yjk5LTQ1ZjUtYTIyMy0wZGVmZDI3ZjNlMWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAyMjQsXG4gICAgICA5NyxcbiAgICAgIDI0NyxcbiAgICAgIDIxNixcbiAgICAgIDYzLFxuICAgICAgMTUzLFxuICAgICAgNzIsXG4gICAgICAxMjksXG4gICAgICAxNjgsXG4gICAgICAyMDcsXG4gICAgICAxMDQsXG4gICAgICAxOCxcbiAgICAgIDE1OCxcbiAgICAgIDE3MSxcbiAgICAgIDU0LFxuICAgICAgMTM5LFxuICAgICAgMyxcbiAgICAgIDIyOCxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDg2LFxuICAgICAgMjA3LFxuICAgICAgMTYxLFxuICAgICAgMTY1LFxuICAgICAgMTAwLFxuICAgICAgMTY2LFxuICAgICAgMjQ4LFxuICAgICAgMjcsXG4gICAgICAxNTIsXG4gICAgICA4LFxuICAgICAgNjUsXG4gICAgICAxODQsXG4gICAgICA4MCxcbiAgICAgIDEyMSxcbiAgICAgIDM2LFxuICAgICAgMjE1LFxuICAgICAgMTA3LFxuICAgICAgMTM2LFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkIyRUJYSkNaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM0MjU4OTU5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNjIxNzczODE4Njc5NjoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJ1c3lcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSGUvSzhDRVA2TW43VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5DUEVzT0ViZ1VpekExM1VjNk9RRnlGZFEzT3JnV0xHVC9CVGl4NG1BRUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibjlFT2NBYVBKV1JoNmU1ZktISmM4a0o5MHI0M0F4QUJUZXNJSGJONWF0MUJoVFJ2RVFjNkJMc1ZYdE9TS09YMURJaEI0eitDaVpWVFVsNXJwSmNOREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRzZBRHROT0dlaWJ6Z1Juek5DNjBQNFBNSElXK3QyQ3FPNis3VVhDSUszMk5BNms2V3lCK09JZi9Vb2FmRmhkYWd2bEtHdk5SWDc0WlowT3dBbmxwQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzNDI1ODk1OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNzEzNjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLYm5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtibi5qc29uIjogIntcImtleURhdGFcIjpcImltMnNXY0lZQnRpWXM1ZW9oTFl6c21VNkJ3dFBwclhrSEJNOXE0RkFCU2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjM3NDgwODAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyNzEzNjMzMjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
