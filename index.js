require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const api_key = process.env.API_KEY_BOT;
const bot = new TelegramBot(api_key, {
  polling: {
    interval: 300,
    autoStart: true,
  },
});

// Вопросы и ответы
const questions = [
  {
    question:
      "*1*. Что такое кабельтов? Найдите табличку-подсказку возле НИС «Космонавт В. Пацаев».\n\nВарианты ответов:\n*A*. Трос, используемый для швартовки и буксировки судов, окружностью от 152 до 330 мм\n*B*. Мера длины, равная 185,2 метра (одной десятой морской мили).\n*C*. Небольшое судно, габариты которого используют для определения расстояния\n*D*. Специальный вид парусного каната, используемого только на военных кораблях",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 1, // Индекс правильного ответа
    image: "./images/10.png",
    contentType: "image/png",
  },
  {
    question:
      "*2*. Найдите однолапый якорь в галерее. Какое название он носит?\n\nВарианты ответов:\n*A*. Однолапый инвалид\n*B*. Кошкин хвост\n*C*. Якорь Холла\n*D*. Голландский пират",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 0, // Индекс правильного ответа
    image: "./images/8.jpg",
    contentType: "image/jpg",
  },
  {
    question:
      "*3*. Отыщите машину, которая извлекает из недр Земли «черное золото». В каких единицах измеряют его объём?\n\nВарианты ответов:\n*A*. м³\n*B*. Литр\n*C*. Баррель\n*D*. Галон",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 2, // Индекс правильного ответа
    image: "./images/6.jpg",
    contentType: "image/jpeg",
  },
  {
    question:
      "*4*. Пообщайтесь через «УХО», торчащее из земли. Что это за устройство?\n\nВарианты ответов:\n*A*. Специальный прибор для измерения уровня шума в подземных условиях\n*B*. Устройство для контроля за состоянием окружающей среды на борту судна\n*C*. Элемент системы навигации, который помогает определять местоположение судна\n*D*. Устройство, используемое для внутренней голосовой связи на судах, позволяющее передавать команды между различными отделениями",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 3, // Индекс правильного ответа
    image:
      "./images/13.jpg",
    contentType: "image/jpeg",
  },
  {
    question:
      "*5*. Фрагмент ограждения какого кёнигсбергского моста находится на территории ММО?\n\nВарианты ответов:\n*A*. Кузнечного\n*B*. Лавочного\n*C*. Зеленого\n*D*. Деревянного",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 0, // Индекс правильного ответа
    image: "./images/7.png",
    contentType: "image/png",
  },
  {
    question:
      "Так держать! Осталось меньше половины пути.\n \n*6*. Найдите самую маленькую подводную лодку на территории набережной Музея. Выберите верное название.\n\nВарианты ответов:\n*A*. Амфибия\n*B*. Саламандра\n*C*. Тритон\n*D*. Дельфин",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 2, // Индекс правильного ответа
    image: "./images/11.png",
    contentType: "image/png",
  },
  {
    question:
      "*7*. Какое из судов набережной исторического флота ММО является первым музейным объектом?\n\nВарианты ответов:\n*A*. НИС Витязь\n*B*. НИС Космонавт Виктор Пацаев\n*C*. Плавучий маяк «Ирбенский»\n*D*. СРТ-124",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 0, // Индекс правильного ответа
    image:
      "https://lh5.googleusercontent.com/proxy/MXhMsTMhh6afPPQnEjX9miXeVyimXf5lZePbPlceVnITFritnPbqYilqwW4r0Ckmd9GTSj_hIgtZSK4yW6dfNimhfwZC0Db0WvnxriXV0yvCKDFzOnJOgfxcPHV9acY",
    contentType: "image/jpeg",
  },
  {
    question:
      "*8*. Так как работа моряка связана с риском, издавна были приняты пожелания удачи морякам перед походом. Отыщите это пожелание перед главным входом в музей. Как оно звучит?\n\nВарианты ответов:\n*A*. Попутного ветра\n*B*. Счистливого плавания\n*C*. Семь футов под килем\n*D*. Ни пуха, ни пера",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 2, // Индекс правильного ответа
    image:
      "https://bogatyr.club/uploads/posts/2023-02/thumbs/1677588896_bogatyr-club-p-piratskie-sokrovishcha-foni-instagram-61.jpg",
    contentType: "image/jpeg",
  },
  {
    question:
      "*9*. На расстоянии всего одного мамонта от вас на юго-западе лежит камень с трилобитами, а к северу от него лежит обитатель пермских морей. Выбирите верное название.\n\nВарианты ответов:\n*A*. \n*B*. \n*C*. \n*D*. ",
    options: ["Вариант A ✓", "Вариант B", "Вариант C", "Вариант D"],
    answer: 0, // Индекс правильного ответа
    image:
      "./images/12.jpg",
    contentType: "image/jpeg",
  },
  {
    question:
      "*10*. Откуда родом липа, посаженная недалеко от главного корпуса?\n\nВарианты ответов:\n*A*. Воронеж\n*B*. Берлин\n*C*. Санкт-Петербург\n*D*. Гамбург",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 1, // Индекс правильного ответа
    image:
      "./images/липа.jpg",
    contentType: "image/jpeg",
  },
  {
    question:
      "*11*. Что показывают шары разного диаметра на открытой территории музея?\n\nВарианты ответов:\n*A*. Как меняется давление с увеличением глубины\n*B*. Шары установлены для красоты\n*C*. Объём воды в различных морях и океанах\n*D*. Площадь морей Мирового океана от самого маленького до самого большого",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 0, // Индекс правильного ответа
    image: "./images/5.jpg",
    contentType: "image/jpeg",
  },
  {
    question:
      "*12*. Что изображено на шпайхерском знаке на территории ММО?\n\nВарианты ответов:\n*A*. Лошадь и бык\n*B*. Рыбы: сом, налим, карп\n*C*. Ноев ковчег\n*D*. Рыбацкая лодка",
    options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"],
    answer: 2, // Индекс правильного ответа
    image: "./images/9.jpg",
    contentType: "image/jpeg",
  },
];

