import{a as o,r as t,j as s}from"./index-C10UmBVP.js";import{b as n}from"./tmdb-CyhpvhTv.js";const p=()=>{const{movieId:r}=o(),[m,i]=t.useState([]),[c,l]=t.useState(null);return t.useEffect(()=>{(async()=>{try{const e=await n(r);i(e)}catch(e){l(e)}})()},[r]),c?s.jsxs("p",{className:"error",children:["Failed to load cast: ",c.message]}):s.jsx("div",{className:"castContainer",children:s.jsx("ul",{className:"castList",children:m.map(a=>s.jsxs("li",{className:"castItem",children:[a.profile_path?s.jsx("img",{src:`https://image.tmdb.org/t/p/w200${a.profile_path}`,alt:a.name,className:"actorImage"}):s.jsx("div",{className:"noImage",children:"No Image"}),s.jsx("p",{className:"actorName",children:a.name}),s.jsxs("p",{className:"characterName",children:["as ",a.character]})]},a.cast_id))})})};export{p as default};
