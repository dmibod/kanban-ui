(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,a,t){e.exports=t(82)},50:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(34),i=t(6);t(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(2),l=t.n(o),s=t(7),d=t(36),u=t.n(d).a.create({baseURL:"https://dmitrybodnar.com"});var f=function(e,a){return console.log("main: shared worker is not available"),void u.post("/v1/api/command/".concat(e),a)},p=function(e){return function(){var a=Object(s.a)(l.a.mark(function a(t){var n;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.get("/v1/api/board/".concat(e));case 2:n=a.sent,t({type:"FETCH_BOARD",payload:n.data});case 4:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},m=t(10),b=t(11),v=t(13),h=t(12),y=t(14),E=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){if(e){var a=t.auth.currentUser.get().getBasicProfile(),n={id:a.getId(),email:a.getEmail(),name:a.getName()};t.props.signIn(n)}else t.props.signOut()},t.onSignInClick=function(){t.auth.signIn()},t.onSignOutClick=function(){t.auth.signOut()},t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"".concat("745975090298-bi7i72f2akkt9cglmjjsgqh0q9qo2vmt.apps.googleusercontent.com"),scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"render",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"btn btn-info btn-sm",title:this.props.profile.name},r.a.createElement("i",{className:"fa fa-fw fa-google"})):r.a.createElement("button",{onClick:this.onSignInClick,className:"btn btn-info btn-sm"},r.a.createElement("i",{className:"fa fa-fw fa-google"}),"Sign In")}}]),a}(r.a.Component),g=Object(i.b)(function(e){return{isSignedIn:e.auth.isSignedIn,profile:e.auth.userProfile}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(E),w=Object(i.b)(function(e){return{secure:e.auth.isSignedIn,owner:e.auth.userProfile&&e.auth.userProfile.id}},function(e){return{create:function(a,t){return function(e,a){return function(){var t=Object(s.a)(l.a.mark(function t(n){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/v1/api/board",{name:e,owner:a,layout:"H",shared:!1});case 2:r=t.sent,n({type:"CREATE_BOARD",payload:r.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}(a,t)(e)},filter:function(a){return e(function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}}(a))}}})(function(e){var a,t=e.secure,n=e.owner,c=e.create,i=e.filter;return r.a.createElement("nav",{className:"navbar bg-dark navbar-dark fixed-top"},r.a.createElement("div",{className:"container-fluid no-gutters"},r.a.createElement("div",{className:"col-12 col-sm-9 col-md-6 col-lg-3 ml-auto mr-auto"},r.a.createElement("form",{className:"input-group",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement(g,null)),r.a.createElement("input",{type:"search",className:"form-control form-control-sm",placeholder:"Board title...",ref:function(e){return a=e}}),t?r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:function(e){a.value.trim()&&(console.log(t,n),c(a.value,t?n:"anonymous"),a.value="")}},r.a.createElement("i",{className:"fa fa-fw fa-check"}))):null,r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:function(e){i(a.value.trim())}},r.a.createElement("i",{className:"fa fa-fw fa-search"}))))))))}),N=t(3),O=t(83),j=function(e){var a=e.id,t=e.name,n=e.description,c=e.shared,i=e.editable,o=e.shareBoard,l=e.deleteBoard;return r.a.createElement("div",{id:"".concat(a),className:"card-wrapper float-left m-3"},r.a.createElement("div",{className:"card shadow board"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},r.a.createElement(O.a,{className:"text-info",style:{textDecoration:"none",fontWeight:"500"},to:"".concat("/kanban-ui","/board/").concat(a)},t)),r.a.createElement("div",{className:"hover-card-badges",style:{display:i?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-eye text-muted",title:"public",style:{display:c?"inline":"none"},onClick:function(){return o(a,!1)}}),r.a.createElement("i",{className:"fa fa-fw fa-eye-slash text-muted",title:"private",style:{display:c?"none":"inline"},onClick:function(){return o(a,!0)}}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete",onClick:function(){return l(a)}}))))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"board-body-wrapper"},r.a.createElement("div",{className:"card-text small text-justify"},n)))))},k=function(e){function a(){return Object(m.a)(this,a),Object(v.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.fetchBoards)(e.currentUserId)}},{key:"componentDidUpdate",value:function(e){var a=this.props,t=a.fetchBoards,n=a.currentUserId;n!==e.currentUserId&&t(n)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid board-list"},r.a.createElement("div",{className:"lane-wrapper lane-item"},r.a.createElement("div",{className:"lane-body"},this.props.boards.map(function(a){return r.a.createElement(j,Object.assign({key:a.id},Object(N.a)({},a,{editable:e.props.isSignedIn&&e.props.currentUserId===a.owner,shareBoard:e.props.shareBoard,deleteBoard:e.props.deleteBoard})))}))))}}]),a}(r.a.Component),C=Object(i.b)(function(e){var a=Object.values(e.boards),t=e.visibilityFilter.toLowerCase();return{boards:a.filter(function(e){return(e.name||"").toLowerCase().includes(t)}),currentUserId:e.auth.isSignedIn?e.auth.userProfile.id:null,isSignedIn:e.auth.isSignedIn}},{fetchBoards:function(e){return function(){var a=Object(s.a)(l.a.mark(function a(t){var n;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=6;break}return a.next=3,u.get("/v1/api/board?owner=".concat(e));case 3:a.t0=a.sent,a.next=9;break;case 6:return a.next=8,u.get("/v1/api/board");case 8:a.t0=a.sent;case 9:n=a.t0,t({type:"FETCH_BOARDS",payload:n.data});case 11:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},shareBoard:function(e,a){return function(){var t=Object(s.a)(l.a.mark(function t(n){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.put("/v1/api/board/".concat(e,"/share"),{shared:a});case 2:r=t.sent,n({type:"SHARE_BOARD",payload:r.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},deleteBoard:function(e){return function(){var a=Object(s.a)(l.a.mark(function a(t){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.delete("/v1/api/board/".concat(e));case 2:t({type:"DELETE_BOARD",payload:e});case 3:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}})(k),x=function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(C,null))},I=function(e,a){return function(){var t=Object(s.a)(l.a.mark(function t(n){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/v1/api/board/".concat(e,"/lanes/").concat(a,"/cards"));case 2:r=t.sent,n({type:"FETCH_LANE",payload:{boardId:e,laneId:a,cards:r.data}});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},_=function(e,a){return function(){var t=Object(s.a)(l.a.mark(function t(n){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/v1/api/board/".concat(e,"/lanes"),{name:a,layout:"H",type:"L"});case 2:r=t.sent,f(e,[{id:r.data.id,board_id:e,type:3,payload:{parent_id:e}}]),n({type:"CREATE_LANE",payload:Object(N.a)({},r.data,{boardId:e})});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},A=Object(i.b)(function(){return{}},{update:function(e,a){return function(){var t=Object(s.a)(l.a.mark(function t(n){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.put("/v1/api/board/".concat(e,"/rename"),{name:a});case 2:r=t.sent,n({type:"RENAME_BOARD",payload:r.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},layout:function(e,a){return function(){var t=Object(s.a)(l.a.mark(function t(n){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:f(e,[{id:e,board_id:e,type:6,payload:{layout:a}}]),n({type:"LAYOUT_BOARD",payload:{id:e,layout:a}});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},lane:_})(function(e){var a,t=e.editable,n=e.update,c=e.layout,i=e.lane,o=e.board;return r.a.createElement("nav",{className:"navbar bg-dark navbar-dark"},r.a.createElement("div",{className:"container-fluid no-gutters"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-6 col-lg-3 ml-auto"},r.a.createElement("form",{className:"input-group ml-auto mr-auto",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement(O.a,{to:"".concat("/kanban-ui","/"),className:"btn btn-success btn-sm"},r.a.createElement("i",{className:"fa fa-fw fa-home"}))),r.a.createElement("input",{type:"search",className:"form-control form-control-sm",defaultValue:o.name,ref:function(e){return a=e}}),t?r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-success btn-sm",onClick:function(e){a.value.trim()&&n(o.id,a.value)}},r.a.createElement("i",{className:"fa fa-fw fa-check"}))):null))),r.a.createElement("div",{className:"mr-auto"},t?r.a.createElement("button",{className:"btn btn-sm text-white",onClick:function(e){i(o.id,"Lane")}},r.a.createElement("i",{className:"fa fa-fw fa-file"})):null,r.a.createElement("button",{className:"btn btn-sm text-white"},r.a.createElement("i",{className:"fa fa-fw fa-filter"})),function(){if(!t)return null;var e="V"===o.layout?"fa-table":"fa-columns";return r.a.createElement("button",{className:"btn btn-sm text-white",onClick:function(e){c(o.id,"V"===o.layout?"H":"V")}},r.a.createElement("i",{className:"fa fa-fw ".concat(e)}))}(),r.a.createElement("button",{className:"btn btn-sm text-white"},r.a.createElement("i",{className:"fa fa-fw fa-gear"})),r.a.createElement("button",{className:"btn btn-sm text-white"},r.a.createElement("i",{className:"fa fa-fw fa-refresh"})))))}),S=function(e){var a=e.card,t=e.lane,n=e.deleteCard,c=e.editable;return r.a.createElement("div",{id:a.id,className:"card-wrapper float-left m-3",draggable:c?"true":"false",onDragStart:function(e){e.dataTransfer.setData("card",a.id),e.dataTransfer.setData("parent",t.id)}},r.a.createElement("div",{className:"card shadow item"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},a.name),r.a.createElement("div",{className:"hover-card-badges",style:{display:c?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete",onClick:function(){return n(a.id)}}))))),r.a.createElement("div",{className:"card-body py-2",style:{overflow:"hidden"}},r.a.createElement("div",{className:"card-body-wrapper"},r.a.createElement("div",{className:"card-text small text-justify"},a.description)))))},D=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).createCard=function(){var e=t.props,a=e.lane,n=e.board,r=e.createCard;e.editable&&a&&r&&r(n.id,a.id,"Card")},t.moveCard=function(e,a){var n=t.props,r=n.lane,c=n.board,i=n.moveCard;n.editable&&r&&i&&i(c.id,a,r.id,e)},t.deleteCard=function(e){var a=t.props,n=a.lane,r=a.board,c=a.deleteCard;a.editable&&n&&c&&c(r.id,e,n.id)},t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"renderCards",value:function(){var e=this,a=this.props,t=a.lane,n=a.board,c=a.editable;return t&&t.children?t.children.map(function(e){return n.cards[e]}).map(function(a){return r.a.createElement(S,{key:a.id,card:a,lane:t,deleteCard:e.deleteCard,editable:c})}):null}},{key:"render",value:function(){var e=this,a=this.props,t=a.lane,n=a.editable;return r.a.createElement("div",{id:t.id,className:"lane-wrapper"},r.a.createElement("div",{className:"lane-header card-header border rounded-0"},r.a.createElement("div",{className:"card-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},t.name),r.a.createElement("div",{className:"hover-card-badges",style:{display:n?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-file text-muted",title:"card",onClick:this.createCard}),r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete"}))))),r.a.createElement("div",{className:"lane-body",onDragOver:function(e){e.dataTransfer.types.includes("card")&&e.preventDefault()},onDrop:function(a){a.preventDefault();var t=a.dataTransfer.getData("card"),n=a.dataTransfer.getData("parent");e.moveCard(t,n)}},this.renderCards()))}}]),a}(r.a.Component),R=Object(i.b)(function(e,a){var t=e.boards[a.board.id];return{board:t,lane:t.lanes[a.lane.id]}},{createCard:function(e,a,t){return function(){var n=Object(s.a)(l.a.mark(function n(r){var c;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.post("/v1/api/board/".concat(e,"/cards"),{name:t});case 2:c=n.sent,f(e,[{id:c.data.id,board_id:e,type:3,payload:{parent_id:a}}]),r({type:"CREATE_CARD",payload:c.data});case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},moveCard:function(e,a,t,n){return function(){var r=Object(s.a)(l.a.mark(function r(c){return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:f(e,[{id:n,board_id:e,type:2,payload:{parent_id:a}},{id:n,board_id:e,type:3,payload:{parent_id:t}}]),c({type:"EXCLUDE_CARD",payload:{boardId:e,fromLaneId:a,cardId:n}}),c({type:"APPEND_CARD",payload:{boardId:e,toLaneId:t,cardId:n}});case 4:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}()},deleteCard:function(e,a,t){return function(n){f(e,[{id:a,board_id:e,type:1,payload:{parent_id:t}}]),n({type:"DELETE_CARD",payload:a})}}})(D),B=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).createChild=function(){var e=t.props,a=e.lane,n=e.board,r=e.createCardLane;e.editable&&a&&r&&r(n.id,a.id,"CardLane")},t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"renderLanes",value:function(){var e=this.props,a=e.lane,t=e.board,n=e.editable;return a&&a.children?a.children.map(function(e){return t.lanes[e]}).map(function(e){return r.a.createElement(L,{key:e.id,lane:e,board:t,editable:n})}):null}},{key:"render",value:function(){var e=this.props,a=e.lane,t=e.editable;return r.a.createElement("div",{id:a.id,className:"lane-wrapper"},r.a.createElement("div",{className:"lane-header card-header border rounded-0"},r.a.createElement("div",{className:"card-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},a.name),r.a.createElement("div",{className:"hover-card-badges",style:{display:t?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-file text-muted",title:"lane",onClick:this.createChild}),r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete"}))))),r.a.createElement("div",{className:"lane-body"},this.renderLanes()))}}]),a}(r.a.Component),T=Object(i.b)(function(e,a){var t=e.boards[a.board.id];return{board:t,lane:t.lanes[a.lane.id]}},{createLane:_,createCardLane:function(e,a,t){return function(){var n=Object(s.a)(l.a.mark(function n(r){var c;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.post("/v1/api/board/".concat(e,"/lanes"),{name:t,type:"C"});case 2:c=n.sent,f(e,[{id:c.data.id,board_id:e,type:3,payload:{parent_id:a}}]),r({type:"CREATE_LANE",payload:Object(N.a)({},c.data,{boardId:e})});case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}})(B),L=function(e){var a=e.lane,t=e.board,n=e.editable;return"C"===a.type?r.a.createElement(R,{key:a.id,lane:a,board:t,editable:n}):r.a.createElement(T,{key:a.id,lane:a,board:t,editable:n})},U=function(e){function a(){return Object(m.a)(this,a),Object(v.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"renderLanes",value:function(){var e=this.props,a=e.board,t=e.editable;return a&&a.children?a.children.map(function(e){return a.lanes[e]}).map(function(e){return r.a.createElement(L,{key:e.id,lane:e,board:a,editable:t})}):null}},{key:"render",value:function(){var e=this.props.board,a="V"===(e&&e.layout||"V")?"flex-column":"flex-row";return r.a.createElement("div",{className:"d-flex ".concat(a)},this.renderLanes())}}]),a}(r.a.Component),H=Object(i.b)(function(e,a){return{board:e.boards[a.board.id]}})(U),F=t(16),P=t(37),V=t(38),M=function(e){return function(a,t,n){return e(function(e,t){var n,r=performance.now(),c=a(e,t),i=performance.now(),o=(n=i-r,Math.round(100*n)/100);return console.log("reducer process time:",o),c},t,n)}},J=function(e){return function(a){return function(t){console.group(t.type||"THUNK"),console.info("dispatching",t);var n=a(t);return console.log("next state",e.getState()),console.groupEnd(),n}}},W={isSignedIn:null,userProfile:null},G=t(8),K=t(17),Y=t.n(K),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_VISIBILITY_FILTER":return a.filter;default:return e}},X=Object(F.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGN_IN":return Object(N.a)({},e,{isSignedIn:!0,userProfile:a.payload});case"SIGN_OUT":return Object(N.a)({},e,{isSignedIn:!1,userProfile:null});default:return e}},boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,t=null;switch(a.type){case"FETCH_BOARD_LANES":return t=Object(N.a)({},e[a.payload.id],{lanes:a.payload.lanes}),Object(N.a)({},e,Object(G.a)({},a.payload.id,t));case"FETCH_BOARDS":return Object(N.a)({},Y.a.mapKeys(a.payload,"id"));case"FETCH_BOARD":return Object(N.a)({},e,Object(G.a)({},a.payload.id,function(e){var a=[],t=[];return function e(a,t){t(a),a.lanes&&a.lanes.forEach(function(a){return e(a,t)}),a.cards&&a.cards.forEach(function(a){return e(a,t)})}(e,function(n){if(n.type){var r=(n.lanes||n.cards||[]).map(function(e){return e.id});a.push(Y.a.omit(Object(N.a)({},n,{children:r}),["lanes","cards"]))}else n.id!==e.id&&t.push(n)}),Object(N.a)({},e,{children:(e.lanes||[]).map(function(e){return e.id}),lanes:Y.a.mapKeys(a,"id"),cards:Y.a.mapKeys(t,"id")})}(a.payload)));case"CREATE_BOARD":case"RENAME_BOARD":case"SHARE_BOARD":return Object(N.a)({},e,Object(G.a)({},a.payload.id,a.payload));case"DELETE_BOARD":return Y.a.omit(e,a.payload);case"LAYOUT_BOARD":return t=Object(N.a)({},e[a.payload.id],{layout:a.payload.layout}),Object(N.a)({},e,Object(G.a)({},a.payload.id,t));case"FETCH_LANE":return(t=e[a.payload.boardId]).lanes[a.payload.laneId].children=a.payload.cards.map(function(e){return e.id}),Object(N.a)({},e,Object(G.a)({},a.payload.boardId,Object(N.a)({},t)));case"CREATE_LANE":return(t=e[a.payload.boardId]).lanes[a.payload.id]=Y.a.omit(Object(N.a)({},a.payload,{children:[]}),"boardId"),Object(N.a)({},e,Object(G.a)({},t.id,t));default:return e}},boardLanes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_BOARD_LANES":return Object(N.a)({},e,Object(G.a)({},a.payload.id,a.payload));default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_CARD":return Object(N.a)({},e,Object(G.a)({},a.payload.id,a.payload));default:return e}},visibilityFilter:q}),$=function(){var e=[J,P.a],a=[F.applyMiddleware.apply(void 0,e),M],t=V.composeWithDevTools.apply(void 0,a);return Object(F.createStore)(X,{},t)}(),z=0,Q=1,Z=2,ee=null;function ae(e,a){console.log("websocket: send",JSON.parse(a)),e.send(a)}function te(e){switch(e.type){case z:case Q:return void I(e.board_id,e.id)($.dispatch);case Z:return void p(e.board_id)($.dispatch)}}var ne=function(e){if(!ee)return console.log("websocket not available"),void(ee=function(e){var a=new WebSocket("".concat("wss://dmitrybodnar.com","/v1/api/notify"));return a.onopen=function(t){console.log("websocket opened"),e&&ae(a,e)},a.onclose=function(e){console.log("websocket closed"),ee=null},a.onmessage=function(e){var a=JSON.parse(e.data);if(console.log("websocket: receive",a),a&&a.length){var t=!0,n=!1,r=void 0;try{for(var c,i=a[Symbol.iterator]();!(t=(c=i.next()).done);t=!0)te(c.value)}catch(o){n=!0,r=o}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}else console.log("array is expected by socket!")},a}(e));ae(ee,e)},re=function(e){function a(){return Object(m.a)(this,a),Object(v.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;(0,this.props.fetchBoard)(e),ne(JSON.stringify({id:e}))}},{key:"componentWillUnmount",value:function(){ne(JSON.stringify({id:""}))}},{key:"render",value:function(){var e=this.props,a=e.board,t=e.editable;return a?r.a.createElement("div",null,r.a.createElement(A,{board:a,editable:t}),r.a.createElement(H,{board:a,editable:t})):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),ce=Object(i.b)(function(e,a){var t=e.boards[a.match.params.id];return{board:t,editable:e.auth.isSignedIn&&t&&t.owner===e.auth.userProfile.id}},{fetchBoard:p})(re),ie=t(86),oe=t(85),le=t(84),se=t(39),de=t.n(se)()(),ue=function(){return r.a.createElement(ie.a,{history:de},r.a.createElement("div",null,r.a.createElement(oe.a,null,r.a.createElement(le.a,{path:"".concat("/kanban-ui","/"),exact:!0,component:x}),r.a.createElement(le.a,{path:"".concat("/kanban-ui","/board/:id"),component:ce}))))};t(78),t(80);Object(c.render)(r.a.createElement(i.a,{store:$},r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.49c55787.chunk.js.map