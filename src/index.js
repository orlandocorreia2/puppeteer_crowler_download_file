import puppeteer from "puppeteer";
import { deleteFile, sleep } from "./utils/util.js";

(async () => {
  console.log("Start...");
  deleteFile("./src/files/Lista_imoveis_geral.csv");
  const browser = await puppeteer.launch({
    headless: true,
    downloadBehavior: {
      downloadPath: `./src/files`,
      policy: "allow",
    },
  });
  const page = await browser.newPage();
  const ua =
    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.3";
  await page.setUserAgent(ua);
  await page.goto(
    "https://venda-imoveis.caixa.gov.br/sistema/download-lista.asp"
  );
  await page.waitForSelector("#cmb_estado");
  page.click("#cmb_estado");
  await page.select("#cmb_estado", "geral");
  page.click("#btn_next1");
  await sleep(3);
  browser.close();
  console.log("Finish...");
})();
