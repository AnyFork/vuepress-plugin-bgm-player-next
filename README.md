# vuepress-pluin-bgm-player-next

> bgm player plugin for vuepress v2.x

## install

```
yarn add @anyfork/vuepress-plugin-bgm-player-next
or
npm install @anyfork/vuepress-plugin-bgm-player-next
```

## usage
1、Import dependent packages into the configuration file config ts
```
import { bgmMusicPlayer } from '@foxre/vuepress-plugin-bgm-player-next'
```
2、Refer to vuepress 2 X Official Website configuration plug-in
```
plugins: [
    bgmMusicPlayer({
      audios: [
        //本地音乐4首
        {
          name: '卡农',
          artist: '卡农钢琴版',
          url: '/music/canon/canon.mp3',
          cover: '/music/canon/canon.jpg'
        },
        {
          name: 'Victory(胜利)',
          artist: 'Two Steps From Hell',
          url: '/music/victory/victory.mp3',
          cover: '/music/victory/victory.jpg'
        },
        {
          name: '风居住的街道',
          artist: '风居住的街道 钢琴版 - 钢琴曲',
          url: '/music/wind/wind.mp3',
          cover: '/music/wind/wind.jpg'
        },
        {
          name: '夜的钢琴曲',
          artist: '夜的钢琴曲五 - 石进',
          url: '/music/night/night.mp3',
          cover: '/music/night/night.jpg'
        }
      ]
    })
  ]

```
3、Configuration parameter type declaration
```
export interface AudioOption {
  //音乐名称
  name: string
  //艺术家名称
  artist: string
  //音乐路径
  url: string
  //封面图片
  cover: string
}
export interface BgmMusicPlayerOptions {
  //播放器位置
  position?: object
  //播放器音乐
  audios: Array<AudioOption>
  //自动播放
  autoplay?: boolean
  //是否默认收缩
  autoShrink?: boolean
  //伸缩模式('mini'/'float')
  shrinkMode?: string
  //悬浮位置
  floatPosition?: string
  //悬浮样式
  floatStyle?: object
  //播放器主题颜色
  color?: string
}

```