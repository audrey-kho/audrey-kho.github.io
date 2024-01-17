import{j as e,L as c,u as M}from"./index-8f585a37.js";import{R as p,S as d,M as j,a as n}from"./ResponsiveContainer-8748214a.js";const g=[{name:"UW Paul G. Allen School of CS",link:"https://www.cs.washington.edu/",role:"HCI Research",description:[""],time:"01/23&ndash;"},{name:"Braze",link:"https://www.braze.com/",role:"Growth Engineering Team",description:[""],time:"06&ndash;<br/>09/22"},{name:"UW Information School",link:"https://ischool.uw.edu/",role:"Client-side Web Development (TA)",description:[""],time:"03&ndash;<br/>06/22"},{name:"UW Center for an Informed Public",link:"https://www.cip.uw.edu/research/#projects",role:"Loki's Loop Project",description:[""],time:"10/21&ndash;<br/>03/22"},{name:"Ionic",link:"https://ionic.io/",role:"Web Team",description:["Migrated pages from the Ionic Framework site to Next.js at&nbsp;<a href='http://ionic.io' target='_blank' rel='noreferrer'>ionic.io</a>."],time:"06&ndash;<br/>09/21"},{name:"UW School of Medicine",link:"https://www.uwmedicine.org/",role:"Service Learning Website",description:["Volunteered to build pages for the UW SOM service learning website with Next.js and React.","Helped provide a more straightforward onboarding process for student volunteers."],time:"02&ndash;<br/>06/21"}],x=[{name:"Adobe",link:"https://www.adobe.com/",role:"Adobe Express Internal Tooling",description:[""],time:"06/23&ndash;"},{name:"UW Information School",link:"https://ischool.uw.edu/",role:"Software Architecture (TA)",description:[""],time:"03/23&ndash;"}],m=[{name:"Smash Platform",link:"https://smash-learn.web.app/",type:"Capstone Project (Startup Sponsored)",description:"A project-based tech skill + career development platform for learners with non-traditional backgrounds",technologies:["Next.js","React","CSS","Tailwind CSS","JavaScript","Vercel","Figma"]},{name:"Intro to Programming Tutorial Prototype",link:"",type:"Research Project",description:"A gentler approach to intro programming education for novice programmers",technologies:["Svelte.js","Python","CSS","Figma","Notion"]},{name:"Book-it Repertory Theatre Brand Redesign",link:"https://www.figma.com/proto/qgK1fd6cgPAkubsrAdJTsR/HCDE-308?page-id=593%3A249&type=design&node-id=593-250&viewport=496%2C2317%2C0.23&t=odjm8KMEqOXCUyMr-1&scaling=contain&starting-point-node-id=593%3A250&mode=design",type:"Brand Design Project",description:"A brand book for Book-it Repertory Theatre, a Seattle-based theatre company that adapts literature into plays",technologies:["Figma","Adobe Illustrator"]},{name:"HuskyReads",link:"https://github.com/Husky-Coding-Project/huskyreads",type:"Club Project",description:"A full stack book tracking web application, inspired by GoodReads (a project of the Husky Coding Club)",technologies:["React","CSS","JavaScript","Node.js","MySQL","Docker","Figma"]}];function N(){return e.jsx(p,{children:e.jsxs(h,{id:"work",children:[e.jsx(d,{href:"work",children:"WORK"}),e.jsxs(j,{children:[e.jsx(n,{children:"SELECTED PROJECTS"}),e.jsx("ul",{className:"project__list",children:m.map(({name:i,link:t,type:o,description:a,technologies:s})=>{let l="project ";return t&&(l+="clickable"),e.jsx("li",{className:l,children:t?e.jsxs("a",{className:"project__inner",href:t,target:"_blank",rel:"noreferrer",children:[e.jsx("span",{className:"project__type",children:o}),e.jsx("h2",{children:i.toUpperCase()}),e.jsx("p",{dangerouslySetInnerHTML:{__html:a}}),e.jsx("ul",{className:"tech__list",children:s.map(r=>e.jsx("li",{children:r},i+"-"+r))})]}):e.jsxs("div",{className:"project__inner",children:[e.jsx("span",{className:"project__type",children:o}),e.jsx("h2",{children:i.toUpperCase()}),e.jsx("p",{dangerouslySetInnerHTML:{__html:a}}),e.jsx("ul",{className:"tech__list",children:s.map(r=>e.jsx("li",{children:r},i+"-"+r))})]})},i)})}),e.jsx(n,{children:"CURRENTLY"}),e.jsx("ul",{className:"work__list",children:x.map(i=>e.jsxs("li",{className:"work__item",children:[e.jsxs("a",{href:i.link,target:"_blank",rel:"noreferrer",children:[i.name,e.jsx(c,{width:18,height:18,position:-2.5})]})," ",e.jsx("br",{})," ",e.jsx("span",{children:i.role})]},i.name))}),e.jsx(n,{children:"PREVIOUSLY"}),e.jsx("ul",{className:"work__list",children:g.map(i=>e.jsxs("li",{className:"work__item",children:[e.jsxs("a",{href:i.link,target:"_blank",rel:"noreferrer",children:[i.name,e.jsx(c,{width:18,height:18,position:-2.5})]})," ",e.jsx("br",{})," ",e.jsx("span",{children:i.role})]},i.name))})]})]})})}const h=M.section`
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

    .project:nth-child(2) {
      &::before {
        position: absolute;
        top: 16px;
        right: 16px;
        // content: url("data:image/svg+xml;base64,");
        content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyMyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjcwMzIgOC44MTU3NUwxNi4zMTU4IDE1LjI2NDNDMTUuMDIzIDE1LjU4MDcgMTMuMjk4OCAxNS43ODcyIDExLjM2OTggMTUuNzg3MkM5LjQ0MDgzIDE1Ljc4NzIgNy43MTgyOCAxNS41ODA3IDYuNDIzODMgMTUuMjY0M0w4LjAzNjM5IDguODE1NzVDOS4wNjAxMSA4Ljk0NjA0IDEwLjE4NTMgOS4wMTg4IDExLjM2OTggOS4wMTg4QzEyLjU1NDMgOS4wMTg4IDEzLjY3OTUgOC45NDYwNCAxNC43MDMyIDguODE1NzVaTTE0LjI4ODcgNy4xNjA4OEwxMy4wMTExIDIuMDQ3MzhDMTIuNTg0NyAwLjMzODM3MiAxMC4xNTQ5IDAuMzM4MzcyIDkuNzI4NDggMi4wNDczOEw4LjQ1MDk1IDcuMTU3NUM5LjMzOTMgNy4yNjc0OSAxMC4zMjQxIDcuMzI2NzEgMTEuMzY5OCA3LjMyNjcxQzEyLjQxNTUgNy4zMjY3MSAxMy40MDAzIDcuMjY1NzkgMTQuMjg4NyA3LjE2MDg4VjcuMTYwODhaTTIxLjcyNzEgMjEuNzM0OUMyMS45MDUyIDIxLjc3OSAyMi4wNjQxIDIxLjg3OTcgMjIuMTc5OSAyMi4wMjJDMjIuMjk1NyAyMi4xNjQyIDIyLjM2MjEgMjIuMzQwMiAyMi4zNjkyIDIyLjUyMzVDMjIuMzc2MiAyMi43MDY4IDIyLjMyMzYgMjIuODg3NCAyMi4yMTkgMjMuMDM4MkMyMi4xMTQ1IDIzLjE4ODkgMjEuOTYzOCAyMy4zMDE2IDIxLjc4OTcgMjMuMzU5M0wxMS42MzcyIDI2Ljc0MzVDMTEuNDYzNiAyNi44MDEzIDExLjI3NiAyNi44MDEzIDExLjEwMjUgMjYuNzQzNUwwLjk0OTkxMyAyMy4zNTkzQzAuNzc1NzgyIDIzLjMwMTYgMC42MjUxMDYgMjMuMTg4OSAwLjUyMDU4OSAyMy4wMzgyQzAuNDE2MDcyIDIyLjg4NzQgMC4zNjMzNzYgMjIuNzA2OCAwLjM3MDQ0IDIyLjUyMzVDMC4zNzc1MDQgMjIuMzQwMiAwLjQ0Mzk0NyAyMi4xNjQyIDAuNTU5NzU2IDIyLjAyMkMwLjY3NTU2NSAyMS44Nzk3IDAuODM0NDY4IDIxLjc3OSAxLjAxMjUyIDIxLjczNDlMNS4wNTgzMSAyMC43MjNMNi4wMTQzNCAxNi45MDM5QzcuNDcyOTMgMTcuMjYyNyA5LjMzNzYxIDE3LjQ3NzYgMTEuMzY5OCAxNy40Nzc2QzEzLjQwMiAxNy40Nzc2IDE1LjI2NjcgMTcuMjYyNyAxNi43MjUzIDE2LjkwMzlMMTcuNjgxMyAyMC43MjNMMjEuNzI3MSAyMS43MzQ5WiIgZmlsbD0iIzg4OUM4MCIvPgo8L3N2Zz4K");
      }
    }

    .project {
      flex: 1 1 360px;
      border: solid 0.5px #485a3d;
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
          background-image: linear-gradient(#889c80, #889c80);
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
          border: solid 0.2px #485a3d;
          border-radius: 22px;
        }
      }

      &:hover {
        cursor: default;
      }

      &.clickable:hover {
        box-shadow: 0 6px 14px rgba(136, 156, 128, 0.15);
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
        color: #88ad71;
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
`;export{N as default};
