describe('Api Pages Integration Test', ()=> {
  it('should check if endpoint /status is acessible', async () => {
    const sut = await fetch('http://localhost:3000/api/v1/status');
    expect(sut.status).toBe(200);
  });
});
