import { MySecondAppPage } from './app.po';

describe('my-second-app App', () => {
  let page: MySecondAppPage;

  beforeEach(() => {
    page = new MySecondAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
