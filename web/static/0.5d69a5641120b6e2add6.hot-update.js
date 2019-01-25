/*! Created by Thinkpad */
webpackHotUpdateMyLibrary(0,{"./src/containers/System/EditGoods/UpdateGoods.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("./node_modules/_antd@2.13.9@antd/lib/button/index.js"),d=l(n),u=a("./node_modules/_antd@2.13.9@antd/lib/modal/index.js"),i=l(u),s=a("./node_modules/_antd@2.13.9@antd/lib/upload/index.js"),r=l(s),o=a("./node_modules/_antd@2.13.9@antd/lib/row/index.js"),c=l(o),f=a("./node_modules/_antd@2.13.9@antd/lib/col/index.js"),m=l(f),p=a("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js"),h=l(p),_=a("./node_modules/_antd@2.13.9@antd/lib/icon/index.js"),y=l(_),b=a("./node_modules/_antd@2.13.9@antd/lib/message/index.js"),E=l(b),g=a("./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js"),v=l(g),k=a("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js"),j=l(k),x=a("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js"),T=l(x),C=a("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js"),w=l(C),V=a("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js"),I=l(V),S=a("./node_modules/_antd@2.13.9@antd/lib/select/index.js"),L=l(S),P=a("./node_modules/_antd@2.13.9@antd/lib/form/index.js"),N=l(P),G=a("./node_modules/_antd@2.13.9@antd/lib/input/index.js"),H=l(G);a("./node_modules/_antd@2.13.9@antd/lib/button/style/index.js"),a("./node_modules/_antd@2.13.9@antd/lib/modal/style/index.js"),a("./node_modules/_antd@2.13.9@antd/lib/upload/style/index.js"),a("./node_modules/_antd@2.13.9@antd/lib/row/style/index.js"),a("./node_modules/_antd@2.13.9@antd/lib/col/style/index.js"),a("./node_modules/_antd@2.13.9@antd/lib/icon/style/index.js"),a("./node_modules/_antd@2.13.9@antd/lib/message/style/index.js"),a("./node_modules/_antd@2.13.9@antd/lib/select/style/index.js"),a("./node_modules/_antd@2.13.9@antd/lib/form/style/index.js"),a("./node_modules/_antd@2.13.9@antd/lib/input/style/index.js");var U=a("./node_modules/_react@15.6.2@react/react.js"),q=l(U),B=a("./src/api/request.js"),K=l(B),M=(H.default.TextArea,N.default.Item),O=L.default.Option,R=[],D=5e5,F=function(e){function t(e){(0,j.default)(this,t);var a=(0,w.default)(this,(t.__proto__||(0,v.default)(t)).call(this,e));return a.ChangeClassify=function(e){var t=[];K.default.post("goodsType/findTypeBySecondType",{firstId:e}).then(function(e){for(var l=e.data,n=0;n<l.length;n++)t.push(q.default.createElement(O,{key:l[n].id},l[n].typeName_yue));a.setState({children2:t}),console.log("res",e.data)})},a.handleSearch=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){console.log("values",t),K.default.post("goods/addOrUpdateGoods",{id:a.props.data.id,name_ch:t.name_ch,name_yue:t.name_yue,price_ch:t.price_ch,price_yue:t.price_yue,market_price_ch:t.market_price_ch,market_price_yue:t.market_price_yue,firstTypeId:t.firstTypeId,secondTypeId:t.secondTypeId,stock:t.stock,introduction:t.introduction,introduction_yue:t.introduction_yue,is_new:t.is_new,is_recommend:t.is_recommend,imgs:a.state.imgs,is_open:t.is_open}).then(function(e){"1"==e.status?E.default.success("Thêm thành công.！"):E.default.error("Thêm thất bại.！")})})},a.handleCancel=function(){return a.setState({previewVisible:!1})},a.handlePreview=function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},a.handleChange=function(e){var t=e.fileList;a.setState({fileList:t})},a.customRequest=function(e){e.file.size<=D?K.default.put("uploadFile",{file:e.file,dir:"imgs"}).then(function(e){"1"==e.status?a.setState({fileList:[{uid:-1,name:"xxx.png",status:"done",url:e.data.url}],imgs:[e.data.relativePath]}):E.default.error("Yêu cầu dữ liệu đã thất bại!")}):E.default.error("Kích cỡ của ảnh không hơn, 500K")},a.state={data:[],visible:!1,previewVisible:!1,previewImage:"",fileList:[],imgs:[],children2:[]},a}return(0,I.default)(t,e),(0,T.default)(t,[{key:"update",value:function(){var e=this;K.default.post("goods/findGoodsById",{id:this.props.data.id}).then(function(t){console.log(t.data),e.setState({data:t.data});var a=[];K.default.post("goodsType/findTypeBySecondType",{firstId:t.data.firstTypeId}).then(function(t){console.log(t);for(var l=t.data,n=0;n<l.length;n++)a.push(q.default.createElement(O,{key:l[n].id},l[n].typeName_yue));e.setState({children2:a})})}),this.props.data.imgs.split("static")[1],this.setState({fileList:[{uid:-1,name:"xxx.png",status:"done",url:this.props.data.imgs}],imgs:[this.props.data.imgs]}),K.default.post("goodsType/findSomeOneType",{pageNo:1,pageSize:20,level:1}).then(function(e){for(var t=e.data.list,a=0;a<t.length;a++)R.push(q.default.createElement(O,{key:t[a].id},t[a].typeName_yue))})}},{key:"componentDidMount",value:function(){this.update()}},{key:"render",value:function(){var e=this.state.data,t=this.props.onCancel,a=this.props.form.getFieldDecorator,l={labelCol:{span:7},wrapperCol:{span:17}},n=this.state,u=n.previewVisible,s=n.previewImage,o=n.fileList,f=q.default.createElement("div",null,q.default.createElement(y.default,{type:"plus"}),q.default.createElement("div",{className:"ant-upload-text"},"Upload"));return q.default.createElement(N.default,{className:"ant-advanced-search-form",onSubmit:this.handleSearch},q.default.createElement(c.default,null,q.default.createElement(m.default,{span:12,key:1},q.default.createElement(M,(0,h.default)({},l,{label:"Tên hàng hóa (các)"}),a("name_ch",{initialValue:e.name})(q.default.createElement(H.default,null)))),q.default.createElement(m.default,{span:12,key:2},q.default.createElement(M,(0,h.default)({},l,{label:"Tên hàng hóa (càng)"}),a("name_yue",{initialValue:e.name_yue})(q.default.createElement(H.default,null))))),q.default.createElement(c.default,null,q.default.createElement(m.default,{span:12,key:3},q.default.createElement(M,(0,h.default)({},l,{label:"Price (giữa)"}),a("price_ch",{initialValue:e.price})(q.default.createElement(H.default,null)))),q.default.createElement(m.default,{span:12,key:4},q.default.createElement(M,(0,h.default)({},l,{label:"Price (càng)"}),a("price_yue",{initialValue:e.price_yue})(q.default.createElement(H.default,null))))),q.default.createElement(c.default,null,q.default.createElement(m.default,{span:12,key:5},q.default.createElement(M,(0,h.default)({},l,{label:"Giá thị trường (giữa)"}),a("market_price_ch",{initialValue:e.marketPrice})(q.default.createElement(H.default,null)))),q.default.createElement(m.default,{span:12,key:6},q.default.createElement(M,(0,h.default)({},l,{label:"Giá thị trường (càng)"}),a("market_price_yue",{initialValue:e.marketPrice_yue})(q.default.createElement(H.default,null))))),q.default.createElement(c.default,null,q.default.createElement(m.default,{span:12,key:7},q.default.createElement(M,(0,h.default)({},l,{label:"Loại hàng hóa"}),a("firstTypeId",{initialValue:e.firstTypeId})(q.default.createElement(L.default,{style:{width:"100%"},onChange:this.ChangeClassify},R)))),q.default.createElement(m.default,{span:12,key:8},q.default.createElement(M,(0,h.default)({},l,{label:"Nhãn hiệu hàng hóa"}),a("secondTypeId",{initialValue:e.secondTypeId})(q.default.createElement(L.default,{style:{width:"100%"}},this.state.children2))))),q.default.createElement(c.default,null,q.default.createElement(m.default,{span:12,key:9},q.default.createElement(M,(0,h.default)({},l,{label:"Hàng hóa được mô tả (giữa)"}),a("introduction",{initialValue:e.introduction})(q.default.createElement(H.default,null)))),q.default.createElement(m.default,{span:12,key:10},q.default.createElement(M,(0,h.default)({},l,{label:"Hàng hóa được mô tả (càng)"}),a("introduction_yue",{initialValue:e.introduction_yue})(q.default.createElement(H.default,null))))),q.default.createElement(c.default,null,q.default.createElement(m.default,{span:12,key:11},q.default.createElement(M,(0,h.default)({},l,{label:"Có"}),a("is_new",{initialValue:e.is_new+""})(q.default.createElement(L.default,null,q.default.createElement(O,{value:"1"},"Là"),q.default.createElement(O,{value:"0"},"Không phải"))))),q.default.createElement(m.default,{span:12,key:12},q.default.createElement(M,(0,h.default)({},l,{label:"Có thêm"}),a("is_open",{initialValue:e.is_open+""})(q.default.createElement(L.default,null,q.default.createElement(O,{value:"1"},"Giới thiệu"),q.default.createElement(O,{value:"0"},"Không giới thiệu")))))),q.default.createElement(c.default,null,q.default.createElement(m.default,{span:12,key:13},q.default.createElement(M,(0,h.default)({},l,{label:"Hàng tồn kho"}),a("stock",{initialValue:e.stock})(q.default.createElement(H.default,null))))),q.default.createElement(c.default,null,q.default.createElement(m.default,{span:12,key:14},q.default.createElement(M,(0,h.default)({},l,{label:"Hình ảnh"}),a("imgs")(q.default.createElement("div",null,q.default.createElement(r.default,{listType:"picture-card",fileList:o,onPreview:this.handlePreview,onChange:this.handleChange,customRequest:this.customRequest},o.length>=2?null:f),q.default.createElement(i.default,{visible:u,footer:null,onCancel:this.handleCancel},q.default.createElement("img",{alt:"example",style:{width:"100%"},src:s}))))))),q.default.createElement(c.default,null,q.default.createElement(m.default,{span:24,key:15,className:"orderButton"},q.default.createElement(d.default,{onClick:t,style:{marginLeft:10}},"Đóng cửa"),q.default.createElement(d.default,{type:"primary",htmlType:"submit"},"Lưu"))))}}]),t}(q.default.Component),z=N.default.create()(F);t.default=z}});