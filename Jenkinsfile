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
                bat 'npx cypress run --reporter mochawesome || true'
            }
        }

            stage('Archive Reports') {
      steps {
        archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true
      }
    }

stage('Publish Report') {
      steps {
        publishHTML(target: [
          reportDir: 'cypress/reports',
          reportFiles: 'mochawesome.html',
          reportName: 'Cypress Test Report'
        ])
      }
    }



        
    }
}
