(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var i=a(159),n=a(0),r=a.n(n),s=a(148),o=a(143),l=a(145),d=a(151),c=a.n(d),u=function(){return r.a.createElement(o.StaticQuery,{query:"185323201",render:function(e){return r.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:i})},f=l.a.div.withConfig({displayName:"about__ResumeWrapper",componentId:"bbwwjd-0"})(["width:90%;text-align:center;margin:0px auto;textDecoration:none;box-shadow:8px 8px 8px 8px rgba(0,0,0,0.18);"]);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement("h1",{align:"center"},"ABOUT"),r.a.createElement("br",null),r.a.createElement("h3",null,"A little bit about me"),r.a.createElement("blockquote",null,r.a.createElement("p",null," I am glad you made it to my website to learn a little bit more about me. I am a software developer currently working at General Motors in Austin, Texas. I also do part time development for small businesses. ",r.a.createElement("a",{href:"https://github.com/saffan786?tab=repositories"},"Check out some of the things I have worked on."))),r.a.createElement("br",null),r.a.createElement("h3",null,"What else is there to know about me?"),r.a.createElement("blockquote",null,r.a.createElement("ol",null,r.a.createElement("li",null,"I am a huge sports fan and enjoy both watching and playing different sports."),r.a.createElement("li",null,"I believe in exercise and a healthy way of life."),r.a.createElement("li",null,"I am always wanting to learn new things, so throw a problem my way."))),r.a.createElement("br",null),r.a.createElement("h3",null,"Here is my resume if you want more information about me."),r.a.createElement("a",{href:Object(o.withPrefix)("static/resume/Business_Resume.pdf")},r.a.createElement(f,null,r.a.createElement(u,null))))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(142),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(144),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),p=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},144:function(e,t,a){var i;e.exports=(i=a(146))&&i.default||i},146:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},147:function(e){e.exports={data:{site:{siteMetadata:{title:"SAFFAN PRASLA"}}}}},148:function(e,t,a){"use strict";var i=a(147),n=a(0),r=a.n(n),s=a(4),o=a.n(s),l=a(143),d=a(145),c=d.a.div.withConfig({displayName:"header__HeaderWrapper",componentId:"w0084c-0"})(['  position:fixed;opacity:0.95;top:0;left:0;width:100%;height:70px;z-index:10;background:#5D5C61;-webkit-box-shadow:0 7px 8px rgba(0,0,0,0.12);-moz-box-shadow:0 7px 8px rgba(0,0,0,0.12);box-shadow:0 4px 4px rgba(0,0,0,0.12);h1{text-align:left;padding:15px 15px;letter-spacing:2px;font-family:"Times New Roman",Times,sans-serif;}']),u=d.a.li.withConfig({displayName:"header__StyledLink",componentId:"w0084c-1"})(['display:inline-block;marginRight:2rem;textDecoration:none;padding-right:15px;color:#FFF;float:right;&:before{content:"";position:absolute;width:90%;height:3px;bottom:-5px;left:0;background-color:#47C7FF;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;},&:hover:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1);}']),f=function(e){return r.a.createElement(u,null,r.a.createElement(l.Link,{to:e.to,style:{color:"white",textDecoration:"none"},activeStyle:{color:"#5AB9EA",textDecoration:"none"}},e.children))},p=function(e){var t=e.siteTitle;return r.a.createElement(c,null,r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(l.Link,{to:"/",style:{color:"White",textDecoration:"none"}},t),r.a.createElement("ul",{style:{listStyle:"none",float:"right"}},r.a.createElement(f,{to:"/contact/"},"Contact"),r.a.createElement(f,{to:"/about/"},"About")))))};p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var h=p,m=d.a.div.withConfig({displayName:"layout__PageContentWrapper",componentId:"sc-4dh0yk-0"})(["position:relative;margin:auto;width:90%;padding:100px 5% 90px;font-family:Arial,Helvetica,sans-serif;a{text-decoration:none;color:blue;}"]),g=function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(m,null,t))},data:i})};g.propTypes={children:o.a.node.isRequired};t.a=g},151:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),s=i(a(51)),o=i(a(149)),l=i(a(150)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+o+l+t+s+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,w=e.Tag,v="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),x={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var A=h;return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),A.base64&&d.default.createElement(b,(0,l.default)({src:A.base64},x)),A.tracedSVG&&d.default.createElement(b,(0,l.default)({src:A.tracedSVG},x)),v&&d.default.createElement(w,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,A.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),d.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),d.default.createElement(b,{alt:a,title:t,src:A.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},A))}}))}if(m){var I=m,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},r);return"inherit"===r.display&&delete R.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&d.default.createElement(b,(0,l.default)({src:I.base64},x)),I.tracedSVG&&d.default.createElement(b,(0,l.default)({src:I.tracedSVG},x)),v&&d.default.createElement(w,{title:t,style:{backgroundColor:v,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(b,{alt:a,title:t,width:I.width,height:I.height,src:I.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var E=y;t.default=E},159:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAIAAAA44esqAAAACXBIWXMAAAsSAAALEgHS3X78AAACG0lEQVQ4y6WUWXPCMAyE+f//incYoDQc4b7vq1wJV/vFmwQD6dCZ7oNHdryWtJKS+v4HUq9Hl8vldrvN5/NyuVwqlRaLBVsOk8mn0+l8PmvPvS8DyIPBoN/vz2YztpvN5nq93iLcya1Wy3Gc8Xg8mUzws1qtMOBA2G636/Ua+3g84vxs4Hked3grJW/6QAjY8DudTq/X4wkuiRB7U17L5ZI19ZsYejExVX1iDcikh7e32trZhjmzRxjShk9ueogVezqdYmglBfL3fV8XECIUrNls5nK5DwPH4DNCsVisVCoY+XyeV5QwQK2QPBqNmgbtdrvb7UotDE6q1SqHGK7rivxcZ8hcVXm4QVSsKuxr5hzyicqHZN4mMN6uGGCotzjn3eFwGLdQrNw9bBxyA9nkUMrt93vfQI1le8Yt4t09IxI+a7Vao9FQCNh0CG2TGPmDYPDRicyRihA8A6kqedV/mgJWNU9QZ4rsRkBe1pEBKVBP/BMkWcghW01O6JmEibZlQFXslWlBAsgE8tReIXlsgEiqFiIRmNSypxVgbyI8CEbAVAip1BIAzer1OkbfgHfV3g8dxqzaql4j6BLQVEonu3IBuVAoZLNZFQnB7bkXLhZ4gki5HJL5vI2w2+3eDqaqEJLJE+cMEGmrvYBEBkrKRvwzC8iZTCadTjN0GkBko07UWfynxrb/CgH5cDgQCSvFpDzxmtibb/7bf8cPIR7LIV2DcbgAAAAASUVORK5CYII=",aspectRatio:.7727272727272727,src:"/static/65e53e0be6105d4ba065369305e21c11/d0869/Resume.png",srcSet:"/static/65e53e0be6105d4ba065369305e21c11/44aee/Resume.png 256w,\n/static/65e53e0be6105d4ba065369305e21c11/cdc24/Resume.png 512w,\n/static/65e53e0be6105d4ba065369305e21c11/d0869/Resume.png 1024w,\n/static/65e53e0be6105d4ba065369305e21c11/046fa/Resume.png 1536w,\n/static/65e53e0be6105d4ba065369305e21c11/dd4e1/Resume.png 1700w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-0862e5d1e65ea883d1b2.js.map