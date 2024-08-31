/**
 * 指定された時刻が時間範囲内に含まれているか
 * @param {number} time 時刻 (0 - 23)
 * @param {number} startTime 範囲の開始時刻 (0 - 23)
 * @param {number} endTime 範囲の終了時刻 (0 - 23)
 * @returns {boolean} 範囲内か示す
 */
export function isTimeInRange(time, startTime, endTime) {
	validateInput(time, startTime, endTime);
		if (time === endTime) {
		return false;
		}
		if (startTime === endTime) {
			return time === startTime;
		}
		if (startTime < endTime) {
			return time >= startTime && time < endTime;
		}
	return time >= startTime || time < endTime;
}

/**
 * 入力値のバリデーション
 * @param {number} time 時刻 (0 - 23)
 * @param {number} startTime 範囲の開始時刻 (0 - 23)
 * @param {number} endTime 範囲の終了時刻 (0 - 23)
 * @throws {Error} 入力値が無効な場合
 */
function validateInput(time, startTime, endTime) {
	if (!Number.isInteger(time) || !Number.isInteger(startTime) || !Number.isInteger(endTime)) {
		throw new Error('引数は整数である必要があります。');
	}
	if (time < 0 || time > 23 || startTime < 0 || startTime > 23 || endTime < 0 || endTime > 23) {
		throw new Error('時刻は0から23の範囲内である必要があります。');
	}
}
