(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,a,t){e.exports=t(303)},152:function(e,a,t){},303:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(30),c=t(11);t(152),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(16),l=t(17),d=t(19),s=t(18),u=t(26),p=t(20),m=t(7),f=t(54),b=function(e){var a=e.id,t=e.name,n=e.description,o=e.shared,c=e.editable,i=e.shareBoard,l=e.deleteBoard;return r.a.createElement("div",{id:"".concat(a),className:"card-wrapper float-left m-3"},r.a.createElement("div",{className:"card shadow board"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"ard-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},r.a.createElement(f.a,{className:"text-info",style:{textDecoration:"none",fontWeight:"500"},to:"".concat("/kanban-ui","/board/").concat(a)},t)),r.a.createElement("div",{className:"hover-card-badges",style:{display:c?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-eye text-muted",title:"public",style:{display:o?"inline":"none"},onClick:function(){return i(a,!1)}}),r.a.createElement("i",{className:"fa fa-fw fa-eye-slash text-muted",title:"private",style:{display:o?"none":"inline"},onClick:function(){return i(a,!0)}}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete",onClick:function(){return l(a,t)}}))))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"board-body-wrapper"},r.a.createElement("div",{className:"card-text small text-justify"},n)))))},h=t(5),v=t.n(h),y=t(12),E=t(134),C=t.n(E).a.create({baseURL:"https://dmitrybodnar.com"});var w=function(e,a){return console.log("main: shared worker is not available"),void C.post("/v1/api/command/".concat(e),a)},O=function(e){return function(){var a=Object(y.a)(v.a.mark(function a(t){var n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C.get("/v1/api/board/".concat(e));case 2:n=a.sent,t({type:"FETCH_BOARD",payload:n.data});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},g=function(e,a){return function(){var t=Object(y.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return t.next=3,C.delete("/v1/api/board/".concat(e));case 3:n({type:"DELETE_BOARD",payload:e});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).deleteBoard=function(e,a){var n=t.props,r=n.onConfirm,o=n.deleteBoard;r&&o&&r(void 0,"Delete ".concat(a,"?"),function(){return o(e,!1)})},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.fetchBoards)(e.currentUserId)}},{key:"componentDidUpdate",value:function(e){var a=this.props,t=a.fetchBoards,n=a.currentUserId;n!==e.currentUserId&&t(n)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid board-list"},r.a.createElement("div",{className:"lane-wrapper lane-item"},r.a.createElement("div",{className:"lane-body"},this.props.boards.map(function(a){return r.a.createElement(b,Object.assign({key:a.id},Object(m.a)({},a,{editable:e.props.isSignedIn&&e.props.currentUserId===a.owner,shareBoard:e.props.shareBoard,deleteBoard:e.deleteBoard})))}))))}}]),a}(r.a.Component),j=Object(c.b)(function(e){var a=Object.values(e.boards),t=e.filter.toLowerCase();return{boards:a.filter(function(e){return(e.name||"").toLowerCase().includes(t)}),currentUserId:e.auth.isSignedIn?e.auth.userProfile.id:null,isSignedIn:e.auth.isSignedIn}},{fetchBoards:function(e){return function(){var a=Object(y.a)(v.a.mark(function a(t){var n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=6;break}return a.next=3,C.get("/v1/api/board?owner=".concat(e));case 3:a.t0=a.sent,a.next=9;break;case 6:return a.next=8,C.get("/v1/api/board");case 8:a.t0=a.sent;case 9:n=a.t0,t({type:"FETCH_BOARDS",payload:n.data});case 11:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},shareBoard:function(e,a){return function(){var t=Object(y.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.put("/v1/api/board/".concat(e,"/share"),{shared:a});case 2:r=t.sent,n({type:"SHARE_BOARD",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},deleteBoard:g})(N),k=t(305),I=t(307),A=function(e){function a(e,t){var n;return Object(i.a)(this,a),(n=Object(d.a)(this,Object(s.a)(a).call(this,e,t))).handleShow=n.handleShow.bind(Object(u.a)(n)),n.handleClose=n.handleClose.bind(Object(u.a)(n)),n.state={show:!1,title:"Confirm",question:"Are you sure?",yesFn:n.handleClose},n}return Object(p.a)(a,e),Object(l.a)(a,[{key:"handleClose",value:function(e){e&&"function"==typeof e&&e(),this.setState({show:!1})}},{key:"handleShow",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Confirm",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Are you sure?",n=arguments.length>2?arguments[2]:void 0;this.setState({show:!0,title:a,question:t,yesFn:function(){return e.handleClose(n)}})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{onConfirm:this.handleShow}),r.a.createElement(k.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,this.state.title)),r.a.createElement(k.a.Body,null,this.state.question),r.a.createElement(k.a.Footer,null,r.a.createElement(I.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(I.a,{variant:"primary",onClick:this.state.yesFn},"Yes"))))}}]),a}(r.a.Component),D=function(e,a){return function(){var t=Object(y.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("/v1/api/board/".concat(e,"/lanes/").concat(a));case 2:r=t.sent,n({type:"FETCH_LANE",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},_=function(e,a){return function(){var t=Object(y.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.post("/v1/api/board/".concat(e,"/lanes"),{name:a,layout:"H",type:"L"});case 2:r=t.sent,n({type:"CREATE_LANE",payload:r.data}),w(e,[{id:r.data.id,board_id:e,type:5,payload:{parent_id:e}}]);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},x=function(e,a,t,n){return function(r){n||w(e,[{id:t,board_id:e,type:3,payload:{parent_id:a}}]),r({type:"DELETE_LANE",payload:{boardId:e,laneId:t}})}},S=function(e,a,t){return function(n){w(e,[{id:t,board_id:e,type:4,payload:{parent_id:a}},{id:t,board_id:e,type:3,payload:{parent_id:a}}]),n({type:"EXCLUDE_LANE",payload:{boardId:e,laneId:t,parentId:a}}),n({type:"DELETE_LANE",payload:{boardId:e,laneId:t}})}},L=Object(c.b)(function(){return{}},{update:function(e,a){return function(){var t=Object(y.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.put("/v1/api/board/".concat(e,"/rename"),{name:a});case 2:r=t.sent,n({type:"RENAME_BOARD",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},layout:function(e,a){return function(){var t=Object(y.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:w(e,[{id:e,board_id:e,type:8,payload:{layout:a}}]),n({type:"LAYOUT_BOARD",payload:a});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},lane:_})(function(e){var a,t=e.editable,n=e.update,o=e.layout,c=e.lane,i=e.board;return r.a.createElement("nav",{className:"navbar bg-dark navbar-dark"},r.a.createElement("div",{className:"container-fluid no-gutters"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-6 col-lg-3 ml-auto"},r.a.createElement("form",{className:"input-group ml-auto mr-auto",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement(f.a,{to:"".concat("/kanban-ui","/"),className:"btn btn-success btn-sm"},r.a.createElement("i",{className:"fa fa-fw fa-home"}))),r.a.createElement("input",{type:"search",className:"form-control form-control-sm",defaultValue:i.name,ref:function(e){return a=e}}),t?r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-success btn-sm",onClick:function(e){a.value.trim()&&n(i.id,a.value)}},r.a.createElement("i",{className:"fa fa-fw fa-check"}))):null))),r.a.createElement("div",{className:"mr-auto"},t?r.a.createElement("button",{className:"btn btn-sm text-white",onClick:function(e){c(i.id,"Lane")}},r.a.createElement("i",{className:"fa fa-fw fa-file"})):null,r.a.createElement("button",{className:"btn btn-sm text-white"},r.a.createElement("i",{className:"fa fa-fw fa-filter"})),function(){if(!t)return null;var e="V"===i.layout?"fa-table":"fa-columns";return r.a.createElement("button",{className:"btn btn-sm text-white",onClick:function(e){o(i.id,"V"===i.layout?"H":"V")}},r.a.createElement("i",{className:"fa fa-fw ".concat(e)}))}(),r.a.createElement("button",{className:"btn btn-sm text-white"},r.a.createElement("i",{className:"fa fa-fw fa-gear"})),r.a.createElement("button",{className:"btn btn-sm text-white"},r.a.createElement("i",{className:"fa fa-fw fa-refresh"})))))}),B=function(e,a){return function(){var t=Object(y.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("/v1/api/board/".concat(e,"/cards/").concat(a));case 2:r=t.sent,n({type:"FETCH_CARD",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},R=function(e,a,t,n){return function(r){n||w(e,[{id:t,board_id:e,type:1,payload:{parent_id:a}}]),r({type:"DELETE_CARD",payload:{boardId:e,cardId:t}})}},T=t(142),F=function(e){return(e.text||"").split(";").map(function(e){return e.split(":")}).map(function(e){return r.a.createElement("div",{className:"desc-container"},r.a.createElement("b",{className:"label"},e[0],":"),r.a.createElement("i",{className:"value"},e[1]))})},H=function(e){var a=e.card;return r.a.createElement("div",{className:"card-body py-2",style:{overflow:"hidden"}},r.a.createElement("div",{className:"card-body-wrapper"},r.a.createElement("div",{className:"card-text small text-justify"},r.a.createElement(F,{text:a.description}))))},U=t(306),P=t(304),q=function(e){function a(e,t){var n;return Object(i.a)(this,a),(n=Object(d.a)(this,Object(s.a)(a).call(this,e,t))).renderInput=function(e){var a=e.input,t=e.label,o=e.meta,c="field ".concat(o.error&&o.touched?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,t),r.a.createElement("input",Object.assign({},a,{autoComplete:"off"})),n.renderError(o))},n.onSubmit=function(e){n.props.onSubmit(e)},n.handleShow=n.handleShow.bind(Object(u.a)(n)),n.handleClose=n.handleClose.bind(Object(u.a)(n)),console.log("create form"),n.state={show:!!e.visible,title:"Card",yesFn:n.handleClose},n}return Object(p.a)(a,e),Object(l.a)(a,[{key:"handleClose",value:function(e){e&&"function"==typeof e&&e(),this.setState({show:!1})}},{key:"handleShow",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Card",t=arguments.length>1?arguments[1]:void 0;this.setState({show:!0,title:a,yesFn:function(){return e.handleClose(t)}})}},{key:"componentDidUpdate",value:function(e){this.props.visible!==e.visible&&this.setState({show:!!this.props.visible})}},{key:"renderError",value:function(e){var a=e.error;if(e.touched&&a)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},a))}},{key:"render",value:function(){return console.log("render form"),r.a.createElement(k.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,this.state.title)),r.a.createElement(k.a.Body,null,r.a.createElement(U.a,{name:"name",component:this.renderInput,label:"Enter Title"}),r.a.createElement(U.a,{name:"description",component:this.renderInput,label:"Enter Description"})),r.a.createElement(k.a.Footer,null,r.a.createElement(I.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(I.a,{variant:"primary",onClick:this.state.yesFn},"Yes"))))}}]),a}(r.a.Component),M=Object(P.a)({form:"cardForm",validate:function(e){var a={};return e.name||(a.name="You must enter a name"),e.description||(a.description="You must enter a description"),a}})(q),V=function(e){var a=e.lane,t=e.card,o=(e.editCard,e.deleteCard),c=e.editable,i=(e.children,Object(n.useState)(!1)),l=Object(T.a)(i,2),d=l[0],s=l[1];console.log("render card ".concat(t?t.id:"N/A",":").concat(t?t.name:"N/A"));return r.a.createElement("div",{id:t.id,className:"card-wrapper float-left m-3",draggable:c?"true":"false",onDragStart:function(e){e.dataTransfer.setData("card",t.id),e.dataTransfer.setData("parent",a.id)}},r.a.createElement("div",{className:"card shadow item"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},t.name),r.a.createElement("div",{className:"hover-card-badges",style:{display:c?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted card-badge",title:"edit",onClick:function(){return console.log("setting form visible"),void s(!0)}}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted card-badge",title:"delete",onClick:function(){return o(t.id)}}))))),r.a.createElement(H,{card:t}),r.a.createElement(M,{visible:d,initialValues:t})))},Y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).createCard=function(){var e=t.props,a=e.lane,n=e.board,r=e.createCard;e.editable&&a&&r&&r(n.id,a.id,"Card")},t.moveCard=function(e,a){var n=t.props,r=n.lane,o=n.board,c=n.moveCard;n.editable&&r&&c&&c(o.id,a,r.id,e)},t.editCard=function(e){var a=t.props,n=a.board,r=a.editable,o=a.onConfirm;if(r){var c=n.cards[e];o(void 0,"Edit ".concat(c.name,"?"))}},t.deleteCard=function(e){var a=t.props,n=a.lane,r=a.board,o=a.excludeAndDeleteCard,c=a.editable,i=a.onConfirm;if(c&&n&&o){var l=r.cards[e];i(void 0,"Delete ".concat(l.name,"?"),function(){return o(r.id,n.id,e)})}},t.deleteLane=function(){var e=t.props,a=e.lane,n=e.board,r=e.excludeAndDeleteLane,o=e.parentId,c=e.editable,i=e.onConfirm;c&&a&&r&&i(void 0,"Delete ".concat(a.name,"?"),function(){return r(n.id,o,a.id)})},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"renderCards",value:function(){var e=this,a=this.props,t=a.lane,n=a.board,o=a.editable;return t&&t.children?t.children.map(function(e){return n.cards[e]}).filter(function(e){return e}).map(function(a){return r.a.createElement(V,{key:a.id,board:n,card:a,lane:t,editCard:e.editCard,deleteCard:e.deleteCard,editable:o})}):null}},{key:"render",value:function(){var e=this,a=this.props,t=a.lane,n=a.editable;return r.a.createElement("div",{id:t.id,className:"lane-wrapper"},r.a.createElement("div",{className:"lane-header card-header border rounded-0"},r.a.createElement("div",{className:"lane-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},r.a.createElement("b",null,t.name,":")," ",t.description),r.a.createElement("div",{className:"hover-card-badges",style:{display:n?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-file text-muted",title:"card",onClick:this.createCard}),r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete",onClick:this.deleteLane}))))),r.a.createElement("div",{className:"lane-body",onDragOver:function(e){e.dataTransfer.types.includes("card")&&e.preventDefault()},onDrop:function(a){a.preventDefault();var t=a.dataTransfer.getData("card"),n=a.dataTransfer.getData("parent");e.moveCard(t,n)}},this.renderCards()))}}]),a}(r.a.Component),J=Object(c.b)(function(e,a){var t=e.board;return{board:t,lane:t.lanes[a.lane.id]}},{createCard:function(e,a,t){return function(){var n=Object(y.a)(v.a.mark(function n(r){var o;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.post("/v1/api/board/".concat(e,"/cards"),{name:t});case 2:o=n.sent,r({type:"CREATE_CARD",payload:o.data}),w(e,[{id:o.data.id,board_id:e,type:5,payload:{parent_id:a}}]);case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},moveCard:function(e,a,t,n){return function(){var r=Object(y.a)(v.a.mark(function r(o){return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:o({type:"EXCLUDE_CARD",payload:{boardId:e,laneId:a,cardId:n}}),o({type:"APPEND_CARD",payload:{boardId:e,laneId:t,cardId:n}}),w(e,[{id:n,board_id:e,type:4,payload:{parent_id:a}},{id:n,board_id:e,type:5,payload:{parent_id:t}}]);case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},excludeAndDeleteCard:function(e,a,t){return function(n){w(e,[{id:t,board_id:e,type:4,payload:{parent_id:a}},{id:t,board_id:e,type:1,payload:{parent_id:a}}]),n({type:"EXCLUDE_CARD",payload:{boardId:e,laneId:a,cardId:t}}),n({type:"DELETE_CARD",payload:{boardId:e,cardId:t}})}},excludeAndDeleteLane:S})(Y),W=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).createChild=function(){var e=t.props,a=e.lane,n=e.board,r=e.createCardLane;e.editable&&a&&r&&r(n.id,a.id,"CardLane")},t.deleteLane=function(){var e=t.props,a=e.lane,n=e.board,r=e.excludeAndDeleteLane,o=e.parentId,c=e.editable,i=e.onConfirm;c&&a&&r&&i(void 0,"Delete ".concat(a.name,"?"),function(){return r(n.id,o,a.id)})},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"renderLanes",value:function(){var e=this.props,a=e.lane,t=e.board,n=e.editable,o=e.onConfirm;return a&&a.children?a.children.map(function(e){return t.lanes[e]}).filter(function(e){return e}).map(function(e){return r.a.createElement(G,{key:e.id,lane:e,board:t,parentId:a.id,editable:n,onConfirm:o})}):null}},{key:"render",value:function(){var e=this.props,a=e.lane,t=e.editable;return r.a.createElement("div",{id:a.id,className:"lane-wrapper"},r.a.createElement("div",{className:"lane-header card-header border rounded-0"},r.a.createElement("div",{className:"lane-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},a.name," ",a.description),r.a.createElement("div",{className:"hover-card-badges",style:{display:t?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-file text-muted",title:"lane",onClick:this.createChild}),r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete",onClick:this.deleteLane}))))),r.a.createElement("div",{className:"lane-body"},this.renderLanes()))}}]),a}(r.a.Component),X=Object(c.b)(function(e,a){var t=e.board;return{board:t,lane:t.lanes[a.lane.id]}},{createLane:_,createCardLane:function(e,a,t){return function(){var n=Object(y.a)(v.a.mark(function n(r){var o;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.post("/v1/api/board/".concat(e,"/lanes"),{name:t,type:"C"});case 2:o=n.sent,r({type:"CREATE_LANE",payload:o.data}),w(e,[{id:o.data.id,board_id:e,type:5,payload:{parent_id:a}}]);case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},excludeAndDeleteLane:S})(W),G=function(e){var a=e.lane,t=e.board,n=e.parentId,o=e.editable,c=e.onConfirm;return"C"===a.type?r.a.createElement(J,{key:a.id,lane:a,board:t,parentId:n,editable:o,onConfirm:c}):r.a.createElement(X,{key:a.id,lane:a,board:t,parentId:n,editable:o,onConfirm:c})},K=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(l.a)(a,[{key:"renderLanes",value:function(){var e=this.props,a=e.board,t=e.editable,n=e.onConfirm;return a&&a.children?a.children.map(function(e){return a.lanes[e]}).filter(function(e){return e}).map(function(e){return r.a.createElement(G,{key:e.id,lane:e,board:a,parentId:a.id,editable:t,onConfirm:n})}):null}},{key:"render",value:function(){var e=this.props.board,a="V"===(e&&e.layout||"V")?"flex-column":"flex-row";return r.a.createElement("div",{className:"board-body d-flex ".concat(a)},this.renderLanes())}}]),a}(r.a.Component),$=Object(c.b)(function(e,a){return{board:e.board}})(K),z=t(10),Q=t(140),Z=t(141),ee=function(e){return function(a,t,n){return e(function(e,t){var n,r=performance.now(),o=a(e,t),c=performance.now(),i=(n=c-r,Math.round(100*n)/100);return console.log("reducer process time:",i),o},t,n)}},ae=function(e){return function(a){return function(t){console.group(t.type||"THUNK"),console.info("dispatching",t);var n=a(t);return console.log("next state",e.getState()),console.groupEnd(),n}}},te={isSignedIn:null,userProfile:null},ne=t(34),re=t(24),oe=t.n(re),ce=t(308),ie=Object(z.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGN_IN":return Object(m.a)({},e,{isSignedIn:!0,userProfile:a.payload});case"SIGN_OUT":return Object(m.a)({},e,{isSignedIn:!1,userProfile:null});default:return e}},boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_BOARDS":return Object(m.a)({},oe.a.mapKeys(a.payload,"id"));case"CREATE_BOARD":case"RENAME_BOARD":case"SHARE_BOARD":return Object(m.a)({},e,Object(ne.a)({},a.payload.id,a.payload));case"DELETE_BOARD":return oe.a.omit(e,a.payload);default:return e}},board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,t=null;switch(a.type){case"FETCH_BOARD":return function(e){var a=[],t=[];return function e(a,t){t(a),a.lanes&&a.lanes.forEach(function(a){return e(a,t)}),a.cards&&a.cards.forEach(function(a){return e(a,t)})}(e,function(n){if(n.type){var r=(n.lanes||n.cards||[]).map(function(e){return e.id});a.push(oe.a.omit(Object(m.a)({},n,{children:r}),["lanes","cards"]))}else n.id!==e.id&&t.push(n)}),Object(m.a)({},e,{children:(e.lanes||[]).map(function(e){return e.id}),lanes:oe.a.mapKeys(a,"id"),cards:oe.a.mapKeys(t,"id")})}(a.payload);case"CLEAN_BOARD":return null;case"LAYOUT_BOARD":return Object(m.a)({},e,{layout:a.payload});case"FETCH_LANE":return Object(m.a)({},e,{lanes:Object(m.a)({},e.lanes,Object(ne.a)({},a.payload.id,Object(m.a)({},a.payload,{children:a.payload.children||[]})))});case"CREATE_LANE":return Object(m.a)({},e,{lanes:Object(m.a)({},e.lanes,Object(ne.a)({},a.payload.id,Object(m.a)({},a.payload,{children:[]})))});case"DELETE_LANE":return e.lanes[a.payload.laneId]?Object(m.a)({},e,{lanes:oe.a.omit(e.lanes,a.payload.laneId)}):e;case"APPEND_LANE":return(t=e.lanes[a.payload.parentId])?(t.children=t.children||[],t.children.push(a.payload.laneId)):e.children.push(a.payload.laneId),Object(m.a)({},e);case"EXCLUDE_LANE":return e.lanes[a.payload.parentId]?e.lanes[a.payload.parentId].children=oe.a.pull(e.lanes[a.payload.parentId].children,a.payload.laneId):e.children=oe.a.pull(e.children,a.payload.laneId),Object(m.a)({},e);case"APPEND_CARD":return e.lanes[a.payload.laneId]?(e.lanes[a.payload.laneId].children.push(a.payload.cardId),Object(m.a)({},e)):e;case"EXCLUDE_CARD":return e.lanes[a.payload.laneId]?(e.lanes[a.payload.laneId].children=oe.a.pull(e.lanes[a.payload.laneId].children,a.payload.cardId),Object(m.a)({},e)):e;case"CREATE_CARD":case"FETCH_CARD":return Object(m.a)({},e,{cards:Object(m.a)({},e.cards,Object(ne.a)({},a.payload.id,a.payload))});case"DELETE_CARD":return e.cards[a.payload.cardId]?Object(m.a)({},e,{cards:oe.a.omit(e.cards,a.payload.cardId)}):e;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FILTER_BOARDS":return a.filter;default:return e}},form:ce.a}),le=function(){var e=[ae,Q.a],a=[z.applyMiddleware.apply(void 0,e),ee],t=Z.composeWithDevTools.apply(void 0,a);return Object(z.createStore)(ie,{},t)}(),de=0,se=1,ue=2,pe=3,me=4,fe=5,be=6,he=7,ve=8,ye=null;function Ee(e,a){console.log("websocket: send",JSON.parse(a)),e.send(a)}function Ce(e){switch(e.type){case be:case de:return void B(e.board_id,e.id)(le.dispatch);case he:case se:return void D(e.board_id,e.id)(le.dispatch);case ve:case ue:return void O(e.board_id)(le.dispatch);case pe:return void R(e.board_id,void 0,e.id,!0)(le.dispatch);case me:return void x(e.board_id,void 0,e.id,!0)(le.dispatch);case fe:return void g(e.board_id,!0)(le.dispatch)}}var we=function(e){if(!ye)return console.log("websocket not available"),void(ye=function(e){var a=new WebSocket("".concat("wss://dmitrybodnar.com","/v1/api/notify"));return a.onopen=function(t){console.log("websocket opened"),e&&Ee(a,e)},a.onclose=function(e){console.log("websocket closed"),ye=null},a.onmessage=function(e){var a=JSON.parse(e.data);if(console.log("websocket: receive",a),a&&a.length){var t=!0,n=!1,r=void 0;try{for(var o,c=a[Symbol.iterator]();!(t=(o=c.next()).done);t=!0)Ce(o.value)}catch(i){n=!0,r=i}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}}else console.log("array is expected by socket!")},a}(e));Ee(ye,e)},Oe=function(e){function a(e,t){var n;return Object(i.a)(this,a),(n=Object(d.a)(this,Object(s.a)(a).call(this,e,t))).handleShow=n.handleShow.bind(Object(u.a)(n)),n.handleClose=n.handleClose.bind(Object(u.a)(n)),n.state={show:!1,title:"Confirm",question:"Are you sure?",yesFn:n.handleClose},n}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;(0,this.props.fetchBoard)(e),we(JSON.stringify({id:e}))}},{key:"componentWillUnmount",value:function(){(0,this.props.cleanBoard)(),we(JSON.stringify({id:""}))}},{key:"handleClose",value:function(e){e&&"function"==typeof e&&e(),this.setState({show:!1})}},{key:"handleShow",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Confirm",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Are you sure?",n=arguments.length>2?arguments[2]:void 0;this.setState({show:!0,title:a,question:t,yesFn:function(){return e.handleClose(n)}})}},{key:"render",value:function(){var e=this.props,a=e.board,t=e.editable;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{board:a,editable:t}),r.a.createElement($,{board:a,editable:t,onConfirm:this.handleShow}),r.a.createElement(k.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,this.state.title)),r.a.createElement(k.a.Body,null,this.state.question),r.a.createElement(k.a.Footer,null,r.a.createElement(I.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(I.a,{variant:"primary",onClick:this.state.yesFn},"Yes")))):null}}]),a}(r.a.Component),ge=Object(c.b)(function(e,a){var t=e.board&&e.board.id===a.match.params.id?e.board:null;return{board:t,editable:e.auth.isSignedIn&&t&&t.owner===e.auth.userProfile.id}},{fetchBoard:O,cleanBoard:function(){return{type:"CLEAN_BOARD"}}})(Oe),Ne=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){if(e){var a=t.auth.currentUser.get().getBasicProfile(),n={id:a.getId(),email:a.getEmail(),name:a.getName()};t.props.signIn(n)}else t.props.signOut()},t.onSignInClick=function(){t.auth.signIn()},t.onSignOutClick=function(){t.auth.signOut()},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"".concat("745975090298-bi7i72f2akkt9cglmjjsgqh0q9qo2vmt.apps.googleusercontent.com"),scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"render",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"btn btn-info btn-sm",title:this.props.profile.name},r.a.createElement("i",{className:"fa fa-fw fa-google"})):r.a.createElement("button",{onClick:this.onSignInClick,className:"btn btn-info btn-sm"},r.a.createElement("i",{className:"fa fa-fw fa-google"}),"Sign In")}}]),a}(r.a.Component),je=Object(c.b)(function(e){return{isSignedIn:e.auth.isSignedIn,profile:e.auth.userProfile}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(Ne),ke=Object(c.b)(function(e){return{secure:e.auth.isSignedIn,owner:e.auth.userProfile&&e.auth.userProfile.id,visible:null==e.board}},{createBoard:function(e,a){return function(){var t=Object(y.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.post("/v1/api/board",{name:e,owner:a,layout:"H",shared:!1});case 2:r=t.sent,n({type:"CREATE_BOARD",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},filterBoards:function(e){return{type:"FILTER_BOARDS",filter:e}}})(function(e){var a,t=e.secure,n=e.owner,o=e.visible,c=e.createBoard,i=e.filterBoards;return r.a.createElement("nav",{className:"navbar bg-dark navbar-dark fixed-top",style:{visibility:o?"visible":"hidden"}},r.a.createElement("div",{className:"container-fluid no-gutters"},r.a.createElement("div",{className:"col-12 col-sm-9 col-md-6 col-lg-3 ml-auto mr-auto"},r.a.createElement("form",{className:"input-group",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement(je,null)),r.a.createElement("input",{type:"search",className:"form-control form-control-sm",placeholder:"Board title...",ref:function(e){return a=e}}),t?r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:function(e){a.value.trim()&&(console.log(t,n),c(a.value,t?n:"anonymous"),a.value="")}},r.a.createElement("i",{className:"fa fa-fw fa-check"}))):null,r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:function(e){i(a.value.trim())}},r.a.createElement("i",{className:"fa fa-fw fa-search"}))))))))}),Ie=t(42),Ae=t(22),De=Object(Ae.a)(),_e=function(){return r.a.createElement(Ie.b,{history:De},r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null),r.a.createElement(Ie.c,null,r.a.createElement(Ie.a,{path:"".concat("/kanban-ui","/"),exact:!0,component:A}),r.a.createElement(Ie.a,{path:"".concat("/kanban-ui","/board/:id"),exact:!0,component:ge}))))};t(301),t(302);Object(o.render)(r.a.createElement(c.a,{store:le},r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[144,1,2]]]);
//# sourceMappingURL=main.138193bb.chunk.js.map