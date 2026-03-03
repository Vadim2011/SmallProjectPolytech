// import replace from 'gulp-replace'; // поиск и замена
import plumber from 'gulp-plumber'; // обработка ошибка
import notify from 'gulp-notify'; // Сообщения
import browsersync from 'browser-sync'; // локальный сервер
import newer from 'gulp-newer'; // Проверка обновления изобр
import ifPlugin from "gulp-if";


//  Экспортируем объект   replace: replace,
export const plugins = {
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
}






