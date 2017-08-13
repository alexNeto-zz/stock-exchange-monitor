import { SemPage } from './app.po';

describe('sem App', () => {
  let page: SemPage;

  beforeEach(() => {
    page = new SemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
