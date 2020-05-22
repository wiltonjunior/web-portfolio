
pipeline {
  agent any

  options {
    timeout(time: 30, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
  }

  parameters {
    string(name: 'BRANCH', defaultValue: 'master', description: 'Build branch.')
    string(name: 'GIT_CREDENTIALS', description: 'Git Credentials')
    string(name: 'USER_VIRTUAL_MACHINE', description: 'USER credentials')
  }

  environment {
    GIT_URL="git@github.com:wiltonjunior/portfolio.git"
    DOCKER_IMAGE="${env.APPLICATION_NAME}:${env.BUILD_NUMBER}" 
  }

  stages {
    stage('Git Checkout') {
      steps {
        checkout([$class: 'GitSCM',
          branches: [[name: "*/${params.BRANCH}"]],
          doGenerateSubmoduleConfigurations: false,
          extensions: [],
          submoduleCfg: [],
          userRemoteConfigs: [[
            credentialsId: "${params.GIT_CREDENTIALS}",
            url: "${GIT_URL}"
          ]]
        ])
      }
    }

    stage('Build image web') {
      steps {
          sh """
              cp ./config/prd.env .env
              docker build -t ${env.DOCKER_IMAGE} .
            """
      }
    }

    stage('Send image ECR') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: "AWS_ACCESS_KEY_ID", credentialsId: "${params.AWS_CREDENTIALS_ID}", secretKeyVariable: "AWS_SECRET_ACCESS_KEY"]]) {
          sh """
              set -x
              eval \$(aws ecr get-login --no-include-email --region ${env.AWS_REGION})
              docker push ${env.ECR_IMAGE}
              docker rmi ${env.ECR_IMAGE} 
            """
        }
      }
    }
     
    stage('Update env file and EC2') {
      steps {
      sshagent(["${env.EC2_CREDENTIALS}"]) {
        sh """
          scp -r config/prd.env ${params.USER_VIRTUAL_MACHINE}:~/prd.env
          """
        }
      }
    }

    stage('Download image in EC2') {
      steps {
      sshagent(["${env.EC2_CREDENTIALS}"]) {
        sh """
            ssh -o StrictHostKeyChecking=no ${params.USER_VIRTUAL_MACHINE} '
            eval \$(aws ecr get-login --no-include-email) &&
            docker pull ${env.ECR_IMAGE}
            '
          """
        }
      }
    }

    stage('Start job in EC2') {
      steps {
      sshagent(["${env.EC2_CREDENTIALS}"]) {
        sh """
            ssh -o StrictHostKeyChecking=no ${params.USER_VIRTUAL_MACHINE} '
            docker rm -f \$(docker ps -a -q) || echo 'empty' &&
            docker rmi -f \$(docker images -q) || echo 'empty' &&
            docker run -d --restart always --env-file ./prd.env --name web -p 80:80 ${env.ECR_IMAGE}
            '
          """
        }
      }
    }
  }
}
