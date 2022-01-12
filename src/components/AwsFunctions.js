//import * as AWS from 'aws-sdk'
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
    region: 'us-east-2',
    secretAccessKey: `${process.env.REACT_APP_AWS_SECRET_ACCESS_KEY}`,

    accessKeyId: `${process.env.REACT_APP_AWS_ACCESS_ID}`
}
AWS.config.update(configuration)

const docClient = new AWS.DynamoDB.DocumentClient()
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

export const fetchData = (tableName, labelID) => {
/*    var params = {
        TableName: tableName,
        KeyConditionExpression: "#lbid = :lbid",
        ExpressionAttributeNames:{
            "#lbid": "LabelID"
        },
        ExpressionAttributeValues: {
            ":lbid": `${labelID}`
        }
*/
    var params = {
        TableName: tableName,
        Key: {
            'LabelID': {S: `${labelID}`}
        }
    }

//    docClient.query(params, function (err, data) {
    ddb.getItem(params, function (err, data) {
       if (!err) {
            console.log("AWSFunctions: ")
//            JSON.parse(data.data).map((queryDetail, index)=>{
//                console.log(queryDetail.LocAddress)
//            })
let tblData = AWS.DynamoDB.Converter.unmarshall(data.Item)
            console.log(tblData.LocAddress)
//this.state = {
//                geoloc: data.Item.LocAddress.S
//                utiltype: queryData.Item.UtilityType.S
//}
            return tblData;
         } else {
            console.log('Error', err)
        }
    })
}

export const putData = (tableName , data) => {
    var params = {
        TableName: tableName,
        Item: data
    }
    
    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
        }
    })
}