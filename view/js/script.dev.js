"use strict";

var socket = io("http://127.0.0.1:2379");

if (socket != null) {
  console.log("%cSocket is created!", "color: green"); // TODO: Сделать реализацию проверки соединения с сервером
  // Клиент(Запрос) -> Сервер(Ответ) -> Клиент(Реализация)

  $("#form-login").on("submit", function (e) {
    e.preventDefault();
  });
} else console.error("Socket is not created!");