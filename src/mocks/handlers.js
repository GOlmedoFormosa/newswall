import { rest } from "msw";

let messagesFake = {
  messages: [
    {
      id: 1,
      message:
        "A Thread lalalla allala alla la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalalala lala a lala al a llallalalalallalalallalala",
      parentId: null,
      author: 1,
    },
    {
      id: 2,
      message: "A Reply",
      parentId: 1,
      author: 1,
    },
    {
      id: 3,
      message:
        "A Thread lalalla allala alla la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalalala lala a lala al a llallalalalallalalallalala",
      parentId: null,
      author: 1,
    },
    {
      id: 4,
      message: "A Thread",
      parentId: null,
      author: 1,
    },
    {
      id: 5,
      message:
        "A Thread lalalla allala alla la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalala la lala a lala al a llallalalalallalalallalalala lala a lala al a llallalalalallalalallalala",
      parentId: null,
      author: 1,
    },
  ],
};

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL_MOCK}/messages`,
    (req, res, ctx) => {
      return res(ctx.delay(400), ctx.json(messagesFake));
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL_MOCK}/messages`,
    (req, res, ctx) => {
      const message = { id: Math.floor(Math.random() * 10000), ...req.body };
      messagesFake.messages.push(message);
      return res(ctx.delay(400), ctx.json({ message }));
    }
  ),
  rest.put(
    `${process.env.REACT_APP_API_URL_MOCK}/messages/:id`,
    (req, res, ctx) => {
      const message = { ...req.body };
      messagesFake.messages = messagesFake.messages.map((m) => {
        if (m.id === Number(req.params.id)) {
          m = { ...m, ...req.body };
        }
        return m;
      });
      return res(ctx.delay(400), ctx.json({ message }));
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL_MOCK}/messages/:id`,
    (req, res, ctx) => {
      let message = null;
      messagesFake.messages = messagesFake.messages.filter((m) => {
        if (m.id === Number(req.params.id)) {
          message = m;
          return false;
        }
        return true;
      });
      return res(ctx.delay(400), ctx.json({ message }));
    }
  ),
];
