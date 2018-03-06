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
    name: 'Schedule',
    url: '',
    icon: 'icon-star',
    children: [
      {
        name: 'Calendar',
        url: '/calender',
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
