const { Telegraf } = require('telegraf');

const bot = new Telegraf('telegramToken');
const tracking = "CJ660698197US";
const url = "https://www.correosaduanas.es/webauth/correosAduanas/public/seguimientoEnvio"; 

bot.start((ctx) => {
  ctx.reply('Welcome to your Telegram bot!');
});

bot.test((ctx) => {
  ctx.reply('This is the help message for your Telegram bot.');
});

bot.command('add', (ctx) => {
  ctx.reply('Envia el nº de seguimiento.');
});

bot.launch();
