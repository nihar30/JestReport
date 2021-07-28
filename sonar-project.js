const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://18.223.255.187:9000/',
       options : {
       'sonar.sources': 'src',
       'sonar.test': 'src',
       'sonar.inclusions' : '**',
       'sonar.javascript.jstest.reportsPath' : 'site/report',
       'sonar.javascript.lcov.reportPath' : './coverage/lcov.info'

//        'sonar.coverageReportPaths' : './Junit.xml'
       },
}, () => {});
