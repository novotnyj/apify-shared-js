/**
 * Concat data from stream to Buffer
 * @param {Readable|PassThrough} stream
 * @returns {Promise<Buffer>}
 */
async function concatStreamToBuffer(stream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        stream
            .on('data', (chunk) => {
                chunks.push(chunk);
            })
            .on('error', e => reject(e))
            .on('end', () => {
                const buffer = Buffer.concat(chunks);
                return resolve(buffer);
            });
    });
}

/**
 * Flushes the provided stream into a Buffer and transforms
 * it to a String using the provided encoding or utf-8 as default.
 * @param {Readable|PassThrough} stream
 * @param {String} [encoding]
 * @returns {Promise<String>}
 */
async function readStreamToString(stream, encoding) {
    const buffer = await concatStreamToBuffer(stream);
    return buffer.toString(encoding);
}

module.exports = {
    concatStreamToBuffer,
    readStreamToString,
};
