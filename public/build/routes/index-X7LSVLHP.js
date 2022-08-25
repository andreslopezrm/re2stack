import {
  Form,
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-JMBABMNG.js";

// empty-module:~/db/idea.server
var require_idea = __commonJS({
  "empty-module:~/db/idea.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_idea = __toESM(require_idea());
function Index() {
  const { ideas } = useLoaderData();
  console.log(ideas);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold underline"
  }, "Ideas"), /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    name: "intent",
    value: "create",
    type: "hidden"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Write a idea"
  }), /* @__PURE__ */ React.createElement("button", null, "Send")));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-X7LSVLHP.js.map
