"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgmMusicPlayer = void 0;
const utils_1 = require("@vuepress/utils");
__exportStar(require("../types"), exports);
const bgmMusicPlayer = ({ position = {
    left: '10px',
    bottom: '10px',
    'z-index': '999999'
}, audios, autoplay = true, autoShrink = false, shrinkMode = 'float', floatPosition = 'left', floatStyle = { bottom: '200px', 'z-index': '999999' }, color = 'green' }) => (app) => {
    return {
        name: '@vuepress-foxre/vuepress-plugin-bgm-player-next',
        define() {
            return {
                BGM_MUSIC_PLAYER: {
                    position,
                    audios,
                    autoplay,
                    autoShrink,
                    shrinkMode,
                    floatPosition,
                    floatStyle,
                    color
                }
            };
        },
        clientConfigFile: utils_1.path.resolve(__dirname, '../client/config.js')
    };
};
exports.bgmMusicPlayer = bgmMusicPlayer;
