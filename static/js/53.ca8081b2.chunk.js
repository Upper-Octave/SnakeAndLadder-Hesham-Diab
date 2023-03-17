"use strict";(self.webpackChunksnakeandladder=self.webpackChunksnakeandladder||[]).push([[53],{40053:function(t,e,r){r.r(e),r.d(e,{Multiwrap:function(){return v}});var n=r(74165),a=r(37762),s=r(15861),c=r(15671),o=r(43144),i=r(97326),u=r(60136),p=r(29388),d=r(8084),k=r(38370),h=r(19601),v=(r(54528),r(25025),r(70332),r(8455),r(26219),r(68834),r(65660),r(61303),r(71497),r(49242),r(94317),r(13670),r(79120),r(97604),r(8187),r(19362),r(59190),r(54730),r(36250),r(85725),r(38730),r(48507),r(38398),r(2090),r(86841),r(49561),r(80580),r(40246),r(54253),r(91559),r(40553),r(26),r(69392),r(29526),r(24601),r(46878),r(77033),r(87033),r(5158),r(27761),r(20583),r(92355),r(84194),r(51121),r(58613),r(32484),r(78435),r(84255),r(98528),r(62555),r(18281),r(82037),r(77437),r(59189),r(20737),r(78262),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(52378),r(55173),r(31583),function(t){(0,u.Z)(r,t);var e=(0,p.Z)(r);function r(t,n,a){var s;(0,c.Z)(this,r);var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new k.cz(t,n,u,o);return s=e.call(this,h,a,p),(0,d._)((0,i.Z)(s),"abi",void 0),(0,d._)((0,i.Z)(s),"encoder",void 0),(0,d._)((0,i.Z)(s),"estimator",void 0),(0,d._)((0,i.Z)(s),"metadata",void 0),(0,d._)((0,i.Z)(s),"events",void 0),(0,d._)((0,i.Z)(s),"roles",void 0),(0,d._)((0,i.Z)(s),"royalties",void 0),(0,d._)((0,i.Z)(s),"owner",void 0),s.abi=u,s.metadata=new k.ab(s.contractWrapper,k.cS,s.storage),s.roles=new k.ac(s.contractWrapper,r.contractRoles),s.encoder=new k.aa(s.contractWrapper),s.estimator=new k.aL(s.contractWrapper),s.events=new k.aM(s.contractWrapper),s.royalties=new k.ad(s.contractWrapper,s.metadata),s.owner=new k.aQ(s.contractWrapper),s}return(0,o.Z)(r,[{key:"getWrappedContents",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e){var r,s,c,o,i,u,p,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.getWrappedContents(e);case 2:r=t.sent,s=[],c=[],o=[],i=(0,a.Z)(r),t.prev=7,i.s();case 9:if((u=i.n()).done){t.next=25;break}p=u.value,t.t0=p.tokenType,t.next=0===t.t0?14:1===t.t0?19:2===t.t0?21:23;break;case 14:return t.next=16,(0,k.a_)(this.contractWrapper.getProvider(),p.assetContract);case 16:return d=t.sent,s.push({contractAddress:p.assetContract,quantity:h.formatUnits(p.totalAmount,d.decimals)}),t.abrupt("break",23);case 19:return c.push({contractAddress:p.assetContract,tokenId:p.tokenId}),t.abrupt("break",23);case 21:return o.push({contractAddress:p.assetContract,tokenId:p.tokenId,quantity:p.totalAmount.toString()}),t.abrupt("break",23);case 23:t.next=9;break;case 25:t.next=30;break;case 27:t.prev=27,t.t1=t.catch(7),i.e(t.t1);case 30:return t.prev=30,i.f(),t.finish(30);case 33:return t.abrupt("return",{erc20Tokens:s,erc721Tokens:c,erc1155Tokens:o});case 34:case"end":return t.stop()}}),t,this,[[7,27,30,33]])})));return function(e){return t.apply(this,arguments)}}()},{key:"wrap",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e,r,a){var s,c,o,i,u,p,d=this;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,k.cT)(r,this.storage);case 2:if(s=t.sent,!a){t.next=7;break}t.t0=a,t.next=10;break;case 7:return t.next=9,this.contractWrapper.getSignerAddress();case 9:t.t0=t.sent;case 10:return c=t.t0,t.next=13,this.toTokenStructList(e);case 13:return o=t.sent,t.next=16,this.contractWrapper.sendTransaction("wrap",[o,s,c]);case 16:if(i=t.sent,0!==(u=this.contractWrapper.parseLogs("TokensWrapped",null===i||void 0===i?void 0:i.logs)).length){t.next=20;break}throw new Error("TokensWrapped event not found");case 20:return p=u[0].args.tokenIdOfWrappedToken,t.abrupt("return",{id:p,receipt:i,data:function(){return d.get(p)}});case 22:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"unwrap",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e,r){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}t.t0=r,t.next=7;break;case 4:return t.next=6,this.contractWrapper.getSignerAddress();case 6:t.t0=t.sent;case 7:return a=t.t0,t.next=10,this.contractWrapper.sendTransaction("unwrap",[e,a]);case 10:return t.t1=t.sent,t.abrupt("return",{receipt:t.t1});case 12:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"toTokenStructList",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e){var r,s,c,o,i,u,p,d,h,v,f,l,w;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],s=this.contractWrapper.getProvider(),t.next=4,this.contractWrapper.getSignerAddress();case 4:if(c=t.sent,!e.erc20Tokens){t.next=30;break}o=(0,a.Z)(e.erc20Tokens),t.prev=7,o.s();case 9:if((i=o.n()).done){t.next=22;break}return u=i.value,t.next=13,(0,k.a$)(s,u.quantity,u.contractAddress);case 13:return p=t.sent,t.next=16,(0,k.cU)(this.contractWrapper,u.contractAddress,p);case 16:if(t.sent){t.next=19;break}throw new Error('ERC20 token with contract address "'.concat(u.contractAddress,'" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("').concat(u.contractAddress,'").setAllowance("').concat(this.getAddress(),'", ').concat(u.quantity,");\n\n"));case 19:r.push({assetContract:u.contractAddress,totalAmount:p,tokenId:0,tokenType:0});case 20:t.next=9;break;case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(7),o.e(t.t0);case 27:return t.prev=27,o.f(),t.finish(27);case 30:if(!e.erc721Tokens){t.next=52;break}d=(0,a.Z)(e.erc721Tokens),t.prev=32,d.s();case 34:if((h=d.n()).done){t.next=44;break}return v=h.value,t.next=38,(0,k.cP)(this.contractWrapper.getProvider(),this.getAddress(),v.contractAddress,v.tokenId,c);case 38:if(t.sent){t.next=41;break}throw new Error('ERC721 token "'.concat(v.tokenId,'" with contract address "').concat(v.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("').concat(v.contractAddress,'").setApprovalForToken("').concat(this.getAddress(),'", ').concat(v.tokenId,");\n\n"));case 41:r.push({assetContract:v.contractAddress,totalAmount:0,tokenId:v.tokenId,tokenType:1});case 42:t.next=34;break;case 44:t.next=49;break;case 46:t.prev=46,t.t1=t.catch(32),d.e(t.t1);case 49:return t.prev=49,d.f(),t.finish(49);case 52:if(!e.erc1155Tokens){t.next=74;break}f=(0,a.Z)(e.erc1155Tokens),t.prev=54,f.s();case 56:if((l=f.n()).done){t.next=66;break}return w=l.value,t.next=60,(0,k.cP)(this.contractWrapper.getProvider(),this.getAddress(),w.contractAddress,w.tokenId,c);case 60:if(t.sent){t.next=63;break}throw new Error('ERC1155 token "'.concat(w.tokenId,'" with contract address "').concat(w.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("').concat(w.contractAddress,'").setApprovalForAll("').concat(this.getAddress(),'", true);\n\n'));case 63:r.push({assetContract:w.contractAddress,totalAmount:w.quantity,tokenId:w.tokenId,tokenType:2});case 64:t.next=56;break;case 66:t.next=71;break;case 68:t.prev=68,t.t2=t.catch(54),f.e(t.t2);case 71:return t.prev=71,f.f(),t.finish(71);case 74:return t.abrupt("return",r);case 75:case"end":return t.stop()}}),t,this,[[7,24,27,30],[32,46,49,52],[54,68,71,74]])})));return function(e){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e){var r,a,s,c,o=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=o.length,s=new Array(a>1?a-1:0),c=1;c<a;c++)s[c-1]=o[c];return t.abrupt("return",(r=this.contractWrapper).call.apply(r,[e].concat(s)));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),r}(k.az));(0,d._)(v,"contractRoles",["admin","transfer","minter","unwrap","asset"])}}]);
//# sourceMappingURL=53.ca8081b2.chunk.js.map