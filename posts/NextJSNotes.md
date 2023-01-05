---
title: 'NextJS notes'
date: '2023-01-04'
---

Next.js:

==============================================

Docs at: https://nextjs.org/docs/getting-started

Starting with interactive foundation course: https://nextjs.org/learn/basics/create-nextjs-app
- npx create-next-app nextjs-blog
- cd nextjs-blog 
- npm run dev  (localhost:3000)

In next.js, a page is a React Component exported from a file in the pages directory. 
pages/index.js ==> route is '/'
pages/post/post.js ==> route is '/post/post'

^^ create a .js file under pages directory ==> path to file becomes the URL path ^^

Components can have any name but must be exported as a default export.

==============================================

- Link
Link components using next/link: 
    - import Link from 'next/link';

No routing libraries are required in next.js 
use <a> tag if link is required to external page 

Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).
Only the code requested page is first loaded for faster load

==============================================

- Assets, Metadata, and CSS
next.js can serve static assets like images under the public directory. 

next.js provides 'Image' component to handle - image responsiveness(scree sizes) and optimization
    import Image from 'next/image';

To use CSS Module, filemame must end in .module.css

pages/_app.js for global CSS 
(https://nextjs.org/docs/advanced-features/custom-app)


==============================================

- Pre-rendering & data-fetching:

By default, Next.js pre-renders every page. 
This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. 
Pre-rendering can result in better performance and SEO.

Next.js has two forms of pre-rendering:
- Static generation
- Server-side rendering 

"Can I pre-render this page ahead of a user's request?" 
If the answer is yes, then you should choose Static Generation.

But, Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. 
E.g. if page shows frequently updated data, and the page content changes on every request.

In that case, you can use Server-side Rendering. 
It will be slower, but the pre-rendered page will always be up-to-date. 
Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.

------------------
Static site generation with data:
- For pages that can only be generated using data fetched during BUILD time
- use async function called getStaticProps
- getStaticProps runs at build time and fetches the data and sends it as props to the page

 - getStaticProps only runs on the server-side. 
 It will never run on the client-side. 
 It won’t even be included in the JS bundle for the browser. 
 That means you can write code such as direct database queries without them being sent to browsers.

 - getStaticProps can only be exported from a page.

 ------------------
 Server-side rendering for data that needs to be fetched during the request time instead of build time:
 - data is fetched on each request and the HTML is generated
 - getServerSideProps
 - use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. 

 ---------------------
 Client-side rendering:
 If you do not need to pre-render the data, you can also use the following strategy (called Client-side Rendering):
 - Statically generate (pre-render) parts of the page that do not require external data.
 - When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

---------------------

Dynamic Routes:
Pages that begin with [ and end with ] are dynamic routes in Next.js.
example: [testDynamicRoute].js

for sample blog site:
We want each post to have the path /posts/<id>, where <id> is the name of the markdown file under the top-level posts directory.

