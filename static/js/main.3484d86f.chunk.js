(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(13),r=a(6),c="dmitrybodnar.com",u="http".concat("s","://").concat(c),s="ws".concat("s","://").concat(c);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=function(e){return{type:"ADD_TODO_STARTED",text:e}},m=function(e,t){return{type:"ADD_TODO_SUCCESS",id:e,text:t}},d=function(e){return{type:"ADD_TODO_FAILURE",error:e}},p=function(e){return{type:"REMOVE_TODO_STARTED",id:e}},f=function(e){return{type:"REMOVE_TODO_SUCCESS",id:e}},v=function(e,t){return{type:"REMOVE_TODO_FAILURE",id:e,error:t}},b=a(38),E=function(e){var t=e.onClick,a=e.onTrash,n=e.id,o=e.text,r=e.selected;return i.a.createElement("div",{id:"".concat(n),className:"card-wrapper float-left m-3",onClick:t},i.a.createElement("div",{className:"card shadow"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"card-title mb-0"},i.a.createElement(b.a,{to:"/board/".concat(n)},o)),i.a.createElement("div",{className:"text-white position-absolute card-badges card-badges-left"},i.a.createElement("div",{className:"bg-success shadow-sm m-1 p-1 text-center small rounded-circle card-badge",style:{display:r?"block":"none"}},i.a.createElement("i",{className:"fa fa-fw fa-check"})),i.a.createElement("div",{className:"bg-danger shadow-sm m-1 p-1 text-center small rounded-circle card-badge hover-card-badges",onClick:a},i.a.createElement("i",{className:"fa fa-fw fa-trash"})))),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"card-body-wrapper"},i.a.createElement("div",{className:"card-text small text-justify"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis, sed temporibus numquam voluptas cupiditate nemo corrupti quia velit odio quae natus molestias unde dolor aliquam magni consequuntur nisi at illum inventore maxime! Exercitationem minima voluptate, culpa ut eveniet enim harum illum eius quaerat alias labore fugiat sapiente odit consectetur delectus aliquam amet deleniti in iusto quis tempora ullam optio, nostrum quam! Architecto, laboriosam? Culpa dolorem eum error dignissimos nostrum ea ratione similique hic nesciunt, facere facilis doloremque, praesentium, corporis tempora tempore cupiditate ab quam? Incidunt distinctio tempora a illum eligendi quod voluptatibus excepturi laboriosam natus repellendus? Quam dolor pariatur eveniet error at excepturi aperiam blanditiis voluptatem expedita. Nisi saepe nulla accusantium. Consectetur, velit voluptate corrupti quae repellat quaerat! Vel ut commodi est dolorum ducimus culpa facilis pariatur incidunt, quisquam libero aut sint mollitia quaerat ipsum iusto iure fuga nostrum vitae dolor perferendis eligendi similique earum? Delectus unde sint voluptatibus explicabo vel distinctio dolores illo fugit error officia cupiditate, itaque libero ipsam repudiandae provident quasi omnis modi ipsa eos quibusdam debitis. Aliquam earum quos vel fugit, odit necessitatibus consectetur minima quae tempora quam libero ipsa repellendus eius sunt veritatis distinctio quod a laudantium! Cupiditate accusamus odit voluptatibus, error autem, enim iusto, fuga corporis totam doloremque quaerat? Magni, corporis, et numquam vel, nam reiciendis minima vero ullam deserunt quis officia dolor? Nihil sunt aperiam sequi labore itaque libero repellat quaerat quo sit facilis recusandae ea vero blanditiis nostrum dolorem, illo soluta dignissimos praesentium iure ipsum. Nemo ullam dolorem cupiditate commodi facilis corporis officia nam alias? Impedit, dolores omnis, adipisci, quaerat eligendi aliquam beatae ratione debitis in accusamus eum provident quam aut voluptatibus eveniet nulla. Nam unde aspernatur error dignissimos odit omnis aperiam nesciunt? Quae rerum molestias iusto aliquid harum dolores maiores consequatur voluptate architecto odit facilis sapiente sed, nostrum doloribus modi?")))))},g=function(e){var t=e.todos,a=e.toggleTodo,n=e.removeTodo;return i.a.createElement("div",{className:"container-fluid board-list"},i.a.createElement("div",{className:"lane-wrapper lane-item"},i.a.createElement("div",{className:"lane-body"},t.map(function(e){return i.a.createElement(E,Object.assign({key:e.id},e,{onTrash:function(){return n(e.id)},onClick:function(){return a(e.id)}}))}))))},h=function(e,t){switch(t){case"":return e;default:return e.filter(function(e){return e.text.toLowerCase().includes(t.toLowerCase())})}},O=Object(r.b)(function(e){return{todos:h(e.todos,e.visibilityFilter)}},function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))},removeTodo:function(t){return e(function(e){return function(t){t(p(e)),fetch("".concat(u,"/v1/api/board/").concat(e),{method:"delete"}).then(function(a){t(f(e))}).catch(function(a){t(v(e,a.message))})}}(t))}}})(g),q=Object(r.b)()(function(e){var t,a=e.dispatch;return i.a.createElement("nav",{className:"navbar bg-dark navbar-dark fixed-top"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("form",{className:"input-group ml-auto mr-auto",onSubmit:function(e){e.preventDefault()}},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"search",className:"form-control form-control-sm",placeholder:"Board name...",ref:function(e){return t=e}}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(e){var n;t.value.trim()&&(a((n=t.value,function(e){e(l(n)),fetch("".concat(u,"/v1/api/board"),{method:"post",body:JSON.stringify({name:n})}).then(function(e){return e.json()}).then(function(t){e(m(t.id,n))}).catch(function(t){e(d(t.message))})})),t.value="")}},"Create")),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-success btn-sm",onClick:function(e){a({type:"SET_VISIBILITY_FILTER",filter:t.value.trim()})}},"Search"))))))}),w=function(e){e.match;return i.a.createElement("nav",{className:"navbar bg-dark navbar-dark fixed-top"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("form",{className:"input-group ml-auto mr-auto",onSubmit:function(e){e.preventDefault()}},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",ref:function(e){return e}}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-success btn-sm",onClick:function(e){}},"Update"))))))},T=a(39),N=a(40),y=function(){return i.a.createElement("div",null,i.a.createElement(q,null),i.a.createElement(O,null))},D=function(){return i.a.createElement(T.a,null,i.a.createElement("div",null,i.a.createElement(N.a,{path:"/",exact:!0,component:y}),i.a.createElement(N.a,{path:"/kanban-ui/",exact:!0,component:y}),i.a.createElement(N.a,{path:"/board/:id",component:w}),i.a.createElement(N.a,{path:"/kanban-ui/board/:id",component:w})))},_=a(5),S=a(16),k=a(17),x=function(e){return function(t,a,n){return e(function(e,a){var n,i=performance.now(),o=t(e,a),r=performance.now(),c=(n=r-i,Math.round(100*n)/100);return console.log("reducer process time:",c),o},a,n)}},C=function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}},I=a(19),R=a(18),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO_STARTED":return e;case"ADD_TODO_SUCCESS":return[].concat(Object(R.a)(e),[{id:t.id,text:t.text,selected:!1}]);case"ADD_TODO_FAILURE":case"REMOVE_TODO_STARTED":return e;case"REMOVE_TODO_SUCCESS":return e.filter(function(e){return e.id!==t.id});case"REMOVE_TODO_FAILURE":return e;case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?Object(I.a)({},e,{selected:!e.selected}):e});default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},j=Object(_.combineReducers)({todos:A,visibilityFilter:L});var M;a(33),a(35);fetch("".concat(u,"/v1/api/board")).then(function(e){return e.json()}).then(function(e){var t={todos:e.map(function(e){return{id:e.id,text:e.name,selected:!1}})};(M=function(e){var t=[C,S.a],a=[_.applyMiddleware.apply(void 0,t),x],n=k.composeWithDevTools.apply(void 0,a);return Object(_.createStore)(j,e,n)}(t)).subscribe(F),Object(o.render)(i.a.createElement(r.a,{store:M},i.a.createElement(D,null)),document.getElementById("root"))});var U=[],V=null;function F(){var e=U;if((U=M.getState().todos).length>e.length){!function(e){if(console.log("post commands: ",e),!V)return void console.log("shared worker is not available");console.log("commands posted to shared worker"),V.port.postMessage(e)}([{id:"5c3016bc4d74f1000177ed11",type:5,payload:{lane_id:"5c30169d4d74f1000177ed10"}}])}}!function(){var e=new WebSocket("".concat(s,"/v1/api/notify/ws"));e.onclose=function(e){console.log("Connection closed")},e.onmessage=function(e){console.log("notification received",e.data)}}(),window.SharedWorker&&((V=new SharedWorker("worker.js")).port.start(),console.log("shared worker is started"),V.port.addEventListener("message",function(e){console.log("message received by main is..."),console.log(e.data)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.3484d86f.chunk.js.map