import react, { FC, useEffect, useState } from 'react'
import useDropdown from 'react-dropdown-hook';
import styled from 'styled-components';
import { fontSize } from '../../styledHelpers/FontSizers';
import arrowDown from '../media/icons/arrow-down.svg'
import house from '../media/icons/house.svg'
import logout from '../media/icons/logout.svg'
import privacy from '../media/icons/privacy.svg'
import settings from '../media/icons/settings.svg'
import publications from '../media/icons/publications.svg'
import people from '../media/icons/people.svg'
import network from '../media/icons/network.svg'
import entities from '../media/icons/entities.svg'
import administration from '../media/icons/administration.svg'
import entities2 from '../media/icons/entities2.svg'
import { MenuLink } from '../Common/MenuLink/MenuLink';
import { ProfileResume } from '../LeftMenu/ProfileResume';
import {Colors} from '../../styledHelpers/Colors';



const Wrapper = styled.div`
	display: flex;
    align-items: center;
    font-size:${fontSize[18]};
    margin: 0 10vh 0 2vh;
	background-color: white;
    width: 15vw;
	height: 90%;
	border: 3px solid gray;
	border-radius: 5px;
	
`;
const Menu = styled.div`
	width: 99%;
	
`;

const DropdownOpen = styled.div`
	/* margin: 1.5vh 0 0 0; */
	padding-top: 1vh;
	margin-top: 0.3vh;
	position: absolute;
	margin-left: -3px;
	z-index: 1;
	border: solid gray 3px;
	border-top: none;
	border-radius: 0 0 5px 5px;
	width: 15vw;
	background-color: #fff;
  
  
`;
const FilterInput = styled.input`
	height: 2.5vh;
	width: 90%;
	margin: 0.5vh 0.3vw;
	border: 1px solid gray;
	border-radius: 3px;
	padding-left: 0.5vw;
`;
const GroupWrapper = styled.div`
	display: flex;
	flex-direction: column;

	span{
		font-size:${fontSize[14]};
		font-weight: bold;
		color: gray;
		margin: 0.5vh 0.5vw;
	}

`;
const DropdownLink = styled(MenuLink)`
	margin: 1vh 0.5vw;
	color: #000063;
`;
const DisplayLink = styled(DropdownLink)`
	
`;
const UserWrapper = styled.div`
	border-top: 1px solid gray;

	span{
		&:first-child{
			font-size:${fontSize[14]};
			font-weight: bold;
			color: gray;
			margin: 0.5vh 0.5vw;
		}
	}
`;
const LogoutButton = styled.div`
	display: flex;
	flex-direction: row;
	border-top: 1px solid gray;
	padding: 1vh 25%;
	
	img{
		width: 20px;
        height: 20px;
        margin-right: 1.5vh;
	}
	p{
		color: gray;
		font-weight: bold;
		font-family: 'Roboto', sans-serif;
	}
`;

type DropdownLink = {
	label: string;
	iconSrc: string;
	path: string;

}

export const ExpandedManu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

	const [filter, setFilter] = useState<string>('');
	const [isToggled, setIsToggled] = useState<boolean>(false);

	const DropdownLinksPlatform: DropdownLink[] = [
		{ label: "Home", iconSrc: house, path: "/" },
		{ label: "Publications", iconSrc: publications, path: "/publications" },
		{ label: "People", iconSrc: people, path: "/" },
		{ label: "Entities", iconSrc: entities, path: "/entities" },
		{ label: "Administration", iconSrc: administration, path: "/" },

	]
	const DropdownLinksWorkspaces: DropdownLink[] = [
		{ label: "Client contract", iconSrc: network, path: "/" },
		{ label: "Supplier contract", iconSrc: network, path: "/" },
		{ label: "Corporate", iconSrc: entities2, path: "/" },
		{ label: "Group Norms", iconSrc: house, path: "/" },
		{ label: "Real estate contracts", iconSrc: network, path: "/" },
	]

	const WrappedToggle = () => {
		setIsToggled(!isToggled);
		toggleDropdown();

	}
	// useEffect(() => {
	// 	{console.log(isToggled)}
	// })

	return (
		<Wrapper>
			<Menu ref={wrapperRef}>
				<div onClick={WrappedToggle}>
					<DisplayLink label="Home" iconSrc={house} path="/" toggled={isToggled} />
				</div>
				{dropdownOpen &&
					<DropdownOpen>
						<FilterInput type='text' placeholder='Filter...' onChange={e => {
							setFilter(e.currentTarget.value)
						}} />


						<GroupWrapper>


							<span>Platform</span>
							{
								(filter === '') ? DropdownLinksPlatform.map(item => {
									return <DropdownLink label={item.label} iconSrc={item.iconSrc} path={item.path} />
								})
									:
									DropdownLinksPlatform.filter(item => {
										if (item.label.toLocaleLowerCase().includes(filter)) {
											return item;
										}
									}).map(item => {
										return <DropdownLink label={item.label} iconSrc={item.iconSrc} path={item.path} />
									})

							}
							<span>Workspaces</span>
							{
								(filter === '') ? DropdownLinksWorkspaces.map(item => {
									return <DropdownLink label={item.label} iconSrc={item.iconSrc} path={item.path} />
								})
									:
									DropdownLinksWorkspaces.filter(item => {
										if (item.label.toLocaleLowerCase().includes(filter)) {
											return item;
										}
									}).map(item => {
										return <DropdownLink label={item.label} iconSrc={item.iconSrc} path={item.path} />
									})

							}
						</GroupWrapper>


						<UserWrapper>
							<span>Account</span>
							<ProfileResume compact={true} />
							<DropdownLink label='Privacy' iconSrc={privacy} path='/' />
							<DropdownLink label='Settings' iconSrc={settings} path='/' />
						</UserWrapper>
						<LogoutButton>
							<img src={logout} />
							<p>Logout</p>

						</LogoutButton>
					</DropdownOpen>
				}
			</Menu>
			<img src={arrowDown} onClick={closeDropdown} />
		</Wrapper>
	)
}