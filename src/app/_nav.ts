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
        url: '/',
        icon: 'icon-calendar'
      },
      {
        name: 'Projects',
        url: '/',
        icon: 'icon-puzzle'
      },
      {
        name: 'Timeline',
        url: '/',
        icon: 'icon-clock'
      },
      {
        name: 'Status',
        url: '/',
        icon: 'icon-graph'
      },
    ]}
];
