(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return i(50680)}])},19749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,n=i(92648).Z,o=i(91598).Z,a=i(17273).Z,l=o(i(67294)),s=n(i(83121)),c=i(2675),u=i(10139),d=i(28730);i(57238);var f=n(i(89824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,i,n,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:n,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:g,placeholder:h,loading:p,srcString:v,config:w,unoptimized:b,loader:y,onLoadRef:_,onLoadingCompleteRef:E,setBlurComplete:S,setShowAltText:j,onLoad:C,onError:x}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,i,{width:o,height:n,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:p,style:r({},u,d),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,v,h,_,E,S,b))},[v,h,_,E,S,x,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,_,E,S,b)},onError:e=>{j(!0),"blur"===h&&S(!0),x&&x(e)}})))}),w=l.forwardRef((e,t)=>{let i,n;var o,{src:m,sizes:w,unoptimized:b=!1,priority:y=!1,loading:_,className:E,quality:S,width:j,height:C,fill:x,style:z,onLoad:k,onLoadingComplete:O,placeholder:R="empty",blurDataURL:P,layout:I,objectFit:N,objectPosition:A,lazyBoundary:L,lazyRoot:M}=e,B=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(d.ImageConfigContext),T=l.useMemo(()=>{let e=g||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[D]),W=B,Z=W.loader||f.default;delete W.loader;let F="__next_img_default"in Z;if(F){if("custom"===T.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=Z;Z=t=>{let{config:i}=t,r=a(t,["config"]);return e(r)}}if(I){"fill"===I&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(z=r({},z,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!w&&(w=t)}let q="",G=p(j),U=p(C);if("object"==typeof(o=m)&&(h(o)||void 0!==o.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,n=e.blurHeight,P=P||e.blurDataURL,q=e.src,!x){if(G||U){if(G&&!U){let t=G/e.width;U=Math.round(e.height*t)}else if(!G&&U){let t=U/e.height;G=Math.round(e.width*t)}}else G=e.width,U=e.height}}let V=!y&&("lazy"===_||void 0===_);((m="string"==typeof m?m:q).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,V=!1),T.unoptimized&&(b=!0),F&&m.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(b=!0);let[J,X]=l.useState(!1),[H,$]=l.useState(!1),K=p(S),Q=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:A}:{},H?{}:{color:"transparent"},z),Y="blur"===R&&P&&!J?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:U,blurWidth:i,blurHeight:n,blurDataURL:P}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:a,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:i,quality:o,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:l({config:t,src:i,quality:o,width:s[u]})}}({config:T,src:m,unoptimized:b,width:G,quality:K,sizes:w,loader:Z}),et=m,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:W.crossOrigin},er=l.useRef(k);l.useEffect(()=>{er.current=k},[k]);let en=l.useRef(O);l.useEffect(()=>{en.current=O},[O]);let eo=r({isLazy:V,imgAttributes:ee,heightInt:U,widthInt:G,qualityInt:K,className:E,imgStyle:Q,blurStyle:Y,loading:_,config:T,fill:x,unoptimized:b,placeholder:R,loader:Z,srcString:et,onLoadRef:er,onLoadingCompleteRef:en,setBlurComplete:X,setShowAltText:$},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},eo,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o}=e,a=r||t,l=n||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},89824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},50680:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}});var r=i(85893);i(67294);var n=i(54776),o=i(25675),a=i.n(o),l=i(87357);function s(){return(0,r.jsx)(n.Z,{direction:"up",in:!0,children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(a(),{src:"/404.svg",alt:"404",width:500,height:500,style:{display:"block",margin:"0 auto"}})})})}},25675:function(e,t,i){e.exports=i(19749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);