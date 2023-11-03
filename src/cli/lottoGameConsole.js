import { Console } from '@woowacourse/mission-utils';

import { validatePurchasedLottoAmount } from '../validations/purchasedLottoAmountValidation.js';

import { SYMBOLS } from '../constants/symbols.js';

import systemConsole from './systemConsole.js';

const lottoGameConsole = Object.freeze({
  input: Object.freeze({
    messages: Object.freeze({
      purchasedLottoAmount: '구입금액을 입력해 주세요.\n',
    }),

    async readPurchasedLottoAmount() {
      const purchasedLottoAmount = await systemConsole.read(this.messages.purchasedLottoAmount);
      validatePurchasedLottoAmount(Number(purchasedLottoAmount));
      return purchasedLottoAmount;
    },
  }),

  output: Object.freeze({
    messages: Object.freeze({
      purchasedLottoNumbers(lottoCount) {
        return `\n${lottoCount}개를 구매했습니다.`;
      },

      lottoNumbers(lottoNumbers) {
        return lottoNumbers
          .map((lottoNumber) => `[${lottoNumber.join(`${SYMBOLS.comma} `)}]`)
          .join('\n');
      },
    }),

    printLottoNumbers(lottoNumbers) {
      Console.print(this.messages.purchasedLottoNumbers(lottoNumbers.length));
      Console.print(this.messages.lottoNumbers(lottoNumbers));
    },
  }),
});

export default lottoGameConsole;
