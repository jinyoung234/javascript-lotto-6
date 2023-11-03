import { Console } from '@woowacourse/mission-utils';
import { validateCommon } from '../validations/commonValidation.js';

const systemConsole = Object.freeze({
  /**
   * 주어진 query를 통해 유저로부터 입력값을 읽어오는 추상화 메서드
   * @async
   * @public
   * @param {string} query - 유저에게 보여줄 입력 요청 메시지
   * @returns {Promise<string>} 유저로부터 입력 받은 문자열
   */
  async read(query) {
    const inputValue = await Console.readLineAsync(query);
    validateCommon(inputValue);
    return inputValue;
  },
});

export default systemConsole;
