import { 
    faBell, 
    faBriefcase, 
    faCompass, 
    faHome, 
    faMessage, 
    faUserGroup,
    faVideo
} from '@fortawesome/free-solid-svg-icons';

export const NAVLINKS = [{
        key: 'Home',
        href: '/feed',
        faIcon: faHome
    }, {
        key: 'My Network',
        href: '/network',
        faIcon: faUserGroup
    }, {
        key: 'Jobs',
        href: '/jobs',
        faIcon: faBriefcase
    }, {
        key: 'Messages',
        href: '/messages',
        faIcon: faMessage
    }, {
        key: 'Notifications',
        href: '/notifications',
        faIcon: faBell
}];


export const LANDING_NAVBAR_LINKS = [
    {
        key: 'Discover',
        href: '/discover',
        icon: faCompass,
    }, {
        key: 'People',
        href: '/people',
        icon: faUserGroup,
    }, {
        key: 'Learning',
        href: '/linkedin-learning',
        icon: faVideo,
    }, {
        key: 'Jobs',
        href: '/jobs',
        icon: faBriefcase,
    }
];