// Хранение состояния квеста
const userStates = {};

// Начало квеста
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  sendWelcomeMessage(chatId);
});

// Функция для отправки приветственного сообщения с кнопкой меню
function sendWelcomeMessage(chatId) {
  bot.sendMessage(
    chatId,
    "Добро пожаловать в квест! Нажмите кнопку ниже, чтобы начать.",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Начать квест", callback_data: "start_quest" }],
        ],
      },
    }
  );
}

// Обработка кнопки начала квеста
bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;

  if (query.data === "start_quest") {
    userStates[chatId] = { currentQuestionIndex: 0, correctAnswersCount: 0 };

    // Убираем кнопку "Начать квест" и отправляем сообщение о начале квеста
    await bot.sendMessage(chatId, "Квест начался! Удачи!", {
      reply_markup: {
        remove_keyboard: true, // Убираем клавиатуру
      },
    });

    await askQuestion(chatId); // Запрашиваем первый вопрос
  }

  // Убираем индикатор загрузки после нажатия кнопки
  await bot.answerCallbackQuery(query.id);
});

// Функция для задания вопроса
async function askQuestion(chatId) {
  const state = userStates[chatId];

  if (state.currentQuestionIndex < questions.length) {
    const question = questions[state.currentQuestionIndex];

    const options = [];

    // Формируем массив для инлайн-кнопок в формате 2x2
    for (let i = 0; i < question.options.length; i += 2) {
      options.push(
        question.options.slice(i, i + 2).map((option) => ({
          text: option,
          parse_mode: "Markdown",
          callback_data: option, // Используем текст варианта как callback_data
        }))
      );
    }

    // Отправляем изображение с вопросом в качестве подписи
    await bot.sendPhoto(
      chatId,
      question.image,
      { caption: question.question, parse_mode: "Markdown" },
      { contentType: question.contentType }
    );

    // Отправляем вопрос с инлайн-кнопками
    await bot.sendMessage(chatId, "Выберите один из вариантов:", {
      reply_markup: {
        inline_keyboard: options,
        parse_mode: "Markdown",
      },
      parse_mode: "Markdown",
    });

    // Ждем ответа пользователя
    bot.once("callback_query", async (query) => {
      const selectedOption = query.data;
      const selectedOptionIndex = question.options.indexOf(selectedOption);

      if (selectedOptionIndex !== -1) {
        // Проверяем, является ли ответ одним из вариантов
        if (selectedOptionIndex === question.answer) {
          state.correctAnswersCount++;
          await bot.sendMessage(chatId, "Правильно!");
        } else {
          await bot.sendMessage(chatId, "Неправильно!");
          // Предлагаем повторить или продолжить с инлайн-кнопками
          await bot.sendMessage(chatId, "Хотите выбрать другой ответ?", {
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "Ответить повторно", callback_data: "retry" },
                  { text: "Продолжить квест", callback_data: "continue" },
                ],
              ],
            },
          });

          // Ждем нового выбора пользователя
          bot.once("callback_query", async (query) => {
            if (query.data === "retry") {
              await askQuestion(chatId); // Повторяем текущий вопрос
            } else if (query.data === "continue") {
              state.currentQuestionIndex++; // Переходим к следующему вопросу
              await askQuestion(chatId); // Запрашиваем следующий вопрос
            }
          });
          return; // Выход из текущей функции, чтобы не продолжать выполнение
        }

        state.currentQuestionIndex++;

        await askQuestion(chatId); // Запрашиваем следующий вопрос
      } else {
        await bot.sendMessage(
          chatId,
          "Пожалуйста, используйте кнопки для выбора действий."
        );
      }

      // Убираем индикатор загрузки после нажатия кнопки
      await bot.answerCallbackQuery(query.id);
    });
  } else {
    finishQuiz(chatId);
  }
}

