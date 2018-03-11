kopf
=======================

kopf is a simple web administration tool for [elasticsearch](http://elastic.co) written in JavaScript + AngularJS + jQuery + Twitter bootstrap.

It offers an easy way of performing common tasks on an elasticsearch cluster. Not every single API is covered by this plugin, but it does offer a REST client which allows you to explore the full potential of the ElasticSearch API.

Versions
------------

| elasticsearch version | branch |
| --------------------- | ------ |
| 2.X                   | 2.0    |
| 5.X                   | 5.x    |
| 6.X                   | 6.x    |

Installation
------------
You can either install a specific version(using its release tag) or the most up to date version from a given branch.

### Run locally:

```bash
git clone git://github.com/codelibs/elasticsearch-kopf.git
cd elasticsearch-kopf
git checkout {branch|version}
open _site/index.html
```

ps: local execution doesn't work with Chrome(and maybe other browsers). See more [here](http://docs.angularjs.org/api/ng.directive:ngInclude).

Alternatively you can run it via `connect` which should solve the `ng-include` issue.

```bash
git clone git://github.com/codelibs/elasticsearch-kopf.git
cd elasticsearch-kopf
git checkout 6.x
npm install
grunt server
```

Browse to <http://localhost:9000/_site>.

### Kopf behind a reverse proxy
Example configuration for nginx:
```
server {
  listen       8080;
  server_name  localhost;

  location ~ ^/es.*$ {
    proxy_pass http://localhost:9200;
    rewrite ^/es(.*) /$1 break;
  }

  location ~ ^/kopf/.*$ {
    proxy_pass http://localhost:9200;
    rewrite ^/kopf/(.*) /_plugin/kopf/$1 break;
  }
}
```
Example configuration for kopf(kopf_external_settings.json):
```json
{
  "elasticsearch_root_path": "/es",
  "with_credentials": false,
  "theme": "dark",
  "refresh_rate": 5000
}
```
Access kopf at http://localhost:8080/kopf/

Screenshots
------------
### cluster overview
![cluster overview](imgs/cluster_view.png)

### header reflects cluster state
![cluster state](imgs/cluster_state.png)

###REST Client
![rest client](imgs/rest_client.png)

### aliases management
![aliases management](imgs/aliases.png)

### warmers management
![warmers management](imgs/warmer.png)

### percolator
![percolator](imgs/percolator.png)

### snapshots management
![snapshots management](imgs/snapshot.png)

### analysis api
![analysis api](imgs/analysis.png)
