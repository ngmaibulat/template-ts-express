export function getOnListen(port: number) {
    return function onListen() {
        console.log(`Listening on port ${port}`);
    };
}

export function getPort(): number {
    const port = parseInt(process.env.PORT || "5000");
    return port;
}
