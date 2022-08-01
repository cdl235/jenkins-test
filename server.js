const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

router.get("/api/test", (ctx) => {
  ctx.response.body = "hello koa222 ";
});

router.post("/api/login", (ctx) => {
  console.log(231);
  ctx.body = "今晚打老虎";
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
