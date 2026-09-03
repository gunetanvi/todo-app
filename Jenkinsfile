stage('SonarQube Analysis') {
    steps {
        withSonarQubeEnv('SonarQube-Server') {
            script {
                def scannerHome = tool 'SonarScanner'
                sh "${scannerHome}/bin/sonar-scanner \
                    -Dsonar.projectKey=todo-app \
                    -Dsonar.projectName='Todo App' \
                    -Dsonar.sources=."
            }
        }
    }
}
