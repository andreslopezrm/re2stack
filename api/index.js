var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-MNSJQ5BI.css";

// app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "Re2 Stack",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/db/idea.server.ts
var import_redis_om2 = require("redis-om");

// app/db/redis.server.ts
var import_redis_om = require("redis-om"), redisClient = new import_redis_om.Client();
async function redisConnect() {
  redisClient.isOpen() || await redisClient.open(process.env.REDIS_URL);
}

// app/db/idea.server.ts
var Idea = class extends import_redis_om2.Entity {
}, ideaSchema = new import_redis_om2.Schema(Idea, {
  name: { type: "string" },
  createAt: { type: "date", sortable: !0 }
});
async function getRepository() {
  await redisConnect();
  let repository = redisClient.fetchRepository(ideaSchema);
  return await repository.createIndex(), repository;
}
async function createIdea(name) {
  return (await getRepository()).createAndSave({ name, createAt: new Date() });
}
async function getAllIdeas() {
  return (await getRepository()).search().sortDescending("createAt").all();
}

// app/routes/index.tsx
async function loader() {
  let ideas = await getAllIdeas();
  return (0, import_node.json)({ ideas });
}
async function action({ request }) {
  let formData = await request.formData(), intent = formData.get("intent");
  if (intent === "create") {
    let name = formData.get("name"), idea = await createIdea(name);
    return (0, import_node.json)({ intent, idea });
  }
}
function Index() {
  let { ideas } = (0, import_react3.useLoaderData)();
  return console.log(ideas), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold underline"
  }, "Ideas"), /* @__PURE__ */ React.createElement(import_react3.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    name: "intent",
    value: "create",
    type: "hidden"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Write a idea"
  }), /* @__PURE__ */ React.createElement("button", null, "Send")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "67500039", entry: { module: "/build/entry.client-X6TAGU5R.js", imports: ["/build/_shared/chunk-JMBABMNG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AO2RAP7M.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VMXVO3CI.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-67500039.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
