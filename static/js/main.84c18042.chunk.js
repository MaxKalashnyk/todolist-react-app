(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(57)},31:function(e,t,n){},33:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(21),c=n.n(r),l=(n(31),n(14)),i=n(6),d=n(7),u=n(9),s=n(8),p=n(10),m=n(60),f=n(59),h=(n(33),function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){return{textDecoration:n.props.todo.completed?"line-through":"none",backgroundColor:"#efefef",padding:"1em",borderBottom:"1px solid #949494"}},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),n,a.a.createElement("button",{style:b,onClick:this.props.delTodo.bind(this,t)},"x")))}}]),t}(o.Component)),b={background:"#ff0000",width:"2em",height:"2em",lineHeight:"2em",textAlign:"center",color:"#fff",borderRadius:"50%",border:"none",float:"right",cursor:"pointer",outline:"none"},y=h,g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos.map(function(t){return a.a.createElement(y,{key:t.id.toString(),todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})});return a.a.createElement("div",null,t)}}]),t}(o.Component),E=n(58),j={color:"#fff"},v=function(){return a.a.createElement("header",{className:"header"},a.a.createElement("h1",{className:"title"},"TodoList"),a.a.createElement(E.a,{to:"/",style:j},"Home")," | ",a.a.createElement(E.a,{to:"/about",style:j},"About"))},O=n(22),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},n.changeInput=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n.submitForm=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{style:C,onSubmit:this.submitForm},a.a.createElement("input",{type:"text",style:S,onChange:this.changeInput,placeholder:"Add todo item",value:this.state.title,name:"title"}),a.a.createElement("button",{type:"submit",style:x},"Add")))}}]),t}(o.Component),C={display:"flex"},S={flex:"7",height:"2em",fontSize:"1.5em",outline:"none",padding:"0 1em"},x={flex:"3",cursor:"pointer",fontSize:"2em",outline:"none",background:"#6ab04c",color:"#fff",border:"none"},T=k;var w=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About page"),a.a.createElement("p",null,"Content of About page"))},A=n(12),F=n.n(A),N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[]},n.markComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.delTodo=function(e){F.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(t){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(t){return t.id!==e}))})})},n.addTodo=function(e){F.a.post("https://jsonplaceholder.typicode.com/todos?_limit=10",{title:e,completed:!1}).then(function(e){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[e.data])})})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(t){return e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(v,null),a.a.createElement(f.a,{exact:!0,path:"/todolist-react-app/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{addTodo:e.addTodo}),a.a.createElement(g,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),a.a.createElement("div",{className:"container"},a.a.createElement(f.a,{path:"/todolist-react-app/about",component:w}))))}}]),t}(o.Component);c.a.render(a.a.createElement(N,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.84c18042.chunk.js.map