import { useMessages, NextIntlClientProvider, useTimeZone } from 'next-intl';
import type { FC, PropsWithChildren } from 'react';

export const NextIntlProvider: FC<PropsWithChildren> = ({ children }) => {
    const messages = useMessages();
    const timezone = useTimeZone();

    return (
        <NextIntlClientProvider messages={messages} timeZone={timezone}>
            {children}
        </NextIntlClientProvider>
    );
};
