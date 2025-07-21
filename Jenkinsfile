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
                // bat 'npx cypress run --reporter mochawesome || true'
                bat 'npx cypress run --reporter mochawesome --reporter-options "reportDir=mochawesome-report,overwrite=false,html=true,json=false'
            }
        }

            stage('Archive Reports') {
      steps {
        archiveArtifacts artifacts: 'mochawesome-report/**', allowEmptyArchive: true
      }
    }

stage('Publish Report') {
      steps {
        publishHTML(target: [
          reportDir: 'mochawesome-report',
          reportFiles: 'mochawesome.html',
          reportName: 'Cypress Test Report'
        ])
      }
    }



        
    }
}
