pipeline {
    agent any 
    stages {
        stage('Clonar') { 
            steps {
                git branch: 'main', url: 'https://github.com/anaeuz/teste-ebac-ui.git' 
            }
        }
        stage('Instalar') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Executar') { 
            steps {
                sh 'npm run cy:ci' 
            }
        }
    }
}