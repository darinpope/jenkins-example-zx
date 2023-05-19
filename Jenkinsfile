pipeline {
  agent any
  stages {
    stage('version') {
      steps {
        sh 'zx --version'
      }
    }
    stage('full path') {
      steps {
        sh './scripts/hello.mjs'
      }
    }
    stage('dir1') {
      steps {
        dir('scripts') {
          sh './hello.mjs'
        }
      }
    }
    stage('dir2') {
      steps {
        dir('scripts') {
          sh 'zx ./hello.mjs'
        }
      }
    }
    stage('dir3') {
      steps {
        dir('scripts') {
          sh 'zx ./hello.mjs Galaxy'
        }
      }
    }
  }
}