import { AngularSampleAppPage } from './app.po';

describe('angular-sample-app App', function() {
  let page: AngularSampleAppPage;

  beforeEach(() => {
    page = new AngularSampleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
