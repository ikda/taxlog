import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TotalTable from "./Components/TotalTable";
import CorporateTable from "./Components/CorporateTable";
import List from "./Components/List";

const GlobalStyle = createGlobalStyle`
  table {
		table-layout: fixed;
		width: 100%;
		border: 1px solid black;
	}
`;

const MainContainer = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex: auto;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const HOne = styled.h1`
	border-bottom: 1px solid #af3c43;
	margin-bottom: 0.2em;
	margin-top: 1em;
	padding-bottom: 0.2em;
`;

const HTwo = styled.h2`
	font-size: 1.8em;
	font-weight: 600;
	margin-top: 38px;
	margin-bottom: 11.5px;
`;
const SubContainer = styled.div`
	width: 100%;
	heigth: 300px;
`;

function App() {
	return (
		<MainContainer>
			<GlobalStyle />
			<HOne>대한민국의 세금</HOne>
			<HTwo>세금 </HTwo>
			<List />
			<SubContainer>
				<HTwo id="income">소득세</HTwo>
				<TotalTable />
				{"*세율 적용 방법 : 과세표준 × 세율 - 누진공제액"}
			</SubContainer>
			<SubContainer>
				<HTwo id="corporate">법인세</HTwo>
				<CorporateTable />
			</SubContainer>
			<SubContainer>
				<HTwo id="local">지방세</HTwo>
				{"10%"}
			</SubContainer>
		</MainContainer>
	);
}

export default App;
