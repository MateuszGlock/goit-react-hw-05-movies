import{a as l,r,j as e}from"./index-C10UmBVP.js";import{c as m}from"./tmdb-CyhpvhTv.js";const v=()=>{const{movieId:a}=l(),[c,o]=r.useState([]),[i,n]=r.useState(null);return r.useEffect(()=>{(async()=>{try{const t=await m(a);o(t)}catch(t){n(t)}})()},[a]),i?e.jsxs("p",{className:"error",children:["Failed to load reviews: ",i.message]}):e.jsx("div",{className:"reviewsContainer",children:e.jsx("ul",{className:"reviewList",children:c.map(s=>e.jsxs("li",{className:"reviewItem",children:[e.jsx("h3",{children:s.author}),e.jsx("p",{children:s.content})]},s.id))})})};export{v as default};
