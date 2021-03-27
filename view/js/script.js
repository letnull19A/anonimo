var socket = io("http://127.0.0.1:2379")

var app = new Vue({
    el: "#dynamic-status",
    data: {
        title: "Await",
        isAwait: true,
        isSuccess: false,
        isError: false,
        isLoad: false
    }
});

if (socket != null) {

    console.log("%cSocket is created!", "color: green")


// TODO: Сделать реализацию проверки соединения с сервером
// Клиент(Запрос) -> Сервер(Ответ) -> Клиент(Реализация)

    setInterval( () => 
    {
        app.title = "Success";
        app.isSuccess = true;
        app.isAwait = app.isError = app.isLoad = false;
    }, 1600);


    $("#form-login").on("submit", (e) => {
        e.preventDefault();
        app.title = "Load";
        app.isLoad = false;
        app.isAwait = app.isError = isSuccess = false;
    });


} else console.error("Socket is not created!")