kopf.factory('PageService', ['ElasticService', 'DebugService', '$rootScope',
  '$document', function(ElasticService, DebugService, $rootScope, $document) {

    var instance = this;

    this.clusterStatus = undefined;
    this.clusterName = undefined;

    this.link = $document[0].querySelector('link[rel~=\'icon\']');

    if (this.link) {
      var faviconUrl = this.link.href;
      var img = $document[0].createElement('img');
      img.src = faviconUrl;
    }

    $rootScope.$watch(
        function() {
          return ElasticService.cluster;
        },
        function(cluster, oldValue) {
          instance.setPageTitle(cluster ? cluster.name : undefined);
        }
    );

    /**
     * Updates page title if name is different than clusterName
     *
     * @param {string} name - cluster name
     */
    this.setPageTitle = function(name) {
      if (name !== this.clusterName) {
        if (name) {
          $rootScope.title = 'kopf[' + name + ']';
        } else {
          $rootScope.title = 'kopf - no connection';
        }
        this.clusterName = name;
      }
    };

    return this;

  }]);
