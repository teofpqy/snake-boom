import http from 'https';
import superagent from 'superagent';
import fs from 'fs';

export async function download(url:string) {
    // const res = await superagent.get(url);
    return http.get(url, (res) => {
        let imgData = '';
        const fileName = url.split('/').pop();
        res.setEncoding('binary');
        res.on('data', (chunk) => imgData+=chunk);
        res.on('end', () => {
            fs.writeFileSync(`./${fileName}`, imgData, {
                encoding: 'binary',
                flag: 'w'
            });
        })
    })
}
