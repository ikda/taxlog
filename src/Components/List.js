import React from "react";
import styled from "styled-components";

const Container = styled.ul``;

const Contents = styled.li``;

const Link = styled.a``;

const List = () => (
	<Container>
		<Contents>
			<Link href="http://localhost:3000/#income">소득세</Link>
		</Contents>
		<Contents>
			<Link href="http://localhost:3000/#corporate">법인세</Link>
		</Contents>
		<Contents>
			<Link href="http://localhost:3000/#local">지방세</Link>
		</Contents>
	</Container>
);

export default List;
