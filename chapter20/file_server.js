const { createServer } = require("http");

const methods = Object.create(null);

createServer((request, response) => {
    let handler = methods[request.method] || notAllowed;
    handler(request)
        .catch(error => {
            if (error.status != null) return error;
            return { body: String(error), status: 500 };
        })
        .then(({ body, status = 200, type = "text/plain" }) => {
            response.writeHead(status, { "Content-Type": type });
            if (body && body.pipe) body.pipe(response);
            else response.end(body);
        });
}).listen(8000);

async function notAllowed(request) {
    return {
        status: 405,
        body: `Method ${request.method} not allowed.`
    };
}

var { parse } = require("url");
var { resolve, sep } = require("path");

var baseDirectory = process.cwd();

function urlPath(url) {
    let { pathname } = parse(url);
    let path = resolve(decodeURIComponent(pathname).slice(1));
    if (path != baseDirectory &&
        !path.startsWith(baseDirectory + sep)) {
        throw { status: 403, body: "Forbidden" };
    }
    return path;
}

const { createReadStream } = require("fs");
const { stat, readdir } = require("fs").promises;
const mime = require("mime");

methods.GET = async function (request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return { status: 404, body: "File not found" };
    }
    if (stats.isDirectory()) {
        return { body: (await readdir(path)).join("\n") };
    } else {
        return {
            body: createReadStream(path),
            type: mime.getType(path)
        };
    }
};

const { rmdir, unlink } = require("fs").promises;

methods.DELETE = async function (request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return { status: 204 };
    }
    if (stats.isDirectory()) await rmdir(path);
    else await unlink(path);
    return { status: 204 };
};

const { createWriteStream } = require("fs");

function pipeStream(from, to) {
    return new Promise((resolve, reject) => {
        from.on("error", reject);
        to.on("error", reject);
        to.on("finish", resolve);
        from.pipe(to);
    });
}

methods.PUT = async function (request) {
    let path = urlPath(request.url);
    await pipeStream(request, createWriteStream(path));
    return { status: 204 };
};


// Was already in the file downloaded in order to complete the exercises
const { mkdir } = require("fs").promises;

methods.MKCOL = async function (request) {
    // Parses the URL using the built-in url module
    let path = urlPath(request.url);
    let stats;
    try {
        // Searches for information about the directory
        stats = await stat(path);
    // If the file does not exist then transitions to the potential creation
    // of the directory
    } catch (error) {
        // If the error code is not ENOENT, which means file does not exist, then throws an error
        if (error.code != "ENOENT") throw error;
        // if the error code is ENOENT then create the directory at the requested path.
        await mkdir(path);
        // When directory created return a success status code.
        return { status: 204 };
    }
    // Checks to see if the directory now exists and returns a successful status code
    if (stats.isDirectory()) return { status: 204 };
    // If not return an error
    else return { status: 400, body: "Not a directory" };
};


