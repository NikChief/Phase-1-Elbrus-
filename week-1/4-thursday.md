## Четверг

### Утренний чекпоинт!

Напомните инструктору об этом :)

### Регулярные выражения

### Основной раздел

*До 15:00:*
**Задачи на регулярные выражения**


- [Регулярные выражения](../../../../core-regular-expressions)
- Практика по регулярным выражениям
    - [Онлайн-RegEx-Кроссворды](https://regexcrossword.com/)
    - [Онлайн-RegEx-Задачи](https://www.hackerrank.com/domains/regex)


*После 15:00:*

**Задачи на JS**


- [Поиск слова](../../../../core-algorithm-word-search)
- [JS Racer](../../../../core-algorithm-racer-1)

*в 17:00 доклад по git*


### Вспомогательные источники
- [Регулярные выражения - методы](https://learn.javascript.ru/regexp-methods)
- [Регулярные выражения - онлайн тестер](https://regex101.com)
- [Визуализация регулярных выражений. Пример валидации ICQ.](https://www.debuggex.com/r/-p2UCw7V4oK2IkL8)
- [Тестирование Jest](https://jestjs.io/docs/en/getting-started)

Для тестирования требуется использовать Jest. Напоминаем, основные методы, используемые в Jest: `describe()`, `it()`, `expect()`, и другие. Если хотите установить настройки перед каждым тестом, нужно использовать `beforeEach()` и/или `beforeAll()`. Когда вызываешь функцию `describe ()`, то передавай анонимную функцию, содержащую фактические тесты. На Рисунке 4 показан тест, написанный в Jest.
```
describe('a string with my name', function() {
  let myName;
  beforeEach(function() {
    myName = 'Carson Hollands';
  });
  it('is my name', function() {
    expect(myName).toEqual('Carson Hollands');
  });
});
```
Рисунок 4. Тестирование значения объекта строки JavaScript с помощью Jest.

### Подготовка к завтрашнему дню
- [Работа с git](https://github.com/Elbrus-Bootcamp/git-steps/blob/master/README.md)
