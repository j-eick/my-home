import app from "./app.tsx";

Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT || 3000,
});

console.log(`server running @ port 3000`);
