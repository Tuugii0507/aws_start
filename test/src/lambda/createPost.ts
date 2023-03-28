import { APIGatewayEvent, Handler } from "aws-lambda";
import { db } from "../library/database";

export const createPost: Handler<APIGatewayEvent> = async (event) => {
  console.log("event:", event); 
  const id = event.pathParameters?.id;
  
    try {
        await db.putItem({
          TableName: "post",
          Item: { id: { S: "1" }, userId: { S: "88996622" } },
        });
      } catch (error) {
        console.log(error, "error");
      }
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "success!",
        }),
      };
}