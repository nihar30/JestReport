const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://18.223.255.187:9000/',
       options : {
       'sonar.sources': '.',
       'sonar.tests': '.',
       'sonar.inclusions' : 'src/**',
       

//        'sonar.coverageReportPaths' : './Junit.xml'
       },
}, () => {});
