pipeline {
    agent any

    tools {
        sonarScanner 'SonarScanner'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube-Server') {
                    sh '''
                        sonar-scanner \
                        -Dsonar.projectKey=todo-app \
                        -Dsonar.projectName="Todo App" \
                        -Dsonar.sources=.
                    '''
                }
            }
        }
    }
}
