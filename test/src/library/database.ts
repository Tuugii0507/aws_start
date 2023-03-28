import { DynamoDB } from "@aws-sdk/client-dynamodb"

export const db = new DynamoDB({
  region: "ap-southeast-1",
});