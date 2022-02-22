# Next.js Notes:

**New Componenets:**
* Head - used for giving a title and metadata to our page. can be useful for SEO
* Link - used in place of react router. Can forward the user to any page in our
app. All pages that we want to link to must be put in the `pages` directory

---

**New Functions:**
* getStaticProps - 

* getServerSideProps - Somtimes you need to pre-render for every request OR you
need access to the request object (eg. for cookies). Next.js allows you to run
"real server-side code" as well. CAN ONLY BE ADDED TO PAGE COMPONENT FILES! Only
use either this function or getStaticProps because they fulfill the same purpose,
but run at different points in time which causes clashing

* getStaticPaths - we can set fallback to true. if we do that tells Next.js to
only SSR the given paths, but to accept any other dynamic paths and to 'Just In
Time' render them. You also need to check if the data you want to load is there
in the actual component. If the data is not there, then just show a '...Loading'.
This will allow the app to work. If you don't have this then Next.js will stop
working.
```
export async function getStaticPaths() {
    return {
        paths: [

            { params: { pid: 'p1' } },
            { params: { pid: 'p2' } },
            { params: { pid: 'p3' } },
        ],
        fallback: false
    }
}
```

---

**Notes:**
* the best way for adding styles is creating css modules and then referencing
those modules like this:
```
import styles from '../styles/Home.module.css';
...
<div className={styles.title}>Title</div>
```
* all media used should be placed in the `public` directory
* Next.js seems to be blending Node.js and React together. This can be seen when
using these new functions:
```
* getStaticProps - 
* getServerSideProps -
* getStaticPaths -
```
due to the fact that they use the `fs` import and the `path` import which is
used in Node.js

* some data doesnt need to be prerendered. (e.g. data that changes at a high
frequency like stock data, highly user specific data like last orders in a shop,
and partial data like data thats only used on a part of the page.)
* prefetching the data for page generation might not work or be required.
* in Next.js, a page is a React component exported from the pages directory
