const fs = require('fs');
const { Buffer } = require('buffer');

function main(params) {
    const { __ow_body, __ow_headers } = params;

    if (!__ow_body || !__ow_headers['content-type'].includes('application/octet-stream')) {
        return { statusCode: 400, body: 'Nenhum arquivo enviado ou tipo inválido' };
    }

    const data = Buffer.from(__ow_body, 'base64');
    const nomeArquivo = `/tmp/img_${Date.now()}.jpg`;
    fs.writeFileSync(nomeArquivo, data);

    return { statusCode: 200, body: `Imagem salva em ${nomeArquivo}` };
}
