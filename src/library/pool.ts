import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

let poolData = {
  UserPoolId: "ap-southeast-1_GhspJR8r0",
  ClientId: "7s7b9o6sofgtqnbqf9g88tjc82",
};

let userPool = new CognitoUserPool(poolData);

export const SignUpHook = async (email: string, password: string) => {
  try {
    const result = await new Promise((resolve, eject) => {
      userPool.signUp(email, password, [], [], (error, result) => {
        if (error) {
          return eject(error);
        }
        return resolve(result);
      });
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const VerificationHook = async (code: string, email: string) => {
  let userData = {
    Username: email,
    Pool: userPool,
  };
  let cognitoUser = new CognitoUser(userData);
  try {
    const result = await new Promise((resolve, eject) => {
      cognitoUser.confirmRegistration(code, true, (error, result) => {
        if (error) {
          return eject(error);
        }
        return resolve(result);
      });
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// export const GetUserAttributesHook = async (email: string) => {
//   let userData = {
//     Username: email,
//     Pool: userPool,
//   };
//   let cognitoUser = new CognitoUser(userData);
//   try {
//     const result = await new Promise((resolve, eject) => {
//       cognitoUser.getUserAttributes((error, result) => {
//         if(error){
//           return eject(error);  
//         }
//         return resolve(result)
//       })
//     });

//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const LogOutHook = async (email: string) => {
//   let userData = {
//     Username: email,
//     Pool: userPool,
//   };
//  // let cognitoUser = new CognitoUser(userData);
//   try {
//     cognitoUser.signOut();
//     console.log("Log Out Successfully");
//   } catch (error) {
//     console.log(error);
//   }
// };

export const LoginHook = async (email: string, password: string) => {
  try {
    const result = await new Promise((resolve, eject) => {
      ///
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
