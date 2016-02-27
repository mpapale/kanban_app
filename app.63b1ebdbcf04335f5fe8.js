webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),o=r(a),u=n(153),i=r(u),l=n(154),c=r(l),f=n(283),s=r(f),d=n(411),p=r(d),v=n(412),h=r(v);(0,h["default"])(s["default"],p["default"],"app"),i["default"].render(o["default"].createElement(c["default"],null),document.getElementById("app"))},154:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=n(155),s=r(f),d=n(1),p=r(d),v=n(166),h=r(v),y=n(282),g=r(y),b=n(323),m=r(b),O=n(171),_=n(326),E=r(_),j=(i=(0,O.DragDropContext)(E["default"]),i(l=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement("button",{className:"add-lane",onClick:this.addLane},"+"),p["default"].createElement(s["default"],{stores:[m["default"]],inject:{lanes:function(){return m["default"].getState().lanes||[]}}},p["default"].createElement(h["default"],null)))}},{key:"addLane",value:function(){g["default"].create({name:"New lane"})}}]),t}(p["default"].Component))||l);t["default"]=j},166:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),u=n(167),i=r(u);t["default"]=function(e){var t=e.lanes;return o["default"].createElement("div",{className:"lanes"},t.map(function(e){return o["default"].createElement(i["default"],{className:"lane",key:e.id,lane:e})}))}},167:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=n(155),d=r(s),p=n(1),v=r(p),h=n(168),y=r(h),g=n(297),b=r(g),m=n(298),O=r(m),_=n(282),E=r(_),j=n(169),w=r(j),k=n(171),P=n(281),N=r(P),S={hover:function(e,t){var n=t.getItem(),r=n.id;e.lane.notes.length||E["default"].attachToLane({laneId:e.lane.id,noteId:r})}},M=(l=(0,k.DropTarget)(N["default"].NOTE,S,function(e){return{connectDropTarget:e.dropTarget()}}),l(c=function(e){function t(){var e,n,r,a;o(this,t);for(var i=arguments.length,l=Array(i),c=0;i>c;c++)l[c]=arguments[c];return n=r=u(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.addNote=function(e){e.stopPropagation();var t=r.props.lane.id,n=b["default"].create({task:"New task"});E["default"].attachToLane({noteId:n.id,laneId:t})},r.deleteNote=function(e,t){t.stopPropagation();var n=r.props.lane.id;E["default"].detachFromLane({laneId:n,noteId:e}),b["default"]["delete"](e)},r.editName=function(e){var t=r.props.lane.id;E["default"].update({id:t,name:e,editing:!1})},r.deleteLane=function(){var e=r.props.lane.id;E["default"]["delete"](e)},r.activateLaneEdit=function(){var e=r.props.lane.id;E["default"].update({id:e,editing:!0})},a=n,u(r,a)}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.connectDropTarget,n=e.lane,r=a(e,["connectDropTarget","lane"]);return t(v["default"].createElement("div",r,v["default"].createElement("div",{className:"lane-header"},v["default"].createElement("div",{className:"lane-add-note"},v["default"].createElement("button",{onClick:this.addNote},"+")),v["default"].createElement(w["default"],{className:"lane-name",editing:n.editing,value:n.name,onEdit:this.editName,onValueClick:this.activateLaneEdit}),v["default"].createElement("div",{className:"lane-delete"},v["default"].createElement("button",{onClick:this.deleteLane},"x"))),v["default"].createElement(d["default"],{stores:[O["default"]],inject:{notes:function(){return O["default"].getNotesByIds(n.notes)}}},v["default"].createElement(y["default"],{onValueClick:this.activateNoteEdit,onEdit:this.editNote,onDelete:this.deleteNote}))))}},{key:"editNote",value:function(e,t){b["default"].update({id:e,task:t,editing:!1})}},{key:"activateNoteEdit",value:function(e){b["default"].update({id:e,editing:!0})}}]),t}(v["default"].Component))||c);t["default"]=M},168:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a),u=n(169),i=r(u),l=n(170),c=r(l),f=n(282),s=r(f);t["default"]=function(e){var t=e.notes,n=e.onValueClick,r=e.onEdit,a=e.onDelete;return o["default"].createElement("ul",{className:"notes"},t.map(function(e){return o["default"].createElement(c["default"],{className:"note",id:e.id,key:e.id,editing:e.editing,onMove:s["default"].move},o["default"].createElement(i["default"],{editing:e.editing,value:e.task,onValueClick:n.bind(null,e.id),onEdit:r.bind(null,e.id),onDelete:a.bind(null,e.id)}))}))}},169:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c=n(1),f=r(c),s=function(e){function t(){var e,n,r,a;o(this,t);for(var i=arguments.length,l=Array(i),c=0;i>c;c++)l[c]=arguments[c];return n=r=u(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.renderEdit=function(){return f["default"].createElement("input",{type:"text",ref:function(e){return e?e.selectionStart=r.props.value.length:null},autoFocus:!0,defaultValue:r.props.value,onBlur:r.finishEdit,onKeyPress:r.checkEnter})},r.renderValue=function(){var e=r.props.onDelete;return f["default"].createElement("div",{onClick:r.props.onValueClick},f["default"].createElement("span",{className:"value"},r.props.value),e?r.renderDelete():null)},r.renderDelete=function(){return f["default"].createElement("button",{className:"delete",onClick:r.props.onDelete},"x")},r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&t.trim()&&r.props.onEdit(t)},a=n,u(r,a)}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=(e.value,e.onEdit,e.onValueClick,e.editing),n=a(e,["value","onEdit","onValueClick","editing"]);return f["default"].createElement("div",n,t?this.renderEdit():this.renderValue())}}]),t}(f["default"].Component);t["default"]=s},170:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c,f,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var p=n(1),v=r(p),h=n(171),y=n(281),g=r(y),b={beginDrag:function(e){return{id:e.id}},isDragging:function(e,t){return e.id===t.getItem().id}},m={hover:function(e,t){var n=e.id,r=t.getItem(),a=r.id;a!==n&&e.onMove({sourceId:a,targetId:n})}},O=(l=(0,h.DragSource)(g["default"].NOTE,b,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),c=(0,h.DropTarget)(g["default"].NOTE,m,function(e){return{connectDropTarget:e.dropTarget()}}),l(f=c(f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.connectDropTarget,r=e.isDragging,o=(e.onMove,e.id,e.editing),u=a(e,["connectDragSource","connectDropTarget","isDragging","onMove","id","editing"]),i=o?function(e){return e}:t;return i(n(v["default"].createElement("li",s({style:{opacity:r?0:1}},this.props),u.children)))}}]),t}(v["default"].Component))||f)||f);t["default"]=O},281:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={NOTE:"note"}},282:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(283),o=r(a);t["default"]=o["default"].generateActions("create","update","delete","attachToLane","detachFromLane","move")},283:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(284),o=r(a),u=new o["default"];t["default"]=u},297:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(283),o=r(a);t["default"]=o["default"].generateActions("create","update","delete")},298:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(299),l=r(i),c=n(283),f=r(c),s=n(297),d=r(s),p=function(){function e(){a(this,e),this.bindActions(d["default"]),this.notes=[],this.exportPublicMethods({getNotesByIds:this.getNotesByIds.bind(this)})}return u(e,[{key:"create",value:function(e){var t=this.notes;return e.id=l["default"].v4(),this.setState({notes:t.concat(e)}),e}},{key:"update",value:function(e){var t=this.notes.map(function(t){return t.id===e.id?o({},t,e):t});this.setState({notes:t})}},{key:"delete",value:function(e){this.setState({notes:this.notes.filter(function(t){return t.id!==e})})}},{key:"getNotesByIds",value:function(e){var t=this;return(e||[]).map(function(e){return t.notes.filter(function(t){return t.id===e})}).filter(function(e){return e.length}).map(function(e){return e[0]})}}]),e}();t["default"]=f["default"].createStore(p,"NoteStore")},323:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(299),l=r(i),c=n(283),f=r(c),s=n(282),d=r(s),p=n(324),v=r(p),h=function(){function e(){a(this,e),this.bindActions(d["default"]),this.lanes=[]}return u(e,[{key:"create",value:function(e){var t=this.lanes;e.id=l["default"].v4(),e.notes=e.notes||[],this.setState({lanes:t.concat(e)})}},{key:"update",value:function(e){var t=this.lanes.map(function(t){return t.id===e.id?o({},t,e):t});this.setState({lanes:t})}},{key:"delete",value:function(e){this.setState({lanes:this.lanes.filter(function(t){return t.id!==e})})}},{key:"attachToLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return-1!==e.notes.indexOf(n)&&(e.notes=e.notes.filter(function(e){return e!==n})),e.id===t&&(-1!==e.notes.indexOf(n)?console.warn("Already attached note to lane",r):e.notes.push(n)),e});this.setState({lanes:r})}},{key:"detachFromLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return e.id===t&&(e.notes=e.notes.filter(function(e){return e.id!==n})),e});this.setState({lanes:r})}},{key:"move",value:function(e){var t=e.sourceId,n=e.targetId,r=this.lanes,a=r.filter(function(e){return-1!==e.notes.indexOf(t)})[0],o=r.filter(function(e){return-1!==e.notes.indexOf(n)})[0],u=a.notes.indexOf(t),i=o.notes.indexOf(n);a===o?a.notes=(0,v["default"])(a.notes,{$splice:[[u,1],[i,0,t]]}):(a.notes.splice(u,1),o.notes.splice(i,0,t)),this.setState({lanes:r})}}]),e}();t["default"]=f["default"].createStore(h,"LaneStore")},411:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}}},412:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,n){var r=(0,o["default"])(e);try{e.bootstrap(t.get(n))}catch(a){console.error("Failed to bootstrap data",a)}r.listen(function(){t.get("debug")||t.set(n,e.takeSnapshot())})};var a=n(413),o=r(a)},413:function(e,t){"use strict";function n(){var e=this;this.dispatcher.register(function(t){var n=Object.keys(e.alt.stores).reduce(function(t,n){return t.push(e.alt.stores[n].dispatchToken),t},[]);e.waitFor(n),e.setState({payload:t}),e.emitChange()})}function r(e){return e.FinalStore?e.FinalStore:e.FinalStore=e.createUnsavedStore(n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r,e.exports=t["default"]}});