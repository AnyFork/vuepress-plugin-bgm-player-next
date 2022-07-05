export interface AudioOption {
    name: string;
    artist: string;
    url: string;
    cover: string;
}
export interface BgmMusicPlayerOptions {
    position?: object;
    audios: Array<AudioOption>;
    autoplay?: boolean;
    autoShrink?: boolean;
    shrinkMode?: string;
    floatPosition?: string;
    floatStyle?: object;
    color?: string;
}
