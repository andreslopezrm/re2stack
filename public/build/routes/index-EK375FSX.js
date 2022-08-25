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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-screen-md  mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", null, "Re2 Stack"), /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("input", {
    name: "intent",
    value: "create",
    type: "hidden"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2 items-end"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "block mb-2 text-sm font-medium text-gray-900"
  }, "Write an idea"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    className: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
  }, "Save"))), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto mt-6 relative shadow-md sm:rounded-lg"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-full text-sm text-left text-gray-500"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Name"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Action"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, 'Apple MacBook Pro 17"'), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-blue-600 hover:underline"
  }, "Edit"))))))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-EK375FSX.js.map
