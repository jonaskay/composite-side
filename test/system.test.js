test('page loads', async () => {
  const page = await global.__BROWSER__.newPage();
  await page.goto('http://localhost:8080/');

  const text = await page.evaluate(() => document.body.textContent);
  expect(text).toContain('Hello, world');
}, 5000);
