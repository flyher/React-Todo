define(["exports","module","redux","action"],function(t,e,i,a){"use strict";function c(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function n(t,e){switch(void 0===t&&(t=d.classList),e.type){case a.ADD_CLASS:return[].concat(c(t),[{id:e.id,name:e.name,taskList:[],taskNumber:e.taskNumber}]);case a.DELETE_CLASS:var i,n;return n=e.id,t.forEach(function(t,e){t.id==n&&(i=e)}),[].concat(c(t.slice(0,i)),c(t.slice(i+1)));case a.RENAME_CLASS:var i,n,s;return n=e.id,t.forEach(function(t,e){t.id===n&&(i=e)}),s=t[i],s.name=e.name,[].concat(c(t.slice(0,i)),[s],c(t.slice(i+1)));case a.ADD_TASK:var n,i,s;return n=e.belong,t.forEach(function(t,e){t.id===n&&(i=e)}),s=t[i],s.taskNumber=s.taskNumber+1,s.taskList.push({id:e.id,title:e.title,date:e.date,content:e.content,complete:e.complete}),[].concat(c(t.slice(0,i)),[s],c(t.slice(i+1)));case a.DELETE_TASK:var n,i,r,o;if(n=e.belong,"all"===n){var l,i,r,u=t;return l=e.id,u.map(function(t,e){t.taskList.map(function(t,a){t.id===l&&(i=e,r=a)})}),u[i].taskNumber--,u[i].taskList.splice(r,1),u}return t.forEach(function(t,e){t.id===n&&(i=e)}),o=t[i].taskList,o.forEach(function(t,i){t.id===e.id&&(r=i)}),o=[].concat(c(o.slice(0,r)),c(o.slice(r+1))),t[i].taskList=o,t[i].taskNumber=t[i].taskNumber-1,[].concat(c(t.slice(0,i)),[t[i]],c(t.slice(i+1)));case a.MODIFY_TASK:var n,i,r,o;if(n=e.belong,"all"===n){var u,l,i,r;return u=t,l=e.id,u.map(function(t,e){t.taskList.map(function(t,a){t.id===l&&(i=e,r=a)})}),n=u[i].id,u[i].taskList[r]={belong:n,id:e.id,title:e.title,date:e.date,content:e.content,complete:e.complete},u}return t.forEach(function(t,e){t.id===n&&(i=e)}),o=t[i].taskList,o.forEach(function(t,i){t.id===e.id&&(r=i)}),o[r]={belong:e.belong,id:e.id,title:e.title,date:e.date,content:e.content,complete:e.complete},o=[].concat(c(o.slice(0,r)),[o[r]],c(o.slice(r+1))),o[0]||(o=[r]),t[i].taskList=o,[].concat(c(t.slice(0,i)),[t[i]],c(t.slice(i+1)));default:return t}}function s(t,e){switch(void 0===t&&(t=u),e.type){case a.SET_ACTIVE_CLASS:var i=t;return i.activeClassId=e.id,i.activeTaskId="index",i;case a.SET_ACTIVE_TASK:var i=t;return i.activeTaskId=e.id,i;default:return t}}function r(t,e){void 0===t&&(t=d.view);var i;switch(e.type){case a.ACTIVE_VIEW:return i=t,i.open=e.open,i;case a.SET_VIEW:return i=t,i.open=!0,i.viewAt=e.viewAt,i;default:return t}}var o=window.localStorage.getItem("app");if(!o){var l=JSON.stringify({classList:[{id:1,name:"学习",taskList:[{id:"task-000006",title:"React-Todo",date:"2015-10-09",content:"何不开始你今天的学习之旅？",complete:!1}],taskNumber:1}],activeItem:{activeClassId:1,activeTaskId:"index"},view:{open:!1,viewAt:"class"}});window.localStorage.setItem("app",l)}var d=JSON.parse(window.localStorage.getItem("app")),u={activeClassId:"all",activeTaskId:"index"},f=i.combineReducers({classList:n,activeItem:s,view:r});e.exports=f});