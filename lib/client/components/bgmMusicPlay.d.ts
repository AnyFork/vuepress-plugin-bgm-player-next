export declare const sessionItem: {
    setVolume(val: string): void;
    getVolume(): string;
    removeVolume(): void;
};
export declare const player: {
    panelPosition: object;
    curIndex: number;
    curPlayStatus: string;
    audio: {
        name: string;
        artist: string;
        url: string;
        cover: string;
    }[];
    autoplay: boolean;
    isFloat: boolean;
    isMini: boolean;
    firstLoad: boolean;
    isMute: boolean;
    isFault: boolean;
    floatPosition: string;
    floatStyle: object;
    autoShrink: boolean;
    shrinkMode: string;
    color: string;
};
export declare const playState: import("vue").WatchStopHandle;
