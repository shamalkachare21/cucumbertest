pipeline {
  agent any
    
  tools {
    nodejs 'nodejs'
  }
        
  stages {
      
    stage('Cloning Git') {
      steps {
        git 'https://github.com/shamalkachare21/cucumbertest.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}