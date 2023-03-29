pipeline {
  agent any
        
  stages {
        
    stage('Git') {
      steps {
        git checkout 'https://github.com/shamalkachare21/cucumbertest'
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