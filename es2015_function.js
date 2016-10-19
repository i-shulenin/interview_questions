//  Параметры по умолчанию

function showMenu(title = "Без заголовка", width = 100, height = 200) {
  console.log(title + ' ' + width + ' ' + height);
}

showMenu("Меню"); // Меню 100 200

//  Оператор spread вместо arguments

function showName(firstName, lastName, ...rest) {
  alert(firstName + ' ' + lastName + ' - ' + rest);
}

showName("Юлий", "Цезарь", "Император", "Рима");                                //  Юлий Цезарь - Император,Рима

