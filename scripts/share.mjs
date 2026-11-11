#!/usr/bin/env node
/**
 * Build and publish the Phase 1 research report to share.agvend.com
 * (same bucket and pattern as AgVend Full Scope).
 */

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const config = JSON.parse(readFileSync(join(__dirname, "share-config.json"), "utf8"));

const { s3Prefix, htmlFile, bucket } = config;
const bucketPath = `s3://${bucket}/${s3Prefix}/`;
const cacheControl = "no-store, no-cache, must-revalidate, max-age=0";
const url = `https://share.agvend.com/${s3Prefix}/${htmlFile}`;

const run = (command) => {
  execSync(command, { cwd: root, stdio: "inherit" });
};

console.log("Building research report share...");
run("npm run build");

console.log(`Uploading to ${bucketPath} (entrypoint: ${htmlFile})`);
run(`aws s3 sync dist/ ${bucketPath} --cache-control '${cacheControl}'`);
run(
  `aws s3 cp dist/index.html ${bucketPath}${htmlFile} --content-type text/html --cache-control '${cacheControl}'`,
);

console.log("");
console.log("Ready. Share this link with anyone at AgVend — recipients outside AgVend won't be able to open it.");
console.log(url);
