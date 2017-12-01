# Demo site using Hugo 

Hugo site with some content from *new* version of http://cayenne.apache.org.
This code is just for experiments.

## How To Run

### Dev mode

Just clone and run maven, nothing else required.

    git clone https://github.com/stariy95/cayenne-website-demo.git
    cd cayenne-website-demo
    mvn

Open http://localhost:3000 in your browser. In dev mode site supports live-reloading.

### Publish

To publish site all you need is just to commit update version into `asf-site` GIT branch.
This is done automatically by `publish` Maven profile:
    
    mvn -Ppublish -Dmsg="commit message"
    
**TODO**: apache `gitpubsub` should be setup to sync this branch with real site content location. 

## CMS guide

### Content modifications

#### Publishing news

To publish news simply add new file at `src/main/site/content/news/` folder.
You can use following template: 

`some-good-news.md`

    ---
    title: Good news everyone!
    date: 2017-01-01T00:00:00+03:00
    --- 
    
    Content goes here


#### Releasing new cayenne version

To update site content with information about new Cayenne version you need to perform these steps:

* Update data in `src/main/site/data/cayenne.yaml` file.
* Wright news (see information above).
* Update documentation, this can be done with `build-docs.sh` script. 
  You can run it like this: `./build-docs.sh 4.1.M2` 

### Advanced 

Node.js, Yarn, Gulp and Hugo used to build this site, Maven used just to boostrap Node.js and Yarn tools and launch Gulp tasks.
Hugo binaries managed by [hugo-bin](https://www.npmjs.com/package/hugo-bin) NPM module.

#### Src structure

There is two main parts of site src:
* `src/main/assets` assets processed by [Gulp](https://gulpjs.com) tasks

    * `/gulp/` - list of Gulp tasks
    
        Important tasks:
        * `hugo.js` - contains tasks that launch Hugo to process all content
        * `images.js` - compress and copy images
        * `reference.js` - replace references to generated resources inside content
        * `revision.js` - generate manifest file with resources versions
        * `scripts.js` - launch Webpack to process JavaScript resources
        * `serve.js` - launch dev-version of site with live-reloading
        * `styles.js` - generate CSS bundle (concat, minify, etc..)
    * `/images/` - images that will be compressed and published into site `/img` directory, 
    you can put any stuff used by site here (see `/gulp/images.js`)
    * `/scripts/` - JavaScript sources, `main.js` is an entry point for the final bundle,
    will be processed by Webpack (see `/gulp/scripts.js`)
    * `/styles/` - Sass sources, `main.scss` is an entry point for the final bundle
    (see `/gulp/styles.js`)
    * `gulpfile.js` - main file for Gulp tasks, define some global path constants
    * `package.json` - all project dependencies are defined here

* `src/main/site` assets processed [Hugo](https://gohugo.io) site generator

    * `/content/` - main content part of the site, markdown and HTML files
    * `/data/` - data files in *yaml* format
    * `/layouts/` - site templates, using [GO templates](https://golang.org/pkg/text/template/)
    * `/static/` - files that will be copied as is to the final site content, note that `js`, `img` and `css` directories
    are processed via Gulp tasks, and shouldn't be used directly, instead use coresponding directories in `assets`.     
    * `config.yaml` - Hugo configuration