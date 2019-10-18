# language: ru

Функция: Неправильный ввод числа
  @errorSetNumberOfListings
  Сценарий: Неправильный ввод числа
    Допустим я нахожусь на странице 'Home'
    И я ввожу число "11"
    То я вижу текст "Enter number from 1 to 10"