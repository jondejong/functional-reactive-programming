import { AngularReactiveDemoPage } from './app.po';

describe('angular-reactive-demo App', function() {
  let page: AngularReactiveDemoPage;

  beforeEach(() => {
    page = new AngularReactiveDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
