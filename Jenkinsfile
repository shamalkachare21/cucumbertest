pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/shamalkachare21/cucumbertest'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm start'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}