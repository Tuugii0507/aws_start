import { marshall } from "@aws-sdk/util-dynamodb";
import { APIGatewayEvent, Handler } from "aws-lambda";
import { db } from "../library/database";

export const updateFeed: Handler<APIGatewayEvent> = async (event) => {
    console.log("event:", event);
    const id = event.pathParameters?.id;

    try {
        const { Item: item } = await db.getItem({
            TableName: "follow",
            Key: marshall({id})
        })
        // await db.putItem({
        //   TableName: "post",
        //   Item: { id: { S: "2" }, userId: { S: "medkue bolson gej naidii" } },
        // });

    if (!item) {
        throw new Error("za ystoi medkue hugshuun odoo tegeed tilt ymda");
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify("hi"),
      };
      } catch (error) {
        if (error instanceof Error) {
          return {
            statusCode: 500,
            body: JSON.stringify({
              message: error.message,
            }),
          };
        }
      }
}