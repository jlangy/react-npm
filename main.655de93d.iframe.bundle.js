(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./Accordion.stories.jsx":"./stories/Accordion.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/Accordion.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),lodash_flatten=__webpack_require__("./node_modules/lodash.flatten/index.js"),lodash_flatten_default=__webpack_require__.n(lodash_flatten),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons_index_es=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var SmoothTransition=styled_components_browser_esm.a.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  transition: max-height 0.4s, padding 0.4s;\n  max-height: 300px;\n  padding: 10px 20px;\n  background-color: ",";\n  ",";\n  overflow-y: hidden;\n"])),"#f5f5f5",(function(props){return!props.open&&"max-height: 0px; padding: 0 20px;"})),Container=styled_components_browser_esm.a.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  margin: 10px 0;\n"]))),Header=styled_components_browser_esm.a.div(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  padding: 10px 20px;\n  background-color: ",";\n  & span {\n    font-size: ",";\n    font-weight: bold;\n  }\n"])),"#eaeaea","22px");function Accordionpanel(_ref){var title=_ref.title,allOpen=_ref.allOpen,setAllOpen=_ref.setAllOpen,children=_ref.children,_useState2=_slicedToArray(Object(react.useState)(allOpen),2),open=_useState2[0],setOpen=_useState2[1];return Object(react.useEffect)((function(){null!==allOpen&&setOpen(allOpen)}),[allOpen]),Object(jsx_runtime.jsxs)(Container,{children:[Object(jsx_runtime.jsxs)(Header,{onClick:function handleClick(){setOpen(!open),setAllOpen(null)},children:[Object(jsx_runtime.jsx)("span",{children:title}),Object(jsx_runtime.jsx)(index_es.a,{icon:open?free_solid_svg_icons_index_es.b:free_solid_svg_icons_index_es.a,size:"2x"})]}),Object(jsx_runtime.jsx)(SmoothTransition,{open:open,children:children})]})}Accordionpanel.displayName="Accordionpanel";var ActionsContainer=styled_components_browser_esm.a.div(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  color: ",";\n  & span {\n    cursor: pointer;\n  }\n"])),"#38598a"),Divider=styled_components_browser_esm.a.span(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  border-right: 1px solid black;\n  margin: 0 9px;\n"])));function Accordion(_ref2){var children=_ref2.children,_useState4=_slicedToArray(Object(react.useState)(null),2),allOpen=_useState4[0],setAllOpen=_useState4[1];console.log("22px");return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(ActionsContainer,{children:[Object(jsx_runtime.jsx)("span",{onClick:function handleOpen(){setAllOpen(!0)},children:"Expand All"}),Object(jsx_runtime.jsx)(Divider,{}),Object(jsx_runtime.jsx)("span",{onClick:function handleClose(){setAllOpen(!1)},children:"Collapse All"})]}),Array.isArray(children)?lodash_flatten_default()(children).map((function(child){return react_default.a.cloneElement(child,{allOpen:allOpen,setAllOpen:setAllOpen})})):react_default.a.cloneElement(children,{allOpen:allOpen,setAllOpen:setAllOpen})]})}Accordion.Panel=Accordionpanel;var Accordion_Accordion=Accordion;try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/Button",component:Accordion_Accordion,argTypes:{backgroundColor:{control:"color"}}};var Accordion_stories_Template=function Template(args){return Object(jsx_runtime.jsxs)(Accordion_Accordion,Object.assign({},args,{children:[Object(jsx_runtime.jsxs)(Accordion_Accordion.Panel,{title:"Q. What is the difference between confidential and public client types?",children:[Object(jsx_runtime.jsxs)("p",{children:["The ",Object(jsx_runtime.jsx)("strong",{children:"short answer"})," is that ",Object(jsx_runtime.jsx)("b",{children:"confidential clients"})," can keep a secret while ",Object(jsx_runtime.jsx)("b",{children:"public clients"})," do not require a secret."]}),Object(jsx_runtime.jsx)("h3",{children:"Confidential Client"}),Object(jsx_runtime.jsx)("ul",{children:Object(jsx_runtime.jsx)("li",{children:"Server-side applications (e.g., .Net, Java, PHP)"})}),Object(jsx_runtime.jsx)("h3",{children:"Public Client"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:"Javascript applications (e.g., SPA: single page application, Hybrid Mobile apps)"}),Object(jsx_runtime.jsx)("li",{children:"Native Mobile apps, Embedded devices, and Internet of Things (e.g., Apple TV)"}),Object(jsx_runtime.jsx)("li",{children:"Secured by PKCE (Proof Key for Code Exchange); a secret on the fly"})]})]}),Object(jsx_runtime.jsxs)(Accordion_Accordion.Panel,{title:"Q. How do I allow dynamic redirect URIs for my integration?",children:[Object(jsx_runtime.jsxs)("p",{children:["Yes, you can start with ",Object(jsx_runtime.jsx)("b",{children:"http://localhost"})," and change your redirect URIs."]}),Object(jsx_runtime.jsx)("p",{children:"Before going to production, please make sure that your production environment's redirect URIs are properly set to your live application's domain."})]})]}))};Accordion_stories_Template.displayName="Template";var Primary=Accordion_stories_Template.bind({});Primary.args={primary:!0,label:"Button"},Primary.parameters=Object.assign({storySource:{source:'(args) => (\n  <Accordion {...args}>\n    <Accordion.Panel title="Q. What is the difference between confidential and public client types?">\n      <p>\n        The <strong>short answer</strong> is that <b>confidential clients</b> can keep a secret\n        while <b>public clients</b> do not require a secret.\n      </p>\n      <h3>Confidential Client</h3>\n      <ul>\n        <li>Server-side applications (e.g., .Net, Java, PHP)</li>\n      </ul>\n      <h3>Public Client</h3>\n      <ul>\n        <li>\n          Javascript applications (e.g., SPA: single page application, Hybrid\n          Mobile apps)\n        </li>\n        <li>\n          Native Mobile apps, Embedded devices, and Internet of Things (e.g.,\n          Apple TV)\n        </li>\n        <li>\n          Secured by PKCE (Proof Key for Code Exchange); a secret on the fly\n        </li>\n      </ul>\n    </Accordion.Panel>\n    <Accordion.Panel title="Q. How do I allow dynamic redirect URIs for my integration?">\n      <p>\n        Yes, you can start with <b>http://localhost</b> and change your redirect\n        URIs.\n      </p>\n      <p>\n        Before going to production, please make sure that your production\n        environment\'s redirect URIs are properly set to your live application\'s\n        domain.\n      </p>\n    </Accordion.Panel>\n  </Accordion>\n)'}},Primary.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);