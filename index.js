const TelegramApi = require('node-telegram-bot-api');
const token = '7648296652:AAGxzvepiVi7Zy24rxnA12tJNhZm6TUnUJs';
//process.env.BOT_API_KEY = true;
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
const buttonNext_10 = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Далее', callback_data: 'btnNext10'}],
    ]
  })
};

const buttonsOfStart = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Подписаться на канал', url: "https://t.me/nkclinik", callback_data: 'subscribe'}],
      [{text: 'Получить промокод', callback_data: 'takePromoCode'}],
    ]
  })
};




// const start = () => {
  //bot.on("polling_error", err => console.log(err.data.error.message));
bot.on('polling_error', (error) => {
  console.log(error.message);
});
//   bot.on('message', async msg => {
//     if (msg.text === '/start') {
//       console.log(msg);
//       await bot.sendPhoto(msg.chat.id, 'img/bot-start.jpg');
//       await bot.sendMessage(msg.chat.id, `🙋‍♂  ${msg.from.first_name}, здравствуйте! В этом чате мы поможем вам правильно подготовиться к лазерной эпиляции, и дадим ответы на наиболее часто задаваемые вопросы от клиентов нашей клиники
//
// Для начала предлагаю познакомиться. Меня зовут Богомолова Анна. Я Главный врач сети клиник «NK», врач-дерматовенеролог, косметолог. Специализируюсь в лазерной эпиляции и аппаратной косметологии.
//
// 📨 Уже в следующем сообщении мы с вами начнем разбираться во всех тонкостях проведения лазерной эпиляции.
// `, buttonNext_1);
//     }
//   });

