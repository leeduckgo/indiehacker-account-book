"use strict";(self.webpackChunkkaiofelipejs_dev=self.webpackChunkkaiofelipejs_dev||[]).push([[751],{3609:function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(6540)),o=l(n(5556));function l(e){return e&&e.__esModule?e:{default:e}}var s=["shortname","identifier","title","url","category_id","onNewComment","language"],d=!1;function m(e,t){var n=t.onNewComment,r=t.language,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var a in i)e.page[a]=i[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return s.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return a.default.createElement("div",t,a.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!d){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),d=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};s.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(a.default.Component);u.displayName="DisqusThread",u.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},u.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=u},7370:function(e,t,n){e.exports=n(3609)},8380:function(e,t,n){n.d(t,{BP:function(){return l},DF:function(){return d},I0:function(){return a},rK:function(){return s},tx:function(){return o}});var r=n(5090),i=n(4625);const a=r.default.header.withConfig({displayName:"styled__PostHeader",componentId:"sc-1low8fe-0"})(["margin:auto;max-width:70rem;padding:3rem 5rem 0;",""],i.Ay.lessThan("large")`
    padding: 3rem 0 0;
    max-width: 100%;
  `),o=r.default.h1.withConfig({displayName:"styled__PostTitle",componentId:"sc-1low8fe-1"})(["font-size:4rem;font-weight:700;padding:0 0.5rem;margin:1rem auto;",""],i.Ay.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `),l=r.default.h2.withConfig({displayName:"styled__PostDescription",componentId:"sc-1low8fe-2"})(["font-size:2rem;font-weight:200;padding:0 0.5rem;",""],i.Ay.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1.2rem;
    margin-bottom: 1rem;
  `),s=r.default.p.withConfig({displayName:"styled__PostDate",componentId:"sc-1low8fe-3"})(["font-size:1.1rem;font-weight:100;padding:0 0.5rem;",""],i.Ay.lessThan("large")`
    padding: 0 1rem;
  `),d=r.default.section.withConfig({displayName:"styled__MainContent",componentId:"sc-1low8fe-4"})(["margin:auto;max-width:70rem;padding:1rem 5rem;"," p,h1,h2,h3,h4,ul,ol,.tags,iframe,.button-post{font-size:1.25rem;font-weight:300;line-height:1.7;padding:0 0.5rem;}"," p{margin:0 auto 1.6rem;}h1,h2,h3,h4,h5{margin:2.4rem auto 1rem;}ul,ol{list-style:disc;padding-left:2.5rem;margin:0 auto 1.6rem;}li{padding:0.625rem 0;& > ul{margin-bottom:0;}}p,li{code{word-wrap:break-word;}}img{display:block;max-width:100%;margin:1.875rem auto;}iframe{padding:0 1.6rem 1.6rem;width:100%;","}blockquote{border-left:0.3rem solid var(--mainColor);padding:0 1rem;margin:3.125rem auto;}hr{border:1px solid #38444d;margin:3rem auto;}#twitter-widget-0,.instagram-media,.twitter-tweet{margin:20px auto !important;}h1,h2,h3,h4,h5{font-weight:800;line-height:1.4;}h1{font-size:2.8rem;","}h2{font-size:2.1rem;","}h3{font-size:1.6rem;","}h4{font-size:1.4rem;}h5{font-size:1.2rem;}strong{font-weight:700;}.gatsby-resp-image-background-image{z-index:2;opacity:1 !important;}.gatsby-resp-image-image{box-shadow:none !important;transition:opacity 0.2s;&.lazyload{opacity:0;}&.lazyloaded{opacity:1;z-index:3;}}.gatsby-highlight{padding:0 1.6rem 1.6rem;","}.instagram-media{margin:1rem auto !important;}a{border-bottom:1px dashed;font-weight:bold;text-decoration:none;transition:opacity 0.5s;svg{color:var(--texts);}&:hover{opacity:0.8;}}"],i.Ay.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `,i.Ay.lessThan("large")`
    padding: 0 0.7rem;
    word-break: break-word;
  `,i.Ay.lessThan("large")`
      padding: 0 1rem;
    `,i.Ay.lessThan("large")`
      font-size: 1.875rem;
    `,i.Ay.lessThan("large")`
      font-size: 1.375rem;
    `,i.Ay.lessThan("large")`
      font-size: 1.125rem;
    `,i.Ay.lessThan("large")`
      padding: 0;
    `)},937:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(6540),i=n(8890),a=n(5252),o=n(5090),l=n(3332);const s=o.default.section.withConfig({displayName:"styled__RecommendedWrapper",componentId:"sc-1hvr6h8-0"})(["border-bottom:1px solid var(--borders);border-top:1px solid var(--borders);display:flex;"]),d=(0,o.default)(l.A).withConfig({displayName:"styled__RecommendedLink",componentId:"sc-1hvr6h8-1"})(['align-items:center;color:var(--texts);display:flex;font-size:1.2rem;padding:3rem 1rem;text-decoration:none;width:50%;&:hover{text-decoration:underline;}&.previous{border-right:1px solid var(--borders);}&.next{justify-content:flex-end;}&.previous:before{content:"\\2190";margin-right:0.5rem;}&.next:after{content:"\\2192";margin-left:0.5rem;}']);var m=e=>{let{next:t,previous:n}=e;return r.createElement(s,null,n&&r.createElement(d,{className:"previous",to:n.fields.slug,cover:!0,direction:"left",bg:"#55aaaa",duration:.6},n.frontmatter.title),t&&r.createElement(d,{className:"next",to:t.fields.slug,cover:!0,direction:"right",bg:"#55aaaa",duration:.6},t.frontmatter.title))},u=n(7370),f=n(4625);const c=o.default.section.withConfig({displayName:"styled__CommentsWrapper",componentId:"sc-1192gf3-0"})(["margin:auto;max-width:70rem;padding:3rem 6.4rem 3rem;"," #disqus_thread{a{color:#000;}}"],f.Ay.lessThan("large")`
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  `),p=o.default.h2.withConfig({displayName:"styled__CommentsTitle",componentId:"sc-1192gf3-1"})(["color:var(--texts);font-size:2.1rem;font-weight:700;padding-bottom:2rem;",""],f.Ay.lessThan("large")`
    font-size: 1.375rem;
  `);var g=e=>{let{url:t,title:n}=e;const i=`https://kaiofelipejs.dev${t}`;return r.createElement(c,null,r.createElement(p,null,"Comentários"),r.createElement(u.default,{shortname:"kaiofelipejs-dev",identifier:i,title:n,url:i}))},h=n(8380);var y=e=>{let{data:t,pageContext:n}=e;const o=t.markdownRemark,l=n.nextPost,s=n.previousPost;return r.createElement(r.Fragment,null,r.createElement(a.A,{title:o.frontmatter.title,description:o.frontmatter.description,image:o.frontmatter.image}),r.createElement(i.A,null,r.createElement(h.I0,null,r.createElement(h.rK,null,o.frontmatter.date," • ",o.timeToRead," min de leitura"),r.createElement(h.tx,null,o.frontmatter.title),r.createElement(h.BP,null,o.frontmatter.description)),r.createElement(h.DF,null,r.createElement("div",{dangerouslySetInnerHTML:{__html:o.html}})),r.createElement(m,{next:l,previous:s}),r.createElement(g,{url:o.fields.slug,title:o.frontmatter.title})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cda26202eb85405fb8bf.js.map