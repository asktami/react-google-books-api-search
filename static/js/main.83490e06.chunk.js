(window["webpackJsonpreact-google-books-api-search"]=window["webpackJsonpreact-google-books-api-search"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),c=a(1),s=a(2),i=a(4),u=a(3),m=a(5),h=a(8),p=["all","books","magazines"],f=["partial","full","free-ebooks","paid-ebooks","ebooks"],b="AIzaSyCIxIIcpTwWrV5HmCj_q4AWZRAqD7y6CFI",d="https://www.googleapis.com/books/v1/volumes",k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:"",printType:"all",bookType:"full"},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.fetchBooks=function(){var e="".concat(d,"?key=").concat(b,"&langRestrict=en&maxResults=40&orderBy=relevance&q=").concat(a.state.searchTerm,"&filter=").concat(a.state.bookType,"&printType=").concat(a.state.printType);fetch(e).then(function(e){if(!e.ok)throw new Error("Something went wrong, please try again later.");return e}).then(function(e){return e.json()}).then(function(e){a.props.updateResults(e),a.setState({error:null})}).catch(function(e){a.setState({error:e.message})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.fetchBooks()}},{key:"render",value:function(){var e=this,t=f.map(function(e,t){return r.a.createElement("option",{value:e,key:e},e)}),a=p.map(function(e,t){return r.a.createElement("option",{value:e,key:e},e)});return r.a.createElement("div",{className:"header_content"},r.a.createElement("h1",null,"Google Book Search"),r.a.createElement("form",{id:"form",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("legend",null),r.a.createElement("label",{htmlFor:"searchTerm"},r.a.createElement("input",{type:"text",name:"searchTerm",id:"searchTerm",required:!0,"aria-required":"true",placeholder:"",value:this.state.searchTerm,onChange:this.handleChange})),r.a.createElement("button",{id:"search"},"search"),r.a.createElement("div",{className:"select-container"},r.a.createElement("label",{htmlFor:"printType"},"Print Type"," ",r.a.createElement("select",{id:"printType",name:"printType",value:this.state.printType,onChange:this.handleChange},a)),r.a.createElement("label",{htmlFor:"bookType"},"Book Type"," ",r.a.createElement("select",{id:"bookType",name:"bookType",value:this.state.bookType,onChange:this.handleChange},t)))),r.a.createElement("p",{id:"error-message",className:"error-message"},this.state.error))}}]),t}(r.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"item-buttons"},this.props.link?r.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},"view"):r.a.createElement("em",null,r.a.createElement("small",null,"no link")))}}]),t}(r.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.book,t="https://via.placeholder.com/150",a=function(e){var t=e.volumeInfo&&e.volumeInfo.authors,a=[];if(!t)return"N/A";return t.map(function(e,t){return a.push(e)}),a.join(", ")}(e),n=function(e){var a=e.volumeInfo&&e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.smallThumbnail;return a||t}(e),o=function(e){var t=e.saleInfo.retailPrice&&e.saleInfo.retailPrice.amount,a=e.saleInfo.retailPrice&&e.saleInfo.retailPrice.currencyCode;if(!t)return"N/A";return"".concat(t," ").concat(a)}(e);return r.a.createElement("li",{className:"item"},r.a.createElement("div",{className:"item-header"},r.a.createElement("div",{className:"item-subhead"},r.a.createElement("h3",null,e.volumeInfo.title),r.a.createElement("br",null),"Author: ",a,r.a.createElement("br",null),"Price: ",o),r.a.createElement(v,{link:e.saleInfo.buyLink})),r.a.createElement("div",{className:"item-description-container"},r.a.createElement("div",{className:"item-description"},r.a.createElement("img",{src:n,alt:n?e.volumeInfo.title:"no-image"}),e.volumeInfo.description)))}}]),t}(r.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.searchResults,t=[];return e[0]&&e[0].totalItems&&e[0].items&&(t=e[0].items.map(function(e,t){return r.a.createElement(E,{key:t,book:e})})),r.a.createElement("section",{id:"results"},r.a.createElement("h2",null,"Search Results"),r.a.createElement("ul",{id:"results-list",className:"item-list"},t.length?r.a.createElement(r.a.Fragment,null,t):"No books found!"))}}]),t}(r.a.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{id:"back-to-top",className:"back-to-top",onClick:this.props.goBackToTop,style:{display:this.props.showBackToTop?"block":"none"}},"back to top")}}]),t}(r.a.Component),g=(a(14),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={searchResults:[],showBackToTop:!1},a.handleScroll=function(){0===window.scrollY?a.setState({showBackToTop:!1}):a.setState({showBackToTop:!0})},a.updateResults=function(e){a.setState({searchResults:[e]}),a.scrollToRef(a.ref_SearchResults)},a.scrollToRef=function(e){window.scrollTo({top:e.current.offsetTop,behavior:"smooth"})},a.ref_SearchForm=r.a.createRef(),a.ref_SearchResults=r.a.createRef(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"head",ref:this.ref_SearchForm},r.a.createElement(k,{updateResults:function(t){return e.updateResults(t)}})),r.a.createElement("main",{id:"main",ref:this.ref_SearchResults},this.state.searchResults.length>0?r.a.createElement(y,{searchResults:this.state.searchResults}):null),r.a.createElement("footer",null,this.state.searchResults.length>0?r.a.createElement(T,{goBackToTop:function(){return e.scrollToRef(e.ref_SearchForm)},showBackToTop:this.state.showBackToTop}):null,r.a.createElement("span",null,"Photo by Ria Puskas on Unsplash \u2022 Built by"," ",r.a.createElement("a",{href:"http://www.asktami.com",target:"_blank",rel:"noopener noreferrer"},"Tami Williams"))))}}]),t}(r.a.Component));a(15);l.a.render(r.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.83490e06.chunk.js.map