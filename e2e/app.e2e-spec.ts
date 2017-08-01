import { RetailOnlinePortalPage } from './app.po';

describe('retail-online-portal App', () => {
  let page: RetailOnlinePortalPage;

  beforeEach(() => {
    page = new RetailOnlinePortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
