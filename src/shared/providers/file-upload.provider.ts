
import { Injectable } from "@nestjs/common";
import * as AWS from 'aws-sdk';
import { UuidFactory } from 'src/shared/factories/uuid.factory.provider';

@Injectable()
export class FileUploadService {
  constructor(private readonly uuidFactory: UuidFactory,) { }

  async fileUpload(payload: any): Promise<any> {
    try {

      const bucketName = process.env.S3_BUCKET;
      const fileName = this.uuidFactory.create() + '.json';

      const jsonContent = JSON.stringify(payload);

      const objectUrl = await uploadJsonToS3(bucketName, fileName, jsonContent);

      return objectUrl
    } catch (error) {
      throw error
    }
  }

}

async function uploadJsonToS3(bucketName: string, fileName: string, jsonContent: string): Promise<string> {

  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_KEY_SECRET,
    region: process.env.CLOUDWATCH_AWS_REGION
  });
  const uploadParams = {
    Bucket: bucketName,
    Key: fileName,
    Body: jsonContent,
    ContentType: 'application/json'
  };
  const uploadData = await s3.upload(uploadParams).promise();
  return uploadData.Location;
}