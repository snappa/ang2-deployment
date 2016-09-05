import { Ang2DeploymentPage } from './app.po';

describe('ang2-deployment App', function() {
  let page: Ang2DeploymentPage;

  beforeEach(() => {
    page = new Ang2DeploymentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
