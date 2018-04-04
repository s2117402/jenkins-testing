export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Main Menu'
  },
  {
    name: 'AIC',
    url: '/AIC',
    children:[
      {
        name: 'Zones',
        url: '/AIC/zones'
      },
      {
        name: 'Tenants',
        url: '/AIC/tenants'
      },{
        name: 'Users',
        url: '/AIC/users'
      }
    ]
  },
  {
    name: 'Schedule',
    url: '/schedule',
    icon: 'icon-star',
    children: [
      {
        name: 'Calendar',
        url: '/calendar',
        icon: 'icon-calendar'
      },
      {
        name: 'Projects',
        url: '/projects',
        icon: 'icon-puzzle'
      },
      {
        name: 'Timeline',
        url: '/timeline',
        icon: 'icon-clock'
      },
      {
        name: 'Status(Admin Only)',
        url: '/status',
        icon: 'icon-graph'
      },
    ]}
];
