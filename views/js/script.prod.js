var socket = io();

if (socket != null) 
{
    console.log("%cSocket is Created!", "color:green");

    var message = $("#message"),
        send = $("#send");

    message.on("input", () => {
        (message.val().length > 0) ? send.removeAttr("disabled") : send.attr("disabled", true);
    });

    send.on("submit", () => {
        fetch(["/", "/main", "/m"], {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    name: message.val()
                }
            })
        });

        //socket.emit("nickname", message.val());

    });


    const Main = {
        data() {
            return {
              message: '*Your nickname*'
            }
          }
    }

    Vue.createApp(Main).mount("#display-nick");


} else console.error("Socket is not created!");