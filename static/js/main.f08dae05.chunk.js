(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(82)},50:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(34),o=a(5),c="dmitrybodnar.com",u="/kanban-ui",s="http".concat("s","://").concat(c),l="ws".concat("s","://").concat(c),m=null;window.SharedWorker&&((m=new SharedWorker("worker.js")).port.start(),console.log("shared worker: started"),m.port.addEventListener("message",function(e){console.log("main: message received from shared worker",e.data)}));var d=function(e){console.log("main: post commands to shared worker",e),m?(console.log("main: commands posted to shared worker"),m.port.postMessage(e)):console.log("main: shared worker is not available")};a(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(7),f=a.n(p),v=a(16),b=a(36),h=a.n(b).a.create({baseURL:s}),g=a(37),E=a.n(g)()(),y=a(10),w=a(11),N=a(13),O=a(12),k=a(14),I=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(N.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){if(e){var t=a.auth.currentUser.get().getBasicProfile(),n={id:t.getId(),email:t.getEmail(),name:t.getName()};a.props.signIn(n)}else a.props.signOut()},a.onSignInClick=function(){a.auth.signIn()},a.onSignOutClick=function(){a.auth.signOut()},a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"745975090298-bi7i72f2akkt9cglmjjsgqh0q9qo2vmt.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"btn btn-secondary btn-sm",title:this.props.profile.name},r.a.createElement("i",{className:"fa fa-fw fa-google"})):r.a.createElement("button",{onClick:this.onSignInClick,className:"btn btn-secondary btn-sm"},r.a.createElement("i",{className:"fa fa-fw fa-google"}),"Sign In")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.a.Component),q=Object(o.b)(function(e){return{isSignedIn:e.auth.isSignedIn,profile:e.auth.userProfile}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(I),j=Object(o.b)(function(e){return{secure:e.auth.isSignedIn}},function(e){return{create:function(t){return e((a=t,function(){var e=Object(v.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/v1/api/board",{name:a});case 2:return n=e.sent,e.next=5,h.get("/v1/api/board/".concat(n.data.id));case 5:n=e.sent,t({type:"CREATE_BOARD",payload:n.data}),E.push("".concat(u,"/"));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));var a},filter:function(t){return e(function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}}(t))}}})(function(e){var t,a=e.secure,n=e.create,i=e.filter;return r.a.createElement("nav",{className:"navbar bg-dark navbar-dark fixed-top"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",{className:"input-group ml-auto mr-auto",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-append"},r.a.createElement(q,null)),r.a.createElement("input",{type:"search",className:"form-control form-control-sm",placeholder:"Board title...",ref:function(e){return t=e}}),a?r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(e){t.value.trim()&&(n(t.value),t.value="")}},"Create")):null,r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-success btn-sm",onClick:function(e){i(t.value.trim())}},r.a.createElement("i",{className:"fa fa-fw fa-search"})))))))}),S=a(8),x=a(83),C=function(e){var t=e.id,a=e.name,n=e.admin,i=e.deleteBoard;return r.a.createElement("div",{id:"".concat(t),className:"card-wrapper float-left m-3"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},r.a.createElement(x.a,{className:"text-info",style:{textDecoration:"none",fontWeight:"500"},to:"/board/".concat(t)},a)),r.a.createElement("div",{className:"hover-card-badges",style:{display:n?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-eye text-muted",title:"private"}),r.a.createElement("i",{className:"fa fa-fw fa-eye-slash text-muted",title:"publish"}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete",onClick:function(){return i(t)}}))))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-body-wrapper"},r.a.createElement("div",{className:"card-text small text-justify"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis, sed temporibus numquam voluptas cupiditate nemo corrupti quia velit odio quae natus molestias unde dolor aliquam magni consequuntur nisi at illum inventore maxime! Exercitationem minima voluptate, culpa ut eveniet enim harum illum eius quaerat alias labore fugiat sapiente odit consectetur delectus aliquam amet deleniti in iusto quis tempora ullam optio, nostrum quam! Architecto, laboriosam? Culpa dolorem eum error dignissimos nostrum ea ratione similique hic nesciunt, facere facilis doloremque, praesentium, corporis tempora tempore cupiditate ab quam? Incidunt distinctio tempora a illum eligendi quod voluptatibus excepturi laboriosam natus repellendus? Quam dolor pariatur eveniet error at excepturi aperiam blanditiis voluptatem expedita. Nisi saepe nulla accusantium. Consectetur, velit voluptate corrupti quae repellat quaerat! Vel ut commodi est dolorum ducimus culpa facilis pariatur incidunt, quisquam libero aut sint mollitia quaerat ipsum iusto iure fuga nostrum vitae dolor perferendis eligendi similique earum? Delectus unde sint voluptatibus explicabo vel distinctio dolores illo fugit error officia cupiditate, itaque libero ipsam repudiandae provident quasi omnis modi ipsa eos quibusdam debitis. Aliquam earum quos vel fugit, odit necessitatibus consectetur minima quae tempora quam libero ipsa repellendus eius sunt veritatis distinctio quod a laudantium! Cupiditate accusamus odit voluptatibus, error autem, enim iusto, fuga corporis totam doloremque quaerat? Magni, corporis, et numquam vel, nam reiciendis minima vero ullam deserunt quis officia dolor? Nihil sunt aperiam sequi labore itaque libero repellat quaerat quo sit facilis recusandae ea vero blanditiis nostrum dolorem, illo soluta dignissimos praesentium iure ipsum. Nemo ullam dolorem cupiditate commodi facilis corporis officia nam alias? Impedit, dolores omnis, adipisci, quaerat eligendi aliquam beatae ratione debitis in accusamus eum provident quam aut voluptatibus eveniet nulla. Nam unde aspernatur error dignissimos odit omnis aperiam nesciunt? Quae rerum molestias iusto aliquid harum dolores maiores consequatur voluptate architecto odit facilis sapiente sed, nostrum doloribus modi?")))))},B=function(e){function t(){return Object(y.a)(this,t),Object(N.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBoards()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid board-list"},r.a.createElement("div",{className:"lane-wrapper lane-item"},r.a.createElement("div",{className:"lane-body"},this.props.boards.map(function(t){return r.a.createElement(C,Object.assign({key:t.id},Object(S.a)({},t,{admin:e.props.isSignedIn,deleteBoard:e.props.deleteBoard})))}))))}}]),t}(r.a.Component),D=Object(o.b)(function(e){var t=Object.values(e.boards),a=e.visibilityFilter.toLowerCase();return{boards:t.filter(function(e){return e.name.toLowerCase().includes(a)}),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}},{fetchBoards:function(){return function(){var e=Object(v.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/v1/api/board/");case 2:a=e.sent,t({type:"FETCH_BOARDS",payload:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},deleteBoard:function(e){return function(){var t=Object(v.a)(f.a.mark(function t(a){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.delete("/v1/api/board/".concat(e));case 2:a({type:"DELETE_BOARD",payload:e}),E.push("".concat(u,"/"));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(B),A=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(D,null))},T=Object(o.b)(function(e){return{secure:e.auth.isSignedIn}},function(e){return{update:function(t,a){return e(function(e,t){return function(){var a=Object(v.a)(f.a.mark(function a(n){var r;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.put("/v1/api/board/".concat(e),t);case 2:r=a.sent,n({type:"EDIT_BOARD",payload:r.data}),E.push("".concat(u,"/board/").concat(e));case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}(t,{name:a}))}}})(function(e){var t,a=e.secure,n=e.update,i=e.board;return r.a.createElement("nav",{className:"navbar bg-dark navbar-dark fixed-top"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",{className:"input-group ml-auto mr-auto",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"input-group"},r.a.createElement(x.a,{to:"/",className:"btn btn-secondary btn-sm"},r.a.createElement("i",{className:"fa fa-fw fa-home"})),r.a.createElement("input",{type:"search",className:"form-control form-control-sm",defaultValue:i.name,ref:function(e){return t=e}}),a?r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(e){t.value.trim()&&(n(i.id,t.value),t.value="")}},"Update")):null))))}),_=function(e){function t(){return Object(y.a)(this,t),Object(N.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchBoard(e)}},{key:"render",value:function(){return this.props.board?r.a.createElement("div",null,r.a.createElement(T,{board:this.props.board})):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),R=Object(o.b)(function(e,t){return{board:e.boards[t.match.params.id]}},{fetchBoard:function(e){return function(){var t=Object(v.a)(f.a.mark(function t(a){var n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/v1/api/board/".concat(e));case 2:n=t.sent,a({type:"FETCH_BOARD",payload:n.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(_),L=a(86),F=a(85),M=a(84),W=function(){return r.a.createElement(L.a,{history:E},r.a.createElement("div",null,r.a.createElement(F.a,null,r.a.createElement(M.a,{path:"".concat(u,"/"),exact:!0,component:A}),r.a.createElement(M.a,{path:"".concat(u,"/board/:id"),component:R}))))},U=a(9),P=a(39),G=a(40),H=function(e){return function(t,a,n){return e(function(e,a){var n,r=performance.now(),i=t(e,a),o=performance.now(),c=(n=o-r,Math.round(100*n)/100);return console.log("reducer process time:",c),i},a,n)}},V=function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}},J={isSignedIn:null,userProfile:null},Q=a(15),Y=a(24),K=a.n(Y),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},z=Object(U.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(S.a)({},e,{isSignedIn:!0,userProfile:t.payload});case"SIGN_OUT":return Object(S.a)({},e,{isSignedIn:!1,userProfile:null});default:return e}},boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOARDS":return Object(S.a)({},e,K.a.mapKeys(t.payload,"id"));case"FETCH_BOARD":case"CREATE_BOARD":case"EDIT_BOARD":return Object(S.a)({},e,Object(Q.a)({},t.payload.id,t.payload));case"DELETE_BOARD":return K.a.omit(e,t.payload);default:return e}},visibilityFilter:$});a(78),a(80);!function(){var e=new WebSocket("".concat(l,"/v1/api/notify/ws"));e.onopen=function(e){console.log("websocket opened")},e.onclose=function(e){console.log("websocket closed")},e.onmessage=function(e){console.log("websocket: notification received",e.data)}}();var X=function(e){var t=[V,P.a],a=[U.applyMiddleware.apply(void 0,t),H],n=G.composeWithDevTools.apply(void 0,a);return Object(U.createStore)(z,e,n)}();X.subscribe(function(){var e=Z;if((Z=X.getState().boards).length>e.length){d([{id:"5c3016bc4d74f1000177ed11",type:5,payload:{lane_id:"5c30169d4d74f1000177ed10"}}])}}),Object(i.render)(r.a.createElement(o.a,{store:X},r.a.createElement(W,null)),document.getElementById("root"));var Z=[];"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.f08dae05.chunk.js.map