/*eslint-disable*/
import Action from './Action';

export default {
  title: 'Action',
  component: Action,
};

const Template = (args: any) => <Action {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  actions: [
    {
      id: 'test0',
      label: 'click',
      icon: 'pencil',
      action: () => {},
    },
    {
      id: 'test1',
      label: 'comment',
      icon: 'comment-text',
      action: () => {},
    },
    {
      id: 'test2',
      label: 'open in new',
      icon: 'open-in-new',
      action: () => {},
    },
  ],
};

const actionList = [
  {
    id: 'test0',
    label: 'click',
    icon: 'pencil',
    action: () => {},
  },
  {
    id: 'test1',
    label: 'comment',
    icon: 'comment-text',
    action: () => {},
  },
  {
    id: 'test2',
    label: 'open in new',
    icon: 'open-in-new',
    action: () => {},
  },
  {
    id: 'test3',
    label: 'stop',
    icon: 'square',
    action: () => {},
  },
  {
    id: 'test4',
    label: 'delete',
    icon: 'trash',
    iconType: 'dripicons',
    action: () => {},
  },
  {
    id: 'test5',
    label: 'testing',
    icon: 'plus',
    action: () => {},
  },
];


export const WithMoreActions: any = Template.bind({});
WithMoreActions.args = {
  actions: actionList,
};

export const ShowFourActions: any = Template.bind({});
ShowFourActions.args = {
  actions: actionList,
};
