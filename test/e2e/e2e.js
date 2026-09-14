const puppeteer = require('puppeteer');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:5500/test/e2e/mySite.html');
  await delay(5000);

  await page.type('input[id=email]', 'test@gmail.com');
  await page.type('input[id=password]', 'password');
  await page.screenshot({ path: 'test.png' });

  await delay(5000);
  await page.click('input[type=submit]');
}

main();
