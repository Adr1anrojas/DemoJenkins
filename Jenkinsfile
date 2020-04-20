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
        stage('Build Angular Proyect') {
            steps {
				dir("FrontDemo"){
					bat 'npm run build'
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
                echo 'Deploying....'
            }
        }
    }
	post {
		always {
			junit 'results/cypress-report.xml'
		}
	}
}