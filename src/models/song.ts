import {Lyric} from "./lyric";
import {ApiSong} from "./api/apiSong";
import { BrowserStack } from 'protractor/built/driverProviders';

export class Song {

  public title: string = null;

  public url: string = null;

  public cover: string = null;

  public lyrics: Lyric[][] = [];

  public langs: Set<ApiLang> = new Set();

  constructor(apiSong: ApiSong){
    this.url = apiSong.url;
    this.title = apiSong.title;
    this.cover = apiSong.cover;
    this.lyrics = this.getLyrics(apiSong);
  }

  public getLyrics(apiSong: ApiSong): Lyric[][] {
    let lyrics: string[][] = apiSong.lyrics
      .map((value) => value.sentences);

    let result: Lyric[][] = [];
    let numberOflang: number = 0;
    let numberOfSentences: number = 0;
    if (Array.isArray(lyrics) && lyrics.length > 0) {
      numberOflang = lyrics.length;

      if (Array.isArray(lyrics[0]) && lyrics[0].length > 0) {
        numberOfSentences = lyrics[0].length;
      }
    }

    for (let indexSentence = 0; indexSentence < numberOfSentences; indexSentence++) {

        result[indexSentence] = [];

        for (let indexLang = 0; indexLang < numberOflang; indexLang++) {

          let apiLang: ApiLang = apiSong.lyrics[indexLang].getLang();

          this.langs.add(apiLang);

          result[indexSentence].push(
            new Lyric(
              apiLang,
              apiSong.lyrics[indexLang].sentences[indexSentence],
              apiSong.lyrics[indexLang].phonetic[indexSentence]
            )
          )

      }

    }

    return result;
  }


}
