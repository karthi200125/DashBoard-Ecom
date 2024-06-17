'use server';

import AWS from 'aws-sdk';

interface UploadProgress {
    progress: number;
}

interface UploadResult extends Partial<UploadProgress> {
    imageUrl: string;
}

const uploadImageToS3 = async (file: File): Promise<UploadResult> => {
    const bucketName: string = process.env.NEXT_AWS_S3_SECRET_BUCKET_NAME as string;
    const region: string = process.env.NEXT_AWS_S3_REGION_WEST as string;
    const accessKeyId: string = process.env.NEXT_AWS_S3_ACCESS_KEY as string;
    const secretAccessKey: string = process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY as string;

    if (!bucketName || !region || !accessKeyId || !secretAccessKey) {
        throw new Error("Missing necessary AWS S3 environment variables");
    }

    AWS.config.update({
        region,
        credentials: new AWS.Credentials(accessKeyId, secretAccessKey),
    });

    const s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: { Bucket: bucketName },
    });

    const params = {
        Bucket: bucketName,
        Key: `${Date.now()}_${file.name}`,
        Body: file,
    };

    return new Promise<UploadResult>((resolve, reject) => {
        let progressReported = false;
        const uploadStatus: UploadProgress = { progress: 0 };

        s3.upload(params)
            .on('httpUploadProgress', (progress) => {
                const percentUploaded = Math.round((progress.loaded / progress.total) * 100);
                uploadStatus.progress = percentUploaded;
                if (!progressReported) {
                    progressReported = true;
                    resolve({ ...uploadStatus, imageUrl: '' });
                }
            })
            .send((err: AWS.AWSError, data: AWS.S3.ManagedUpload.SendData) => {
                if (err) {
                    console.error('S3 upload error: ', err);
                    reject(err);
                } else if (data && data.Location) {
                    resolve({ ...uploadStatus, imageUrl: data.Location });
                } else {
                    reject(new Error('Unknown upload error'));
                }
            });
    });
};

export default uploadImageToS3;
