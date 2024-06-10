const inp = document.querySelector(".inp");

const btns = document.querySelector(".allBtn");

const operators = ["+", "-", "*", "/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

btns.addEventListener("click", function (event) {
  let element = event.target;

  if (element.classList.contains("number")) {
    // console.log(element.innerHTML)

    if (inp.value === "0") {
      inp.value = element.innerHTML;
    } else {
      inp.value = inp.value + element.innerHTML;
    }
  }

  // код для лишней точки
  // else if (element.classList.contains("tochka")) {
  //   let lastElement = inp.value[inp.value.length - 1];

  //   if (operators.includes(lastElement)) {
  //     inp.value = inp.value.slice(0, inp.value.length - 1) + element.innerHTML;
  //   } else {
  //     inp.value = inp.value + element.innerHTML;
  //   }
  // }
  // код для лишней точки ошибочный и верный ниже в массив операторс точку тоже не надо
  else if (element.classList.contains("tochka")) {
    let lastElement = inp.value[inp.value.length - 1];

    // ПОЛУЧИТЬ ПОСЛЕДНИЙ ЭЛЕМЕНТ ИЗ ИНПУТА
    // 2) ЕСЛИ ОН РАВЕН ТОЧКЕ ТО НИЧЕГО НЕ ДЕЛАТЬ ИЛИ РЕТЕРН ЕСЛИ НЕТ ЗАПИСАТЬ ТОЧКУ В ИНПУТ

    if (lastElement === ".") {
      return;
    }

    // ЛОГИКА ЧТО ТОЧКИ НЕТ В ТЕКУЩЕМ ЧИСЛЕ
    else {

      // логика точки для первого числа ниже

      if (
        !inp.value.includes(".") &&
        !inp.value.includes("/") &&
        !inp.value.includes("-") &&
        !inp.value.includes("+") &&
        !inp.value.includes("*") 

      ) {

        inp.value = inp.value + "."
      }

      else {
        for (let i = inp.value.length - 1; i >= 0; i--) {
          // нужно убедиться что в текущем числе точки не было

          if (numbers.includes(inp.value[i])) {
            continue;
          }
          // ПЕРВЫЙ ИФ ПРОВЕРЯЕТ ЧТО ТЕКУЩИЙ ЭЛЕМЕНТ ЭТО ЧИСЛО И ТОГДА ПЕРЕХОДИМ К СЛЕДУЮЩЕМУ ЭЛЕМЕНТУ
          else if (inp.value[i] === ".") {
            return;
          }

          // ЭЛСЕ ИФ ПРОВЕРЯЕТ ЧТО ЭЛЕМЕНТ ЯВЛЯЕТСЯ ЛИ ТОЧКОЙ ЕСЛИ ДА ТО МЫ ВЫХОДИМ ИЗ ФУНКЦИИ ТАК ТОЧКА ЕСТЬ И БОЛЬШЕ БЫТЬ НЕ ДОЛЖНО
          else if (operators.includes(inp.value[i])) {
            inp.value = inp.value + element.innerHTML;
          }
          // ЭТОТ КОД ПРОВЕРЯЕТ ЧТО ВО ВСЕМ ЧИСЛЕ ТОЧКИ НЕ БЫЛО И ЗНАЧИТ МОЖНО ЕЁ ПОСТАВИТЬ
        }
      }
    }
  } else if (element.classList.contains("math")) {
    let lastElement = inp.value[inp.value.length - 1];
    // в квадратных скобках отрицательное не используем
    console.log(lastElement);

    if (lastElement === ".") {
      return;
      // мы не можем поставить какой либо оператор после точки
    } else if (operators.includes(lastElement)) {
      inp.value = inp.value.slice(0, inp.value.length - 1) + element.innerHTML;
      // ЭТОТ КОД ОТВЕЧАЕТ ЗА ЗАМЕНУ ПОСЛЕДНЕГО ЗНАКА
      // МЫ БЕРЕМ ВСЕ ЧТО БЫЛО В СТРОКЕ  КРОМЕ ПОСЛЕДНЕГО ЗНАКА С ПОМОЩЬЮ МЕТОДА СЛАЙС
      // ДОБАВЛЯЕМ К НЕМУ СОДЕРЖИМОЕ ТОЙ КНОПКИ ПО КОТОРОЙ МЫ КЛИКНУЛИ
    } else {
      inp.value = inp.value + element.innerHTML;
      // ДОБАВЛЯЕМ ЗНАК СОДЕРЖИМОЕ КНОПКИ К ТОМУ ЧТО БЫЛО В ИНПУТЕ
    }
  } else if (element.classList.contains("result")) {
    let i = inp.value;

    let result = eval(i);

    inp.value = result;
  } 
   else if (element.classList.contains("clean")) {
    inp.value = "0";
  } else if (element.classList.contains("cleanOne")) {
    inp.value = inp.value.slice(0, inp.value.length - 1);

    if (inp.value === "") {
      inp.value = "0";
    }
  }

  // эвал не нужно использовать в реальных проектах вообще нигде не надо

  // во всех реальных приложениях только через алгоритм

  // эвал в реальной разработке изза безопасности лучше не трогать

  // в реальной разработке берется все выражение и формируется массив

  // вся эта процедура выше для понимания по какому элементу мы кликаем и что исходя из этого делать

  // console.log(event.target)

  // ивент таргет через консоль покажет нам хтмл элемент по которому кликнули и там вся информация о веб событии
});



// HW ЗАКОНЧИТЬ ЛОГИКУ ДЛЯ ТОЧКИ В ПЕРВОМ ЧИСЛЕ

// ПУНКТ 1 ДОБАВИТЬ УСЛОВИЕ ДЛЯ ВСЕХ ОПЕРАТОРОВ НУЖНО УБЕДИТЬСЯ ЧТО ИХ НЕ БЫЛО В ИНПУТЕ

// ПУНКТ 2 ЕСЛИ ВСЕ УСЛОВИЯ ВЫПОЛНЯТСЯ ТО ТОГДА ЗАПИСАТЬ ТОЧКУ В ЗНАЧЕНИЕ ИНПУТА

// ПУНКТ 3 ПОКЛИКАТЬ ПОСМОТРЕТЬ ВСЕ БАГИ И ЗАПИСАТЬ ИХ

// ПОСМОТРЕТЬ ЦИКЛ ФОР НА 53 СТРОКЕ ПОСМОТРЕТЬ ЧТО ОН ИДЕТ ПО ИНПУТУ С КОНЦА ЗАУЧИТЬ ЭТО И ПОНЯТЬ КАК РАБОТАЕТ

// БУДЕТ ЗАДАЧА В ВАТСАПП



