import { 
    faBell, 
    faBriefcase, 
    faHome, 
    faMessage, 
    faUserGroup
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