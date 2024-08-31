import { isTimeInRange } from './timeChecker.js';

const testCases = [
	{ time: 6, startTime: 5, endTime: 10, expected: true },
	{ time: 10, startTime: 5, endTime: 10, expected: false },
	{ time: 0, startTime: 22, endTime: 5, expected: true },
	{ time: 22, startTime: 22, endTime: 5, expected: true },
	{ time: 5, startTime: 22, endTime: 5, expected: false },
	{ time: 4, startTime: 22, endTime: 5, expected: true },
	{ time: 12, startTime: 12, endTime: 12, expected: false },
	{ time: 0, startTime: 0, endTime: 1, expected: true },
	{ time: 23, startTime: 23, endTime: 0, expected: true },
	{ time: 0, startTime: 23, endTime: 0, expected: false },
];

function runTests() {
	console.log("テストの実行:");
	testCases.forEach((testCase, index) => {
		try {
			const result = isTimeInRange(testCase.time, testCase.startTime, testCase.endTime);
			const status = result === testCase.expected ? 'パス' : '失敗';
			console.log(`テストケース ${index + 1}: ${status}`);
			} catch (error) {
				console.log(`テストケース ${index + 1}: エラー - ${error.message}`);
			}
  });
}

runTests();
