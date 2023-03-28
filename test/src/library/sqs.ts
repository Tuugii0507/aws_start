import {SQS} from "@aws-sdk/client-sqs"

export const sqs = new SQS({
    region: "ap-southeast-1"
})