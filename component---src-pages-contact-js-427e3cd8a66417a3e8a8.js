(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",{align:"center"},"CONTACT"),r.a.createElement("br",null),r.a.createElement("h3",null," Want to reach out?"),r.a.createElement("blockquote",null,r.a.createElement("p",null," Email me at ",r.a.createElement("a",{href:"mailto:saffan786@yahoo.com"},"saffan786@yahoo.com")),r.a.createElement("p",null," Connect with me on ",r.a.createElement("a",{href:"https://www.linkedin.com/in/saffan-prasla-3a64b259/"},"LinkedIn "))),r.a.createElement("br",null))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(142),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(144),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},146:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(52),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},147:function(e){e.exports={data:{site:{siteMetadata:{title:"SAFFAN PRASLA"}}}}},148:function(e,t,n){"use strict";var a=n(147),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(143),s=n(145),u=s.a.div.withConfig({displayName:"header__HeaderWrapper",componentId:"w0084c-0"})(['  position:fixed;opacity:0.95;top:0;left:0;width:100%;height:70px;z-index:10;background:#5D5C61;-webkit-box-shadow:0 7px 8px rgba(0,0,0,0.12);-moz-box-shadow:0 7px 8px rgba(0,0,0,0.12);box-shadow:0 4px 4px rgba(0,0,0,0.12);h1{text-align:left;padding:15px 15px;letter-spacing:2px;font-family:"Times New Roman",Times,sans-serif;}']),d=s.a.li.withConfig({displayName:"header__StyledLink",componentId:"w0084c-1"})(['display:inline-block;marginRight:2rem;textDecoration:none;padding-right:15px;color:#FFF;float:right;&:before{content:"";position:absolute;width:90%;height:3px;bottom:-5px;left:0;background-color:#47C7FF;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;},&:hover:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1);}']),p=function(e){return i.a.createElement(d,null,i.a.createElement(c.Link,{to:e.to,style:{color:"white",textDecoration:"none"},activeStyle:{color:"#5AB9EA",textDecoration:"none"}},e.children))},f=function(e){var t=e.siteTitle;return i.a.createElement(u,null,i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(c.Link,{to:"/",style:{color:"White",textDecoration:"none"}},t),i.a.createElement("ul",{style:{listStyle:"none",float:"right"}},i.a.createElement(p,{to:"/contact/"},"Contact"),i.a.createElement(p,{to:"/about/"},"About")))))};f.propTypes={siteTitle:l.a.string},f.defaultProps={siteTitle:""};var m=f,h=s.a.div.withConfig({displayName:"layout__PageContentWrapper",componentId:"sc-4dh0yk-0"})(["position:relative;margin:auto;width:90%;padding:100px 5% 90px;font-family:Arial,Helvetica,sans-serif;a{text-decoration:none;color:blue;}"]),g=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(h,null,t))},data:a})};g.propTypes={children:l.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-contact-js-427e3cd8a66417a3e8a8.js.map