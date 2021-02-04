// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "okm0sled99uqmojct1tu0q6fu",     // CognitoClientID
  "api_base_url": "https://jklt4o9qrd.execute-api.us-west-2.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todoro.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1mhxre6fjxb1e.amplifyapp.com"                                      // AmplifyURL
  // "redirect_url": "https://localhost:8080"
};

export default config;