bot.on('text', async msg => {
  const chatId = msg.chat.id;
  try {
    if(msg.text == '/start') {

      await bot.sendPhoto(chatId, 'img/bot-start.jpg');
      await bot.sendMessage(chatId, `🙋‍♂  ${msg.from.first_name}, здравствуйте! В этом чате мы поможем вам правильно подготовиться к лазерной эпиляции, и дадим ответы на наиболее часто задаваемые вопросы от клиентов нашей клиники 

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
bot.on('callback_query', async function(msg){
  try {
    switch (msg.data) {
      case "btnNext1":
        await bot.sendMessage(msg.chat.id, `Первый вопрос
✅Безопасна ли лазерная эпиляция?`);
        await bot.sendVideo(msg.chat.id, 'video/video-answer-1.mp4', buttonNext_2);
        break;

      case "btnNext2":
        await bot.sendMessage(msg.chat.id, `✅Второй вопрос
После лазерной эпиляции волосы исчезают навсегда?`);
        await bot.sendVideo(msg.chat.id, 'video/video-answer-2.mp4', buttonNext_3);
        break;

      case "btnNext3":
        await bot.sendMessage(chatId, `✅ Третий вопрос
После лазерной эпиляции волосы исчезают навсегда?`);
        await bot.sendVideo(chatId, 'video/video-answer-3.mp4', buttonNext_4);
        break;
    }
  } catch (error) {
    console.log(error);
  }
});

// bot.on('callback_query', async function(msg){
//   try {
//     switch (msg.data) {
//       case "btnNext1":
//         await bot.sendMessage(msg.chat.id, `Первый вопрос
// ✅Безопасна ли лазерная эпиляция?`);
//         await bot.sendVideo(msg.chat.id, 'video/video-answer-1.mp4', buttonNext_2);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
// bot.on('callback_query', async function(msg){
//   try {
//     switch (msg.data) {
//       case "btnNext2":
//         await bot.sendMessage(msg.chat.id, `✅Второй вопрос
// После лазерной эпиляции волосы исчезают навсегда?`);
//         await bot.sendVideo(msg.chat.id, 'video/video-answer-2.mp4', buttonNext_3);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
//     bot.on('callback_query', async function(msg){
//       try {
//         switch (msg.data) {
//           case "btnNext3":
//             await bot.sendMessage(chatId, `✅ Третий вопрос
// После лазерной эпиляции волосы исчезают навсегда?`);
//             await bot.sendVideo(chatId, 'video/video-answer-3.mp4', buttonNext_4);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });
//     bot.on('callback_query', async msg => {
//       try {
//         switch (msg.data) {
//           case "btnNext4":
//             await bot.sendPhoto(msg.chat.id, 'img/bot-start-2.jpg');
//             await bot.sendMessage(msg.chat.id, `Меня зовут Симкович Оксана. Я ведущий врач сети клиник «NK», врач-дерматовенеролог, косметолог.
//
// Специализируюсь в лазерной эпиляции.`, buttonNext_5);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });
//     bot.on('callback_query', async msg => {
//       try {
//         switch (msg.data) {
//           case "btnNext5":
//             await bot.sendMessage(msg.chat.id, `✅Четвертый вопрос`);
//             await bot.sendVideo(msg.chat.id, 'video/video-answer-4.mp4', buttonNext_6);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });
//     bot.on('callback_query', async msg => {
//       try {
//         switch (msg.data) {
//           case "btnNext6":
//             await bot.sendMessage(msg.chat.id, `✅Пятый вопрос`);
//             await bot.sendVideo(msg.chat.id, 'video/video-answer-5.mp4', buttonNext_7);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });
//     bot.on('callback_query', async msg => {
//       try {
//         switch (msg.data) {
//           case "btnNext7":
//             await bot.sendMessage(msg.chat.id, `✅Шестой вопрос`);
//             await bot.sendVideo(msg.chat.id, 'video/video-answer-6.mp4', buttonNext_8);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });
//     bot.on('callback_query', async msg => {
//       try {
//         switch (msg.data) {
//           case "btnNext8":
//             await bot.sendPhoto(msg.chat.id, 'img/question-1.jpg');
//             await bot.sendMessage(msg.chat.id, `Подготовка волос к лазерной эпиляции
//
// ✅ Перед лазерной эпиляцией важно учесть оптимальную длину волос для достижения наилучших результатов. Рекомендуется, чтобы волосы были длиной около 1-3 мм. Эта длина позволяет лазеру эффективно захватывать меланин, расположенный в волосах, обеспечивая максимальное воздействие на фолликул.
//
// ✅ Если волосы слишком короткие: Если вы побрили область перед процедурой слишком коротко, лазер может не зацепить волосяной фолликул должным образом, что снизит эффективность процедуры.
//
//  ✅Если волосы слишком длинные: Длинные волосы могут вызвать дискомфорт во время процедуры, так как они могут нагреваться, и это может привести к боли. Кроме того, длинные волосы могут поглощать часть энергии лазера, снижая его эффективность.
//
// ✅ Чтобы достичь оптимальной длины, рекомендуется провести простую стрижку волос в зоне обработки за 1-2 дня до процедуры. Это позволит сохранить волосы на нужной длине и обеспечит максимальную эффективность лазерного воздействия.`, buttonNext_9);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });
//     bot.on('callback_query', async msg => {
//       try {
//         switch (msg.data) {
//           case "btnNext9":
//             console.log(msg);
//             await bot.sendMessage(msg.chat.id, `Подготовка кожи к лазерной эпиляции
//
// Чтобы лазерная эпиляция прошла успешно и эффективно, важно правильно подготовить кожу. Вот несколько простых шагов для этого:
//
// ✅ Регулярно очищайте кожу перед процедурой лазерной эпиляции, чтобы удалить загрязнения, излишки масла и мертвые клетки. Это позволит лазеру более эффективно воздействовать на волосяные фолликулы и снизит риск раздражения. Выбирайте мягкие очищающие средства, соответствующие вашему типу кожи, и избегайте агрессивных скрабов.
//
// ✅ Увлажнение кожи также играет важную роль в подготовке. Оно помогает поддерживать ее мягкость и эластичность. Наносите увлажняющий крем или лосьон регулярно за несколько дней до процедуры, чтобы обеспечить оптимальное состояние кожи.
//
// ✅ Рекомендуется побрить волосы за 24-48 часов до сеанса. Это обеспечит более эффективное воздействие лазера на волосяные фолликулы, а не на видимые волосы. Избегайте восковых полосок и пинцетов, поскольку эти методы удаляют волосы с корнями и могут снизить эффективность процедуры.`, buttonNext_10);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });

//     bot.on('callback_query', async msg => {
//       try {
//         switch (msg.data) {
//           case "btnNext10":
//             console.log(msg);
//             await bot.sendMessage(msg.from.id, `🔥 ${msg.from.first_name}, спасибо, что посмотрели наш ТОП вопросов по лазерной эпиляции.
//
// Также мы подготовили для вас персональный подарок! 🔥Скидка 300 руб на лазерную эпиляцию любой зоны🔥
// Для получения скидки вступите в нашу группу в телеграмм https://t.me/nkclinik  и назовите администратору промокод при звонке`, buttonsOfStart);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });
//     bot.on('callback_query', async msg => {
//       try {
//         switch (msg.data) {
//           case "takePromoCode":
//             const subscribe = await bot.getChatMember(channelId, msg.from.id);
//             console.log(subscribe);
//             if (subscribe.status == 'left' || subscribe.status == 'kicked') {
//               await bot.sendMessage(msg.message.chat.id, `Не увидели Вашу подписку
//
// Условия получения доступа — подписка на канал https://t.me/nkclinik
//
// Подписывайся и забирай доступы 🚀`, {
//                 parse_mode: 'HTML'
//               })
//               break;
//             } else {
//               await bot.sendMessage(msg.chat.id, `Отлично! Увидели подписку 😎`);
//
//               await bot.sendPhoto(msg.chat.id, 'img/promocode-300.jpg');
//
//               await bot.sendMessage(msg.chat.id, `Если остались вопросы или вы хотите сделать лазерную эпиляцию, то мы к вашим услугам. Приходите на консультацию.
//
// https://krasotaclinic.ru/?utm_source=tg&utm_medium=group&utm_campaign=bot&utm_content=epilation`);
//             }
//             break;
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });

(async () => {
  bot.start();
})();
// }
// start();

