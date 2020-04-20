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
					sh 'npm install'
				}
            }
        }
        stage('Build Angular Proyect') {
            steps {
				dir("FrontDemo"){
					sh 'npm run build'
				}
            }
        }
        stage('Cypress tests') {
            steps {
				dir("FrontDemo"){
				sh 'npm run open'
				}
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}