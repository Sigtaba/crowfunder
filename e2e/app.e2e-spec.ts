import { CrowdfunderPage } from './app.po';

describe('crowdfunder App', () => {
  let page: CrowdfunderPage;

  beforeEach(() => {
    page = new CrowdfunderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
