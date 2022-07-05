import type { Plugin } from '@vuepress/core';
import type { BgmMusicPlayerOptions } from '../types';
export * from '../types';
export declare const bgmMusicPlayer: ({ position, audios, autoplay, autoShrink, shrinkMode, floatPosition, floatStyle, color }: BgmMusicPlayerOptions) => Plugin;
