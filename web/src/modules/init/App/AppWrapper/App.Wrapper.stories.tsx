import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppWrapper } from './AppWrapper';

export default {
  title: 'application/AppWrapper',
  component: AppWrapper,
} as ComponentMeta<typeof AppWrapper>;

const Template: ComponentStory<typeof AppWrapper> = (args: any) => <AppWrapper {...args} />;

export const ApplicationRun = Template.bind({});
