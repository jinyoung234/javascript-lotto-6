/* eslint-disable max-lines-per-function */

import lottoPurchase from '../../src/domain/lottoPurchase';

const randomNumberGenerator = {
  pickUniqueNumbersInRange() {
    return [1, 2, 3, 4, 5, 6];
  },
};

describe('로또 구매 테스트', () => {
  test.each([
    { purchasedLottoAmount: 1_000, expectedCount: 1 },
    { purchasedLottoAmount: 3_000, expectedCount: 3 },
  ])(
    '구매한 로또 금액이 $purchasedLottoAmount일 때, 구매한 로또 번호의 갯수는 $expectedCount이다.',
    ({ purchasedLottoAmount, expectedCount }) => {
      // given
      const generateLottoNumbersParams = { randomNumberGenerator, purchasedLottoAmount };
      // when
      const lottoNumbers = lottoPurchase.generateLottoNumbers(generateLottoNumbersParams);
      // then
      expect(lottoNumbers).toHaveLength(expectedCount);
    },
  );
});