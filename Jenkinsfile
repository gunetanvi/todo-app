pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner'
                    withSonarQubeEnv('SonarQube-Server') {
                        sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=todo-app \
                            -Dsonar.projectName='Todo App' \
                            -Dsonar.sources=."
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    script {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            error "Pipeline aborted due to quality gate failure: ${qg.status}"
                        }
                    }
                }
            }
        }

        stage('Build & Deploy Docker Container') {
            steps {
                script {
                    // Stop and remove existing container if running
                    sh 'docker stop todo-app-container || true'
                    sh 'docker rm todo-app-container || true'
                    
                    // Build new image and run container
                    sh 'docker build -t todo-app:latest .'
                    sh 'docker run -d -p 3000:3000 --name todo-app-container todo-app:latest'
                }
            }
        }
    }
}
