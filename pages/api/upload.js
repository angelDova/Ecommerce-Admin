import multiparty from "multiparty";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
const bucketName = "angeldova-next-ecommerce";

export default async function handle(req, res) {
  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
  console.log("length:", files.file.length);
  const client = new S3Client({
    region: "us-west-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });
  for (const file of files.file) {
    const ext = file.originalFilename.split(".").pop();
    console.log({ ext, file });
    // await client.send(
    //   new PutObjectCommand({
    //     Bucket: bucketName,
    //     Key: "",
    //   })
    // );
  }
  return res.json("ok");
}

// will not ret to parse our req to json
export const config = {
  api: { bodyParser: false },
};
