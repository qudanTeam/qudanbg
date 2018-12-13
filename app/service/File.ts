import { Service, EggAppConfig } from 'egg';
import * as qiniu from 'qiniu';
import * as uuidv4 from 'uuid/v4';
// import { Context } from 'continuation-local-storage';

const getToken = (config: EggAppConfig) => {
  // const { config } = ctx;
  
  
  const mac = new qiniu.auth.digest.Mac(config.qiniu.key, config.qiniu.secret);
  var putPolicy = new qiniu.rs.PutPolicy({
    scope: config.qiniu.bulket,
  });
  return putPolicy.uploadToken(mac);
}

const uploadToQiniu = (config: EggAppConfig, stream: NodeJS.ReadableStream, filename: string|'.img') => {
  const fileUploader = new qiniu.form_up.FormUploader();
  const token = getToken(config);
  // return
  const key = `${uuidv4()}_${filename}`;
  const putExtra = new qiniu.form_up.PutExtra();
  return new Promise((resolve, reject) => {
    fileUploader.putStream(token, key, stream, putExtra, (err, body, info) => {
      if (err) {
        // throw err;
        reject(err);
        return
      }

      if (info.statusCode == 200) {
        console.log(body);
        resolve({
          body: body,
          key,
        });
      } else {
        console.log(info.statusCode);
        console.log(body);

        resolve({
          status: info.statusCode,
          body: info.body,
          key,
        });
      }
    
    });
  })
}

export default class File extends Service {
  async upload(file: NodeJS.ReadableStream, filename: string) {
    return uploadToQiniu(this.config, file, filename);
  }
}