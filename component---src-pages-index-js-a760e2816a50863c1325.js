(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(145),o=a(162),c=a(160),l=a.n(c),d=r.a.video.attrs({preload:"auto",autoPlay:!0,loop:!0,muted:!0}).withConfig({displayName:"BackgroundVideo",componentId:"sc-1ly8yl6-0"})(["opacity:0.4;position:fixed;bottom:5;min-width:100%;min-height:100%;width:auto;height:auto;z-index:-100;left:50%;transform:translateX(-50%);"]),u=function(){return i.a.createElement(o.a,{items:!0,from:{opacity:0},enter:{opacity:1},leave:{opacity:0}},function(e){return e&&function(e){return i.a.createElement("div",{style:e,key:"billboard"},i.a.createElement(d,null,i.a.createElement("source",{src:l.a,type:"video/mp4"})))}})},s=a(161),p=a(143),f=a(151),m=a.n(f),h=function(){return i.a.createElement(p.StaticQuery,{query:"1839421762",render:function(e){return i.a.createElement(m.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})},b=a(148),g=r.a.div.withConfig({displayName:"pages__MainTextWrapper",componentId:"ifild7-0"})(["width:100%;display:flex;flex-direction:column;justify-content:center;text-align:center;"]),y=r.a.div.withConfig({displayName:"pages__ProfilePictureWrapper",componentId:"ifild7-1"})(["width:35%;margin:auto;"]);t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null),i.a.createElement(b.a,null,i.a.createElement(g,null,i.a.createElement(y,null,i.a.createElement(h,null)),i.a.createElement("h1",null,"Welcome to my site"))))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(142),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var d=a(144),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var s=a(32);a.d(t,"parsePath",function(){return s.a});var p=i.a.createContext({}),f=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},146:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},147:function(e){e.exports={data:{site:{siteMetadata:{title:"SAFFAN PRASLA"}}}}},148:function(e,t,a){"use strict";var n=a(147),i=a(0),r=a.n(i),o=a(4),c=a.n(o),l=a(143),d=a(145),u=d.a.div.withConfig({displayName:"header__HeaderWrapper",componentId:"w0084c-0"})(['  position:fixed;opacity:0.95;top:0;left:0;width:100%;height:70px;z-index:10;background:#5D5C61;-webkit-box-shadow:0 7px 8px rgba(0,0,0,0.12);-moz-box-shadow:0 7px 8px rgba(0,0,0,0.12);box-shadow:0 4px 4px rgba(0,0,0,0.12);h1{text-align:left;padding:15px 15px;letter-spacing:2px;font-family:"Times New Roman",Times,sans-serif;}']),s=d.a.li.withConfig({displayName:"header__StyledLink",componentId:"w0084c-1"})(['display:inline-block;marginRight:2rem;textDecoration:none;padding-right:15px;color:#FFF;float:right;&:before{content:"";position:absolute;width:90%;height:3px;bottom:-5px;left:0;background-color:#47C7FF;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;},&:hover:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1);}']),p=function(e){return r.a.createElement(s,null,r.a.createElement(l.Link,{to:e.to,style:{color:"white",textDecoration:"none"},activeStyle:{color:"#5AB9EA",textDecoration:"none"}},e.children))},f=function(e){var t=e.siteTitle;return r.a.createElement(u,null,r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(l.Link,{to:"/",style:{color:"White",textDecoration:"none"}},t),r.a.createElement("ul",{style:{listStyle:"none",float:"right"}},r.a.createElement(p,{to:"/contact/"},"Contact"),r.a.createElement(p,{to:"/about/"},"About")))))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var m=f,h=d.a.div.withConfig({displayName:"layout__PageContentWrapper",componentId:"sc-4dh0yk-0"})(["position:relative;margin:auto;width:90%;padding:100px 5% 90px;font-family:Arial,Helvetica,sans-serif;a{text-decoration:none;color:blue;}"]),b=function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(h,null,t))},data:n})};b.propTypes={children:c.a.node.isRequired};t.a=b},160:function(e,t,a){e.exports=a.p+"static/360Bridge-89d990711966d6c868a8b481b29edaba.mp4"},161:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFRklEQVQ4y02UCVBTVxSGI9qZDhaq1boUa5GCILiApOyETTCUTYFAWAwBUSEIyFo1gETEQWXJIhj2TVEQGay1Ko4VF0ABUaxrbasWUFFntHZa2yTv/n15QNozc+e8e+853/zn3Hsfi0Wbl4c9a8q8PJ2m6ybGs2ew2SZm3h72nhtieF6bE8LNhobufzC1zffz0cU6mcyb+MjKSGF8ong9KywkhAkICg6ay2avKLAwXXjflm2iCvZ3Q0SEN6Syvaq9hbsf2BjNKVxrvoAhbIkMmG4wCS0pKdZpYQkF0Xpan5y06WthXNR4WKgf/F3ZcOPYw8LcjFittCJJqamIiQiD3aLZyBd/83JXviRQm1PWUMvkNrd9OynXzppRFhIUyPfi2CE5LQHxwkiV2WIjauZHhuSzOXMJx2Y1sbNaRuZ/Movyd7VV1dbXIzLYH07GBtHa3LDgyfLXBXozdI7TKjt/ridxdrGBpCBPHbw+ADM+nEncLIyJMlGAbmU5epWlJMBuJQnh8dDc0qL2XcMBn+sCZUOzA1NyWYmeruSMrIx+d9fV8Fpjr4rbFAXhxliiP9OAJHo7ozN/B/qPHMWDjnZUZiYRXngkqWtshJujrTrQyRobBSE3aMQ0HSxfsiugorIKXK6nZt6n+mRbegJJT0nB/FmGEHg4gc9xQvPOTEhF8ciP5SM6LAxV1dXEne6v42JDdXJUIBTVlet1wIICSY3sYDm8fThqrq8n8eW6EnFwELirliM/OhQ5fD4a01NwPHcnWndvR0NWKqqrKrHWxR6cpQvVcnkpypWVh6d4ej7u9v0CQQRcXVZrpHIZiU+MRwTHATxHB+RGh6MudSuKNkThTFEhLkiL0FiQj2KZDO5WpiSK66qpbWqCVC6/lZubO4116mK3vvNX1k9WLVsEXrgfVaZQEHFODpYvXQxzkyXwd7bDNr812B+3EXLRZuTGRmB/YQF2FxbC0XQ+slKEVGVtHaQK+c9lUunHLAD6IpHoCdvMCKKkOEpaXkGSRAkwX2aJpeYrYLrEDKkhoTgpKcBhiQTuDjYQ52UjOzsbrlZGyBOnUcra+gmgbAI4PTYudsDB0hhZmamasoMVJCaGj3hxC7amlcPjywVgW1hiA5cL8ZYkONt7IHQdBwkJm+Drbk327MnRKGvqUKaQDxeVHpi4NjFCYQN7uQnS0hPURcXFRCJrIcpzf0DZBRwoakEezwf7BL7YsyURO4pOI3NnBmKFAnCdLXGwukqtrNUCFcd0p5y4NTVkpdkiZORI1G29z3H6IciR6xq0DlCQfQ9UNN3BoaRoxK6LxPaKX9E59B5Npy6S9OREKKpq1IdqalCqUISz/md6aZLqW12/AD3Pob78G4XT9yjScZOgY/AvHOmjldYMoq5zGGcfAmfvqsjdP4Hht1B3XhrEgZLiH6taT85gSPUXXzN1d43D7cxPwNVRoHeMaHpof/kpIT1jIL1jQNtNej4CMvSa0APof6HWDL8Bro/+jRKF0lPLONRwdKKHx3peMQ+7bVATf16rcowBq+hBXR3VQgnOP9KQS481ZGAcFA1U3XkH3KNVDryASJvbfuHaf++4rP0l6/jAP8xC63WK19qv/n3oLQ1+pgUT0vcMmmvPiKb7MSGDr4AhWlnPiPrd7TeI0OY0tZ/Qo2/LBKz9JmF8xzBYh/soBrrvxPvPzz0kiq5HeNz9FLj1lukX3QLgylM86Rh6X76r5u4X2tiWK6/0ekcmGAPjZBJ6g9KpbRugdL/11hvEgAbb9ozAq2eEeP3wiLLtG9UYTu1/d/udLpaugPH/Al/1EM5dnBHzAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/e30d372f4c24b6bfc9f0b4b056bd49f0/e63df/Personal_Picture.png",srcSet:"/static/e30d372f4c24b6bfc9f0b4b056bd49f0/c9dcb/Personal_Picture.png 225w,\n/static/e30d372f4c24b6bfc9f0b4b056bd49f0/29f18/Personal_Picture.png 450w,\n/static/e30d372f4c24b6bfc9f0b4b056bd49f0/e63df/Personal_Picture.png 500w",sizes:"(max-width: 500px) 100vw, 500px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-a760e2816a50863c1325.js.map