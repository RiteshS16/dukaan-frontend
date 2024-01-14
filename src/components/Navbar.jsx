import "@fontsource/inter"; 

import React from 'react'
import TaskTable from './TaskTable'
import '../css/NavBar.css'
import { LuIndianRupee } from "react-icons/lu";


import availablecredits from '../icons/AvailableCreditsNavbar.svg'
import helptopdiv from '../icons/HelpTopDiv.png'
import serachtopdiv from '../icons/SearchTopDiv.svg'
import grouptopdiv from '../icons/GroupTopDiv.svg'
import menutopdiv from '../icons/MenuTopDiv.svg'
import arrowtopdiv from '../icons/ArrowTopDiv.png'

import HomeNavBar from './HomeNavBar';
import OrdersNavBar from './OrdersNavBar';
import ProductsNavBar from './ProductsNavBar';
import DeliveryNavBar from './DeliveryNavBar';
import MarketingNavBar from './MarketingNavBar';
import AnalyticsNavBar from './AnalyticsNavBar';
import PaymentsNavBar from './PaymentsNavBar';
import ToolsNavBar from './ToolsNavBar';
import DiscountsNavBar from './DiscountsNavBar';
import AudienceNavBar from './AudienceNavBar';
import AppearanceNavBar from './AppearanceNavBar';
import ProfileNavBar from './ProfileNavBar';
import PluginsNavBar from "./PluginsNavBar";

export default function Navbar(){
    return(
      <div style={{width: '100%', height: '100%', position: 'relative', backgroundColor: '#FAFAFA'}}>
        <div style={{width: 224, height:1440, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 224, flex: '1 1 0', padding: '16px 0px',background: '#1E2640', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                <div style={{width: 208, flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
                    <ProfileNavBar/>
                    <div style={{width: 208, flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                        <HomeNavBar/>
                        <OrdersNavBar/>
                        <ProductsNavBar/>
                        <DeliveryNavBar/>
                        <MarketingNavBar/>
                        <AnalyticsNavBar/>
                        <PaymentsNavBar/>
                        <ToolsNavBar/>
                        <DiscountsNavBar/>
                        <AudienceNavBar/>
                        <AppearanceNavBar/>
                        <PluginsNavBar/>
                    </div>
                </div>
                <div style={{height: 40, paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#353C53', borderRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                        <div style={{padding: 6, background: 'rgba(255, 255, 255, 0.10)', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <img src={availablecredits} />
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'inline-flex'}}>
                            <div style={{opacity: 0.80, color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Available credits</div>
                            <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>222.10</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{width: 1120, paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, left: 224, top: 0, position: 'absolute', background: 'white', borderBottom: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                <div style={{color: '#1A181E', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Payments</div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                <div style={{width: 14, height: 14, position: 'relative'}}>
                    <img src={helptopdiv} />
                </div>
                <div className="buttonIcon" style={{color: '#4D4D4D', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>How it works</div>
            </div>
        </div>
        <div style={{width: 400, alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 9, paddingBottom: 9, background: '#F2F2F2', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 16, height: 16, position: 'relative'}}>
                <img src={serachtopdiv}/>
            </div>
            <input type='text' placeholder="Search features, tutorials, etc." style={{color: '#808080',outline:'none', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', width:'100%',height:'100%', backgroundColor:'rgb(242,242,242)', border:'0px solid transparent'}}/>
        </div>
        <div style={{flex: '1 1 0', height: 40, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                <div style={{width: 40, height: 40, position: 'relative'}}>
                    <div className="buttonIcon" style={{width: 40, height: 40, left: 0, top: 0, position: 'absolute', background: '#E6E6E6', borderRadius: 9999}}>
                        <div style={{width: 20, height: 20, left: 10, top: 10, position: 'absolute'}}>
                            <img src={grouptopdiv}/>
                        </div>
                    </div>
                </div>
                <div className="buttonIcon" style={{width: 40, height: 40, position: 'relative'}}>
                    <div style={{width: 40, height: 40, left: 0, top: 0, position: 'absolute', background: '#E6E6E6', borderRadius: 9999}} >
                    <img src={menutopdiv}/>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div style={{height: 1354, left: 256, top: 96, width:'1120px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 178, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', height: 36, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#1A181E', fontSize: 20, fontFamily: 'Inter', fontWeight: '500',wordWrap: 'break-word'}}>Overview</div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                            <div className="buttonIcon" style={{width: 137, height: 36, position: 'relative'}}>
                                <div style={{width: 137, height: 36, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 4, border: '1px #D9D9D9 solid'}} />
                                <div style={{left: 14, top: 8, position: 'absolute', color: '#4D4D4D', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Last Month</div>
                                <div style={{width: 16, height: 16, left: 107, top: 10, position: 'absolute'}}>
                                    <img src={arrowtopdiv} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', height: 118, justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex'}}>
                        <div style={{flex: '1 1 0', padding: 20, background: 'white', boxShadow: '0px 2px 6px rgba(26, 24, 30, 0.04)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', height: 78, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                                    <div style={{color: '#4D4D4D', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Online orders</div>
                                </div>
                                <div style={{color: '#1A181E', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>231</div>
                            </div>
                        </div>
                    </div>
                    <div style={{flex: '1 1 0', padding: 20, background: 'white', boxShadow: '0px 2px 6px rgba(26, 24, 30, 0.04)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 78, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                                <div style={{color: '#4D4D4D', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Amount received</div>
                            </div>
                            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', height: 38, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                                    <div style={{display:'flex',color: '#1A181E', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>
                                        <div style={{display:'flex',fontSize:'28px', alignItems:'center'}}>
                                            <LuIndianRupee/>
                                        </div>
                                        23,92,312.19
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
                <div style={{color: '#1A181E', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Transactions | This Month</div>
                <div style={{paddingTop: 12, paddingBottom: 24, paddingLeft: 12, paddingRight: 12, background: 'white', boxShadow: '0px 0px 15px rgba(26, 24, 30, 0.04)', borderRadius: 8, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', display: 'flex'}}>
                    <TaskTable/>
                </div>    
            </div>
            </div>
        </div>
    );
}