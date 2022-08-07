import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import App from './App';

export default {
  title: 'application/main',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args: any) => <App {...args} />;

export const ApplicationRun = Template.bind({});
