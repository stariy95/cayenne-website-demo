---
title: Guide to Cayenne CMS
weight: 80
url: /dev/cms-guide.html
---

Cayenne CMS source code (content + styling + scriptos) can be obtained from SVN:

[https://svn.apache.org/repos/asf/cayenne/site/cms/trunk/](https://svn.apache.org/repos/asf/cayenne/site/cms/trunk/)

Any Cayenne committer can change it and commit. On commit, it is automatically getting published in the CMS staging environment:

[http://cayenne.staging.apache.org/](http://cayenne.staging.apache.org/)

## Publishing

To publish staged content go [here](https://cms.apache.org/cayenne/), login with your Apache ID, and click on "publish cayenne site".

## Synchronizing Docs

Assuming Cayenne checkout is under "~work/cayenne" and CMS sources checkout - under "~/work/cms/cms":

        (switch to the desired branch/tag and do a normal 'mvn clean install')

        rsync -av --delete ~/work/cayenne/docs/docbook/cayenne-guide/target/site/index/ \
            ~/work/cms/cms/content/docs/4.0/cayenne-guide/
        rsync -av --delete ~/work/cayenne/docs/docbook/getting-started/target/site/index/ \
            ~/work/cms/cms/content/docs/4.0/tutorial/
        rsync -av --delete ~/work/cayenne/docs/docbook/getting-started-rop/target/site/index/ \
            ~/work/cms/cms/content/docs/4.0/tutorial-rop/
        rsync -av --delete ~/work/cayenne/docs/docbook/upgrade-guide/target/site/index/ \
            ~/work/cms/cms/content/docs/4.0/upgrade-guide/
        rsync -av --delete ~/work/cayenne/docs/doc/target/site/apidocs/doc/api/ \
            ~/work/cms/cms/content/docs/4.0/api/

