def pathFilesDeployFronEnd = "C:/Program Files (x86)/Jenkins/workspace/DemoJenkins/FrontDemo/dist/FrontDemo/*.*"
def pathFilesPublishFrontEnd = "C:/inetpub/wwwroot/FrontEnd"
def pathFilesDeployAPI = "C:/Program Files (x86)/Jenkins/workspace/DemoJenkins/APIdemo/APIdemo/bin/Debug/netcoreapp3.1/publish/*.*"
def pathFilesPublishAPI = "C:/inetpub/wwwroot/Api"
def stopAPI = "%SYSTEMROOT%/System32/inetsrv/appcmd stop apppool /apppool.name:'Api'"
def startAPI = "%SYSTEMROOT%/System32/inetsrv/appcmd start apppool /apppool.name:'Api'"
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
                bat 'copy \${pathFilesDeployFronEnd} \${pathFilesPublishFrontEnd}'
				bat '\${stopAPI}'
				bat 'copy \${pathFilesDeployAPI} \${pathFilesPublishAPI}'
				bat '\${startAPI}'
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