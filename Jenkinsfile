pipeline {
    agent any
    
    environment {
        ANDROID_HOME = '/opt/android-sdk'
        PATH = "${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools:${PATH}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npm install @capacitor/android'
            }
        }
        
        stage('Build Web App') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Add Android Platform') {
            steps {
                sh 'npx cap add android'
            }
        }
        
        stage('Sync Capacitor') {
            steps {
                sh 'npx cap sync android'
            }
        }
        
        stage('Build Android APK') {
            steps {
                dir('android') {
                    sh './gradlew assembleDebug'
                }
            }
        }
        
        stage('Archive APK') {
            steps {
                archiveArtifacts artifacts: 'android/app/build/outputs/apk/debug/*.apk', fingerprint: true
            }
        }
    }
    
    post {
        success {
            echo 'Android app built successfully!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}