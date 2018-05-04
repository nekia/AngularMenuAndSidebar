import { MenuAndSidebar2Page } from './app.po';

describe('menu-and-sidebar2 App', () => {
  let page: MenuAndSidebar2Page;

  beforeEach(() => {
    page = new MenuAndSidebar2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
