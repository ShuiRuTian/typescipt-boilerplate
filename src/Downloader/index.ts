/**
 * -1. download aria2 if not found in assiment folder. This work should be better if it belongs to installer.
 * 0. start aria2 according to platform with config.
 * 1. set one static/singleton downloader
 */
import JsonRpcClient from 'aria2ts';

// eslint-disable-next-line no-underscore-dangle
let _aria2RpcDownloader: JsonRpcClient|undefined;
const isAria2Running = false;

function getAria2RpcClient(): JsonRpcClient {
  if (!isAria2Running) {
    // TODO: start aria2
    throw new Error('aria2 is not running');
  }
  if (_aria2RpcDownloader === undefined) {
    // might future we will have one powerful function: you can use hash code to share link, you can use it to find another program in the computer and let download begin!
    // TODO: read port from config?
    const port = 6008;
    _aria2RpcDownloader = new JsonRpcClient(`'ws://localhost:${port}/jsonrpc'`);
    // TODO: what would happen if aria2 crash? How to deal with it?
    // 1. How to judge aria2 is crashed, will it send back an event or websocket would tell us about it?
    // 2. How to restart aria2?

    // TODO: addeventlistener to dispatch event.
  }
  return _aria2RpcDownloader.p;
}

export const downloader = getAria2RpcClient();