//criando o primeiro sevidor http
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Efetuando pedido");
  res.setHeader("content-Type", "text/jtml");
  res.write("<h1>Pedido aceito</h1>");
  res.write("<h2>Já entendi que o pedido foi aceito</h2>");
  res.end();
});

server.listen(3000, "localHost", () => {
  console.log("Servidor iniciado");
});
