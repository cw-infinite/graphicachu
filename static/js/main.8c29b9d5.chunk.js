(this.webpackJsonpreactcode=this.webpackJsonpreactcode||[]).push([[0],{111:function(e,a,t){e.exports=t(285)},116:function(e,a,t){},284:function(e,a,t){},285:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(41),c=t.n(l),o=(t(116),t(22)),r=t(19),s=t(109),m=t(110),d=t(10),u=t(102),p={graphicachu:{data:[],layout:{title:"Title of Graph",showlegend:!0,xaxis:{title:"Name of X-Axis",domain:[0,1e3]},yaxis:{title:"Name of Y-Axis",domain:[0,3e3]}},config:{responsive:!0,modeBarButtonsToRemove:["pan2d","select2d","lasso2d","resetScale2d","zoomOut2d","zoom2d","zoomIn2d","zoomOut2d","autoScale2d"],displaylogo:!1},frames:[{scrollZoom:!0}]},calculation:{minX:0,maxX:0},fxs:[{id:0,name:"",fx:"",width:"",displayColorPicker:!1,color:"#"+(16777215*Math.random()<<0).toString(16),visible:!0,compare:!1,checkBoxDisabled:!1}],counterId:0,compareDisabled:!0},f=function(e,a){var t=u.parse(a).compile(),n=Math.abs(e.maxX-e.minX)/1e5,i=u.range(e.minX,e.maxX,n).toArray(),l=i.map((function(e){return t.evaluate({x:e})}));return[i,l]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0,t=Object(s.a)(e.fxs);switch(a.type){case"ADD_FX":var n=e.counterId+1;return t.push({id:n,name:"",fx:"",width:"",displayColorPicker:!1,color:"#"+(16777215*Math.random()<<0).toString(16),visible:!0,compare:!1,checkBoxDisabled:!1}),Object.assign({},e,{fxs:t,counterId:n});case"REMOVE_FX":return t.splice(a.payload.index,1),Object.assign({},e,{fxs:t});case"Edit_FX":t[a.payload.index]=a.payload.fx;var i=t.reduce((function(e,a){return e+(a.compare?1:0)}),0);return t.forEach((function(e){i>1?e.compare||(e.checkBoxDisabled=!0):e.checkBoxDisabled=!1})),Object.assign({},e,{fxs:t,compareDisabled:i<2});case"FETCH_FXS":default:return e}},x=Object(r.b)({submitFxForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SUBMIT_FX_CONFIG":var t=Object(d.a)({},e),n=[],i=[];return a.payload.fxs.forEach((function(e,t){if(e.fx){var l=f(a.payload.calculation,e.fx),c=Object(m.a)(l,2),o=c[0],r=c[1],s={name:e.name,x:o,y:r,type:"scatter",marker:{color:e.color},visible:e.visible};n.push(s)}i.push({index:t,name:e.name?e.name:"Expression ".concat(t+1)})})),Object.assign({},e,{graphicachu:Object(d.a)({},t.graphicachu,{data:n,legendOptions:i,initialSelect:0,layout:a.payload.layout})});default:return e}},fetchFxs:h,addFx:h,removeFx:h,editFx:h}),v=t(20),b=t(21),E=t(24),y=t(23),g=function(e){return{type:"SUBMIT_FX_CONFIG",payload:e}},N=t(107),F=t.n(N),k=window.Plotly,C=F()(k),w=function(e){Object(E.a)(t,e);var a=Object(y.a)(t);function t(){return Object(v.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){var e=Object(d.a)({},this.props.graphicachu);return i.a.createElement("div",{className:"column plot-box"},i.a.createElement(C,{data:e.data,layout:e.layout,config:e.config,frames:e.frames}))}}]),t}(n.Component),O=Object(o.b)((function(e){return console.log("Gaphicachu state:",e),{graphicachu:Object(d.a)({},e.submitFxForm.graphicachu)}}),{submitFxForm:g})(w),j=t(108),X=function(e){Object(E.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).layout={title:"Title of Graph",showlegend:!0,xaxis:{title:"Name of X-Axis",domain:[0,1e3]},yaxis:{title:"Name of Y-Axis",domain:[0,3e3]}},e.calculation={minX:0,maxX:0},e.onAdd=function(a){a.preventDefault(),e.props.addFx()},e.onCompare=function(a){a.preventDefault();var t={fxs:e.props.fxs,layout:e.layout,calculation:e.props.calculation};e.props.submitFxForm(t)},e.onFormSubmit=function(a){a.preventDefault();var t={fxs:e.props.fxs,layout:e.layout,calculation:e.props.calculation};e.props.submitFxForm(t)},e.handleCheckboxClick=function(a,t){var n=Object(d.a)({},e.props.fxs[a]);n[t.target.name]=t.target.checked,e.props.editFx(a,n)},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchFxs()}},{key:"onRemove",value:function(e,a){a.preventDefault(),this.props.removeFx(e)}},{key:"onFxChangeGen",value:function(e,a){var t=Object(d.a)({},this.props.fxs[e]);t[a.target.name]=a.target.value,this.props.editFx(e,t)}},{key:"onFxColor_Click",value:function(e,a){var t=Object(d.a)({},this.props.fxs[e]);t.displayColorPicker=!t.displayColorPicker,this.props.editFx(e,t)}},{key:"onFxColor_Selected",value:function(e,a){var t=Object(d.a)({},this.props.fxs[e]);t.displayColorPicker=!t.displayColorPicker,t.color=a.hex,this.props.editFx(e,t)}},{key:"fetchFxList",value:function(){var e=this;return this.props.fxs.map((function(a,t){return i.a.createElement("div",{key:a.id,className:"inline fields"},i.a.createElement("div",{className:"one wide field"},i.a.createElement("div",{className:"ui checkbox","data-content":a.disabled?"Deselect checkboxes":""},i.a.createElement("input",{type:"checkbox",name:"compare",disabled:a.checkBoxDisabled,onClick:e.handleCheckboxClick.bind(e,t)}),i.a.createElement("label",null))),i.a.createElement("div",{className:"one wide field"},i.a.createElement("label",null,i.a.createElement("h4",null,"Y"))),i.a.createElement("div",{className:"one wide field"},i.a.createElement("label",null,i.a.createElement("h3",null,"="))),i.a.createElement("div",{className:"six wide field"},i.a.createElement("input",{name:"fx",type:"text",placeholder:"ax+b...",onChange:e.onFxChangeGen.bind(e,t)})),i.a.createElement("div",{className:"six wide field"},i.a.createElement("div",{className:"ui left labeled input"},i.a.createElement("div",{className:"ui basic label"},"Name"),i.a.createElement("input",{name:"name",type:"text",placeholder:"Name of the equation",onChange:e.onFxChangeGen.bind(e,t)}))),i.a.createElement("div",{className:"one wide field"},i.a.createElement("div",{className:"ui icon button",onClick:e.onFxColor_Click.bind(e,t)},i.a.createElement("div",{className:"default-color",style:{background:e.fxs[t].color}})),e.props.fxs[t].displayColorPicker?i.a.createElement("div",{className:"popover"},i.a.createElement("div",{className:"cover",onClick:e.onFxColor_Click.bind(e,t)}),i.a.createElement(j.TwitterPicker,{width:"290px",color:e.fxs[t].color,onChange:e.onFxColor_Selected.bind(e,t)})):null),0===t?i.a.createElement("div",{className:"one wide field"},i.a.createElement("button",{className:"ui icon button",onClick:e.onAdd},i.a.createElement("i",{className:"plus circle icon"})),i.a.createElement("div",{className:"ui divider"})):i.a.createElement("div",{className:"one wide field"},i.a.createElement("button",{className:"ui icon button",onClick:e.onRemove.bind(e,t)},i.a.createElement("i",{className:"minus red circle icon"}))))}))}},{key:"render",value:function(){var e=this;return this.graphicachu=this.props.graphicachu,this.calculation=this.props.calculation,this.fxs=this.props.fxs,this.counterId=this.props.counterId,i.a.createElement("div",{className:"column config-pad-box"},i.a.createElement("div",{className:"ui segment"},i.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"ui equal width form"},i.a.createElement("div",{className:"fields"},i.a.createElement("div",{className:"eight wide field"},i.a.createElement("label",null,"Graph Name"),i.a.createElement("input",{type:"text",name:"layout.title",placeholder:"Graph Title",onChange:function(a){e.layout.title=a.target.value}})))),i.a.createElement("div",{className:"ui divider"}),i.a.createElement("div",{className:"inline fields"},i.a.createElement("div",{className:"two wide field"},i.a.createElement("label",null,"X-Axis :")),i.a.createElement("div",{className:"six wide field"},i.a.createElement("div",{className:"ui input"},i.a.createElement("input",{name:"layout.xaxis.title",type:"text",placeholder:"Define title of X-Axis",onChange:function(a){e.layout.xaxis.title=a.target.value}}))),i.a.createElement("div",{className:"four wide field"},i.a.createElement("div",{className:"ui left labeled input"},i.a.createElement("div",{className:"ui basic label"},"Min"),i.a.createElement("input",{name:"calculation.minX",type:"text",onChange:function(a){e.calculation.minX=parseInt(a.target.value)},placeholder:"Enter Min X.. "}))),i.a.createElement("div",{className:"four wide field"},i.a.createElement("div",{className:"ui left labeled input"},i.a.createElement("div",{className:"ui basic label"},"Max"),i.a.createElement("input",{type:"text",name:"calculation.maxX",onChange:function(a){e.calculation.maxX=parseInt(a.target.value)},placeholder:"Enter Max X.. "})))),i.a.createElement("div",{className:"inline fields"},i.a.createElement("div",{className:"two wide field"},i.a.createElement("label",null,"Y-Axis :")),i.a.createElement("div",{className:"six wide field"},i.a.createElement("div",{className:"ui input"},i.a.createElement("input",{type:"text",name:"layout.yaxis.title",placeholder:"Define title of Y-Axis",onChange:function(a){e.layout.yaxis.title=a.target.value}})))),i.a.createElement("div",{className:"ui divider"}),this.fetchFxList(),i.a.createElement("div",{className:"inline fields"},i.a.createElement("div",{className:"field "},i.a.createElement("button",{className:"ui right labeled blue icon button",onClick:this.onReset},i.a.createElement("i",{className:"right undo icon"}),"RESET?")),i.a.createElement("div",{className:"field"},i.a.createElement("button",{className:"ui right labeled yellow icon button ",disabled:this.props.compareDisabled,onClick:this.onCompare},i.a.createElement("i",{className:"right clone icon"}),"Compare")),i.a.createElement("div",{className:"field"},i.a.createElement("button",{type:"submit",className:"ui right labeled pink icon button "},i.a.createElement("i",{className:"right chart line icon"}),"PLOT!"))))))}}]),t}(n.Component),D=Object(o.b)((function(e){return console.log("FxForm state:",e),{calculation:e.fetchFxs.calculation,fxs:e.fetchFxs.fxs,counterId:e.fetchFxs.counterId,compareDisabled:e.fetchFxs.compareDisabled}}),{submitFxForm:g,fetchFxs:function(){return{type:"FETCH_FXS"}},addFx:function(){return{type:"ADD_FX"}},removeFx:function(e){return{type:"REMOVE_FX",payload:{index:e}}},editFx:function(e,a){return{type:"Edit_FX",payload:{index:e,fx:a}}}})(X),_=(t(284),function(e){Object(E.a)(t,e);var a=Object(y.a)(t);function t(){return Object(v.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"app-main"},i.a.createElement("div",{className:"ui centered grid"},i.a.createElement(O,null),i.a.createElement(D,null))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(o.a,{store:Object(r.c)(x)},i.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.8c29b9d5.chunk.js.map