(this["webpackJsonpsd-0x-block15-project-frontend-online-store"]=this["webpackJsonpsd-0x-block15-project-frontend-online-store"]||[]).push([[0],{26:function(e,t,a){},32:function(e,t){},33:function(e,t,a){e.exports=a(54)},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),i=a.n(c),o=(a(38),a(12)),l=a(7),u=a(3),s=a(4),d=a(2),m=a(6),h=a(5),p=a(14),v=a.n(p),f=a(16);function b(){return(b=Object(f.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(v.a.mark((function e(t,a){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(40),a(41);var y=a(15),C=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).addToCart=n.addToCart.bind(Object(d.a)(n)),n.checkQuantity=n.checkQuantity.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"addToCart",value:function(){var e=this.props,t=e.product,a=e.updateCart;if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify([t])),a();if(this.checkQuantity()){var n=JSON.parse(localStorage.getItem("cart"));return localStorage.setItem("cart",JSON.stringify([].concat(Object(y.a)(n),[t]))),a()}return console.log("Sem estoque")}},{key:"checkQuantity",value:function(){var e=this.props.product,t=JSON.parse(localStorage.getItem("cart")).filter((function(t){return t.id===e.id})),a=e.available_quantity;return t.length<a}},{key:"render",value:function(){var e=this.props,t=e.datatestid,a=e.buttonText;return r.a.createElement("button",{type:"button",onClick:this.addToCart,"data-testid":t},a)}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.src,n=e.price,c=e.id,i=e.details,l=e.product,u=e.updateCart;return r.a.createElement("div",{className:"card","data-testid":"product"},r.a.createElement("img",{src:a,height:"200px",alt:"thumbnail"}),r.a.createElement("div",{className:"card-info"},r.a.createElement("p",null,t),r.a.createElement("span",null,"R$".concat(n)),l.shipping.free_shipping?r.a.createElement("span",{"data-testid":"free-shipping"},r.a.createElement("strong",null,"Frete Gr\xe1tis")):null),r.a.createElement("div",{className:"card-buttons"},r.a.createElement(o.b,{"data-testid":"product-detail-link",to:"/products/".concat(c),onClick:function(){return i(c)}},r.a.createElement("button",{type:"button"},"Detalhes")),r.a.createElement(C,{product:l,updateCart:u,datatestid:"product-add-to-cart",buttonText:"Adicionar ao Carrinho"})))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).saveProduct=n.saveProduct.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"saveProduct",value:function(e){var t=this.props.productsList.find((function(t){return e===t.id}));localStorage.setItem("productDetails",JSON.stringify(t))}},{key:"render",value:function(){var e=this,t=this.props,a=t.productsList,n=t.updateCart,c=t.cartSize;return a.length>0?r.a.createElement("div",{className:"product-list"},a.map((function(t){return r.a.createElement(k,{title:t.title,src:t.thumbnail,price:t.price,id:t.id,key:t.id,details:e.saveProduct,product:t,updateCart:n,cartSize:c})}))):r.a.createElement("div",{"data-testid":"home-initial-message",className:"product-list"},"Digite algum termo de pesquisa ou escolha uma categoria.")}}]),a}(n.Component);a(46);var S=function(e){var t=e.cartSize;return r.a.createElement(o.b,{to:"/shoppingcart"},r.a.createElement("button",{type:"button",className:"cart","data-testid":"shopping-cart-button"},r.a.createElement("p",{"data-testid":"shopping-cart-size"},t)))},j=(a(47),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(u.a)(this,a),n=t.call(this,e);var r=null===JSON.parse(localStorage.getItem("cart"))?"":JSON.parse(localStorage.getItem("cart")).length;return n.state={categories:[],query:"",categoryID:"",productsList:[],cartSize:r},n.handleRadio=n.handleRadio.bind(Object(d.a)(n)),n.handleQueryButton=n.handleQueryButton.bind(Object(d.a)(n)),n.updateCart=n.updateCart.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){return b.apply(this,arguments)})().then((function(t){return e.setState({categories:t})}))}},{key:"updateCart",value:function(){var e=JSON.parse(localStorage.getItem("cart")).length;this.setState({cartSize:e})}},{key:"categoryList",value:function(e,t){var a=this;return r.a.createElement("div",{key:e},r.a.createElement("input",{type:"radio",id:e,value:e,onClick:function(e){return a.handleRadio(e)},name:"category",key:e,"data-testid":"category"}),r.a.createElement("label",{htmlFor:e},t))}},{key:"handleRadio",value:function(e){var t=this,a=this.state.query;this.setState({categoryID:e.target.value}),E(e.target.value,a).then((function(e){return t.setState({productsList:e.results})}))}},{key:"handleQueryButton",value:function(){var e=this,t=this.state,a=t.query;E(t.categoryID,a).then((function(t){return e.setState({productsList:t.results})}))}},{key:"renderHeader",value:function(){var e=this,t=this.state,a=t.query,n=t.cartSize;return r.a.createElement("div",{className:"header"},r.a.createElement("input",{type:"text","data-testid":"query-input",value:a,onChange:function(t){return e.setState({query:t.target.value})}}),r.a.createElement("button",{type:"button","data-testid":"query-button",onClick:this.handleQueryButton},"BUSCA"),r.a.createElement(S,{cartSize:n}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.categories,n=t.productsList,c=t.cartSize;return r.a.createElement("div",{className:"container"},this.renderHeader(),r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"categories-container"},a.map((function(t){var a=t.id,n=t.name;return e.categoryList(a,n)}))),r.a.createElement(O,{productsList:n,updateCart:this.updateCart,cartSize:c})))}}]),a}(n.Component)),N=a(29),q=a(30),x=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(o.b,{to:"/"},r.a.createElement(N.a,{icon:q.a,color:"black"}))}}]),a}(r.a.Component),I=(a(26),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.updateCart;return r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"main-details"},r.a.createElement("h2",{"data-testid":"product-detail-name"},t.title),r.a.createElement("img",{src:t.thumbnail,alt:"thumbnail"}),r.a.createElement("h3",null,"R$".concat(t.price))),r.a.createElement("div",{className:"attributes"},t.attributes.map((function(e){return r.a.createElement("p",{key:e.id},"".concat(e.name,": ").concat(e.value_name))}))),r.a.createElement("div",{className:"detail-buttons"},r.a.createElement(x,null),r.a.createElement(C,{product:t,updateCart:a,datatestid:"product-detail-add-to-cart",buttonText:"Adicionar ao Carrinho"})))}}]),a}(n.Component)),P=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(u.a)(this,a),n=t.call(this,e);var r=null===JSON.parse(localStorage.getItem("cart"))?"":JSON.parse(localStorage.getItem("cart")).length;return n.state={product:{},review:"",cartSize:r},n.updateState=n.updateState.bind(Object(d.a)(n)),n.updateCart=n.updateCart.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.updateState()}},{key:"updateState",value:function(){this.setState({product:JSON.parse(localStorage.getItem("productDetails"))})}},{key:"updateCart",value:function(){this.setState({cartSize:JSON.parse(localStorage.getItem("cart")).length})}},{key:"render",value:function(){var e=this,t=this.state,a=t.product,n=t.review,c=t.cartSize;return Object.keys(a).length>0?r.a.createElement("div",{className:"details-container"},r.a.createElement(S,{cartSize:c}),r.a.createElement(I,{product:a,updateCart:this.updateCart}),r.a.createElement("div",{className:"review"},r.a.createElement("label",{htmlFor:"user-review"}," Escreva sua avalia\xe7\xe3o do produto:"),r.a.createElement("br",null),r.a.createElement("textarea",{"data-testid":"product-detail-evaluation",id:"user-review",value:n,onChange:function(t){return e.setState({review:t.target.value})}}),r.a.createElement("button",{type:"button",onClick:function(){return e.setState({review:""})}},"Enviar"))):r.a.createElement("div",null,"Teste")}}]),a}(n.Component),R=a(56),_=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).removeFromCart=n.removeFromCart.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"removeFromCart",value:function(){var e=this.props,t=e.product,a=e.products,n=e.updateCart,r=a.reverse(),c=r.findIndex((function(e){return e.id===t.id}));r.splice(c,1);var i=r.reverse();return localStorage.setItem("cart",JSON.stringify(i)),n()}},{key:"render",value:function(){var e=this.props,t=e.datatestid,a=e.buttonText;return r.a.createElement("button",{type:"button",onClick:this.removeFromCart,"data-testid":t},a)}}]),a}(n.Component),w=(a(51),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(u.a)(this,a),n=t.call(this,e);var r=null===JSON.parse(localStorage.getItem("cart"))?"":JSON.parse(localStorage.getItem("cart"));return n.state={products:r,cartSize:r.length},n.updateCart=n.updateCart.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"updateCart",value:function(){var e=JSON.parse(localStorage.getItem("cart"));this.setState({products:e,cartSize:e.length})}},{key:"quantityButtons",value:function(e,t){var a=this.state.products,n=a.filter((function(e){return e.id===t})).length;return r.a.createElement("div",{className:"flex_qtd_container"},r.a.createElement(_,{product:e,products:a,datatestid:"product-decrease-quantity",updateCart:this.updateCart,buttonText:"-"}),r.a.createElement("p",{className:"input_qtd","data-testid":"shopping-cart-product-quantity"},n),r.a.createElement(C,{product:e,datatestid:"product-increase-quantity",updateCart:this.updateCart,buttonText:"+"}))}},{key:"removeAllItems",value:function(e){var t=this.state.products.filter((function(t){return t.id!==e}));return localStorage.setItem("cart",JSON.stringify(t)),this.updateCart()}},{key:"createProductInfos",value:function(e,t,a,n,c){var i=this;return r.a.createElement("div",{key:n,className:"flex_cart_container"},r.a.createElement("div",{className:"align"},r.a.createElement(R.a,{type:"button",onClick:function(){return i.removeAllItems(n)}},"X")),r.a.createElement("div",{className:"align, image_content"},r.a.createElement("img",{src:t,alt:"imagem de um ".concat(e)})),r.a.createElement("div",{className:"title_content align","data-testid":"shopping-cart-product-name"},e),r.a.createElement("div",{className:"align quantity_button"},this.quantityButtons(c,n)),r.a.createElement("div",{className:"align"},"R$".concat(a)))}},{key:"checkoutButton",value:function(){return this.value="Finalizar compra",r.a.createElement(o.b,{to:"/checkout"},r.a.createElement(R.a,{className:"checkout_button",type:"button","data-testid":"checkout-products"},"Finalizar Compra"))}},{key:"totalPrice",value:function(){var e=this.state.products.reduce((function(e,t){return e+t.price}),0);return e=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e),localStorage.setItem("totalPrice",e),r.a.createElement("div",null,r.a.createElement("h2",null,"Valor total da compra: \n          ".concat(e)))}},{key:"filteredProducts",value:function(){var e=this,t=this.state,a=t.products,n=t.cartSize,c=a.reduce((function(e,t){return e.find((function(e){return e.id===t.id}))?e:[].concat(Object(y.a)(e),[t])}),[]);return r.a.createElement("div",{className:"div_content"},r.a.createElement(x,null),r.a.createElement(S,{cartSize:n}),r.a.createElement("div",{className:"div_container"},r.a.createElement("h2",null,"Carrinho de compras: "),c.map((function(t){return e.createProductInfos(t.title,t.thumbnail,t.price,t.id,t)}))),r.a.createElement("div",{className:"div_container"},this.totalPrice()),this.checkoutButton())}},{key:"render",value:function(){var e=this.state.products;return e&&0!==e.length?this.filteredProducts():r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("div",{className:"empty_content","data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"))}}]),a}(r.a.Component)),B=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(u.a)(this,a),n=t.call(this,e);var r=null===JSON.parse(localStorage.getItem("cart"))?"":JSON.parse(localStorage.getItem("cart"));return n.state={products:r},n}return Object(s.a)(a,[{key:"quantityButtons",value:function(e,t){var a=this.state.products.filter((function(e){return e.id===t})).length;return r.a.createElement("p",{className:"input_qtd","data-testid":"shopping-cart-product-quantity"},a)}},{key:"createProductInfos",value:function(e,t,a,n,c){return r.a.createElement("div",{key:n,className:"flex_cart_container"},r.a.createElement("div",{className:"align, image_content"},r.a.createElement("img",{src:t,alt:"imagem de ".concat(e)})),r.a.createElement("div",{className:"title_content align","data-testid":"shopping-cart-product-name"},e),r.a.createElement("div",{className:"align quantity_button"},this.quantityButtons(c,n)),r.a.createElement("div",{className:"align"},"R$".concat(a)))}},{key:"totalPrice",value:function(){var e=this.state.products.reduce((function(e,t){return e+t.price}),0);return e=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e),localStorage.setItem("totalPrice",e),r.a.createElement("div",null,r.a.createElement("h2",null,"Valor total da compra: \n          ".concat(e)))}},{key:"filteredProducts",value:function(){var e=this,t=this.state.products.reduce((function(e,t){return e.find((function(e){return e.id===t.id}))?e:[].concat(Object(y.a)(e),[t])}),[]);return r.a.createElement("div",{className:"div_content"},r.a.createElement("div",{className:"div_container"},r.a.createElement("p",null,"Revise seus produtos"),t.map((function(t){return e.createProductInfos(t.title,t.thumbnail,t.price,t.id,t)}))),r.a.createElement("div",{className:"div_container"},this.totalPrice()))}},{key:"render",value:function(){var e=this.state.products;return e&&0!==e.length?this.filteredProducts():r.a.createElement("div",null,r.a.createElement("div",{className:"empty_content","data-testid":"checkout-products"},"Seu carrinho est\xe1 vazio"))}}]),a}(r.a.Component),z=a(18),J=a(23),F=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={fullName:"",CPF:"",email:"",phone:"",CEP:"",Address:"",Complemento:"",Number:"",Cidade:"",Estado:"Estado",checked:!1},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.PayMethod=n.PayMethod.bind(Object(d.a)(n)),n.handleRadio=n.handleRadio.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleDropdown=n.handleDropdown.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState(Object(J.a)(Object(J.a)({},this.state),{},Object(z.a)({},e.target.name,t)))}},{key:"handleRadio",value:function(e){this.setState({checked:e.target.value})}},{key:"handleSubmit",value:function(e){console.log(this),e.preventDefault()}},{key:"handleDropdown",value:function(e){var t=e.target.value;this.setState({Estado:t})}},{key:"handleClick",value:function(e){"Estado"!==this.state.Estado&&!1!==this.state.checked||e.preventDefault()}},{key:"textblock1",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.state.fullName,onChange:this.handleChange,name:"fullName",placeholder:"Nome Completo",required:"required","data-testid":"checkout-fullname"}),r.a.createElement("input",{type:"text",value:this.state.CPF,onChange:this.handleChange,name:"CPF",placeholder:"CPF",required:"required","data-testid":"checkout-cpf"}),r.a.createElement("input",{type:"email",value:this.state.email,required:"required",onChange:this.handleChange,name:"email",placeholder:"email","data-testid":"checkout-email"}),r.a.createElement("input",{type:"text",value:this.state.phone,required:"required",onChange:this.handleChange,name:"phone",placeholder:"Telefone","data-testid":"checkout-phone"}))}},{key:"textblock2",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.state.CEP,required:"required",onChange:this.handleChange,name:"CEP",placeholder:"CEP","data-testid":"checkout-cep"}),r.a.createElement("input",{type:"text",value:this.state.Address,required:"required",onChange:this.handleChange,name:"Address",placeholder:"Endere\xe7o","data-testid":"checkout-address"}))}},{key:"textblock3",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.state.Complemento,required:"required",onChange:this.handleChange,name:"Complemento",placeholder:"Complemento"}),r.a.createElement("input",{type:"text",value:this.state.Number,required:"required",onChange:this.handleChange,name:"Number",placeholder:"Numero"}),r.a.createElement("input",{type:"text",value:this.state.Cidade,required:"required",onChange:this.handleChange,name:"Cidade",placeholder:"Cidade"}),r.a.createElement("select",{required:"required",onChange:this.handleDropdown},["Estado","AC","AP","AL","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"].map((function(e){return r.a.createElement("option",{value:e},e)}))))}},{key:"PayMethod",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"M\xe9todo de Pagamento"),r.a.createElement("label",{htmlFor:"Boleto"}," Boleto",r.a.createElement("input",{type:"radio",value:"Boleto",checked:"Boleto"===this.state.checked,onChange:this.handleRadio})),r.a.createElement("label",{htmlFor:"Visa"}," Cart\xe3o de Cr\xe9dito",r.a.createElement("input",{type:"radio",value:"Visa",checked:"Visa"===this.state.checked,onChange:this.handleRadio}),"Visa",r.a.createElement("input",{type:"radio",value:"Mastercard",checked:"Mastercard"===this.state.checked,onChange:this.handleRadio}),"Mastercard",r.a.createElement("input",{type:"radio",value:"Elo",checked:"Elo"===this.state.checked,onChange:this.handleRadio}),"Elo"))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,"Informa\xe7\xf5es do comprador"),this.textblock1(),this.textblock2(),this.textblock3(),this.PayMethod(),r.a.createElement("input",{type:"submit",value:"Comprar",onClick:this.handleClick}))}}]),a}(r.a.Component),M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(B,null),r.a.createElement(F,null))}}]),a}(r.a.Component),D=a(32),A=a.n(D);a(52),a(53);var L=function(){return r.a.createElement("main",null,r.a.createElement(o.a,{basename:"/online-store"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:j}),r.a.createElement(l.a,{path:"/products/:id",component:P}),r.a.createElement(l.a,{path:"/shoppingcart",component:w}),r.a.createElement(l.a,{path:"/checkout",component:M}),r.a.createElement(l.a,{path:"*",component:A.a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.024228cf.chunk.js.map