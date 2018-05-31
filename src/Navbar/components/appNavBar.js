import React from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';
import CustomToggle from '../../common/components/CustomDropdwon/customToggle';
import CustomMenu from '../../common/components/CustomDropdwon/customMenu';
import BrandAdminLogo from '../../assets/images/brand-admin.png';
import UserLogo from '../../assets/images/user-icon.png';
import '../../assets/css/appNavBar.css';

const AppNavBar = (props) => {
	let appDrawerColone = props.appDrawerOptions.slice(0,4).map((option) => (
		<MenuItem active={true} key={option.key} eventKey={option.key} onSelect={props.onAppDrawerItemClick}>
			<p>
				<dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
				<dd className="text-center small">{option.value}d</dd>
			</p>
		</MenuItem>
	));

	let appDrawerColtwo = props.appDrawerOptions.slice(4,7).map((option) => (
		<MenuItem key={option.key} eventKey={option.key} onSelect={props.onAppDrawerItemClick}>
			<p>
				<dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
				<dd className="text-center small">{option.value}d</dd>
			</p>
		</MenuItem>
	));

	return (
		<nav className="navbar navbar-custom app-navbar">
			<div className="container-fluid">
				<div className="navbar-header">
					<div className="navbar-brand">
						<img src={BrandAdminLogo} alt="brand-admin-logo" height="50" />
					</div>
				</div>
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
						<Dropdown id="dropdown-custom-menu">
							<CustomToggle bsRole="toggle">
								<span className="text-navbar fa fa-user-plus fa-2x"></span>
							</CustomToggle>

							<CustomMenu bsRole="menu">
								<MenuItem eventKey="1">HTML</MenuItem>
								<MenuItem eventKey="2">CSS</MenuItem>
								<MenuItem eventKey="3" active>Javascript</MenuItem>
							</CustomMenu>
						</Dropdown>
					</li>
					{/* <li className="dropdown">
						<a href="#" className="text-navbar" data-toggle="dropdown">
							<span className="fa fa-user-plus fa-2x"></span>
						</a>
						<ul className="dropdown-menu">
							<li><a href="#">HTML</a></li>
							<li><a href="#">CSS</a></li>
							<li><a href="#">JavaScript</a></li>
						</ul>
					</li> */}
					<li className="dropdown">
						<Dropdown id="dropdown-custom-menu">
							<CustomToggle bsRole="toggle">
								<span className="text-navbar fa fa-bell-o fa-2x"></span>
							</CustomToggle>

							<CustomMenu bsRole="menu">
								<MenuItem eventKey="1">HTML</MenuItem>
								<MenuItem eventKey="2">CSS</MenuItem>
								<MenuItem eventKey="3" active>Javascript</MenuItem>
							</CustomMenu>
						</Dropdown>
					</li>
					{/* <li className="dropdown">
						<a href="#" className="text-navbar">
							<span className="fa fa-bell-o fa-2x"></span></a>
						<ul className="dropdown-menu">
							<li><a href="#">HTML</a></li>
							<li><a href="#">CSS</a></li>
							<li><a href="#">JavaScript</a></li>
						</ul>
					</li> */}
					<li className="dropdown">
						<Dropdown id="dropdown-custom-menu">
							<CustomToggle bsRole="toggle">
								<span className="text-navbar fa fa-th fa-2x"></span>
							</CustomToggle>

							<CustomMenu bsRole="menu" cutsomClass="width-menu">
								<div className="col-sm-6">
									{appDrawerColone}
									{/* <MenuItem eventKey="1" onSelect={props.onAppDrawerItemClick}>
										<p>
											<dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
											<dd className="text-center small">Compliance Monitoring Dashboard</dd>
										</p>
									</MenuItem>
									<MenuItem eventKey="2">
										<p>
											<dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
											<dd className="text-center small">Report Dashboard</dd>
										</p>
									</MenuItem>
									<MenuItem eventKey="3">
										<p>
											<dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
											<dd className="text-center small">Maintain Client Profile</dd>
										</p>
									</MenuItem>
									<MenuItem eventKey="4">
										<p>
											<dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
											<dd className="text-center small">Maintain Simulation Workbench</dd>
										</p>
									</MenuItem> */}
								</div>
								<div className="col-sm-6">
									{appDrawerColtwo}
									{/* <MenuItem eventKey="5">
										<p><dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
											<dd className="text-center small">Maintain Access Role</dd>
										</p>
									</MenuItem>
									<MenuItem eventKey="6">
										<p>
											<dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
											<dd className="text-center small">Maintain Audit Test Script</dd>
										</p>
									</MenuItem>
									<MenuItem eventKey="7">
										<p>
											<dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
											<dd className="text-center small">Configuration and Data Ingestion Monitoring</dd>
										</p>
									</MenuItem> */}
									<MenuItem eventKey="8">
										<br />
										<div className="text-center"><span className="fa fa-arrow-right fa-2x"></span></div>
									</MenuItem>
								</div>
							</CustomMenu>
						</Dropdown>
					</li>
					{/* <li className="dropdown">
						<a href="#" className="text-navbar" data-toggle="dropdown">
							<span className="fa fa-th fa-2x"></span>
						</a>
						<ul className="dropdown-menu width-menu">
							<div className="col-sm-6">
								<li><a href="modules/monitoring/compliance_monitoring_dashboard.html">
									<p><dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
										<dd className="text-center small">Compliance Monitoring Dashboard</dd></p>
								</a></li>
								<li>
									<a href="#">
										<p>
											<dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
											<dd className="text-center small">Report Dashboard</dd>
										</p>
									</a>
								</li>
								<li><a href="#">
									<p><dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
										<dd className="text-center small">Maintain Client Profile</dd></p>
								</a></li>
								<li><a href="#">
									<p><dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
										<dd className="text-center small">Maintain Simulation Workbench</dd></p>
								</a></li>
							</div>
							<div className="col-sm-6">
								<li><a href="modules/rule_user/system_role.html">
									<p><dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
										<dd className="text-center small">Maintain Access Role</dd></p>
								</a></li>
								<li><a href="#">
									<p><dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
										<dd className="text-center small">Maintain Audit Test Script</dd></p>
								</a></li>
								<li><a href="modules/ingestion/monitor_ingestion.html">
									<p><dd className="text-center"><span className="fa fa-square-o fa-2x"></span></dd>
										<dd className="text-center small">Configuration and Data Ingestion Monitoring</dd></p>
								</a></li>
								<li><a href="#">
									<br />
									<div className="text-center"><span className="fa fa-arrow-right fa-2x"></span></div>
								</a></li>
							</div>
						</ul>
					</li> */}
					<li className="dropdown">
						<Dropdown id="dropdown-custom-menu">
							<CustomToggle bsRole="toggle">
								<img src={UserLogo} className="img-circle" height="40" alt="user-icon" />
							</CustomToggle>

							<CustomMenu bsRole="menu" cutsomClass="menu-user">
								<MenuItem eventKey="1">
									<p>My Profile</p>
								</MenuItem>
								<MenuItem eventKey="2">
									<p>My Case Status</p>
								</MenuItem>
								<MenuItem eventKey="3" active>
									<p>Overall Case Dashboard</p>
								</MenuItem>
								<MenuItem eventKey="1">
									<p>Reselect Client</p>
								</MenuItem>
								<MenuItem eventKey="2">
									<p onClick={props.goToLogin}>Sign Out</p>
								</MenuItem>
							</CustomMenu>
						</Dropdown>
					</li>
					{/* <li className="dropdown">
						<a href="#" className="navbar-user" data-toggle="dropdown">
							<img src={UserLogo} className="img-circle" height="40" alt="user-icon" />
						</a>
						<ul className="dropdown-menu menu-user">
							<li><a href="#">
								<p>My Profile</p>
							</a></li>
							<li><a href="modules/case_status/case_status_dashboard.html">
								<p>My Case Status</p>
							</a></li>
							<li><a href="modules/overall_case/overall_case_dashboard.html">
								<p>Overall Case Dashboard</p>
							</a></li>
							<li><a href="#">
								<p>Reselect Client</p>
							</a></li>
							<li><a href="../index.html">
								<p>Sign Out</p>
							</a></li>
						</ul>
					</li> */}
				</ul>
			</div>
		</nav>
	)
}

export default AppNavBar
