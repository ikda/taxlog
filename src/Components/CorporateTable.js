import React from "react";

const taxStandard = [
	"2억 이하",
	"2억 초과 200억 이하",
	"200억 초과 3000억 이하",
	"3000억 초과"
];

const taxRate = ["10%", "20%", "22%", "25%"];
const progressiveDeduction = ["-", "2000만원", "42,000만원", "942,000만원"];

const unionTaxStandard = ["20억 이하", "20억 초과"];
const unionTaxRate = ["9%", "12%"];
const unionProgressiveDeduction = ["-", "6000만원"];

const totalArray = [taxStandard, taxRate, progressiveDeduction];
const unionTotalArray = [
	unionTaxStandard,
	unionTaxRate,
	unionProgressiveDeduction
];
const CorporateTable = () => (
	<table>
		<tr>
			<th>
				소득종류
				<td>법인종류</td>
			</th>
			<th>
				각 사업연도 소득
				<td>과세표준</td>
				<td>세율</td>
				<td>누진공제</td>
			</th>
			<th>
				청산소득
				<td>과세표준</td>
				<td>세율</td>
				<td>누진공제</td>
			</th>
		</tr>
		<tr>
			<td>영리법인</td>
			<td>
				{Object.values(totalArray).map((value, index) => {
					return (
						<td>
							{Object.values(value).map((value, index) => (
								<tr>{value}</tr>
							))}
						</td>
					);
				})}
			</td>
			<td>
				{Object.values(totalArray).map((value, index) => {
					return (
						<td>
							{Object.values(value).map((value, index) => (
								<tr>{value}</tr>
							))}
						</td>
					);
				})}
			</td>
		</tr>
		<tr>
			<td>비영리법인</td>
			<td>
				{Object.values(totalArray).map((value, index) => {
					return (
						<td>
							{Object.values(value).map((value, index) => (
								<tr>{value}</tr>
							))}
						</td>
					);
				})}
			</td>
			<td>
				{Object.values(totalArray).map((value, index) => {
					return (
						<td>
							{Object.values(value).map((value, index) => (
								<tr>{"-"}</tr>
							))}
						</td>
					);
				})}
			</td>
		</tr>
		<tr>
			<td>조합법인</td>
			<td>
				{Object.values(unionTotalArray).map((value, index) => {
					return (
						<td>
							{Object.values(value).map((value, index) => (
								<tr>{value}</tr>
							))}
						</td>
					);
				})}
			</td>
			<td>
				{Object.values(unionTotalArray).map((value, index) => {
					return (
						<td>
							{Object.values(value).map((value, index) => (
								<tr>{"-"}</tr>
							))}
						</td>
					);
				})}
			</td>
		</tr>
	</table>
);

export default CorporateTable;
