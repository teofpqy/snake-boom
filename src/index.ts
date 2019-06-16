import superagent from 'superagent';
import cheerio from 'cheerio';
import { BaseHost } from './config';
import lowdb from 'lowdb';

const generateURL = (cate:number, page:number) => {
  return `${BaseHost}/albums-index-page-${page}-cate-${cate}.html`
}
const Cates = {
  '': 0,
}

const getDetail = async (href:string) => {
  const finalURL = `${BaseHost}${href}`;
  const res = await superagent.get(finalURL)
  const $ = cheerio.load(res.text);
  console.log($)
}

const main = async () => {
  const homePage = generateURL(9, 1);
  const res = await superagent.get(homePage);
  const $ = cheerio.load(res.text);
  const maxPage = $('.paginator > a').last().text();
  // console.log(maxPage);
  $('.info .title a').map((idx, x) => console.log(x));
}


main();
