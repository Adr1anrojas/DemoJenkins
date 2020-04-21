pipeline {
    agent any
    tools {nodejs "node"}
    environment {
        CHROME_BIN = '/bin/google-chrome'
    }
    stages {
        stage('Install Dependencies') {
            steps {
				dir("FrontDemo"){
					bat 'npm install'
				}
            }
        }
        stage('Build Angular') {
            steps {
				dir("FrontDemo"){
					bat 'npm run build'
				}
            }
        }
		stage('Build .Net') {
            steps {
				dir("APIdemo"){
					bat 'dotnet publish APIdemo.sln'
				}
            }
        }
        stage('Cypress tests') {
            steps {
				dir("FrontDemo"){
					bat 'npm run cypress:ci'
				}
            }
        }
        stage('Deploy') {
            steps {
				bat 'copy "C:/Program Files (x86)/Jenkins/workspace/DemoJenkins/FrontDemo/dist/FrontDemo/*.*" "C:/inetpub/wwwroot/FrontEnd"'
				bat "%SYSTEMROOT%/System32/inetsrv/appcmd stop apppool /apppool.name:'Api'"
				bat "copy 'C:/Program Files (x86)/Jenkins/workspace/DemoJenkins/APIdemo/APIdemo/bin/Debug/netcoreapp3.1/publish/*.*' 'C:/inetpub/wwwroot/Api'"
				bat "%SYSTEMROOT%/System32/inetsrv/appcmd start apppool /apppool.name:'Api'"
            }
        }
    }
	post {
		always {
			dir("FrontDemo"){
				junit 'cypress-report.xml'
			}
		}
	}
}