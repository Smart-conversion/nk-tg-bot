const TelegramApi = require('node-telegram-bot-api');
const token = '7648296652:AAGxzvepiVi7Zy24rxnA12tJNhZm6TUnUJs';
// process.env.BOT_API_KEY = true;
// const bot = new TelegramApi(process.env.BOT_API_KEY, { polling: true });

const bot = new TelegramApi(token, { polling: true });
const channelId = '-1001792092494';

const buttonNext_1 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext1'}],
    ]
  })
};
const buttonNext_2 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext2'}],
    ]
  })
};
const buttonNext_3 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext3'}],
    ]
  })
};
const buttonNext_4 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext4'}],
    ]
  })
};
const buttonNext_5 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext5'}],
    ]
  })
};
const buttonNext_6 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext6'}],
    ]
  })
};
const buttonNext_7 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext7'}],
    ]
  })
};
const buttonNext_8 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext8'}],
    ]
  })
};
const buttonNext_9 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext9'}],
    ]
  })
};

const buttonsOfStart = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Подписаться на канал', url: "https://t.me/nkclinik", callback_data: 'subscribe'}],
      [{text: 'Получить промокод', callback_data: 'takePromoCodeCheck'}],
    ]
  })
};
const takePromocode = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Получить промокод', url: "https://krasotaclinic.ru/lead/epiltaion-promo/?utm_source=tg-bot&utm_medium=cpc&utm_campaign=epiltaion-promo&utm_content=discount", callback_data: 'takePromoCode300'}],
    ]
  })
};


bot.on('polling_error', (error) => {
  console.log(error.message);
});


bot.on('text', async msg => {
  const chatId = msg.chat.id;
  try {
    if(msg.text == '/start') {

      await bot.sendPhoto(chatId, 'img/bot-start.jpg');
      await bot.sendMessage(chatId, `🙋‍♂  ${msg.chat.first_name}, здравствуйте! В этом чате мы поможем вам правильно подготовиться к лазерной эпиляции, и дадим ответы на наиболее часто задаваемые вопросы от клиентов нашей клиники 

Для начала предлагаю познакомиться. Меня зовут Богомолова Анна. Я Главный врач сети клиник «NK», врач-дерматовенеролог, косметолог. Специализируюсь в лазерной эпиляции и аппаратной косметологии.

📨 Уже в следующем сообщении мы с вами начнем разбираться во всех тонкостях проведения лазерной эпиляции.`, buttonNext_1);
    }
    else {
      await bot.sendMessage(chatId, msg.text);
    }
  }
  catch(error) {
    console.log(error);
  }

})
bot.on('callback_query', async function(ctx){

  try {
    switch (ctx.data) {
      case "btnNext1":
        await bot.sendMessage(ctx.message.chat.id, `Первый вопрос
✅Безопасна ли лазерная эпиляция?`);
        await bot.sendVideo(ctx.message.chat.id, 'video/video-answer-1.mp4', buttonNext_2);
        break;

      case "btnNext2":
        await bot.sendMessage(ctx.message.chat.id, `✅Второй вопрос
Сколько потребуется процедур?`);
        await bot.sendVideo(ctx.message.chat.id, 'video/video-answer-2.mp4', buttonNext_3);
        break;

      case "btnNext3":
        await bot.sendMessage(ctx.message.chat.id, `✅ Третий вопрос
Как выполняется процедура лазерной эпиляции?`);
        await bot.sendVideo(ctx.message.chat.id, 'video/video-answer-3.mp4', buttonNext_4);
        break;

      case "btnNext4":
        await bot.sendPhoto(ctx.message.chat.id, 'img/bot-start-2.jpg');
        await bot.sendMessage(ctx.message.chat.id, `Меня зовут Симкович Оксана. Я ведущий врач сети клиник «NK», врач-дерматовенеролог, косметолог.

Специализируюсь в лазерной эпиляции.`, buttonNext_5);
        break;

      case "btnNext5":
        await bot.sendMessage(ctx.message.chat.id, `✅Четвертый вопрос
Удаляет ли лазерная эпиляция пушковые волосы?`);
        await bot.sendVideo(ctx.message.chat.id, 'video/video-answer-4.mp4', buttonNext_6);
        break;

      case "btnNext6":
        await bot.sendMessage(ctx.message.chat.id, `✅Пятый вопрос
Удаляет ли лазерная эпиляция седые волосы?`);
        await bot.sendVideo(ctx.message.chat.id, 'video/video-answer-5.mp4', buttonNext_7);
        break;

      case "btnNext7":
        await bot.sendMessage(ctx.message.chat.id, `✅Шестой вопрос
Лазерная эпиляция это больно?`);
        await bot.sendVideo(ctx.message.chat.id, 'video/video-answer-6.mp4', buttonNext_8);
        break;

      case "btnNext8":
        await bot.sendPhoto(ctx.message.chat.id, 'img/question-1.jpg');
        await bot.sendMessage(ctx.message.chat.id, `Подготовка волос к лазерной эпиляции

✅ Перед лазерной эпиляцией важно учесть оптимальную длину волос для достижения наилучших результатов. Рекомендуется, чтобы волосы были длиной около 1-3 мм. Эта длина позволяет лазеру эффективно захватывать меланин, расположенный в волосах, обеспечивая максимальное воздействие на фолликул.

✅ Если волосы слишком короткие: Если вы побрили область перед процедурой слишком коротко, лазер может не зацепить волосяной фолликул должным образом, что снизит эффективность процедуры.

✅Если волосы слишком длинные: Длинные волосы могут вызвать дискомфорт во время процедуры, так как они могут нагреваться, и это может привести к боли. Кроме того, длинные волосы могут поглощать часть энергии лазера, снижая его эффективность.

✅ Чтобы достичь оптимальной длины, рекомендуется провести простую стрижку волос в зоне обработки за 1-2 дня до процедуры. Это позволит сохранить волосы на нужной длине и обеспечит максимальную эффективность лазерного воздействия.`, buttonNext_9);
        break;

      case "btnNext9":
        await bot.sendMessage(ctx.message.chat.id, `🔥 ${ctx.message.chat.first_name}, спасибо, что посмотрели наш ТОП вопросов по лазерной эпиляции.

Также мы подготовили для вас персональный подарок! 🔥Скидка 300 руб на лазерную эпиляцию любой зоны🔥
Для получения скидки вступите в нашу группу в телеграмм https://t.me/nkclinik  и назовите администратору промокод при звонке`, buttonsOfStart);
        break;

      case "takePromoCodeCheck":
        const subscribe = await bot.getChatMember(channelId, ctx.from.id);

        if (subscribe.status == 'left' || subscribe.status == 'kicked') {
          await bot.sendMessage(ctx.message.chat.id, `Не увидели Вашу подписку

Условия получения доступа — подписка на канал https://t.me/nkclinik

Подписывайся и забирай промокод 🚀`, {
            parse_mode: 'HTML'
          })
          break;
        } else {
          await bot.sendMessage(ctx.message.chat.id, `Отлично! Увидели подписку 😎
          
Если остались вопросы или вы хотите сделать лазерную эпиляцию, то мы к вашим услугам. Приходите на консультацию.

Нажмите на ссылку чтобы получить промокод 👇👇👇

https://krasotaclinic.ru/lead/epiltaion-promo/?utm_source=tg-bot&utm_medium=cpc&utm_campaign=epiltaion-promo&utm_content=discount`);
        }
        break;

    }
  } catch (error) {
    console.log(error);
  }
});


(async () => {
  bot.start();
})();



