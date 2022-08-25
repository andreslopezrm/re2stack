import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-OEJFJXD7.js";

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
  }, "Hello world!"));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-O4OTORHS.js.map
