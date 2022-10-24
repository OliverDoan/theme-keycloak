import './KcApp.css';
import { lazy, Suspense } from 'react';
import type { KcContext } from './kcContext';
import KcAppBase, { defaultKcProps } from 'keycloakify';
import { useI18n } from './i18n';

const Register = lazy(() => import('./Register'));
const Login = lazy(() => import('./Login'));

export type Props = {
  kcContext: KcContext;
};

export default function KcApp({ kcContext }: Props) {
  const i18n = useI18n({ kcContext });

  //NOTE: Locales not yet downloaded
  if (i18n === null) {
    return null;
  }

  const props = {
    i18n,
    ...defaultKcProps,
    // NOTE: The classes are defined in ./KcApp.css
    kcHeaderWrapperClass: 'my-color my-font',
  };

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case 'register.ftl':
            return <Register {...{ kcContext, ...props }} />;
          case 'login.ftl':
            return <Login {...{ kcContext, ...props }} />;
          default:
            return <KcAppBase {...{ kcContext, ...props }} />;
        }
      })()}
    </Suspense>
  );
}
