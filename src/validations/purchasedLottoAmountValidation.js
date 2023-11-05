import lottoPurchase from '../domain/lottoPurchase.js';
import AppError from '../error/customErrors/AppError.js';

/**
 * @type {import('../utils/jsDoc.js').PurchasedLottoAmountValidationTypes}
 */
export const PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES = Object.freeze({
  amountRange: Object.freeze({
    errorMessage: `구매 로또 금액은 ${lottoPurchase.constants.minAmount} ~ ${lottoPurchase.constants.maxAmount}원 사이로 입력해주세요.`,
    isValid(purchasedLottoAmount) {
      const { minAmount, maxAmount } = lottoPurchase.constants;
      return purchasedLottoAmount >= minAmount && purchasedLottoAmount <= maxAmount;
    },
  }),

  lottoUnit: Object.freeze({
    errorMessage: `구매 로또 금액은 ${lottoPurchase.constants.unit}원 단위로 입력해야 합니다.`,
    isValid(purchasedLottoAmount) {
      return purchasedLottoAmount % lottoPurchase.constants.unit === 0;
    },
  }),
});

/**
 * @param {number} purchasedLottoAmount - 로또 구매 금액
 * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
 * @returns {void}
 */
export const validatePurchasedLottoAmount = (purchasedLottoAmount) => {
  Object.values(PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES).forEach(({ errorMessage, isValid }) => {
    if (!isValid(purchasedLottoAmount)) throw new AppError(errorMessage);
  });
};
