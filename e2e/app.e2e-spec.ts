import { UpdateSaiConsolePage } from './app.po';

describe('update-sai-console App', function() {
  let page: UpdateSaiConsolePage;

  beforeEach(() => {
    page = new UpdateSaiConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
