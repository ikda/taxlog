import React from "react";

const taxStandard = [
	"12,000,000원 이하",
	"12,000,000원 초과 46,000,000원 이하",
	"46,000,000원 초과 88,000,000원 이하",
	"88,000,000원 초과 150,000,000원 이하",
	"150,000,000원 초과 300,000,000원 이하",
	"300,000,000원 초과 500,000,000원 이하",
	"500,000,000원 초과"
];

const taxRate = ["6%", "15%", "24%", "35%", "38%", "40%", "42%"];
const progressiveDeduction = [
	"-",
	"1,080,000원",
	"5,220,000원",
	"14,900,000원",
	"19,400,000원",
	"25,400,000원",
	"35,400,000원"
];

const totalArray = [taxStandard, taxRate, progressiveDeduction];
const TotalTable = () => (
	<table>
		<tr>
			<th>과세표준</th>
			<th>세율</th>
			<th>누진공제</th>
		</tr>
		<tr>
			{Object.values(totalArray).map((value, index) => {
				return (
					<td>
						{Object.values(value).map((value, index) => (
							<tr>
								<td>{value}</td>
							</tr>
						))}
					</td>
				);
			})}
		</tr>
	</table>
);

export default TotalTable;