// Завершение квеста и подведение итогов
async function finishQuiz(chatId) {
  const state = userStates[chatId];

  let resultMessage = `Вы ответили правильно на ${state.correctAnswersCount} из ${questions.length} вопросов.\n`;

  if (state.correctAnswersCount >= 12) {
    resultMessage += "Отлично! Вы настоящий знаток!";
  } else if (state.correctAnswersCount < 8) {
    resultMessage += "Попробуйте еще раз! Вы можете лучше!";
  } else {
    resultMessage += "Хорошо! Но есть возможность улучшить результат.";
  }

  await bot.sendMessage(chatId, resultMessage);

  // Удаляем состояние пользователя после завершения и показываем новые инлайн-кнопки
  delete userStates[chatId];

  await bot.sendMessage(chatId, "Что вы хотите сделать дальше?", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Начать с начала", callback_data: "restart" }],
        [{ text: "Завершить квест", callback_data: "finish" }],
      ],
    },
  });

  // Обработка нажатий на инлайн-кнопки
  bot.once("callback_query", async (query) => {
    const chatId = query.message.chat.id;

    if (query.data === "restart") {
      sendWelcomeMessage(chatId);
    } else if (query.data === "finish") {
      await bot.sendMessage(
        chatId,
        "Спасибо, что вы были с нами! Надеемся увидеть вас снова."
      );
      delete userStates[chatId];
      await bot.sendMessage(
        chatId,
        "Если хотите начать заново, используйте команду /start."
      );
    }

    // Убираем индикатор загрузки после нажатия кнопки
    await bot.answerCallbackQuery(query.id);
  });
}

// Обработка новых кнопок после завершения квеста
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === "/desc") {
    await bot.sendMessage(
      chatId,
      "Этот бот предлагает вам пройти увлекательный квест с вопросами. Ответьте на все вопросы и получите оценку!"
    );
  }
});
