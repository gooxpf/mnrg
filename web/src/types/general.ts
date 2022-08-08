import React, { ReactElement, ReactNode } from 'react';

export type AppNode = | ReactNode | undefined;

export type AppElement = | ReactElement | null;

export type AppChildren = {
    children?: AppNode | AppElement,
};

export type AppFC<T = AppChildren> = React.FC<AppChildren & T>;

export type AppUseReducerType<S, A> = (state: S, action: A) => S;
