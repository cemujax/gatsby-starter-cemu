
#  gatsby-starter-cemu

Blog Starter Template using [Gatsby](https://www.gatsbyjs.org/). 

View the demo at [gatsby-starter-cemu](https://gatsby-starter-cemu.netlify.com/)

![gatsby-starter-cemu IndexPage](https://i.imgur.com/eG3HXGT.jpg)
## Features
- Code syntax highlighting
- Emoji
- Comments(Disqus)
- Google Analytics
- RSS Feed
- SEO
  - robots.txt
  - Sitemap.xml
  - Schema.org JSON-LD
  - OpenGraph Tags
  - Twitter Tags
  - Manifest Support, Offline Support

## Lighthouse Audit
![Lighthouse Audit](https://i.imgur.com/rBM5AJZ.jpg?1)

## 🚀 Quick start
1.  **Create a Gatsby site.**
    ```sh
    $ npm install -g gatsby-cli
    # create a new Gatsby site using the blog starter
    $ gatsby new my-blog-starter https://github.com/cemujax/gatsby-starter-cemu
    ```


2.  **Start developing.**

    Navigate into your new site’s directory and start it up.
    
    Gatsby will start a hot-reloading development environment accessible by default at `localhost:8000`.
    ```sh
    $ cd my-blog-starter/
    $ gatsby develop
    ```

3.  **Customize meta config**

    Customizing your data in `site-meta-config.js` file.
    Site Information, favicon, social, disqus, google-analytics...

4. **Writing your post**

    Write a post in the `content/posts` folder.
    ```
    ---
    title: 'Sample Post'
    date: '2019-04-25 17:00'
    category: 'sample'
    tags: ['sample', 'test']
    ---

    # Sample Post
    ```

## 💫 Deploy with Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cemujax/gatsby-starter-cemu)

## 🧐 Folder structure
    
    ├── content
    ├── src
    |   ├──── components
    |   ├──── layouts
    |   ├──── pages
    |   ├──── style
    |   ├──── templates
    |   └──── utils
    ├── static 
    ├── gatsby-config.js
    ├── gatsby-node.js
    └── site-meta-config.js

## LICENSE
[MIT](./LICENSE)