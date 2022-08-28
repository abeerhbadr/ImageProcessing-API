import sharpResize from '../controllers/sharpResize';
//import fjord from '../../assets/images/full/'

describe('Image transform function should resolve or reject', () => {
  it('Expect resizeImage function to not throw error', () => {
    sharpResize('../../assets/images/full/fjord',
    200,300,'../../assets/images/full/thumb-fjord-200x300').then((ret)=>{
      expect(ret).toEqual('../../assets/images/full/thumb-fjord-200x300');
    });
  });

  // it('Expect resizeImage function to throw specific error', () => {
  //   sharpResize('../../assets/images/full/palmtunne',
  //   200,300,'../../assets/images/full/thumb-palmtunnel-200x300').then((ret)=>{
  //     expect(ret).toEqual('can\'t process image');
  //   });
  // });
});
