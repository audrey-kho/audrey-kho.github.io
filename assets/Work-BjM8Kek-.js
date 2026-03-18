import{j as e,L as p,p as d}from"./index-gRY_HK1X.js";import{R as m,S as x,M as h,a as s}from"./ResponsiveContainer-Cw1LK2Md.js";const g=[{name:"UW Information School",link:"https://ischool.uw.edu/",role:"TA, Software Architecture"},{name:"Adobe",link:"https://www.adobe.com/",role:"Software Engineer Intern, Adobe Express"},{name:"UW Paul G. Allen School of CS",link:"https://www.cs.washington.edu/",role:"Research Assistant, Programming Education"},{name:"Braze",link:"https://www.braze.com/",role:"Software Engineer Intern, Growth Engineering"},{name:"UW Information School",link:"https://ischool.uw.edu/",role:"TA, Client-side Web Dev"},{name:"UW Center for an Informed Public",link:"https://www.cip.uw.edu/research/#projects",role:"Frontend Developer, Media Literacy Game"},{name:"Ionic",link:"https://ionic.io/",role:"Software Engineer Intern, Web Team"}],u=[{name:"Adobe",link:"https://www.adobe.com/",role:"Software Engineer II, Adobe Experience Manager - Sites"}],f=[{name:"Adobe Sites Optimizer",link:"https://business.adobe.com/products/experience-manager/sites/optimizer.html",type:"",featured:!0,description:"Adobe Sites Optimizer is an AI-powered tool that automatically detects, suggests, and deploys website improvements across SEO, accessibility, engagement, and security. It consolidates what typically requires multiple tools and teams into a single platform.",technologies:["TypeScript","React","Node.JS","Langfuse","Claude Code","Cursor"]},{name:"Generate Variations",link:"https://business.adobe.com/products/experience-manager/sites/content-creation.html",type:"",description:"In-context GenAI feature in Adobe Experience Manager that enables customers to create content variations using custom prompts, brand guidelines, and audience context.",technologies:["React","TypeScript","CSS","Node.JS","Adobe I/O","Figma"]},{name:"Contextual Experimentation",link:"https://business.adobe.com/products/experience-manager/sites/site-performance.html",type:"",description:"Privacy-first A/B testing plugin for AEM. Built Adobe I/O actions to automate page publishing and variant promotion, and added monitoring to improve reliability and product decisions.",technologies:["AEM","Adobe I/O","Javascript","Node.js","Splunk","Grafana"]}];function _(){return e.jsx(m,{children:e.jsxs(b,{id:"work",children:[e.jsx(x,{href:"work",children:"WORK"}),e.jsxs(h,{children:[e.jsx(s,{children:"SELECTED PROJECTS"}),e.jsx("ul",{className:"project__list",children:f.map(({name:r,link:i,type:n,featured:c,description:o,technologies:l})=>{let a="project ";return i&&(a+="clickable "),c&&(a+="featured"),e.jsx("li",{className:a,children:i?e.jsxs("a",{className:"project__inner",href:i,target:"_blank",rel:"noreferrer",children:[n&&e.jsx("span",{className:"project__type",children:n}),e.jsx("h2",{children:r.toUpperCase()}),e.jsx("p",{dangerouslySetInnerHTML:{__html:o}}),e.jsx("ul",{className:"tech__list",children:l.map(t=>e.jsx("li",{children:t},r+"-"+t))})]}):e.jsxs("div",{className:"project__inner",children:[n&&e.jsx("span",{className:"project__type",children:n}),e.jsx("h2",{children:r.toUpperCase()}),e.jsx("p",{dangerouslySetInnerHTML:{__html:o}}),e.jsx("ul",{className:"tech__list",children:l.map(t=>e.jsx("li",{children:t},r+"-"+t))})]})},r)})}),e.jsx(s,{children:"CURRENTLY"}),e.jsx("ul",{className:"work__list",children:u.map(r=>e.jsxs("li",{className:"work__item",children:[e.jsxs("a",{href:r.link,target:"_blank",rel:"noreferrer",children:[r.name,e.jsx(p,{width:18,height:18,position:-2.5})]})," ",e.jsx("br",{})," ",e.jsx("span",{children:r.role})]},r.name))}),e.jsx(s,{children:"PREVIOUSLY"}),e.jsx("ul",{className:"work__list",children:g.map(r=>e.jsxs("li",{className:"work__item",children:[e.jsxs("a",{href:r.link,target:"_blank",rel:"noreferrer",children:[r.name,e.jsx(p,{width:18,height:18,position:-2.5})]})," ",e.jsx("br",{})," ",e.jsx("span",{children:r.role})]},r.name))})]})]})})}const b=d.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 160px 0;

  ul {
    margin: 28px 0 72px;
  }

  .project__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;

.project__inner {
      display: block;
      padding: 18px 32px;
      height: 88%;
      opacity: 1;

      h2 {
        font-family: "DM Mono", monospace;
        margin: 10px 0;
      }

      span {
        font-family: "DM Mono", monospace;
        font-weight: 300;
        font-size: 13px;
        margin: 0;
        text-transform: uppercase;
      }
    }

    .project.featured {
      flex: 1 1 100%;
    }

    .project {
      flex: 1 1 360px;
      border: solid 0.5px var(--border);
      border-radius: 12px;
      transition: 0.3s all;
      margin-right: 20px;
      margin-bottom: 22px;
      position: relative;

      @media (max-width: 800px) {
        margin-right: 0;
        margin-bottom: 34px;
      }

      p {
        letter-spacing: 0.5px;

        a {
          position: relative;
          display: inline;
          padding: 0;
          background-image: linear-gradient(var(--accent), var(--accent));
          background-size: 1px 1px;
          background-repeat: repeat-x;
          background-position: 0 92%;
        }
      }

      .tech__list {
        margin: 28px 0 2px;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;

        li {
          display: inline;
          font-family: "DM Mono", monospace;
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 1px;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 4px 12px 3px;
          text-transform: uppercase;
          border: solid 0.5px var(--border-strong);
          border-radius: 22px;
        }
      }

      &:hover {
        cursor: default;
      }

      &.clickable:hover {
        box-shadow: 0 6px 18px rgba(61, 59, 56, 0.1);
        transform: translateY(-2px);
        cursor: pointer;
      }
    }
  }

  .work__list {
    list-style: none;
    padding: 0;
    text-transform: uppercase;
    font-size: 1.12em;

    .work__item {
      margin: 8px 0;

      a {
        font-family: "DM Mono", monospace;
        font-weight: 600;

        svg {
          transition: 0.3s all;
        }

        &:hover svg {
          transform: translate(1px, -1px);
        }
      }

      span {
        color: var(--text-secondary);
        letter-spacing: 0.5px;
        text-transform: none;
      }

      @media (min-width: 500px) {
        br {
          display: none;
        }
      }

      @media (max-width: 500px) {
        br {
          display: block;
        }
      }
    }
  }
`;export{_ as default};
