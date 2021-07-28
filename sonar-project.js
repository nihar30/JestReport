const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://18.223.255.187:9000/',
       options : {
       'sonar.sources': '.',
       'sonar.test': '.',
       'sonar.inclusions' : '**',
       'sonar.javascript.lcov.reportPath' : './coverage/lcov.info'

//        'sonar.coverageReportPaths' : './Junit.xml'
       },
}, () => {});
