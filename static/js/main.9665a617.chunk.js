(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,a,t){e.exports=t(303)},152:function(e,a,t){},303:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),o=t(11);t(152),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(16),l=t(17),s=t(19),d=t(18),u=t(26),p=t(20),m=t(7),f=t(54),b=function(e){var a=e.id,t=e.description||"";if(!t.includes(":"))return t;var n=t.split(";").filter(function(e){return null!=e&&e.length>0}).map(function(e){return e.split(":")}).map(function(e,t){return r.a.createElement("div",{key:"".concat(a,"_").concat(t),className:"desc-container"},r.a.createElement("div",{className:"label"},e[0],":"),r.a.createElement("div",{className:"value"},e[1]))});return r.a.createElement("div",{className:"card-text small text-justify"},n)},h=function(e){var a=e.id,t=e.name,n=e.description,c=e.shared,o=e.editable,i=e.shareBoard,l=e.deleteBoard;return r.a.createElement("div",{id:"".concat(a),className:"card-wrapper float-left m-3"},r.a.createElement("div",{className:"card shadow board"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},r.a.createElement(f.a,{className:"text-info",style:{textDecoration:"none",fontWeight:"500"},to:"".concat("/kanban-ui","/board/").concat(a)},t)),r.a.createElement("div",{className:"hover-card-badges",style:{display:o?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-eye text-muted",title:"public",style:{display:c?"inline":"none"},onClick:function(){return i(a,!1)}}),r.a.createElement("i",{className:"fa fa-fw fa-eye-slash text-muted",title:"private",style:{display:c?"none":"inline"},onClick:function(){return i(a,!0)}}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete",onClick:function(){return l(a,t)}}))))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"board-body-wrapper"},r.a.createElement(b,Object.assign({key:a},{id:a,description:n}))))))},v=t(5),y=t.n(v),E=t(12),C=t(134),w=t.n(C).a.create({baseURL:"https://dmitrybodnar.com"});var g=function(e,a){return console.log("main: shared worker is not available"),void w.post("/v1/api/command/".concat(e),a)},O=function(e){return function(){var a=Object(E.a)(y.a.mark(function a(t){var n;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.get("/v1/api/board/".concat(e));case 2:n=a.sent,t({type:"FETCH_BOARD",payload:n.data});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},N=function(e,a){return function(){var t=Object(E.a)(y.a.mark(function t(n){var r;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.post("/v1/api/board",{name:e,owner:a,layout:"H",shared:!1});case 2:r=t.sent,n({type:"CREATE_BOARD",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},j=function(e,a){return function(){var t=Object(E.a)(y.a.mark(function t(n){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return t.next=3,w.delete("/v1/api/board/".concat(e));case 3:n({type:"DELETE_BOARD",payload:e});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},k=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).deleteBoard=function(e,a){var n=t.props,r=n.onConfirm,c=n.deleteBoard;r&&c&&r(void 0,"Delete ".concat(a,"?"),function(){return c(e,!1)})},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.fetchBoards)(e.currentUserId)}},{key:"componentDidUpdate",value:function(e){var a=this.props,t=a.fetchBoards,n=a.currentUserId;n!==e.currentUserId&&t(n)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid board-list"},r.a.createElement("div",{className:"lane-wrapper lane-item"},r.a.createElement("div",{className:"lane-body"},this.props.boards.map(function(a){return r.a.createElement(h,Object.assign({key:a.id},Object(m.a)({},a,{editable:e.props.isSignedIn&&e.props.currentUserId===a.owner,shareBoard:e.props.shareBoard,deleteBoard:e.deleteBoard})))}))))}}]),a}(r.a.Component),I=Object(o.b)(function(e){var a=Object.values(e.boards),t=e.filter.toLowerCase();return{boards:a.filter(function(e){return(e.name||"").toLowerCase().includes(t)}),currentUserId:e.auth.isSignedIn?e.auth.userProfile.id:null,isSignedIn:e.auth.isSignedIn}},{fetchBoards:function(e){return function(){var a=Object(E.a)(y.a.mark(function a(t){var n;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=6;break}return a.next=3,w.get("/v1/api/board?owner=".concat(e));case 3:a.t0=a.sent,a.next=9;break;case 6:return a.next=8,w.get("/v1/api/board");case 8:a.t0=a.sent;case 9:n=a.t0,t({type:"FETCH_BOARDS",payload:n.data});case 11:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},fetchBoard:O,shareBoard:function(e,a){return function(){var t=Object(E.a)(y.a.mark(function t(n){var r;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.put("/v1/api/board/".concat(e,"/share"),{shared:a});case 2:r=t.sent,n({type:"SHARE_BOARD",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},createBoard:N,deleteBoard:j})(k),A=t(305),_=t(307),D=function(e){function a(e,t){var n;return Object(i.a)(this,a),(n=Object(s.a)(this,Object(d.a)(a).call(this,e,t))).handleShow=n.handleShow.bind(Object(u.a)(n)),n.handleClose=n.handleClose.bind(Object(u.a)(n)),n.state={show:!1,title:"Confirm",question:"Are you sure?",yesFn:n.handleClose},n}return Object(p.a)(a,e),Object(l.a)(a,[{key:"handleClose",value:function(e){e&&"function"==typeof e&&e(),this.setState({show:!1})}},{key:"handleShow",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Confirm",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Are you sure?",n=arguments.length>2?arguments[2]:void 0;this.setState({show:!0,title:a,question:t,yesFn:function(){return e.handleClose(n)}})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{onConfirm:this.handleShow}),r.a.createElement(A.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,null,this.state.title)),r.a.createElement(A.a.Body,null,this.state.question),r.a.createElement(A.a.Footer,null,r.a.createElement(_.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(_.a,{variant:"primary",onClick:this.state.yesFn},"Yes"))))}}]),a}(r.a.Component),x=function(e,a){return function(){var t=Object(E.a)(y.a.mark(function t(n){var r;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/v1/api/board/".concat(e,"/lanes/").concat(a));case 2:r=t.sent,n({type:"FETCH_LANE",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},S=function(e,a){return function(){var t=Object(E.a)(y.a.mark(function t(n){var r;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.post("/v1/api/board/".concat(e,"/lanes"),{name:a,layout:"H",type:"L"});case 2:r=t.sent,n({type:"CREATE_LANE",payload:r.data}),g(e,[{id:r.data.id,board_id:e,type:5,payload:{parent_id:e}}]);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},B=function(e,a,t,n){return function(r){n||g(e,[{id:t,board_id:e,type:3,payload:{parent_id:a}}]),r({type:"DELETE_LANE",payload:{boardId:e,laneId:t}})}},L=function(e,a,t){return function(n){g(e,[{id:t,board_id:e,type:4,payload:{parent_id:a}},{id:t,board_id:e,type:3,payload:{parent_id:a}}]),n({type:"EXCLUDE_LANE",payload:{boardId:e,laneId:t,parentId:a}}),n({type:"DELETE_LANE",payload:{boardId:e,laneId:t}})}},R=Object(o.b)(function(){return{}},{update:function(e,a){return function(){var t=Object(E.a)(y.a.mark(function t(n){var r;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.put("/v1/api/board/".concat(e,"/rename"),{name:a});case 2:r=t.sent,n({type:"RENAME_BOARD",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},layout:function(e,a){return function(){var t=Object(E.a)(y.a.mark(function t(n){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:g(e,[{id:e,board_id:e,type:8,payload:{layout:a}}]),n({type:"LAYOUT_BOARD",payload:a});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},lane:S})(function(e){var a,t=e.editable,n=e.update,c=e.layout,o=e.lane,i=e.board;return r.a.createElement("nav",{className:"navbar bg-dark navbar-dark"},r.a.createElement("div",{className:"container-fluid no-gutters"},r.a.createElement("div",{className:"col-12 col-sm-12 col-md-6 col-lg-3 ml-auto"},r.a.createElement("form",{className:"input-group ml-auto mr-auto",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement(f.a,{to:"".concat("/kanban-ui","/"),className:"btn btn-success btn-sm"},r.a.createElement("i",{className:"fa fa-fw fa-home"}))),r.a.createElement("input",{type:"search",className:"form-control form-control-sm",defaultValue:i.name,ref:function(e){return a=e}}),t?r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-success btn-sm",onClick:function(e){a.value.trim()&&n(i.id,a.value)}},r.a.createElement("i",{className:"fa fa-fw fa-check"}))):null))),r.a.createElement("div",{className:"mr-auto"},t?r.a.createElement("button",{className:"btn btn-sm text-white",onClick:function(e){o(i.id,"Lane")}},r.a.createElement("i",{className:"fa fa-fw fa-file"})):null,r.a.createElement("button",{className:"btn btn-sm text-white"},r.a.createElement("i",{className:"fa fa-fw fa-filter"})),function(){if(!t)return null;var e="V"===i.layout?"fa-table":"fa-columns";return r.a.createElement("button",{className:"btn btn-sm text-white",onClick:function(e){c(i.id,"V"===i.layout?"H":"V")}},r.a.createElement("i",{className:"fa fa-fw ".concat(e)}))}(),r.a.createElement("button",{className:"btn btn-sm text-white"},r.a.createElement("i",{className:"fa fa-fw fa-gear"})),r.a.createElement("button",{className:"btn btn-sm text-white"},r.a.createElement("i",{className:"fa fa-fw fa-refresh"})))))}),T=function(e,a){return function(){var t=Object(E.a)(y.a.mark(function t(n){var r;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/v1/api/board/".concat(e,"/cards/").concat(a));case 2:r=t.sent,n({type:"FETCH_CARD",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},F=function(e,a,t,n){return function(r){n||g(e,[{id:t,board_id:e,type:1,payload:{parent_id:a}}]),r({type:"DELETE_CARD",payload:{boardId:e,cardId:t}})}},H=t(142),U=function(e){var a=e.id,t=e.description||"";if(!t.includes(":"))return t;var n=t.split(";").filter(function(e){return null!=e&&e.length>0}).map(function(e){return e.split(":")}).map(function(e,t){return r.a.createElement("div",{key:"".concat(a,"_").concat(t),className:"desc-container"},r.a.createElement("div",{className:"label"},e[0],":"),r.a.createElement("div",{className:"value"},e[1]))});return r.a.createElement("div",{className:"card-text small text-justify"},n)},P=function(e){var a=e.card;return r.a.createElement("div",{className:"card-body py-2",style:{"overflow-y":"auto"}},r.a.createElement("div",{className:"card-body-wrapper"},r.a.createElement(U,Object.assign({key:a.id},{id:a.id,description:a.description}))))},q=t(306),V=t(304),J=function(e){function a(e,t){var n;return Object(i.a)(this,a),(n=Object(s.a)(this,Object(d.a)(a).call(this,e,t))).renderInput=function(e){var a=e.input,t=e.label,c=e.meta,o="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:o},r.a.createElement("label",null,t),r.a.createElement("input",Object.assign({},a,{autoComplete:"off"})),n.renderError(c))},n.onSubmit=function(e){n.props.onSubmit(e)},n.handleShow=n.handleShow.bind(Object(u.a)(n)),n.handleClose=n.handleClose.bind(Object(u.a)(n)),console.log("create form"),n.state={show:!!e.visible,title:"Card",yesFn:n.handleClose},n}return Object(p.a)(a,e),Object(l.a)(a,[{key:"handleClose",value:function(e){e&&"function"==typeof e&&e(),this.setState({show:!1})}},{key:"handleShow",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Card",t=arguments.length>1?arguments[1]:void 0;this.setState({show:!0,title:a,yesFn:function(){return e.handleClose(t)}})}},{key:"componentDidUpdate",value:function(e){this.props.visible!==e.visible&&this.setState({show:!!this.props.visible})}},{key:"renderError",value:function(e){var a=e.error;if(e.touched&&a)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},a))}},{key:"render",value:function(){return console.log("render form"),r.a.createElement(A.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,null,this.state.title)),r.a.createElement(A.a.Body,null,r.a.createElement(q.a,{name:"name",component:this.renderInput,label:"Enter Title"}),r.a.createElement(q.a,{name:"description",component:this.renderInput,label:"Enter Description"})),r.a.createElement(A.a.Footer,null,r.a.createElement(_.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(_.a,{variant:"primary",onClick:this.state.yesFn},"Yes"))))}}]),a}(r.a.Component),M=Object(V.a)({form:"cardForm",validate:function(e){var a={};return e.name||(a.name="You must enter a name"),e.description||(a.description="You must enter a description"),a}})(J),Y=function(e){var a=e.lane,t=e.card,c=(e.editCard,e.deleteCard),o=e.editable,i=(e.children,Object(n.useState)(!1)),l=Object(H.a)(i,2),s=l[0],d=l[1];console.log("render card ".concat(t?t.id:"N/A",":").concat(t?t.name:"N/A"));return r.a.createElement("div",{id:t.id,className:"card-wrapper float-left m-3",draggable:o?"true":"false",onDragStart:function(e){e.dataTransfer.setData("card",t.id),e.dataTransfer.setData("parent",a.id)}},r.a.createElement("div",{className:"card shadow item"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},t.name),r.a.createElement("div",{className:"hover-card-badges",style:{display:o?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted card-badge",title:"edit",onClick:function(){return console.log("setting form visible"),void d(!0)}}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted card-badge",title:"delete",onClick:function(){return c(t.id)}}))))),r.a.createElement(P,{card:t}),r.a.createElement(M,{visible:s,initialValues:t})))},W=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).createCard=function(){var e=t.props,a=e.lane,n=e.board,r=e.createCard;e.editable&&a&&r&&r(n.id,a.id,"Card")},t.moveCard=function(e,a){var n=t.props,r=n.lane,c=n.board,o=n.moveCard;n.editable&&r&&o&&o(c.id,a,r.id,e)},t.editCard=function(e){var a=t.props,n=a.board,r=a.editable,c=a.onConfirm;if(r){var o=n.cards[e];c(void 0,"Edit ".concat(o.name,"?"))}},t.deleteCard=function(e){var a=t.props,n=a.lane,r=a.board,c=a.excludeAndDeleteCard,o=a.editable,i=a.onConfirm;if(o&&n&&c){var l=r.cards[e];i(void 0,"Delete ".concat(l.name,"?"),function(){return c(r.id,n.id,e)})}},t.deleteLane=function(){var e=t.props,a=e.lane,n=e.board,r=e.excludeAndDeleteLane,c=e.parentId,o=e.editable,i=e.onConfirm;o&&a&&r&&i(void 0,"Delete ".concat(a.name,"?"),function(){return r(n.id,c,a.id)})},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"renderCards",value:function(){var e=this,a=this.props,t=a.lane,n=a.board,c=a.editable;return t&&t.children?t.children.map(function(e){return n.cards[e]}).filter(function(e){return e}).map(function(a){return r.a.createElement(Y,{key:a.id,board:n,card:a,lane:t,editCard:e.editCard,deleteCard:e.deleteCard,editable:c})}):null}},{key:"render",value:function(){var e=this,a=this.props,t=a.lane,n=a.editable,c=t.name+(t.description?":":"");return r.a.createElement("div",{id:t.id,className:"lane-wrapper"},r.a.createElement("div",{className:"lane-header card-header border rounded-0"},r.a.createElement("div",{className:"lane-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},r.a.createElement("b",null,c)," ",t.description),r.a.createElement("div",{className:"hover-card-badges",style:{display:n?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-file text-muted",title:"card",onClick:this.createCard}),r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete",onClick:this.deleteLane}))))),r.a.createElement("div",{className:"lane-body",onDragOver:function(e){e.dataTransfer.types.includes("card")&&e.preventDefault()},onDrop:function(a){a.preventDefault();var t=a.dataTransfer.getData("card"),n=a.dataTransfer.getData("parent");e.moveCard(t,n)}},this.renderCards()))}}]),a}(r.a.Component),X=Object(o.b)(function(e,a){var t=e.board;return{board:t,lane:t.lanes[a.lane.id]}},{createCard:function(e,a,t){return function(){var n=Object(E.a)(y.a.mark(function n(r){var c;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.post("/v1/api/board/".concat(e,"/cards"),{name:t});case 2:c=n.sent,r({type:"CREATE_CARD",payload:c.data}),g(e,[{id:c.data.id,board_id:e,type:5,payload:{parent_id:a}}]);case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},moveCard:function(e,a,t,n){return function(){var r=Object(E.a)(y.a.mark(function r(c){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:c({type:"EXCLUDE_CARD",payload:{boardId:e,laneId:a,cardId:n}}),c({type:"APPEND_CARD",payload:{boardId:e,laneId:t,cardId:n}}),g(e,[{id:n,board_id:e,type:4,payload:{parent_id:a}},{id:n,board_id:e,type:5,payload:{parent_id:t}}]);case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},excludeAndDeleteCard:function(e,a,t){return function(n){g(e,[{id:t,board_id:e,type:4,payload:{parent_id:a}},{id:t,board_id:e,type:1,payload:{parent_id:a}}]),n({type:"EXCLUDE_CARD",payload:{boardId:e,laneId:a,cardId:t}}),n({type:"DELETE_CARD",payload:{boardId:e,cardId:t}})}},excludeAndDeleteLane:L})(W),G=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).createChild=function(){var e=t.props,a=e.lane,n=e.board,r=e.createCardLane;e.editable&&a&&r&&r(n.id,a.id,"CardLane")},t.deleteLane=function(){var e=t.props,a=e.lane,n=e.board,r=e.excludeAndDeleteLane,c=e.parentId,o=e.editable,i=e.onConfirm;o&&a&&r&&i(void 0,"Delete ".concat(a.name,"?"),function(){return r(n.id,c,a.id)})},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"renderLanes",value:function(){var e=this.props,a=e.lane,t=e.board,n=e.editable,c=e.onConfirm;return a&&a.children?a.children.map(function(e){return t.lanes[e]}).filter(function(e){return e}).map(function(e){return r.a.createElement($,{key:e.id,lane:e,board:t,parentId:a.id,editable:n,onConfirm:c})}):null}},{key:"render",value:function(){var e=this.props,a=e.lane,t=e.editable,n=a.name+(a.description?":":""),c="V"===(a&&a.layout||"V")?"flex-column":"flex-row";return r.a.createElement("div",{id:a.id,className:"lane-wrapper composite-lane flex-fill"},r.a.createElement("div",{className:"lane-header card-header border rounded-0"},r.a.createElement("div",{className:"lane-title mb-0"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"mr-auto"},r.a.createElement("b",null,n)," ",a.description),r.a.createElement("div",{className:"hover-card-badges",style:{display:t?"inline":"none"}},r.a.createElement("i",{className:"fa fa-fw fa-file text-muted",title:"lane",onClick:this.createChild}),r.a.createElement("i",{className:"fa fa-fw fa-pencil text-muted",title:"edit"}),r.a.createElement("i",{className:"fa fa-fw fa-trash text-muted",title:"delete",onClick:this.deleteLane}))))),r.a.createElement("div",{className:"lane-body d-flex ".concat(c)},this.renderLanes()))}}]),a}(r.a.Component),K=Object(o.b)(function(e,a){var t=e.board;return{board:t,lane:t.lanes[a.lane.id]}},{createLane:S,createCardLane:function(e,a,t){return function(){var n=Object(E.a)(y.a.mark(function n(r){var c;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.post("/v1/api/board/".concat(e,"/lanes"),{name:t,type:"C"});case 2:c=n.sent,r({type:"CREATE_LANE",payload:c.data}),g(e,[{id:c.data.id,board_id:e,type:5,payload:{parent_id:a}}]);case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},excludeAndDeleteLane:L})(G),$=function(e){var a=e.lane,t=e.board,n=e.parentId,c=e.editable,o=e.onConfirm;return"C"===a.type?r.a.createElement(X,{key:a.id,lane:a,board:t,parentId:n,editable:c,onConfirm:o}):r.a.createElement(K,{key:a.id,lane:a,board:t,parentId:n,editable:c,onConfirm:o})},z=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(l.a)(a,[{key:"renderLanes",value:function(){var e=this.props,a=e.board,t=e.editable,n=e.onConfirm;return a&&a.children?a.children.map(function(e){return a.lanes[e]}).filter(function(e){return e}).map(function(e){return r.a.createElement($,{key:e.id,lane:e,board:a,parentId:a.id,editable:t,onConfirm:n})}):null}},{key:"render",value:function(){var e=this.props.board,a="V"===(e&&e.layout||"V")?"flex-column":"flex-row";return r.a.createElement("div",{className:"board-body d-flex ".concat(a)},this.renderLanes())}}]),a}(r.a.Component),Q=Object(o.b)(function(e,a){return{board:e.board}})(z),Z=t(10),ee=t(140),ae=t(141),te=function(e){return function(a,t,n){return e(function(e,t){var n,r=performance.now(),c=a(e,t),o=performance.now(),i=(n=o-r,Math.round(100*n)/100);return console.log("reducer process time:",i),c},t,n)}},ne=function(e){return function(a){return function(t){console.group(t.type||"THUNK"),console.info("dispatching",t);var n=a(t);return console.log("next state",e.getState()),console.groupEnd(),n}}},re={isSignedIn:null,userProfile:null},ce=t(27),oe=t(24),ie=t.n(oe),le=t(308),se=Object(Z.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGN_IN":return Object(m.a)({},e,{isSignedIn:!0,userProfile:a.payload});case"SIGN_OUT":return Object(m.a)({},e,{isSignedIn:!1,userProfile:null});default:return e}},boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_BOARDS":return Object(m.a)({},ie.a.mapKeys(a.payload,"id"));case"CREATE_BOARD":case"FETCH_BOARD":case"RENAME_BOARD":case"SHARE_BOARD":return Object(m.a)({},e,Object(ce.a)({},a.payload.id,a.payload));case"DELETE_BOARD":return ie.a.omit(e,a.payload);default:return e}},board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,t=null;switch(a.type){case"FETCH_BOARD":return function(e){var a=[],t=[];return function e(a,t){t(a),a.lanes&&a.lanes.forEach(function(a){return e(a,t)}),a.cards&&a.cards.forEach(function(a){return e(a,t)})}(e,function(n){if(n.type){var r=(n.lanes||n.cards||[]).map(function(e){return e.id});a.push(ie.a.omit(Object(m.a)({},n,{children:r}),["lanes","cards"]))}else n.id!==e.id&&t.push(n)}),Object(m.a)({},e,{children:(e.lanes||[]).map(function(e){return e.id}),lanes:ie.a.mapKeys(a,"id"),cards:ie.a.mapKeys(t,"id")})}(a.payload);case"CLEAN_BOARD":return null;case"LAYOUT_BOARD":return Object(m.a)({},e,{layout:a.payload});case"FETCH_LANE":return Object(m.a)({},e,{lanes:Object(m.a)({},e.lanes,Object(ce.a)({},a.payload.id,Object(m.a)({},a.payload,{children:a.payload.children||[]})))});case"CREATE_LANE":return Object(m.a)({},e,{lanes:Object(m.a)({},e.lanes,Object(ce.a)({},a.payload.id,Object(m.a)({},a.payload,{children:[]})))});case"DELETE_LANE":return e.lanes[a.payload.laneId]?Object(m.a)({},e,{lanes:ie.a.omit(e.lanes,a.payload.laneId)}):e;case"APPEND_LANE":return(t=e.lanes[a.payload.parentId])?(t.children=t.children||[],t.children.push(a.payload.laneId)):e.children.push(a.payload.laneId),Object(m.a)({},e);case"EXCLUDE_LANE":return e.lanes[a.payload.parentId]?e.lanes[a.payload.parentId].children=ie.a.pull(e.lanes[a.payload.parentId].children,a.payload.laneId):e.children=ie.a.pull(e.children,a.payload.laneId),Object(m.a)({},e);case"APPEND_CARD":return e.lanes[a.payload.laneId]?(e.lanes[a.payload.laneId].children.push(a.payload.cardId),Object(m.a)({},e)):e;case"EXCLUDE_CARD":return e.lanes[a.payload.laneId]?(e.lanes[a.payload.laneId].children=ie.a.pull(e.lanes[a.payload.laneId].children,a.payload.cardId),Object(m.a)({},e)):e;case"CREATE_CARD":case"FETCH_CARD":return Object(m.a)({},e,{cards:Object(m.a)({},e.cards,Object(ce.a)({},a.payload.id,a.payload))});case"DELETE_CARD":return e.cards[a.payload.cardId]?Object(m.a)({},e,{cards:ie.a.omit(e.cards,a.payload.cardId)}):e;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FILTER_BOARDS":return a.filter;default:return e}},form:le.a}),de=function(){var e=[ne,ee.a],a=[Z.applyMiddleware.apply(void 0,e),te],t=ae.composeWithDevTools.apply(void 0,a);return Object(Z.createStore)(se,{},t)}(),ue=0,pe=1,me=2,fe=3,be=4,he=5,ve=6,ye=7,Ee=8,Ce=null;function we(e,a){console.log("websocket: send",JSON.parse(a)),e.send(a)}function ge(e){switch(e.type){case ve:case ue:return void T(e.board_id,e.id)(de.dispatch);case ye:case pe:return void x(e.board_id,e.id)(de.dispatch);case Ee:case me:return void O(e.board_id)(de.dispatch);case fe:return void F(e.board_id,void 0,e.id,!0)(de.dispatch);case be:return void B(e.board_id,void 0,e.id,!0)(de.dispatch);case he:return void j(e.board_id,!0)(de.dispatch)}}var Oe=function(e){if(!Ce)return console.log("websocket not available"),void(Ce=function(e){var a=new WebSocket("".concat("wss://dmitrybodnar.com","/v1/api/notify"));return a.onopen=function(t){console.log("websocket opened"),e&&we(a,e)},a.onclose=function(e){console.log("websocket closed"),Ce=null},a.onmessage=function(e){var a=JSON.parse(e.data);if(console.log("websocket: receive",a),a&&a.length){var t=!0,n=!1,r=void 0;try{for(var c,o=a[Symbol.iterator]();!(t=(c=o.next()).done);t=!0)ge(c.value)}catch(i){n=!0,r=i}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}else console.log("array is expected by socket!")},a}(e));we(Ce,e)},Ne=function(e){function a(e,t){var n;return Object(i.a)(this,a),(n=Object(s.a)(this,Object(d.a)(a).call(this,e,t))).handleShow=n.handleShow.bind(Object(u.a)(n)),n.handleClose=n.handleClose.bind(Object(u.a)(n)),n.state={show:!1,title:"Confirm",question:"Are you sure?",yesFn:n.handleClose},n}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;(0,this.props.fetchBoard)(e),Oe(JSON.stringify({id:e}))}},{key:"componentWillUnmount",value:function(){(0,this.props.cleanBoard)(),Oe(JSON.stringify({id:""}))}},{key:"handleClose",value:function(e){e&&"function"==typeof e&&e(),this.setState({show:!1})}},{key:"handleShow",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Confirm",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Are you sure?",n=arguments.length>2?arguments[2]:void 0;this.setState({show:!0,title:a,question:t,yesFn:function(){return e.handleClose(n)}})}},{key:"render",value:function(){var e=this.props,a=e.board,t=e.editable;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{board:a,editable:t}),r.a.createElement(Q,{board:a,editable:t,onConfirm:this.handleShow}),r.a.createElement(A.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,null,this.state.title)),r.a.createElement(A.a.Body,null,this.state.question),r.a.createElement(A.a.Footer,null,r.a.createElement(_.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(_.a,{variant:"primary",onClick:this.state.yesFn},"Yes")))):null}}]),a}(r.a.Component),je=Object(o.b)(function(e,a){var t=e.board&&e.board.id===a.match.params.id?e.board:null;return{board:t,editable:e.auth.isSignedIn&&t&&t.owner===e.auth.userProfile.id}},{fetchBoard:O,cleanBoard:function(){return{type:"CLEAN_BOARD"}}})(Ne),ke=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){if(e){var a=t.auth.currentUser.get().getBasicProfile(),n={id:a.getId(),email:a.getEmail(),name:a.getName()};t.props.signIn(n)}else t.props.signOut()},t.onSignInClick=function(){t.auth.signIn()},t.onSignOutClick=function(){t.auth.signOut()},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"".concat("745975090298-bi7i72f2akkt9cglmjjsgqh0q9qo2vmt.apps.googleusercontent.com"),scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"render",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"btn btn-info btn-sm",title:this.props.profile.name},r.a.createElement("i",{className:"fa fa-fw fa-google"})):r.a.createElement("button",{onClick:this.onSignInClick,className:"btn btn-info btn-sm"},r.a.createElement("i",{className:"fa fa-fw fa-google"}),"Sign In")}}]),a}(r.a.Component),Ie=Object(o.b)(function(e){return{isSignedIn:e.auth.isSignedIn,profile:e.auth.userProfile}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(ke),Ae=Object(o.b)(function(e){return{secure:e.auth.isSignedIn,owner:e.auth.userProfile&&e.auth.userProfile.id,visible:null==e.board}},{createBoard:N,filterBoards:function(e){return{type:"FILTER_BOARDS",filter:e}}})(function(e){var a,t=e.secure,n=e.owner,c=e.visible,o=e.createBoard,i=e.filterBoards;return r.a.createElement("nav",{className:"navbar bg-dark navbar-dark fixed-top",style:{visibility:c?"visible":"hidden"}},r.a.createElement("div",{className:"container-fluid no-gutters"},r.a.createElement("div",{className:"col-12 col-sm-9 col-md-6 col-lg-3 ml-auto mr-auto"},r.a.createElement("form",{className:"input-group",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement(Ie,null)),r.a.createElement("input",{type:"search",className:"form-control form-control-sm",placeholder:"Board title...",ref:function(e){return a=e}}),t?r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:function(e){a.value.trim()&&(console.log(t,n),o(a.value,t?n:"anonymous"),a.value="")}},r.a.createElement("i",{className:"fa fa-fw fa-check"}))):null,r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:function(e){i(a.value.trim())}},r.a.createElement("i",{className:"fa fa-fw fa-search"}))))))))}),_e=t(42),De=t(22),xe=Object(De.a)(),Se=function(){return r.a.createElement(_e.b,{history:xe},r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null),r.a.createElement(_e.c,null,r.a.createElement(_e.a,{path:"".concat("/kanban-ui","/"),exact:!0,component:D}),r.a.createElement(_e.a,{path:"".concat("/kanban-ui","/board/:id"),exact:!0,component:je}))))};t(301),t(302);Object(c.render)(r.a.createElement(o.a,{store:de},r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),Oe(JSON.stringify({id:""}))}},[[144,1,2]]]);
//# sourceMappingURL=main.9665a617.chunk.js.map