// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "b49b867o8q2va4e0tqjkkclp9",     // CognitoClientID
  // "api_base_url": "https://id43frthx4.execute-api.us-west-2.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "api_base_url": "http://localhost:3000",
  "cognito_hosted_domain": "mytodoappdemo-todoro.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  // "redirect_url": "https://master.d1s192d12vlwjg.amplifyapp.com"                                      // AmplifyURL
  "redirect_url": "http://localhost:8080"
};

export default config;
