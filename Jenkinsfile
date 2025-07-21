pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npm install --save-dev mochawesome'
               
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --reporter mochawesome'
            }
        }
    }
}
