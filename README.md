# Demo site using Hugo 

Hugo site with some content from http://cayenne.apache.org.
This code is just for experiments.

## How To Run

### Dev mode

Just clone and run maven, nothing else required.

    git clone https://github.com/stariy95/cayenne-website-demo.git
    cd cayenne-website-demo
    mvn

Open http://localhost:3000 in your browser.

### Publish

To create version for publishing, use `publish` Maven profile:
    
    mvn -Ppublish
    
And grab content from `target/site/public` directory.