import React from 'react'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'

import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
import { ChannelList, useChatContext } from 'stream-chat-react'

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt="Hospital" width='20'/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt="Logout" width='20'/>
            </div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>We Chat</p>
    </div>
)

function ChannelListContainer() {
    return (
        <>
            <SideBar/>
            <div className='channel-list__list__wrapper'>
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="team"
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="team"
                        />
                    )}
                />

                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="messaging"
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    )
}

export default ChannelListContainer
