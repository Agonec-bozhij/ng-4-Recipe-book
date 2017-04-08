import { Ng4RecipeBookPage } from './app.po';

describe('ng4-recipe-book App', () => {
  let page: Ng4RecipeBookPage;

  beforeEach(() => {
    page = new Ng4RecipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
